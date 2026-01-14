// Complete device resolutions for wallpapers
// Includes all iPhone models through iPhone 17 series

export const devices = [
    // ===== iPhone 17 Series (2025) =====
    {
        name: "iPhone 17 Pro Max",
        width: 1320,
        height: 2868,
        category: "iPhone",
        notchHeight: 0.12,  // Dynamic Island - percentage from top
        clockHeight: 0.18   // Space needed for clock/date
    },
    {
        name: "iPhone 17 Pro",
        width: 1206,
        height: 2622,
        category: "iPhone",
        notchHeight: 0.12,
        clockHeight: 0.18
    },
    {
        name: "iPhone 17 Plus",
        width: 1290,
        height: 2796,
        category: "iPhone",
        notchHeight: 0.12,
        clockHeight: 0.18
    },
    {
        name: "iPhone 17",
        width: 1179,
        height: 2556,
        category: "iPhone",
        notchHeight: 0.12,
        clockHeight: 0.18
    },

    // ===== iPhone 16 Series (2024) =====
    {
        name: "iPhone 16 Pro Max",
        width: 1320,
        height: 2868,
        category: "iPhone",
        notchHeight: 0.12,
        clockHeight: 0.18
    },
    {
        name: "iPhone 16 Pro",
        width: 1206,
        height: 2622,
        category: "iPhone",
        notchHeight: 0.12,
        clockHeight: 0.18
    },
    {
        name: "iPhone 16 Plus",
        width: 1290,
        height: 2796,
        category: "iPhone",
        notchHeight: 0.12,
        clockHeight: 0.18
    },
    {
        name: "iPhone 16",
        width: 1179,
        height: 2556,
        category: "iPhone",
        notchHeight: 0.12,
        clockHeight: 0.18
    },

    // ===== iPhone 15 Series (2023) =====
    {
        name: "iPhone 15 Pro Max",
        width: 1290,
        height: 2796,
        category: "iPhone",
        notchHeight: 0.12,
        clockHeight: 0.18
    },
    {
        name: "iPhone 15 Pro",
        width: 1179,
        height: 2556,
        category: "iPhone",
        notchHeight: 0.12,
        clockHeight: 0.18
    },
    {
        name: "iPhone 15 Plus",
        width: 1284,
        height: 2778,
        category: "iPhone",
        notchHeight: 0.12,
        clockHeight: 0.18
    },
    {
        name: "iPhone 15",
        width: 1179,
        height: 2556,
        category: "iPhone",
        notchHeight: 0.12,
        clockHeight: 0.18
    },

    // ===== iPhone 14 Series (2022) =====
    {
        name: "iPhone 14 Pro Max",
        width: 1290,
        height: 2796,
        category: "iPhone",
        notchHeight: 0.12,
        clockHeight: 0.18
    },
    {
        name: "iPhone 14 Pro",
        width: 1179,
        height: 2556,
        category: "iPhone",
        notchHeight: 0.12,
        clockHeight: 0.18
    },
    {
        name: "iPhone 14 Plus",
        width: 1284,
        height: 2778,
        category: "iPhone",
        notchHeight: 0.11,
        clockHeight: 0.25   // Notch phones need more space for time
    },
    {
        name: "iPhone 14",
        width: 1170,
        height: 2532,
        category: "iPhone",
        notchHeight: 0.11,
        clockHeight: 0.25
    },

    // ===== iPhone 13 Series (2021) =====
    {
        name: "iPhone 13 Pro Max",
        width: 1284,
        height: 2778,
        category: "iPhone",
        notchHeight: 0.11,
        clockHeight: 0.25
    },
    {
        name: "iPhone 13 Pro",
        width: 1170,
        height: 2532,
        category: "iPhone",
        notchHeight: 0.11,
        clockHeight: 0.25
    },
    {
        name: "iPhone 13",
        width: 1170,
        height: 2532,
        category: "iPhone",
        notchHeight: 0.11,
        clockHeight: 0.25
    },
    {
        name: "iPhone 13 mini",
        width: 1080,
        height: 2340,
        category: "iPhone",
        notchHeight: 0.11,
        clockHeight: 0.25
    },

    // ===== iPhone SE =====
    {
        name: "iPhone SE (3rd gen)",
        width: 750,
        height: 1334,
        category: "iPhone",
        notchHeight: 0,
        clockHeight: 0.12
    },

    // ===== Android =====
    {
        name: "Samsung Galaxy S24 Ultra",
        width: 1440,
        height: 3120,
        category: "Android",
        notchHeight: 0.04,
        clockHeight: 0.10
    },
    {
        name: "Samsung Galaxy S24+",
        width: 1440,
        height: 3120,
        category: "Android",
        notchHeight: 0.04,
        clockHeight: 0.10
    },
    {
        name: "Samsung Galaxy S24",
        width: 1080,
        height: 2340,
        category: "Android",
        notchHeight: 0.04,
        clockHeight: 0.10
    },
    {
        name: "Google Pixel 9 Pro XL",
        width: 1344,
        height: 2992,
        category: "Android",
        notchHeight: 0.04,
        clockHeight: 0.10
    },
    {
        name: "Google Pixel 9 Pro",
        width: 1280,
        height: 2856,
        category: "Android",
        notchHeight: 0.04,
        clockHeight: 0.10
    },
    {
        name: "Google Pixel 9",
        width: 1080,
        height: 2424,
        category: "Android",
        notchHeight: 0.04,
        clockHeight: 0.10
    },

    // ===== iPad =====
    {
        name: "iPad Pro 13\"",
        width: 2064,
        height: 2752,
        category: "iPad",
        notchHeight: 0,
        clockHeight: 0.05
    },
    {
        name: "iPad Pro 11\"",
        width: 1668,
        height: 2388,
        category: "iPad",
        notchHeight: 0,
        clockHeight: 0.05
    },
    {
        name: "iPad Air",
        width: 1640,
        height: 2360,
        category: "iPad",
        notchHeight: 0,
        clockHeight: 0.05
    }
];

// Get device by name
export function getDevice(deviceName) {
    return devices.find(d => d.name === deviceName);
}

// Get devices by category
export function getDevicesByCategory(category) {
    return devices.filter(d => d.category === category);
}

// Get all iPhones grouped by series
export function getIPhonesBySeries() {
    const series = {
        '17': [],
        '16': [],
        '15': [],
        '14': [],
        '13': [],
        'SE': []
    };

    devices.filter(d => d.category === 'iPhone').forEach(device => {
        if (device.name.includes('17')) series['17'].push(device);
        else if (device.name.includes('16')) series['16'].push(device);
        else if (device.name.includes('15')) series['15'].push(device);
        else if (device.name.includes('14')) series['14'].push(device);
        else if (device.name.includes('13')) series['13'].push(device);
        else if (device.name.includes('SE')) series['SE'].push(device);
    });

    return series;
}
