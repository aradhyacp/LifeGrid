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
    selectedDevice: null,
    language: 'en'
};

// ===== i18n =====
const LANG_STORAGE_KEY = 'lifegrid-language';
const SUPPORTED_LANGUAGES = ['en', 'zh-Hans', 'zh-Hant', 'ja', 'fr'];
const LANGUAGE_LABELS = {
    en: 'English',
    'zh-Hans': '简体中文',
    'zh-Hant': '繁體中文',
    ja: '日本語',
    fr: 'Français'
};

const TRANSLATIONS = {
    en: {
        nav: {
            wallpapers: 'Wallpapers',
            customize: 'Customize',
            setup: 'Setup',
            themeSwitch: 'Theme switch',
            language: 'Language',
            github: 'GitHub'
        },
        hero: {
            eyebrow: 'Dynamic Wallpapers',
            titleLine1: 'Your time.',
            titleLine2: 'Visualized.',
            subtitle: 'Wallpapers that update daily. Track your year, your life, or countdown to your goals.',
            cta: 'Get Started'
        },
        types: {
            eyebrow: 'Choose Your Style',
            title: 'Three ways to see your time',
            select: 'Select',
            year: {
                name: 'Year Progress',
                desc: 'Every day of the year as a grid. Watch your year fill up, one square at a time.',
                statDay: 'Day',
                statWeek: 'Week',
                statComplete: 'Complete'
            },
            life: {
                name: 'Life Calendar',
                desc: 'Every week of your life as a dot. A powerful reminder to make each week count.',
                statTotalWeeks: 'Total Weeks',
                statYears: 'Years'
            },
            goal: {
                name: 'Goal Countdown',
                desc: 'Count down to what matters. Big launch, vacation, or life milestone.',
                statGoals: 'Goals',
                statUpdates: 'Updates',
                statDailyValue: 'Daily'
            }
        },
        customize: {
            eyebrow: 'Personalize',
            title: 'Make it yours',
            selectedLabel: 'Selected:',
            selectedNone: 'None',
            locationLabel: 'Location',
            locationHint: 'For accurate timezone',
            countryPlaceholder: 'Select country...',
            dobLabel: 'Date of Birth',
            dobHint: 'Click to open calendar',
            lifespanLabel: 'Expected Lifespan',
            lifespanHint: 'years',
            goalNameLabel: 'Goal Name',
            goalNamePlaceholder: 'Product Launch',
            goalStartLabel: 'Start Date',
            goalStartHint: 'When you began (today or past)',
            goalStartWarning: 'Start date should be today or in the past',
            goalTargetLabel: 'Target Date',
            goalTargetHint: 'Click to open calendar',
            colorsLabel: 'Colors',
            backgroundLabel: 'Background',
            accentLabel: 'Accent',
            presetClassic: 'Classic',
            presetGold: 'Gold',
            presetCyan: 'Cyan',
            presetRed: 'Red',
            presetGreen: 'Green',
            deviceLabel: 'Device',
            urlLabel: 'Your Wallpaper URL',
            urlPlaceholder: 'Configure options above...',
            urlPlaceholderIncomplete: 'Select a wallpaper type and country...',
            copy: 'Copy',
            copied: 'Copied!'
        },
        preview: {
            placeholder: 'Select a wallpaper type',
            live: 'Live Preview'
        },
        goal: {
            daysLabel: 'days',
            defaultName: 'Goal'
        },
        setup: {
            eyebrow: 'Almost There',
            title: 'Set it and forget it',
            ios: 'iOS',
            android: 'Android',
            step1: {
                title: 'Copy URL',
                desc: 'Configure your wallpaper above and copy the generated URL'
            },
            step2: {
                title: 'Create Automation',
                desc: 'Shortcuts App → Automation Tab → New Automation<br>Time of Day: <strong>6:00 AM</strong> → Repeat <strong>Daily</strong><br>Select <strong>Run Immediately</strong> → Create New Shortcut'
            },
            step3: {
                title: 'Configure Shortcut',
                desc: '<strong>1. Get Contents of URL:</strong><br><span class="code-snippet">https://lifegrid.aradhyaxstudy.workers.dev/generate?...</span><br><br><strong>2. Set Wallpaper Photo:</strong><br>Choose "Lock Screen" as the target.'
            },
            step4: {
                title: 'Finalize',
                desc: 'In "Set Wallpaper Photo", tap arrow (→):<br>Disable <strong>Crop to Subject</strong><br>Disable <strong>Show Preview</strong>'
            },
            androidSteps: {
                step1: {
                    title: 'Copy URL',
                    desc: 'Configure your wallpaper above and copy the generated URL.'
                },
                step2: {
                    title: 'Install MacroDroid',
                    desc: 'Download and install <strong>MacroDroid</strong> from the Play Store and open it.'
                },
                step3: {
                    title: 'Set a New Trigger',
                    desc: 'Tap <strong>Trigger</strong> → <strong>Date/Time</strong>',
                    item1: 'Time: <span class="code-snippet">00:01:00</span>',
                    item2: 'Select all days (Mon–Sun)',
                    item3: 'Turn <strong>Use Alarm</strong> OFF'
                },
                step4: {
                    title: 'Configure Actions',
                    download: {
                        title: 'Download Wallpaper',
                        item1: 'Tap <strong>Actions</strong> → <strong>+</strong>',
                        item2: 'Select <strong>Web Interaction</strong> → <strong>HTTP Request</strong>',
                        item3: 'Choose <strong>GET</strong> method',
                        item4: 'Paste your copied URL',
                        item5: 'Enable <em>Block next action until complete</em>',
                        item6: 'Enable <em>Save HTTP response to file</em>',
                        item7: 'Choose a folder & enter filename: <span class="code-snippet">wallpaper.png</span>',
                        note: 'Remember this folder for the next step'
                    },
                    set: {
                        title: 'Set Wallpaper',
                        item1: 'Tap <strong>Actions</strong> → <strong>Device Settings</strong> → <strong>Set Wallpaper</strong>',
                        item2: 'Choose <strong>Image</strong> → Tap OK',
                        item3: 'Select <strong>Home Screen & Lock Screen</strong>',
                        item4: 'Choose <strong>Dynamic File Name</strong>',
                        item5: 'Select the <em>same folder</em> as before',
                        item6: 'Enter the same filename: <span class="code-snippet">wallpaper.png</span>'
                    }
                },
                step5: {
                    title: 'Finalize & Test',
                    desc: 'Tap the three dots <strong>(⋮)</strong> in the top-right corner and select <strong>Test Macro</strong> to verify everything works.'
                }
            }
        },
        footer: {
            tagline: 'Time, visualized.'
        },
        stats: {
            daysLeft: { one: '{count} day left', other: '{count} days left' },
            weeksLeft: { one: '{count} week left', other: '{count} weeks left' },
            percentComplete: ' · {percent}% complete',
            percentLived: ' · {percent}% lived',
            dayLeftLabel: { one: 'day left', other: 'days left' }
        }
    },
    'zh-Hans': {
        nav: {
            wallpapers: '壁纸',
            customize: '自定义',
            setup: '设置',
            themeSwitch: '主题切换',
            language: '语言',
            github: 'GitHub'
        },
        hero: {
            eyebrow: '动态壁纸',
            titleLine1: '你的时间。',
            titleLine2: '可视化。',
            subtitle: '壁纸每天更新。记录你的年度、人生，或倒计时目标。',
            cta: '开始使用'
        },
        types: {
            eyebrow: '选择风格',
            title: '三种方式看见时间',
            select: '选择',
            year: {
                name: '年度进度',
                desc: '一年中的每一天都以网格呈现。看着年份逐格填满。',
                statDay: '天',
                statWeek: '周',
                statComplete: '完成'
            },
            life: {
                name: '人生日历',
                desc: '你一生中的每一周都是一个点。提醒每一周都值得珍惜。',
                statTotalWeeks: '总周数',
                statYears: '年'
            },
            goal: {
                name: '目标倒计时',
                desc: '为重要时刻倒计时。发布、假期或人生里程碑。',
                statGoals: '目标',
                statUpdates: '更新',
                statDailyValue: '每日'
            }
        },
        customize: {
            eyebrow: '个性化',
            title: '打造专属风格',
            selectedLabel: '已选：',
            selectedNone: '无',
            locationLabel: '位置',
            locationHint: '用于准确时区',
            countryPlaceholder: '选择国家...',
            dobLabel: '出生日期',
            dobHint: '点击打开日历',
            lifespanLabel: '预期寿命',
            lifespanHint: '年',
            goalNameLabel: '目标名称',
            goalNamePlaceholder: '产品发布',
            goalStartLabel: '开始日期',
            goalStartHint: '你开始的日期（今天或更早）',
            goalStartWarning: '开始日期应为今天或过去',
            goalTargetLabel: '目标日期',
            goalTargetHint: '点击打开日历',
            colorsLabel: '颜色',
            backgroundLabel: '背景',
            accentLabel: '强调色',
            presetClassic: '经典',
            presetGold: '金色',
            presetCyan: '青色',
            presetRed: '红色',
            presetGreen: '绿色',
            deviceLabel: '设备',
            urlLabel: '你的壁纸链接',
            urlPlaceholder: '先配置上方选项...',
            urlPlaceholderIncomplete: '请选择壁纸类型和国家...',
            copy: '复制',
            copied: '已复制！'
        },
        preview: {
            placeholder: '选择一种壁纸类型',
            live: '实时预览'
        },
        goal: {
            daysLabel: '天',
            defaultName: '目标'
        },
        setup: {
            eyebrow: '快完成了',
            title: '设置后就不用操心',
            ios: 'iOS',
            android: 'Android',
            step1: {
                title: '复制链接',
                desc: '在上方配置壁纸并复制生成的链接'
            },
            step2: {
                title: '创建自动化',
                desc: '快捷指令 App → 自动化 → 新建自动化<br>时间：<strong>上午 6:00</strong> → 重复 <strong>每天</strong><br>选择 <strong>立即运行</strong> → 新建快捷指令'
            },
            step3: {
                title: '配置快捷指令',
                desc: '<strong>1. 获取 URL 内容：</strong><br><span class="code-snippet">https://lifegrid.aradhyaxstudy.workers.dev/generate?...</span><br><br><strong>2. 设置壁纸：</strong><br>选择“锁定屏幕”作为目标。'
            },
            step4: {
                title: '完成',
                desc: '在“设置壁纸”中点箭头 (→)：<br>关闭 <strong>裁剪为主体</strong><br>关闭 <strong>显示预览</strong>'
            },
            androidSteps: {
                step1: {
                    title: '复制链接',
                    desc: '在上方配置壁纸并复制生成的链接。'
                },
                step2: {
                    title: '安装 MacroDroid',
                    desc: '从 Play 商店下载并安装 <strong>MacroDroid</strong>，然后打开。'
                },
                step3: {
                    title: '设置新触发器',
                    desc: '点击 <strong>触发器</strong> → <strong>日期/时间</strong>',
                    item1: '时间：<span class="code-snippet">00:01:00</span>',
                    item2: '选择所有日期（周一到周日）',
                    item3: '关闭 <strong>使用闹钟</strong>'
                },
                step4: {
                    title: '配置操作',
                    download: {
                        title: '下载壁纸',
                        item1: '点击 <strong>操作</strong> → <strong>+</strong>',
                        item2: '选择 <strong>网络交互</strong> → <strong>HTTP 请求</strong>',
                        item3: '选择 <strong>GET</strong> 方法',
                        item4: '粘贴复制的链接',
                        item5: '启用 <em>阻止下一操作直到完成</em>',
                        item6: '启用 <em>将 HTTP 响应保存到文件</em>',
                        item7: '选择文件夹并输入文件名： <span class="code-snippet">wallpaper.png</span>',
                        note: '记住此文件夹，下一步会用到'
                    },
                    set: {
                        title: '设置壁纸',
                        item1: '点击 <strong>操作</strong> → <strong>设备设置</strong> → <strong>设置壁纸</strong>',
                        item2: '选择 <strong>图片</strong> → 点击确定',
                        item3: '选择 <strong>主屏幕与锁屏</strong>',
                        item4: '选择 <strong>动态文件名</strong>',
                        item5: '选择与之前相同的<em>文件夹</em>',
                        item6: '输入相同文件名： <span class="code-snippet">wallpaper.png</span>'
                    }
                },
                step5: {
                    title: '完成并测试',
                    desc: '点击右上角三点 <strong>(⋮)</strong> 并选择 <strong>测试宏</strong> 来确认可用。'
                }
            }
        },
        footer: {
            tagline: '时间，可视化。'
        },
        stats: {
            daysLeft: { other: '{count}天剩余' },
            weeksLeft: { other: '{count}周剩余' },
            percentComplete: ' · 已完成 {percent}%',
            percentLived: ' · 已度过 {percent}%',
            dayLeftLabel: { other: '天剩余' }
        }
    },
    'zh-Hant': {
        nav: {
            wallpapers: '桌布',
            customize: '自訂',
            setup: '設定',
            themeSwitch: '主題切換',
            language: '語言',
            github: 'GitHub'
        },
        hero: {
            eyebrow: '動態桌布',
            titleLine1: '你的時間。',
            titleLine2: '可視化。',
            subtitle: '桌布每日更新。追蹤你的年度、人生，或倒數目標。',
            cta: '開始使用'
        },
        types: {
            eyebrow: '選擇風格',
            title: '三種方式看見時間',
            select: '選擇',
            year: {
                name: '年度進度',
                desc: '一年中的每一天以網格呈現。看著年份逐格填滿。',
                statDay: '天',
                statWeek: '週',
                statComplete: '完成'
            },
            life: {
                name: '人生日曆',
                desc: '你一生中的每一週都是一個點。提醒每一週都值得珍惜。',
                statTotalWeeks: '總週數',
                statYears: '年'
            },
            goal: {
                name: '目標倒數',
                desc: '為重要時刻倒數。發布、假期或人生里程碑。',
                statGoals: '目標',
                statUpdates: '更新',
                statDailyValue: '每日'
            }
        },
        customize: {
            eyebrow: '個人化',
            title: '打造專屬風格',
            selectedLabel: '已選：',
            selectedNone: '無',
            locationLabel: '位置',
            locationHint: '用於準確時區',
            countryPlaceholder: '選擇國家...',
            dobLabel: '出生日期',
            dobHint: '點擊開啟日曆',
            lifespanLabel: '預期壽命',
            lifespanHint: '年',
            goalNameLabel: '目標名稱',
            goalNamePlaceholder: '產品發布',
            goalStartLabel: '開始日期',
            goalStartHint: '你開始的日期（今天或更早）',
            goalStartWarning: '開始日期應為今天或過去',
            goalTargetLabel: '目標日期',
            goalTargetHint: '點擊開啟日曆',
            colorsLabel: '顏色',
            backgroundLabel: '背景',
            accentLabel: '強調色',
            presetClassic: '經典',
            presetGold: '金色',
            presetCyan: '青色',
            presetRed: '紅色',
            presetGreen: '綠色',
            deviceLabel: '裝置',
            urlLabel: '你的桌布連結',
            urlPlaceholder: '先設定上方選項...',
            urlPlaceholderIncomplete: '請選擇桌布類型與國家...',
            copy: '複製',
            copied: '已複製！'
        },
        preview: {
            placeholder: '選擇一種桌布類型',
            live: '即時預覽'
        },
        goal: {
            daysLabel: '天',
            defaultName: '目標'
        },
        setup: {
            eyebrow: '快完成了',
            title: '設定後就不用操心',
            ios: 'iOS',
            android: 'Android',
            step1: {
                title: '複製連結',
                desc: '在上方設定桌布並複製生成的連結'
            },
            step2: {
                title: '建立自動化',
                desc: '捷徑 App → 自動化 → 新增自動化<br>時間：<strong>上午 6:00</strong> → 重複 <strong>每日</strong><br>選擇 <strong>立即執行</strong> → 建立新捷徑'
            },
            step3: {
                title: '設定捷徑',
                desc: '<strong>1. 取得 URL 內容：</strong><br><span class="code-snippet">https://lifegrid.aradhyaxstudy.workers.dev/generate?...</span><br><br><strong>2. 設定桌布：</strong><br>選擇「鎖定畫面」作為目標。'
            },
            step4: {
                title: '完成',
                desc: '在「設定桌布」中點箭頭 (→)：<br>關閉 <strong>裁切為主體</strong><br>關閉 <strong>顯示預覽</strong>'
            },
            androidSteps: {
                step1: {
                    title: '複製連結',
                    desc: '在上方設定桌布並複製生成的連結。'
                },
                step2: {
                    title: '安裝 MacroDroid',
                    desc: '從 Play 商店下載並安裝 <strong>MacroDroid</strong>，然後開啟。'
                },
                step3: {
                    title: '設定新觸發器',
                    desc: '點擊 <strong>觸發器</strong> → <strong>日期/時間</strong>',
                    item1: '時間：<span class="code-snippet">00:01:00</span>',
                    item2: '選擇所有日期（週一到週日）',
                    item3: '關閉 <strong>使用鬧鐘</strong>'
                },
                step4: {
                    title: '設定動作',
                    download: {
                        title: '下載桌布',
                        item1: '點擊 <strong>動作</strong> → <strong>+</strong>',
                        item2: '選擇 <strong>網路互動</strong> → <strong>HTTP 請求</strong>',
                        item3: '選擇 <strong>GET</strong> 方法',
                        item4: '貼上複製的連結',
                        item5: '啟用 <em>阻止下一動作直到完成</em>',
                        item6: '啟用 <em>將 HTTP 回應儲存到檔案</em>',
                        item7: '選擇資料夾並輸入檔名： <span class="code-snippet">wallpaper.png</span>',
                        note: '記住此資料夾，下一步會用到'
                    },
                    set: {
                        title: '設定桌布',
                        item1: '點擊 <strong>動作</strong> → <strong>裝置設定</strong> → <strong>設定桌布</strong>',
                        item2: '選擇 <strong>圖片</strong> → 點擊確定',
                        item3: '選擇 <strong>主畫面與鎖定畫面</strong>',
                        item4: '選擇 <strong>動態檔名</strong>',
                        item5: '選擇與之前相同的<em>資料夾</em>',
                        item6: '輸入相同檔名： <span class="code-snippet">wallpaper.png</span>'
                    }
                },
                step5: {
                    title: '完成並測試',
                    desc: '點擊右上角三點 <strong>(⋮)</strong> 並選擇 <strong>測試巨集</strong> 以確認可用。'
                }
            }
        },
        footer: {
            tagline: '時間，可視化。'
        },
        stats: {
            daysLeft: { other: '{count}天剩餘' },
            weeksLeft: { other: '{count}週剩餘' },
            percentComplete: ' · 已完成 {percent}%',
            percentLived: ' · 已度過 {percent}%',
            dayLeftLabel: { other: '天剩餘' }
        }
    },
    ja: {
        nav: {
            wallpapers: '壁紙',
            customize: 'カスタマイズ',
            setup: '設定',
            themeSwitch: 'テーマ切替',
            language: '言語',
            github: 'GitHub'
        },
        hero: {
            eyebrow: 'ダイナミック壁紙',
            titleLine1: 'あなたの時間。',
            titleLine2: '可視化。',
            subtitle: '壁紙は毎日更新。1年や人生、目標へのカウントダウンを記録。',
            cta: '始める'
        },
        types: {
            eyebrow: 'スタイルを選ぶ',
            title: '時間を可視化する3つの方法',
            select: '選択',
            year: {
                name: '年間進捗',
                desc: '1年の毎日をグリッドに。1日ずつ埋まっていく様子を確認。',
                statDay: '日',
                statWeek: '週',
                statComplete: '完了'
            },
            life: {
                name: '人生カレンダー',
                desc: '人生の毎週をドットで表示。1週ごとに価値を。',
                statTotalWeeks: '総週数',
                statYears: '年'
            },
            goal: {
                name: '目標カウントダウン',
                desc: '大切な日までカウントダウン。公開、旅行、節目に。',
                statGoals: '目標',
                statUpdates: '更新',
                statDailyValue: '毎日'
            }
        },
        customize: {
            eyebrow: 'パーソナライズ',
            title: '自分好みに',
            selectedLabel: '選択中：',
            selectedNone: 'なし',
            locationLabel: '場所',
            locationHint: '正確なタイムゾーンのため',
            countryPlaceholder: '国を選択...',
            dobLabel: '生年月日',
            dobHint: 'カレンダーを開く',
            lifespanLabel: '想定寿命',
            lifespanHint: '年',
            goalNameLabel: '目標名',
            goalNamePlaceholder: 'プロダクト公開',
            goalStartLabel: '開始日',
            goalStartHint: '開始日（今日または過去）',
            goalStartWarning: '開始日は今日または過去にしてください',
            goalTargetLabel: '目標日',
            goalTargetHint: 'カレンダーを開く',
            colorsLabel: 'カラー',
            backgroundLabel: '背景',
            accentLabel: 'アクセント',
            presetClassic: 'クラシック',
            presetGold: 'ゴールド',
            presetCyan: 'シアン',
            presetRed: 'レッド',
            presetGreen: 'グリーン',
            deviceLabel: 'デバイス',
            urlLabel: '壁紙URL',
            urlPlaceholder: '上の設定を行ってください...',
            urlPlaceholderIncomplete: '壁紙タイプと国を選択してください...',
            copy: 'コピー',
            copied: 'コピーしました！'
        },
        preview: {
            placeholder: '壁紙タイプを選択',
            live: 'ライブプレビュー'
        },
        goal: {
            daysLabel: '日',
            defaultName: '目標'
        },
        setup: {
            eyebrow: 'もうすぐ完了',
            title: '設定して放置',
            ios: 'iOS',
            android: 'Android',
            step1: {
                title: 'URLをコピー',
                desc: '上で壁紙を設定して生成URLをコピーします'
            },
            step2: {
                title: 'オートメーション作成',
                desc: 'ショートカット App → オートメーション → 新規<br>時刻：<strong>6:00 AM</strong> → <strong>毎日</strong><br><strong>即時実行</strong> を選択 → 新規ショートカット作成'
            },
            step3: {
                title: 'ショートカット設定',
                desc: '<strong>1. URLの内容を取得：</strong><br><span class="code-snippet">https://lifegrid.aradhyaxstudy.workers.dev/generate?...</span><br><br><strong>2. 壁紙を設定：</strong><br>対象は「ロック画面」を選択。'
            },
            step4: {
                title: '完了',
                desc: '「壁紙を設定」で矢印 (→) をタップ：<br><strong>被写体を切り抜く</strong> をオフ<br><strong>プレビューを表示</strong> をオフ'
            },
            androidSteps: {
                step1: {
                    title: 'URLをコピー',
                    desc: '上で壁紙を設定して生成URLをコピーします。'
                },
                step2: {
                    title: 'MacroDroid をインストール',
                    desc: 'Play ストアから <strong>MacroDroid</strong> をインストールして開きます。'
                },
                step3: {
                    title: '新しいトリガーを設定',
                    desc: '<strong>トリガー</strong> → <strong>日付/時刻</strong>',
                    item1: '時刻：<span class="code-snippet">00:01:00</span>',
                    item2: 'すべての曜日を選択（Mon–Sun）',
                    item3: '<strong>アラーム使用</strong> をオフ'
                },
                step4: {
                    title: 'アクションを設定',
                    download: {
                        title: '壁紙をダウンロード',
                        item1: '<strong>アクション</strong> → <strong>+</strong>',
                        item2: '<strong>Web Interaction</strong> → <strong>HTTP Request</strong>',
                        item3: '<strong>GET</strong> メソッドを選択',
                        item4: 'コピーしたURLを貼り付け',
                        item5: '<em>次のアクションを完了までブロック</em> をオン',
                        item6: '<em>HTTP 応答をファイルに保存</em> をオン',
                        item7: 'フォルダを選択しファイル名を入力： <span class="code-snippet">wallpaper.png</span>',
                        note: '次の手順で同じフォルダを使用します'
                    },
                    set: {
                        title: '壁紙を設定',
                        item1: '<strong>アクション</strong> → <strong>デバイス設定</strong> → <strong>壁紙を設定</strong>',
                        item2: '<strong>画像</strong> を選択 → OK',
                        item3: '<strong>ホーム画面 & ロック画面</strong> を選択',
                        item4: '<strong>動的ファイル名</strong> を選択',
                        item5: '同じ<em>フォルダ</em>を選択',
                        item6: '同じファイル名を入力： <span class="code-snippet">wallpaper.png</span>'
                    }
                },
                step5: {
                    title: '完了 & テスト',
                    desc: '右上の三点 <strong>(⋮)</strong> をタップして <strong>Test Macro</strong> を実行し確認。'
                }
            }
        },
        footer: {
            tagline: '時間を可視化。'
        },
        stats: {
            daysLeft: { other: '残り{count}日' },
            weeksLeft: { other: '残り{count}週' },
            percentComplete: ' ・{percent}% 完了',
            percentLived: ' ・{percent}% 経過',
            dayLeftLabel: { other: '日残り' }
        }
    },
    fr: {
        nav: {
            wallpapers: 'Fonds',
            customize: 'Personnaliser',
            setup: 'Configuration',
            themeSwitch: 'Changer de theme',
            language: 'Langue',
            github: 'GitHub'
        },
        hero: {
            eyebrow: 'Fonds dynamiques',
            titleLine1: 'Votre temps.',
            titleLine2: 'Visualise.',
            subtitle: 'Des fonds qui se mettent a jour chaque jour. Suivez votre annee, votre vie ou vos objectifs.',
            cta: 'Commencer'
        },
        types: {
            eyebrow: 'Choisissez votre style',
            title: 'Trois facons de voir votre temps',
            select: 'Selectionner',
            year: {
                name: 'Progression annuelle',
                desc: 'Chaque jour de l annee en grille. Regardez l annee se remplir.',
                statDay: 'Jour',
                statWeek: 'Semaine',
                statComplete: 'Complete'
            },
            life: {
                name: 'Calendrier de vie',
                desc: 'Chaque semaine de votre vie en point. Un rappel pour chaque semaine.',
                statTotalWeeks: 'Total semaines',
                statYears: 'Ans'
            },
            goal: {
                name: 'Compte a rebours',
                desc: 'Comptez jusqu a ce qui compte. Lancement, voyage, ou jalon.',
                statGoals: 'Objectifs',
                statUpdates: 'Mises a jour',
                statDailyValue: 'Quotidien'
            }
        },
        customize: {
            eyebrow: 'Personnaliser',
            title: 'Faites-le votre',
            selectedLabel: 'Selectionne :',
            selectedNone: 'Aucun',
            locationLabel: 'Localisation',
            locationHint: 'Pour un fuseau horaire precis',
            countryPlaceholder: 'Choisir un pays...',
            dobLabel: 'Date de naissance',
            dobHint: 'Ouvrir le calendrier',
            lifespanLabel: 'Esperance de vie',
            lifespanHint: 'ans',
            goalNameLabel: 'Nom de l objectif',
            goalNamePlaceholder: 'Lancement produit',
            goalStartLabel: 'Date de debut',
            goalStartHint: 'Quand vous avez commence (aujourd hui ou avant)',
            goalStartWarning: 'La date de debut doit etre aujourd hui ou avant',
            goalTargetLabel: 'Date cible',
            goalTargetHint: 'Ouvrir le calendrier',
            colorsLabel: 'Couleurs',
            backgroundLabel: 'Arriere-plan',
            accentLabel: 'Accent',
            presetClassic: 'Classique',
            presetGold: 'Or',
            presetCyan: 'Cyan',
            presetRed: 'Rouge',
            presetGreen: 'Vert',
            deviceLabel: 'Appareil',
            urlLabel: 'Votre URL de fond',
            urlPlaceholder: 'Configurez les options ci-dessus...',
            urlPlaceholderIncomplete: 'Choisissez un type et un pays...',
            copy: 'Copier',
            copied: 'Copie !'
        },
        preview: {
            placeholder: 'Selectionnez un type de fond',
            live: 'Apercu en direct'
        },
        goal: {
            daysLabel: 'jours',
            defaultName: 'Objectif'
        },
        setup: {
            eyebrow: 'Presque fini',
            title: 'Configurez et oubliez',
            ios: 'iOS',
            android: 'Android',
            step1: {
                title: 'Copier l URL',
                desc: 'Configurez votre fond ci-dessus et copiez l URL generee'
            },
            step2: {
                title: 'Creer une automatisation',
                desc: 'Raccourcis → Automatisation → Nouvelle automatisation<br>Heure : <strong>6:00 AM</strong> → <strong>Quotidien</strong><br>Selectionnez <strong>Executer immediatement</strong> → Nouveau raccourci'
            },
            step3: {
                title: 'Configurer le raccourci',
                desc: '<strong>1. Obtenir le contenu de l URL :</strong><br><span class="code-snippet">https://lifegrid.aradhyaxstudy.workers.dev/generate?...</span><br><br><strong>2. Definir le fond :</strong><br>Choisissez "Ecran verrouille".'
            },
            step4: {
                title: 'Finaliser',
                desc: 'Dans "Definir le fond", touchez la fleche (→) :<br>Desactivez <strong>Recadrer sur le sujet</strong><br>Desactivez <strong>Afficher l apercu</strong>'
            },
            androidSteps: {
                step1: {
                    title: 'Copier l URL',
                    desc: 'Configurez votre fond ci-dessus et copiez l URL generee.'
                },
                step2: {
                    title: 'Installer MacroDroid',
                    desc: 'Telechargez et installez <strong>MacroDroid</strong> depuis le Play Store et ouvrez-le.'
                },
                step3: {
                    title: 'Definir un declencheur',
                    desc: 'Touchez <strong>Trigger</strong> → <strong>Date/Time</strong>',
                    item1: 'Heure : <span class="code-snippet">00:01:00</span>',
                    item2: 'Selectionnez tous les jours (Mon–Sun)',
                    item3: 'Desactivez <strong>Use Alarm</strong>'
                },
                step4: {
                    title: 'Configurer les actions',
                    download: {
                        title: 'Telecharger le fond',
                        item1: 'Touchez <strong>Actions</strong> → <strong>+</strong>',
                        item2: 'Selectionnez <strong>Web Interaction</strong> → <strong>HTTP Request</strong>',
                        item3: 'Choisissez la methode <strong>GET</strong>',
                        item4: 'Collez l URL copiee',
                        item5: 'Activez <em>Block next action until complete</em>',
                        item6: 'Activez <em>Save HTTP response to file</em>',
                        item7: 'Choisissez un dossier et un nom de fichier : <span class="code-snippet">wallpaper.png</span>',
                        note: 'Souvenez-vous de ce dossier pour l etape suivante'
                    },
                    set: {
                        title: 'Definir le fond',
                        item1: 'Touchez <strong>Actions</strong> → <strong>Device Settings</strong> → <strong>Set Wallpaper</strong>',
                        item2: 'Choisissez <strong>Image</strong> → OK',
                        item3: 'Selectionnez <strong>Home Screen & Lock Screen</strong>',
                        item4: 'Choisissez <strong>Dynamic File Name</strong>',
                        item5: 'Selectionnez le <em>meme dossier</em>',
                        item6: 'Entrez le meme nom : <span class="code-snippet">wallpaper.png</span>'
                    }
                },
                step5: {
                    title: 'Finaliser & tester',
                    desc: 'Touchez les trois points <strong>(⋮)</strong> en haut a droite et choisissez <strong>Test Macro</strong>.'
                }
            }
        },
        footer: {
            tagline: 'Le temps, visualise.'
        },
        stats: {
            daysLeft: { one: '{count} jour restant', other: '{count} jours restants' },
            weeksLeft: { one: '{count} semaine restante', other: '{count} semaines restantes' },
            percentComplete: ' · {percent}% termine',
            percentLived: ' · {percent}% vecu',
            dayLeftLabel: { one: 'jour restant', other: 'jours restants' }
        }
    }
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
    yearPercent: $('#year-percent'),
    langToggle: $('#lang-toggle'),
    langMenu: $('#lang-menu'),
    langOptions: $$('.lang-option'),
    langLabel: $('#lang-label')
};

function getBrowserLanguage() {
    const lang = (navigator.language || 'en').toLowerCase();
    if (lang.startsWith('zh')) {
        if (lang.includes('hant') || lang.includes('tw') || lang.includes('hk') || lang.includes('mo')) {
            return 'zh-Hant';
        }
        return 'zh-Hans';
    }
    if (lang.startsWith('ja')) return 'ja';
    if (lang.startsWith('fr')) return 'fr';
    return 'en';
}

function resolveLanguage() {
    try {
        const stored = localStorage.getItem(LANG_STORAGE_KEY);
        if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
            return stored;
        }
    } catch (e) {
        console.warn('Language preference not available', e);
    }
    const detected = getBrowserLanguage();
    return SUPPORTED_LANGUAGES.includes(detected) ? detected : 'en';
}

function getTranslationEntry(lang, key) {
    return key.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), TRANSLATIONS[lang]);
}

function formatTemplate(template, vars) {
    return template.replace(/\{(\w+)\}/g, (_, token) => {
        const value = vars[token];
        return value === undefined ? `{${token}}` : String(value);
    });
}

function t(key, vars = {}) {
    const entry = getTranslationEntry(state.language, key) ?? getTranslationEntry('en', key);
    if (!entry) return key;
    if (typeof entry === 'string') {
        return formatTemplate(entry, vars);
    }
    return entry;
}

function tPlural(key, count, vars = {}) {
    const entry = getTranslationEntry(state.language, key) ?? getTranslationEntry('en', key) ?? {};
    const rule = new Intl.PluralRules(state.language).select(count);
    const template = entry[rule] || entry.other || entry.one || '';
    const displayCount = vars.displayCount ?? Number(count).toLocaleString(state.language);
    return formatTemplate(template, { ...vars, count: displayCount });
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const text = t(key);
        if (typeof text === 'string') {
            el.textContent = text;
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.dataset.i18nHtml;
        const html = t(key);
        if (typeof html === 'string') {
            el.innerHTML = html;
        }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
        const mappings = el.dataset.i18nAttr.split(',').map(m => m.trim()).filter(Boolean);
        mappings.forEach(mapping => {
            const [attr, key] = mapping.split(':').map(part => part.trim());
            if (attr && key) {
                el.setAttribute(attr, t(key));
            }
        });
    });
}

function updateLanguageUI() {
    const label = LANGUAGE_LABELS[state.language] || LANGUAGE_LABELS.en;
    if (elements.langLabel) {
        elements.langLabel.textContent = label;
    }
    elements.langOptions.forEach(option => {
        const isSelected = option.dataset.lang === state.language;
        option.setAttribute('aria-selected', String(isSelected));
    });
}

function updateCopyButtonLabel(isCopied = false) {
    const btnSpan = elements.copyBtn?.querySelector('span');
    if (!btnSpan) return;
    btnSpan.textContent = isCopied ? t('customize.copied') : t('customize.copy');
}

function syncGoalNameDefault() {
    if (!elements.goalNameInput) return;
    const currentValue = elements.goalNameInput.value.trim();
    if (!currentValue) {
        state.goalName = t('goal.defaultName');
    } else {
        state.goalName = currentValue;
    }
}

function updateSelectedTypeIndicator() {
    if (!elements.selectedTypeIndicator) return;
    if (!state.selectedType) {
        elements.selectedTypeIndicator.textContent = t('customize.selectedNone');
        return;
    }
    const typeMap = {
        year: t('types.year.name'),
        life: t('types.life.name'),
        goal: t('types.goal.name')
    };
    elements.selectedTypeIndicator.textContent = typeMap[state.selectedType] || t('customize.selectedNone');
}

function setLanguage(lang, { persist = true } = {}) {
    if (!SUPPORTED_LANGUAGES.includes(lang)) return;
    state.language = lang;
    document.documentElement.lang = lang === 'zh-Hans' ? 'zh-Hans' : lang === 'zh-Hant' ? 'zh-Hant' : lang;
    if (persist) {
        try {
            localStorage.setItem(LANG_STORAGE_KEY, lang);
        } catch (e) {
            console.warn('Unable to save language preference', e);
        }
    }
    applyTranslations();
    updateLanguageUI();
    syncGoalNameDefault();
    updateSelectedTypeIndicator();
    updateCopyButtonLabel(false);
    updateYearStats();
    updatePreview();
    updateURL();
}

// ===== Initialize =====
function init() {
    const initialLanguage = resolveLanguage();
    setLanguage(initialLanguage, { persist: false });

    // Set max date
    const today = new Date().toISOString().split('T')[0];
    elements.dobInput.max = today;
    
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

    elements.yearDay.textContent = dayOfYear.toLocaleString(state.language);
    elements.yearWeek.textContent = weekOfYear.toLocaleString(state.language);
    elements.yearPercent.textContent = `${percent.toLocaleString(state.language)}%`;
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

function toggleLanguageMenu(forceOpen) {
    if (!elements.langMenu || !elements.langToggle) return;
    const isOpen = elements.langMenu.classList.contains('is-open');
    const nextState = forceOpen !== undefined ? forceOpen : !isOpen;
    elements.langMenu.classList.toggle('is-open', nextState);
    elements.langToggle.setAttribute('aria-expanded', String(nextState));
}

function closeLanguageMenu() {
    toggleLanguageMenu(false);
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
        state.goalName = e.target.value || t('goal.defaultName');
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

    // Language Switcher
    elements.langToggle?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLanguageMenu();
    });

    elements.langMenu?.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    elements.langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.dataset.lang;
            if (lang) {
                setLanguage(lang);
            }
            closeLanguageMenu();
        });
    });

    document.addEventListener('click', closeLanguageMenu);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLanguageMenu();
        }
    });

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
    const typeNames = {
        year: t('types.year.name'),
        life: t('types.life.name'),
        goal: t('types.goal.name')
    };
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
        elements.previewScreen.innerHTML = `<div class="preview-placeholder"><span>${t('preview.placeholder')}</span></div>`;
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
    const text1 = tPlural('stats.daysLeft', daysLeft);
    const text2 = t('stats.percentComplete', { percent });

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
    const text1 = tPlural('stats.weeksLeft', weeksLeft);
    const text2 = t('stats.percentLived', { percent });

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
        progress = Math.min(0.9999, Math.max(0, daysRemaining / totalDays));
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
    ctx.fillText(daysRemaining.toLocaleString(state.language), centerX, centerY - 4);

    // Label
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = `${width * 0.03}px Inter, sans-serif`;
    ctx.fillText(tPlural('stats.dayLeftLabel', daysRemaining), centerX, centerY + (height * 0.08));


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
        elements.generatedUrl.value = t('customize.urlPlaceholderIncomplete');
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
    if (!url || !state.selectedType || !state.country) return;

    try {
        await navigator.clipboard.writeText(url);
        updateCopyButtonLabel(true);
        elements.copyBtn.dataset.copied = 'true';
        setTimeout(() => {
            elements.copyBtn.dataset.copied = 'false';
            updateCopyButtonLabel(false);
        }, 2000);
    } catch (e) {
        console.error('Failed to copy:', e);
    }
}

// ===== Start =====
init();
