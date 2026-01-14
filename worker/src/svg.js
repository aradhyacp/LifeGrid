// SVG utility functions for building wallpaper graphics

/**
 * Create SVG document wrapper
 */
export function createSVG(width, height, content) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap');
    </style>
  </defs>
    ${content}
</svg>`;
}

/**
 * Create a rectangle element
 */
export function rect(x, y, width, height, fill, rx = 0) {
    return `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${fill}" rx="${rx}" />`;
}

/**
 * Create a circle element
 */
export function circle(cx, cy, r, fill) {
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" />`;
}

/**
 * Create a text element
 */
export function text(x, y, content, options = {}) {
    const {
        fill = '#ffffff',
        fontSize = 16,
        fontWeight = '400',
        fontFamily = 'Inter, sans-serif',
        textAnchor = 'start',
        dominantBaseline = 'auto'
    } = options;

    return `<text x="${x}" y="${y}" fill="${fill}" font-size="${fontSize}" font-weight="${fontWeight}" font-family="${fontFamily}" text-anchor="${textAnchor}" dominant-baseline="${dominantBaseline}">${escapeXml(content)}</text>`;
}

/**
 * Create a group element
 */
export function group(content, transform = '') {
    const transformAttr = transform ? ` transform="${transform}"` : '';
    return `<g${transformAttr}>${content}</g>`;
}

/**
 * Create an arc path (for circular progress)
 */
export function arc(cx, cy, radius, startAngle, endAngle, stroke, strokeWidth) {
    const start = polarToCartesian(cx, cy, radius, endAngle);
    const end = polarToCartesian(cx, cy, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    const d = [
        'M', start.x, start.y,
        'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(' ');

    return `<path d="${d}" stroke="${stroke}" stroke-width="${strokeWidth}" fill="none" stroke-linecap="round" />`;
}

function polarToCartesian(cx, cy, radius, angleInDegrees) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
        x: cx + (radius * Math.cos(angleInRadians)),
        y: cy + (radius * Math.sin(angleInRadians))
    };
}

/**
 * Escape XML special characters
 */
function escapeXml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

/**
 * Parse hex color to ensure it's valid
 */
export function parseColor(hex) {
    // Remove # if present
    hex = hex.replace('#', '');

    // Expand 3-digit hex
    if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
    }

    // Validate
    if (!/^[0-9A-Fa-f]{6}$/.test(hex)) {
        return '#111114'; // Default fallback
    }

    return '#' + hex;
}

/**
 * Lighten or darken a color
 */
export function adjustColor(hex, percent) {
    hex = hex.replace('#', '');

    const num = parseInt(hex, 16);
    const r = Math.min(255, Math.max(0, (num >> 16) + Math.round(255 * percent / 100)));
    const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + Math.round(255 * percent / 100)));
    const b = Math.min(255, Math.max(0, (num & 0x0000FF) + Math.round(255 * percent / 100)));

    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/**
 * Create color with opacity
 */
export function colorWithAlpha(hex, alpha) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
