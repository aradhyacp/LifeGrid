/**
 * LifeGrid - Frontend Application
 * Apple-inspired dynamic wallpaper generator
 */

import { countries } from './data/countries.js';
import { devices, getDevice } from './data/devices.js';

// ===== Configuration =====
const WORKER_URL = 'https://lifegrid.aradhyaxstudy.workers.dev';

// ===== State =====
const state = {
    selectedType: null,
    country: null,
    timezone: null,
    bgColor: '#000000',
    accentColor: '#FFFFFF',
    width: 1179,
    height: 2556,
    clockHeight: 0.18,  // Space for iPhone clock/date
    dob: null,
    lifespan: 80,
    goalName: 'Goal',
    goalDate: null,
    goalStart: null,
    selectedDevice: null
};

// ===== DOM Elements =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const elements = {
    typeCards: $$('.type-card'),
    selectedTypeIndicator: $('#selected-type .indicator-value'),
    countrySelect: $('#country-select'),
    deviceSelect: $('#device-select'),
    deviceResolution: $('#device-resolution'),
    bgColor: $('#bg-color'),
    bgHex: $('#bg-hex'),
    accentColor: $('#accent-color'),
    accentHex: $('#accent-hex'),
    presetBtns: $$('.preset-btn'),
    dobInput: $('#dob-input'),
    lifespanInput: $('#lifespan-input'),
    goalNameInput: $('#goal-name-input'),
    goalStartInput: $('#goal-start-input'),
    goalDateInput: $('#goal-date-input'),
    lifeConfig: $('#life-config'),
    goalConfig: $('#goal-config'),
    previewScreen: $('#preview-screen'),
    generatedUrl: $('#generated-url'),
    copyBtn: $('#copy-btn'),
    yearDay: $('#year-day'),
    yearWeek: $('#year-week'),
    yearPercent: $('#year-percent')
};

// ===== Initialize =====
function init() {
    populateCountries();
    populateDevices();
    populateCardPreviews();
    updateYearStats();
    bindEvents();
    autoDetectCountry();
    // Default to iOS
    switchSetupPlatform('ios');
}

// ===== Populate Countries =====
function populateCountries() {
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.textContent = `${getFlagEmoji(country.code)} ${country.name}`;
        elements.countrySelect.appendChild(option);
    });
}

function getFlagEmoji(code) {
    const codePoints = code.toUpperCase().split('').map(c => 127397 + c.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

// ===== Populate Devices =====
function populateDevices() {
    // Group devices by category
    const categories = {};
    devices.forEach(device => {
        if (!categories[device.category]) {
            categories[device.category] = [];
        }
        categories[device.category].push(device);
    });

    // Create optgroups
    Object.entries(categories).forEach(([category, deviceList]) => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = category;

        deviceList.forEach(device => {
            const option = document.createElement('option');
            option.value = device.name;
            option.textContent = device.name;
            option.dataset.width = device.width;
            option.dataset.height = device.height;
            option.dataset.clockHeight = device.clockHeight;
            optgroup.appendChild(option);
        });

        elements.deviceSelect.appendChild(optgroup);
    });

    // Set default (iPhone 16 Pro)
    const defaultDevice = devices.find(d => d.name === 'iPhone 16 Pro') || devices[0];
    elements.deviceSelect.value = defaultDevice.name;
    selectDevice(defaultDevice.name);
}

// ===== Card Previews =====
function populateCardPreviews() {
    // Year Grid Preview - 15 columns now
    const yearGrid = $('.year-grid-preview');
    yearGrid.innerHTML = '';
    const dayOfYear = getDayOfYear();
    for (let i = 0; i < 45; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell' + (i < Math.floor(dayOfYear / 8) ? ' filled' : '');
        yearGrid.appendChild(cell);
    }

    // Life Grid Preview
    const lifeGrid = $('.life-grid-preview');
    lifeGrid.innerHTML = '';
    for (let i = 0; i < 65; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot' + (i < 25 ? ' filled' : '');
        lifeGrid.appendChild(dot);
    }
}

function updateYearStats() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const weekOfYear = Math.ceil(dayOfYear / 7);
    const totalDays = isLeapYear(now.getFullYear()) ? 366 : 365;
    const percent = Math.round((dayOfYear / totalDays) * 100);

    elements.yearDay.textContent = dayOfYear;
    elements.yearWeek.textContent = weekOfYear;
    elements.yearPercent.textContent = percent + '%';
}

function getDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// ===== Auto-detect Country =====
function autoDetectCountry() {
    try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const country = countries.find(c => c.timezone === tz);
        if (country) {
            elements.countrySelect.value = country.code;
            state.country = country.code;
            state.timezone = country.timezone;
        }
    } catch (e) {
        console.log('Could not auto-detect country');
    }
}

// ===== Event Bindings =====
function bindEvents() {
    // Type Card Selection
    elements.typeCards.forEach(card => {
        card.addEventListener('click', () => selectType(card.dataset.type));
    });

    // Country Select
    elements.countrySelect.addEventListener('change', (e) => {
        const country = countries.find(c => c.code === e.target.value);
        if (country) {
            state.country = country.code;
            state.timezone = country.timezone;
            updateURL();
        }
    });

    // Device Select
    elements.deviceSelect.addEventListener('change', (e) => {
        selectDevice(e.target.value);
    });

    // Color Pickers
    elements.bgColor.addEventListener('input', (e) => {
        state.bgColor = e.target.value;
        elements.bgHex.textContent = e.target.value.toUpperCase();
        updatePreview();
        updateURL();
    });

    elements.accentColor.addEventListener('input', (e) => {
        state.accentColor = e.target.value;
        elements.accentHex.textContent = e.target.value.toUpperCase();
        updatePreview();
        updateURL();
    });

    // Make color wrappers clickable
    $$('.color-input-wrapper').forEach(wrapper => {
        wrapper.addEventListener('click', (e) => {
            if (e.target.tagName !== 'INPUT') {
                wrapper.querySelector('input[type="color"]').click();
            }
        });
    });

    // Color Presets
    elements.presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const bg = btn.dataset.bg;
            const accent = btn.dataset.accent;

            state.bgColor = bg;
            state.accentColor = accent;

            elements.bgColor.value = bg;
            elements.bgHex.textContent = bg.toUpperCase();
            elements.accentColor.value = accent;
            elements.accentHex.textContent = accent.toUpperCase();

            updatePreview();
            updateURL();
        });
    });

    // Life Calendar Inputs
    elements.dobInput?.addEventListener('change', (e) => {
        state.dob = e.target.value;
        updatePreview();
        updateURL();
    });

    elements.lifespanInput?.addEventListener('input', (e) => {
        state.lifespan = parseInt(e.target.value) || 80;
        updateURL();
    });

    // Goal Inputs
    elements.goalNameInput?.addEventListener('input', (e) => {
        state.goalName = e.target.value || 'Goal';
        updatePreview();
        updateURL();
    });

    elements.goalStartInput?.addEventListener('change', (e) => {
        const startValue = e.target.value;
        const warningEl = document.getElementById('goal-start-warning');

        // Compute today's date in local time (midnight) and compare as Date objects
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let isFuture = false;
        if (startValue) {
            // Interpret the input value (YYYY-MM-DD) as a local date at midnight
            const startDate = new Date(startValue + 'T00:00:00');
            isFuture = startDate > today;
        }

        // Show/hide warning if start date is in the future
        if (isFuture) {
            warningEl?.classList.remove('hidden');
        } else {
            warningEl?.classList.add('hidden');
        }

        state.goalStart = startValue;
        updatePreview();
        updateURL();
    });

    elements.goalDateInput?.addEventListener('change', (e) => {
        state.goalDate = e.target.value;
        updatePreview();
        updateURL();
    });

    // Copy Button
    elements.copyBtn.addEventListener('click', copyURL);

    // Sidebar Items
    const setupItems = $$('.setup-sidebar-item');
    setupItems.forEach(item => {
        item.addEventListener('click', () => {
            switchSetupPlatform(item.dataset.platform);
        });
    });
}

// ===== Setup Switching =====
function switchSetupPlatform(platform) {
    // Update Sidebar
    const items = $$('.setup-sidebar-item');
    items.forEach(i => {
        i.classList.toggle('active', i.dataset.platform === platform);
    });

    // Update Content
    const wrappers = $$('.setup-content-wrapper');
    wrappers.forEach(w => {
        w.classList.remove('active');
        if (w.id === `setup-${platform}`) {
            // Small timeout to allow display:block to apply before animation if needed
            // But CSS animation handles it on class add
            w.classList.add('active');
        }
    });
}

// ===== Device Selection =====
function selectDevice(deviceName) {
    const device = devices.find(d => d.name === deviceName);
    if (!device) return;

    state.selectedDevice = device;
    state.width = device.width;
    state.height = device.height;
    state.clockHeight = device.clockHeight || 0.18;

    // Update resolution hint
    elements.deviceResolution.textContent = `${device.width} × ${device.height}`;

    updatePreview();
    updateURL();
}

// ===== Type Selection =====
function selectType(type) {
    state.selectedType = type;

    // Update card states
    elements.typeCards.forEach(card => {
        card.classList.toggle('selected', card.dataset.type === type);
    });

    // Update indicator
    const typeNames = { year: 'Year Progress', life: 'Life Calendar', goal: 'Goal Countdown' };
    elements.selectedTypeIndicator.textContent = typeNames[type];

    // Show/hide conditional config
    elements.lifeConfig?.classList.toggle('hidden', type !== 'life');
    elements.goalConfig?.classList.toggle('hidden', type !== 'goal');

    // Scroll to customize section
    $('#customize').scrollIntoView({ behavior: 'smooth', block: 'start' });

    updatePreview();
    updateURL();
}

// ===== Preview Generator =====
function updatePreview() {
    if (!state.selectedType) {
        elements.previewScreen.innerHTML = '<div class="preview-placeholder"><span>Select a wallpaper type</span></div>';
        return;
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Preview dimensions - higher scale for better quality
    const scale = 0.8;
    canvas.width = state.width * scale;
    canvas.height = state.height * scale;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.objectFit = 'contain';
    canvas.style.borderRadius = '24px';


    // Background
    ctx.fillStyle = state.bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    switch (state.selectedType) {
        case 'year':
            drawYearPreview(ctx, canvas.width, canvas.height);
            break;
        case 'life':
            drawLifePreview(ctx, canvas.width, canvas.height);
            break;
        case 'goal':
            drawGoalPreview(ctx, canvas.width, canvas.height);
            break;
    }

    elements.previewScreen.innerHTML = '';
    elements.previewScreen.appendChild(canvas);
}

function drawYearPreview(ctx, width, height) {
    const cols = 15;
    const totalDays = isLeapYear(new Date().getFullYear()) ? 366 : 365;
    const rows = Math.ceil(totalDays / cols);

    // Leave space for clock at top (increased margin)
    // Extra clearance for clock
    const clockSpace = height * (state.clockHeight + 0.05);
    const padding = width * 0.20;  // 20% horizontal padding
    const statsHeight = height * 0.05;
    const bottomMargin = height * 0.05;

    const availableWidth = width - (padding * 2);
    // Constrain height to avoid grid becoming too tall
    const availableHeight = height - clockSpace - statsHeight - bottomMargin;

    // Tighter gap
    const gap = Math.max(2, width * 0.008);
    const cellWidth = (availableWidth - (gap * (cols - 1))) / cols;

    // Ensure cells don't get too big vertically if there's excess height
    const cellHeight = cellWidth; // Keep it square based on width constraint
    const cellSize = cellWidth;
    const dotRadius = (cellSize / 2) * 0.85;

    const gridWidth = (cellSize * cols) + (gap * (cols - 1));
    const gridHeight = (cellSize * rows) + (gap * (rows - 1));

    const startX = (width - gridWidth) / 2;
    // Push down slightly more to ensure clock clearance
    const startY = clockSpace + (height * 0.02);

    const dayOfYear = getDayOfYear();

    // Draw dots grid
    for (let i = 0; i < totalDays; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const cx = startX + col * (cellSize + gap) + cellSize / 2;
        const cy = startY + row * (cellSize + gap) + cellSize / 2;

        const isCompleted = i < dayOfYear;
        const isToday = i === dayOfYear - 1;

        if (isToday) {
            ctx.fillStyle = state.accentColor;
            ctx.beginPath();
            ctx.arc(cx, cy, dotRadius * 1.2, 0, Math.PI * 2);
            ctx.fill();
        } else if (isCompleted) {
            ctx.fillStyle = hexToRgba(state.accentColor, 0.75);
            ctx.beginPath();
            ctx.arc(cx, cy, dotRadius, 0, Math.PI * 2);
            ctx.fill();
        } else {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
            ctx.beginPath();
            ctx.arc(cx, cy, dotRadius, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Stats just below the grid with padding
    const daysLeft = totalDays - dayOfYear;
    const percent = Math.round((dayOfYear / totalDays) * 100);
    const statsY = startY + gridHeight + (height * 0.03);

    // Split text rendering for multi-style
    const text1 = `${daysLeft} days left`;
    const text2 = ` · ${percent}% complete`;

    // Configure fonts
    const font1 = `500 ${width * 0.032}px Inter, sans-serif`;
    const font2 = `500 ${width * 0.026}px "SF Mono", "Menlo", "Courier New", monospace`;

    ctx.font = font1;
    const w1 = ctx.measureText(text1).width;
    ctx.font = font2;
    const w2 = ctx.measureText(text2).width;

    const totalW = w1 + w2;
    const x = (width - totalW) / 2;

    // Draw Part 1 (Accent)
    ctx.fillStyle = state.accentColor;
    ctx.font = font1;
    ctx.textAlign = 'left';
    ctx.fillText(text1, x, statsY);

    // Draw Part 2 (Grey)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = font2;
    ctx.fillText(text2, x + w1, statsY);
}

function drawLifePreview(ctx, width, height) {
    const cols = 52;
    const lifespan = state.lifespan || 80;
    const rows = lifespan;

    // Leave space for clock at top
    const clockSpace = height * state.clockHeight;
    const padding = width * 0.04;
    const statsHeight = height * 0.06;

    const availableWidth = width - (padding * 2);
    const availableHeight = height - clockSpace - statsHeight - (height * 0.05);

    const gap = Math.max(1.5, width * 0.003);
    const cellSize = Math.min(
        (availableWidth - (gap * (cols - 1))) / cols,
        (availableHeight - (gap * (rows - 1))) / rows
    );
    const radius = cellSize / 2 - 0.5;

    // Calculate weeks lived
    let weeksLived = 0;
    if (state.dob) {
        const dob = new Date(state.dob);
        const now = new Date();
        const msPerWeek = 7 * 24 * 60 * 60 * 1000;
        weeksLived = Math.floor((now - dob) / msPerWeek);
    }

    const gridWidth = (cellSize * cols) + (gap * (cols - 1));
    const gridHeight = (cellSize * rows) + (gap * (rows - 1));
    const startX = (width - gridWidth) / 2;
    const startY = clockSpace;

    // Dots
    const totalWeeks = rows * cols;
    for (let i = 0; i < totalWeeks; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const cx = startX + col * (cellSize + gap) + cellSize / 2;
        const cy = startY + row * (cellSize + gap) + cellSize / 2;

        const isLived = i < weeksLived;
        const isCurrentWeek = i === weeksLived;

        if (isCurrentWeek) {
            ctx.fillStyle = state.accentColor;
        } else if (isLived) {
            ctx.fillStyle = hexToRgba(state.accentColor, 0.75);
        } else {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
        }

        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
    }

    // Stats just below grid with padding
    const weeksLeft = totalWeeks - weeksLived;
    const percent = Math.round((weeksLived / totalWeeks) * 100);
    const statsY = startY + gridHeight + (height * 0.035);

    // Split text rendering
    const text1 = `${weeksLeft.toLocaleString()} weeks left`;
    const text2 = ` · ${percent}% lived`;

    const font1 = `500 ${width * 0.026}px Inter, sans-serif`; // Smaller for life cal (52 cols)
    const font2 = `500 ${width * 0.022}px "SF Mono", "Menlo", "Courier New", monospace`;

    ctx.font = font1;
    const w1 = ctx.measureText(text1).width;
    ctx.font = font2;
    const w2 = ctx.measureText(text2).width;

    const totalW = w1 + w2;
    const x = (width - totalW) / 2;

    // Draw Part 1 (Accent)
    ctx.fillStyle = state.accentColor;
    ctx.font = font1;
    ctx.textAlign = 'left';
    ctx.fillText(text1, x, statsY);

    // Draw Part 2 (Grey)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = font2;
    ctx.fillText(text2, x + w1, statsY);
}

function drawGoalPreview(ctx, width, height) {
    // Leave space for clock
    const clockSpace = height * state.clockHeight;
    const centerX = width / 2;
    const centerY = clockSpace + (height - clockSpace) * 0.4;
    const radius = width * 0.25;

    // Calculate days remaining and progress
    let daysRemaining = 0;
    let progress = 0;
    if (state.goalDate) {
        const goal = new Date(state.goalDate);
        // Use selected timezone if available for consistency with backend
        const now = state.timezone
            ? new Date(new Date().toLocaleString('en-US', { timeZone: state.timezone }))
            : new Date();
        now.setHours(0, 0, 0, 0);
        goal.setHours(0, 0, 0, 0);
        daysRemaining = Math.max(0, Math.ceil((goal - now) / (1000 * 60 * 60 * 24)));

        // Calculate start date
        let startDate;
        if (state.goalStart) {
            startDate = new Date(state.goalStart);
            startDate.setHours(0, 0, 0, 0);
        } else {
            // Default: assume goal was set 30 days before target (or today if closer)
            const defaultStart = new Date(goal.getTime() - 30 * 24 * 60 * 60 * 1000);
            startDate = defaultStart < now ? defaultStart : now;
        }

        // Total days from start to goal
        const totalDays = Math.max(1, Math.ceil((goal - startDate) / (1000 * 60 * 60 * 24)));
        // Progress represents REMAINING time - arc decreases as time passes toward goal
        progress = Math.min(1, Math.max(0, daysRemaining / totalDays));
    }

    // Background circle
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();

    // Progress arc
    if (progress > 0) {
        ctx.strokeStyle = state.accentColor;
        ctx.lineWidth = 6;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + (Math.PI * 2 * progress));
        ctx.stroke();
    }

    // Days number
    ctx.fillStyle = state.accentColor;
    ctx.font = `bold ${width * 0.14}px Inter, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(daysRemaining.toString(), centerX, centerY - 4);

    // Label
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = `${width * 0.03}px Inter, sans-serif`;
    ctx.fillText(daysRemaining === 1 ? 'day left' : 'days left', centerX, centerY + (height * 0.08));


    // Goal name
    if (state.goalName) {
        ctx.fillStyle = state.accentColor;
        ctx.font = `600 ${width * 0.035}px Inter, sans-serif`;
        ctx.fillText(state.goalName, centerX, height * 0.75);
    }

    // Progress percentage
    // const percent = Math.round(progress * 100);
    // ctx.fillStyle = hexToRgba(state.accentColor, 0.6);
    // ctx.font = `500 ${width * 0.025}px Inter, sans-serif`;
    // ctx.fillText(`${percent}% complete`, centerX, height * 0.82);
}

function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// ===== URL Builder =====
function updateURL() {
    if (!state.selectedType || !state.country) {
        elements.generatedUrl.value = 'Select a wallpaper type and country...';
        return;
    }

    const params = new URLSearchParams();
    params.set('country', state.country.toLowerCase());
    params.set('type', state.selectedType);
    params.set('bg', state.bgColor.replace('#', ''));
    params.set('accent', state.accentColor.replace('#', ''));
    params.set('width', state.width);
    params.set('height', state.height);
    params.set('clockHeight', state.clockHeight);  // Pass clock height for proper spacing

    if (state.selectedType === 'life') {
        if (state.dob) params.set('dob', state.dob);
        params.set('lifespan', state.lifespan);
    }

    if (state.selectedType === 'goal') {
        if (state.goalStart) params.set('goalStart', state.goalStart);
        if (state.goalDate) params.set('goal', state.goalDate);
        if (state.goalName) params.set('goalName', encodeURIComponent(state.goalName));
    }

    const url = `${WORKER_URL}/generate?${params.toString()}`;
    elements.generatedUrl.value = url;
}

// ===== Copy URL =====
async function copyURL() {
    const url = elements.generatedUrl.value;
    if (!url || url.includes('Select a')) return;

    try {
        await navigator.clipboard.writeText(url);
        const btnSpan = elements.copyBtn.querySelector('span');
        btnSpan.textContent = 'Copied!';
        setTimeout(() => {
            btnSpan.textContent = 'Copy';
        }, 2000);
    } catch (e) {
        console.error('Failed to copy:', e);
    }
}

// ===== Start =====
init();
