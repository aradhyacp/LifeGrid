import { createSVG, rect, circle, text, arc, parseColor, colorWithAlpha } from '../svg.js';
import { getDateInTimezone, getDaysBetween } from '../timezone.js';

/**
 * Generate Goal Countdown Wallpaper
 * Shows countdown to a specific goal date with circular progress
 * Leaves space at top for iPhone clock/date
 */
export function generateGoalCountdown(options) {
    const {
        width,
        height,
        bgColor,
        accentColor,
        timezone,
        goalDate,
        goalStart,
        goalName = 'Goal',
        clockHeight = 0.18
    } = options;

    // Get current date in user's timezone
    const { year, month, day } = getDateInTimezone(timezone);
    const now = new Date(year, month - 1, day);

    // Parse goal date
    let targetDate;
    if (goalDate) {
        const [goalYear, goalMonth, goalDay] = goalDate.split('-').map(Number);
        targetDate = new Date(goalYear, goalMonth - 1, goalDay);
    } else {
        // Default: 30 days from now
        targetDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    }

    // Parse goal start date (when tracking began)
    let startDate;
    if (goalStart) {
        const [startYear, startMonth, startDay] = goalStart.split('-').map(Number);
        startDate = new Date(startYear, startMonth - 1, startDay);
    } else {
        // Default: assume goal was set 30 days before target (or today if closer)
        const defaultStart = new Date(targetDate.getTime() - 30 * 24 * 60 * 60 * 1000);
        startDate = defaultStart < now ? defaultStart : now;
    }

    // Calculate days remaining
    const daysRemaining = Math.max(0, getDaysBetween(now, targetDate));

    // Calculate total duration and progress (remaining time as proportion)
    const totalDays = Math.max(1, getDaysBetween(startDate, targetDate));
    // Progress represents REMAINING time - arc decreases as time passes
    // Clamp slightly below 1 to avoid unreliable full 360° SVG arcs
    const rawProgress = daysRemaining / totalDays;
    const progress = Math.max(0, Math.min(1, rawProgress));

    // Leave space for clock (with extra padding)
    const clockSpace = height * (clockHeight + 0.05);

    let content = '';

    // Background
    content += rect(0, 0, width, height, parseColor(bgColor));

    // Center point (adjusted for clock)
    const centerX = width / 2;
    const centerY = clockSpace + (height - clockSpace) * 0.4;

    // Circular progress
    const radius = width * 0.28;
    const strokeWidth = width * 0.035;

    // Background circle
    content += `<circle cx="${centerX}" cy="${centerY}" r="${radius}" stroke="${colorWithAlpha('#ffffff', 0.1)}" stroke-width="${strokeWidth}" fill="none" />`;

    // Progress arc
    if (progress > 0) {
        const endAngle = progress * 360;
        content += arc(centerX, centerY, radius, 0, endAngle, parseColor(accentColor), strokeWidth);
    }

    // Days number
    content += text(centerX, centerY - height * 0.015, daysRemaining.toString(), {
        fill: parseColor(accentColor),
        fontSize: width * 0.2,
        fontWeight: '700',
        textAnchor: 'middle',
        dominantBaseline: 'middle'
    });

    // "days left" label
    content += text(centerX, centerY + height * 0.08, daysRemaining === 1 ? 'day left' : 'days left', {
        fill: colorWithAlpha('#ffffff', 0.5),
        fontSize: width * 0.04,
        fontWeight: '400',
        textAnchor: 'middle',
        dominantBaseline: 'middle'
    });

    // Goal name
    const decodedGoalName = decodeURIComponent(goalName);
    content += text(centerX, height * 0.75, decodedGoalName, {
        fill: '#ffffff',
        fontSize: width * 0.05,
        fontWeight: '600',
        textAnchor: 'middle',
        dominantBaseline: 'middle'
    });

    // Target date
    const dateStr = targetDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
    content += text(centerX, height * 0.77, dateStr, {
        fill: colorWithAlpha('#ffffff', 0.4),
        fontSize: width * 0.028,
        fontWeight: '400',
        textAnchor: 'middle',
        dominantBaseline: 'middle'
    });

    // Progress percentage (Commented out/Removed as per user request)
    // const progressPercent = Math.round(progress * 100);
    // content += text(centerX, height * 0.85, `${progressPercent}% complete`, { ... });

    return createSVG(width, height, content);
}
