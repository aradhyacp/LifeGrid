![banner](github_banner.png)

# LifeGrid

**Premium Dynamic Wallpapers for iOS and Android Lock Screens.**

LifeGrid generates high-resolution, data-driven wallpapers that help you visualize your time, goals, and life progress directly on your iPhone or Android lock screen. Designed to sit perfectly between the time, widgets, and dynamic island.

## Tech Stack

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)
![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)

## Features

- **Dynamic Visuals**
  - **Year Progress**: 365 dots representing every day of the year. Active day highlighted.
  - **Life Calendar**: Every week of your life (up to 80+ years) in a single grid.
  - **Goal Countdown**: Circular progress tracker for your biggest targets.

- **Pixel-Perfect**
  - Native resolution generation for all modern iPhones (13 mini to 16 Pro Max).
  - Smart layout adjustments for Notch vs Dynamic Island devices.
  - Retina-quality live previews (+10% contrast boost filter).

- **Architecture**
  - **Frontend**: Lightweight Vanilla JS & CSS. No frameworks, instant load.
  - **Backend**: Serverless Cloudflare Worker with Rust-based SVG rendering (`resvg`).
  - **Security**: Strict Zod schema validation & XSS protection.

## Screenshots

|                                                  |                                                  |
| :----------------------------------------------: | :----------------------------------------------: |
| <img src="screenshots/IMG_7398.PNG" width="280"> | <img src="screenshots/IMG_7399.PNG" width="280"> |
| <img src="screenshots/IMG_7400.PNG" width="280"> | <img src="screenshots/IMG_7401.PNG" width="280"> |

## Getting Started

### Prerequisites

- Node.js & npm
- Cloudflare Wrangler CLI (`npm install -g wrangler`)

### Backend Setup (Cloudflare Worker)

Navigate to the worker directory and install dependencies:

```bash
cd worker
npm install
```

Run locally:

```bash
npx wrangler dev
```

Deploy to Cloudflare:

```bash
npx wrangler deploy
```

### Frontend Setup

The frontend is a static site. You can serve it with any static file server.

```bash
# From project root
npx serve .
```

Open `http://localhost:3000` to see the wallpaper generator.

## Security

All inputs are sanitized and validated before processing:

- **Zod Schema**: Ensures dimensions, colors, and dates strictly adhere to safe formats.
- **Output Encoding**: Text inputs are XML-escaped to prevent injection.
- **Resource Limits**: Max dimensions and memory usage capped to prevent DoS.

## Supported Devices

Automatically adjusts for 50+ devices including:

- **iOS**: All modern iPhones (13 mini to 17 Pro Max). Supports Dynamic Island and Notch.
- **Android**: Major devices including Samsung Galaxy S series (S22-S24 Ultra) and Google Pixel series (7-9 Pro XL).
- **Tablets**: iPad Pro, iPad Air, and iPad mini.
- **Custom**: Supports any resolution via API parameters.

## 📁 Project Structure

```
lifegrid/
├── index.html          # Frontend (Apple-inspired dark theme)
├── styles.css          # Black & white aesthetic with ruler borders
├── app.js              # Card selection, preview, URL generation
├── data/
│   ├── countries.js    # 65+ countries with timezones
│   └── devices.js      # Device resolution presets
└── worker/
    ├── wrangler.toml   # Cloudflare Worker config
    ├── package.json    # Dependencies (resvg-wasm)
    └── src/
        ├── index.js    # Main entry point
        ├── timezone.js # Timezone utilities
        ├── svg.js      # SVG generation helpers
        └── generators/
            ├── year.js # Year progress calendar
            ├── life.js # Life calendar (dots)
            └── goal.js # Goal countdown (circle)
```

## 🔗 API Reference

```
GET /generate?country=us&type=year&bg=000000&accent=FFFFFF&width=1179&height=2556
```

| Param      | Description                          |
| ---------- | ------------------------------------ |
| `country`  | ISO 2-letter code (`us`, `in`, `gb`) |
| `type`     | `year`, `life`, or `goal`            |
| `bg`       | Background color (hex without #)     |
| `accent`   | Accent color (hex without #)         |
| `width`    | Image width in pixels                |
| `height`   | Image height in pixels               |
| `dob`      | Date of birth for life calendar      |
| `lifespan` | Expected years (default: 80)         |
| `goal`     | Target date for countdown            |
| `goalName` | Name of your goal                    |

## 📱 iOS Shortcut

1. Copy your generated URL
2. Open **Shortcuts** app
3. New Shortcut:
   - `Get Contents of URL` → paste URL
   - `Set Wallpaper` → Lock Screen
4. Automate to run daily at 6 AM

## 📱 Android Setup

1. **Copy URL**: Configure your wallpaper above and copy the generated URL
2. **Prerequisites**: Install **MacroDroid** from Google Play Store.
3. **Setup Macro**: Trigger: Date/Time → Day/Time (00:01:00) → Active all weekdays
4. **Configure Actions**:
   - **4.1 Download Image**<br>
     Web Interactions → HTTP Request (GET)<br>
     Paste URL. Enable "Block next actions"<br>
     Tick "Save response" → `/Download/lifegrid.png`
   - **4.2 Set Wallpaper**<br>
     Device Settings → Set Wallpaper<br>
     Select `/Download/lifegrid.png`<br>
     ⚠️ **Use exact same filename**
5. **Finalize**: Give macro a name → Tap **Create Macro**

## Contribution

Contributions are welcome! If you have ideas for new features or bug fixes, please follow these steps:

1.  Fork the repository.
2.  Create a new branch: `git checkout -b feature/your-feature-name`.
3.  Make your changes and commit them: `git commit -m 'Add some feature'`.
4.  Push to the branch: `git push origin feature/your-feature-name`.
5.  Submit a pull request.

Please ensure your code follows the existing style and includes appropriate tests.

## Author

[![GitHub](https://img.shields.io/badge/GitHub-aradhyacp-181717?style=for-the-badge&logo=github)](https://github.com/aradhyacp)

## ⭐ Star This Repo

If you find this project useful, please consider giving it a star! It helps others discover the project.

**License**: Apache License 2.0

---

Made with ❤️ for mindful living

<!-- Tags -->

`#ios` `#iphone` `#wallpaper` `#productivity` `#motivation` `#calendar` `#year-progress` `#life-grid` `#goal-tracking` `#cloudflare-workers` `#serverless` `#javascript` `#svg` `#design` `#minimalism`
