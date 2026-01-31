/**
 * LifeGrid - Frontend Application
 * Apple-inspired dynamic wallpaper generator
 */

import { countries } from './data/countries.js';
import { locales } from './js/locales.js';
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
    goalName: 'Goal',
    goalDate: null,
    selectedDevice: null,
    lang: 'en' // Default language
};

// ===== I18n Class =====
class I18n {
    constructor() {
        this.lang = 'en';
        this.locales = locales;
    }

    setLanguage(lang) {
        if (!this.locales[lang]) return;
        this.lang = lang;
        state.lang = lang;
        localStorage.setItem('lifegrid_lang', lang);
        
        // Update DOM
        document.documentElement.lang = lang;
        this.updateDocs();
        
        // Trigger updates
        updatePreview();
        updateURL();
        populateCountries(); // Refresh country list if we wanted translated names, but they are hardcoded currently
    }

    t(key) {
        return this.locales[this.lang]?.[key] || key;
    }

    updateDocs() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (this.locales[this.lang][key]) {
                if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
                    el.placeholder = this.locales[this.lang][key];
                } else if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
                    // Start updates text content if it's a simple node
                     el.textContent = this.locales[this.lang][key];
                } else {
                     // Complex nodes - try to just update the text node if possible, or dangerous innerHTML
                     // For safety and simplicity in this project, we can replace content
                     // But we must be careful with nested SVGs (like buttons)
                     // If element has children, we might need specific targeting or wrap text in span
                     
                     // Specific strategy: specific handling or replace textContent if safe
                     if (el.children.length === 0) {
                        el.textContent = this.locales[this.lang][key];
                     }
                }
            }
        });

        // Special handling for elements with mixed content needing specific text updates
        // e.g. hero-title-line1
        
        const replaceText = (id, key) => {
             const el = document.getElementById(id);
             if (el) el.textContent = this.t(key);
        };
        
        // Update specific IDs if data-i18n isn't enough
    }
    
    async detectLanguage() {
        // 1. Check LocalStorage
        const saved = localStorage.getItem('lifegrid_lang');
        if (saved && this.locales[saved]) {
            return saved;
        }

        // 2. Check GeoIP
        try {
            const res = await fetch(`${WORKER_URL}/geoip`);
            if (res.ok) {
                const data = await res.json();
                if (data.lang && this.locales[data.lang]) {
                    return data.lang;
                }
            }
        } catch (e) {
            console.log('GeoIP failed:', e);
        }

        // 3. Fallback to browser
        const browserLang = navigator.language.toLowerCase();
        // Simple matching
        if (browserLang.includes('zh')) {
            return browserLang.includes('tw') || browserLang.includes('hk') ? 'zh-tw' : 'zh-cn';
        }
        if (browserLang.includes('ja')) return 'ja';
        if (browserLang.includes('fr')) return 'fr';
        
        return 'en';
    }
}

const i18n = new I18n();

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
    
    // Initialize Language
    i18n.detectLanguage().then(lang => {
        i18n.setLanguage(lang);
        updateLanguageSelector(lang);
    });

    autoDetectCountry();
    // Default to iOS
    switchSetupPlatform('ios');
}

function updateLanguageSelector(lang) {
    // Only if we have a selector
    const selector = $('#language-selector');
    if (selector) selector.value = lang;
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
        updatePreview();
        updateURL();
    });

    // Goal Inputs
    elements.goalNameInput?.addEventListener('input', (e) => {
        state.goalName = e.target.value || 'Goal';
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

    // Language Selector
    const langSelector = $('#language-selector');
    if (langSelector) {
        langSelector.addEventListener('change', (e) => {
            i18n.setLanguage(e.target.value);
        });
    }

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
    const text1 = `${daysLeft} ${i18n.t('canvas_days_left')}`;
    const text2 = ` · ${percent}% ${i18n.t('canvas_complete')}`;

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
    const text1 = `${weeksLeft.toLocaleString()} ${i18n.t('canvas_weeks_left')}`;
    const text2 = ` · ${percent}% ${i18n.t('canvas_lived')}`;

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

    // Calculate days remaining
    let daysRemaining = 0;
    let progress = 0;
    if (state.goalDate) {
        const goal = new Date(state.goalDate);
        const now = new Date();
        daysRemaining = Math.max(0, Math.ceil((goal - now) / (1000 * 60 * 60 * 24)));
        progress = Math.min(1, 1 - (daysRemaining / 365));
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

    // "days left" label
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = `${width * 0.03}px Inter, sans-serif`;
    ctx.fillText(daysRemaining === 1 ? i18n.t('canvas_day_left') : i18n.t('canvas_days_left'), centerX, centerY + (height * 0.08));


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
        if (state.goalDate) params.set('goal', state.goalDate);
        if (state.goalName) params.set('goalName', encodeURIComponent(state.goalName));
    }

    params.set('lang', state.lang); // Add lang param

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
