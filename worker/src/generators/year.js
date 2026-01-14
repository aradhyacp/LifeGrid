import { createSVG, rect, circle, text, parseColor, colorWithAlpha } from '../svg.js';
import { getDateInTimezone, getDayOfYear, getWeekOfYear, getDaysInYear } from '../timezone.js';

/**
 * Generate Year Progress Calendar Wallpaper
 * Shows days of the year as a grid of dots (15 columns), highlighting completed days
 * Leaves space at top for iPhone clock/date
 */
export function generateYearCalendar(options) {
    const {
        width,
        height,
        bgColor,
        accentColor,
        timezone,
        clockHeight = 0.22
    } = options;

    // Get current date in user's timezone
    const { year, month, day } = getDateInTimezone(timezone);
    const dayOfYear = getDayOfYear(year, month, day);
    const totalDays = getDaysInYear(year);

    // Layout calculations - 15 columns
    const cols = 15;
    const rows = Math.ceil(totalDays / cols);

    // Leave space for clock at top (with extra padding)
    // Leave space for clock at top (with extra padding)
    const clockSpace = height * (clockHeight + 0.05); // Extra 5% clearance
    const padding = width * 0.20;  // 20% horizontal padding
    const statsHeight = height * 0.05;
    const bottomMargin = height * 0.05;

    const availableWidth = width - (padding * 2);
    // Constrain height to avoid grid becoming too tall
    const availableHeight = height - clockSpace - statsHeight - bottomMargin;

    // Tighter gap
    const gap = Math.max(3, width * 0.008);
    const cellWidth = (availableWidth - (gap * (cols - 1))) / cols;
    // Keep it roughly square
    const cellSize = cellWidth;
    const dotRadius = (cellSize / 2) * 0.85;

    // Center grid horizontally
    const gridWidth = (cellSize * cols) + (gap * (cols - 1));
    const gridHeight = (cellSize * rows) + (gap * (rows - 1));
    const startX = (width - gridWidth) / 2;
    const startY = clockSpace + (height * 0.02);

    let content = '';

    // Background
    content += rect(0, 0, width, height, parseColor(bgColor));

    // Day grid as dots
    for (let i = 0; i < totalDays; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const cx = startX + col * (cellSize + gap) + cellSize / 2;
        const cy = startY + row * (cellSize + gap) + cellSize / 2;

        const isCompleted = i < dayOfYear;
        const isToday = i === dayOfYear - 1;

        let fillColor;
        let radius = dotRadius;

        if (isToday) {
            fillColor = parseColor(accentColor);
            radius = dotRadius * 1.12;  // Only 12% bigger
        } else if (isCompleted) {
            fillColor = colorWithAlpha(parseColor(accentColor), 0.75);
        } else {
            fillColor = colorWithAlpha('#ffffff', 0.12);
        }

        content += circle(cx, cy, radius, fillColor);
    }

    // Stats just below the grid
    const daysRemaining = totalDays - dayOfYear;
    const progressPercent = Math.round((dayOfYear / totalDays) * 100);
    const statsY = startY + gridHeight + (height * 0.025);

    content += text(width / 2, statsY, `${daysRemaining} days left · ${progressPercent}% complete`, {
        fill: colorWithAlpha('#ffffff', 0.5),
        fontSize: width * 0.026,
        fontWeight: '500',
        fontFamily: '"SF Mono", "Menlo", "Courier New", monospace',
        textAnchor: 'middle',
        dominantBaseline: 'middle'
    });

    return createSVG(width, height, content);
}
