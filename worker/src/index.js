/**
 * Life Calendar Wallpaper - Cloudflare Worker
 * 
 * Generates dynamic wallpaper images based on:
 * - Year progress (days/weeks of the year)
 * - Life calendar (weeks of life)
 * - Goal countdown (days until target)
 */

import { getTimezone } from './timezone.js';
import { generateYearCalendar } from './generators/year.js';
import { generateLifeCalendar } from './generators/life.js';
import { generateGoalCountdown } from './generators/goal.js';

// Resvg WASM for SVG to PNG conversion
import { Resvg, initWasm } from '@resvg/resvg-wasm';
import resvgWasm from '@resvg/resvg-wasm/index_bg.wasm';

let wasmInitialized = false;

async function initializeWasm() {
    if (!wasmInitialized) {
        await initWasm(resvgWasm);
        wasmInitialized = true;
    }
}

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);

        // CORS headers
        const corsHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        };

        // Handle preflight
        if (request.method === 'OPTIONS') {
            return new Response(null, { headers: corsHeaders });
        }

        // Route handling
        if (url.pathname === '/generate' || url.pathname === '/') {
            return await handleGenerate(request, url, corsHeaders, ctx);
        }

        if (url.pathname === '/health') {
            return new Response(JSON.stringify({ status: 'ok' }), {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
        }

        return new Response('Not Found', { status: 404, headers: corsHeaders });
    }
};

async function handleGenerate(request, url, corsHeaders, ctx) {
    // Parse query parameters
    const params = url.searchParams;

    const country = params.get('country') || 'us';
    const type = params.get('type') || 'year';
    const bgColor = params.get('bg') || '000000';
    const accentColor = params.get('accent') || 'FFFFFF';
    const width = parseInt(params.get('width')) || 1179;
    const height = parseInt(params.get('height')) || 2556;
    const clockHeight = parseFloat(params.get('clockHeight')) || 0.18;  // iPhone clock space
    const dob = params.get('dob');
    const lifespan = parseInt(params.get('lifespan')) || 80;
    const goalDate = params.get('goal');
    const goalName = params.get('goalName') || 'Goal';

    // Get timezone from country
    const timezone = getTimezone(country);

    // Build options object
    const options = {
        width: Math.min(Math.max(width, 100), 4000), // Limit size
        height: Math.min(Math.max(height, 100), 8000),
        bgColor,
        accentColor,
        timezone,
        clockHeight: Math.min(Math.max(clockHeight, 0), 0.3),  // Limit to reasonable range
        dob,
        lifespan,
        goalDate,
        goalName
    };

    // Generate SVG based on type
    let svg;
    switch (type) {
        case 'life':
            svg = generateLifeCalendar(options);
            break;
        case 'goal':
            svg = generateGoalCountdown(options);
            break;
        case 'year':
        default:
            svg = generateYearCalendar(options);
            break;
    }

    // Check if SVG output is requested
    if (params.get('format') === 'svg') {
        return new Response(svg, {
            headers: {
                ...corsHeaders,
                'Content-Type': 'image/svg+xml',
                'Cache-Control': 'public, max-age=86400', // Cache for 1 day
            }
        });
    }

    // Convert SVG to PNG using resvg
    try {
        await initializeWasm();

        const resvg = new Resvg(svg, {
            fitTo: {
                mode: 'original'
            },
            font: {
                loadSystemFonts: false,
                defaultFontFamily: 'Inter',
            }
        });

        const pngData = resvg.render();
        const pngBuffer = pngData.asPng();

        // Generate cache key based on parameters and current date
        const today = new Date().toISOString().split('T')[0];
        const cacheKey = `${country}-${type}-${bgColor}-${accentColor}-${width}x${height}-${today}`;

        return new Response(pngBuffer, {
            headers: {
                ...corsHeaders,
                'Content-Type': 'image/png',
                'Cache-Control': 'public, max-age=86400', // Cache for 1 day
                'X-Cache-Key': cacheKey,
            }
        });
    } catch (error) {
        console.error('PNG conversion error:', error);

        // Fallback: return SVG if PNG conversion fails
        return new Response(svg, {
            headers: {
                ...corsHeaders,
                'Content-Type': 'image/svg+xml',
                'X-Fallback': 'svg',
                'Cache-Control': 'public, max-age=86400',
            }
        });
    }
}
