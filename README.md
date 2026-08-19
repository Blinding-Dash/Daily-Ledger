# Daily Ledger — Budget Passbook

A pocket-sized budgeting app styled like a bank passbook. Log income and expenses as they happen, and it splits what's left into a daily spending amount — recalculated automatically as your cycle goes on.

Built as a single-file web app (HTML/CSS/JS, no backend, no build step) with offline support via a PWA manifest and service worker, so it installs on Android like a real app.

## Features

- **Pay-cycle budgeting** — instead of resetting on the 1st of every calendar month, a cycle runs 30 days from whenever you log your income. Handy if you're paid irregularly.
- **Start a new cycle on your terms** — when you log income, you choose whether it tops up the current cycle or kicks off a fresh 30-day one. Leftover cash/online balance carries over automatically.
- **"Left to spend today"** — the day's budget is your remaining cycle balance divided across the days left, adjusted live as you spend.
- **Cash vs. online tracking** — every entry is tagged by payment method, with running balances for each.
- **Savings goal** — set a target for the cycle and see how much you've banked toward it based on your pace of spending.
- **Passbook-style history** — a running debit/credit/balance ledger, filterable by cash, online, or all, with a category breakdown.
- **Works offline** — once installed, it runs entirely on your device. All data is stored locally in the browser (`localStorage`); nothing is sent anywhere.

## Installing on Android

This repo is set up to be hosted with **GitHub Pages** and installed as a Progressive Web App (PWA):

1. In this repo, go to **Settings → Pages**.
2. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
3. GitHub will give you a live URL (something like `https://yourusername.github.io/Daily-Ledger/`) within a minute or two.
4. Open that URL on your Android phone in **Chrome**.
5. Tap the **⋮** menu → **Install app** (or use the install prompt if it appears automatically).

It'll then live on your home screen and app drawer with its own icon, open full-screen with no browser bar, and keep working without an internet connection.

## Files

| File | Purpose |
|---|---|
| `index.html` | The entire app — markup, styles, and logic in one file |
| `manifest.json` | PWA metadata (name, icons, colors, start page) that makes it installable |
| `sw.js` | Service worker that caches the app for offline use |
| `icon-192.png`, `icon-512.png` | App icons used on the home screen and app drawer |

## Local use / development

No build tools or dependencies needed. Just open `index.html` directly in a browser to run it. Note that installing as a PWA (offline caching, home-screen install prompt) only works when served over `https://` — opening the local file directly will run the app fine, but without those PWA features.

## Data & privacy

All entries, cycle settings, and balances are stored only in your browser's local storage on your device. There's no server, account, or sync — clearing your browser data or uninstalling the app will erase it, so there's no built-in backup. Nothing here is financial advice; it's a personal tracking tool.
