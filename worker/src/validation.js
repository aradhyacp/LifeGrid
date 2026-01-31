import { z } from 'zod';

export const wallpaperSchema = z.object({
    country: z.string().min(2).max(5).default('us').transform(val => val.toLowerCase()),
    type: z.enum(['year', 'life', 'goal']).default('year'),
    bg: z.string().regex(/^[0-9A-Fa-f]{6}$/, "Invalid hex color").default('000000'),
    accent: z.string().regex(/^[0-9A-Fa-f]{6}$/, "Invalid hex color").default('FFFFFF'),
    width: z.coerce.number().int().min(300, "Width too small").max(8000, "Width too large").default(1170),
    height: z.coerce.number().int().min(300, "Height too small").max(8000, "Height too large").default(2532),
    clockHeight: z.coerce.number().min(0).max(0.5).default(0.18),

    // Life Calendar specific
    dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format").optional(),
    lifespan: z.coerce.number().int().min(1).max(120).default(80),

    // Goal specific
    goal: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format").optional(),
    goalName: z.string().max(100, "Goal name too long").default('Goal'),

    format: z.enum(['png', 'svg']).default('png'),
    lang: z.enum(['en', 'zh-cn', 'zh-tw', 'ja', 'fr']).default('en')
});

export function validateParams(url) {
    const params = Object.fromEntries(url.searchParams);
    // Default width/height if specific defaults are needed or let Zod handle if they were optional.
    // But width/height are required for wallpaper generation usually, or I should set defaults.
    // In index.js validation logic, I'll handle required fields.
    // Actually, providing defaults for width/height might be good (e.g. iPhone 13 size).

    // Checking if width/height are present. If not, Zod will throw unless optional/default.
    // I will make them optional with defaults in Zod for safety? 
    // No, user provided values should be used. The frontend always sends them.
    // I'll assume they are provided or I'll set a fallback in index.js before validation?
    // Better: make them default to something valid if missing to avoid crashing.

    // However, I defined them as z.coerce.number() without optional/default in plan.
    // I'll add defaults: 1170x2532 (iPhone 13/14 size).
    return wallpaperSchema.parse({
        ...params,
        // If width/height missing, fallback?
        // Actually, Object.fromEntries preserves them as strings.
        // If missing, they are undefined.
    });
} 
