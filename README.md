# Webpage Region Blur Bookmarklet

Blur any part of a webpage with one simple bookmark.

![Region Blur Demo](assets/demo.gif)

<p align="center">
  <strong>Hide sensitive information. Focus on what matters. No extension needed.</strong>
</p>

<p align="center">
  <a href="https://YOUR_USERNAME.github.io/region-blur-bookmarklet/">Install</a>
  ·
  <a href="#how-to-use">How to use</a>
  ·
  <a href="#features">Features</a>
  ·
  <a href="#privacy">Privacy</a>
</p>

---

## What is this?

**Region Blur** is a tiny browser bookmark that lets you blur any selected area on a webpage.

You can use it to hide private information before taking screenshots, recording your screen, sharing your browser, or focusing on only one part of a page.

No browser extension.
No account.
No setup.
No tracking.

---

## Main features

| Feature              | Description                                     |
| -------------------- | ----------------------------------------------- |
| Blur any area        | Add a blur box anywhere on the webpage          |
| Move freely          | Drag the box to the position you want           |
| Resize easily        | Resize from the corners                         |
| Multiple blur boxes  | Create more than one blur area on the same page |
| Adjustable blur      | Hold `Alt` and scroll to change blur strength   |
| Quick toggle         | Click the box to turn blur on or off            |
| Remembers blur value | Your last blur level is saved for next time     |
| Local only           | Everything runs inside your browser             |

---

## Installation

### Option 1: Easy install

1. Open the install page:
   `https://YOUR_USERNAME.github.io/region-blur-bookmarklet/`

2. Drag the **Region Blur** button to your browser bookmarks bar.

3. Open any webpage.

4. Click the **Region Blur** bookmark.

Done.

---

### Option 2: Manual install

1. Open this file:

```txt
dist/region-blur.bookmarklet.txt
```

2. Copy all text inside the file.

3. Create a new bookmark in your browser.

4. Set the bookmark name to:

```txt
Region Blur
```

5. Paste the copied code into the bookmark URL field.

6. Save the bookmark.

---

## How to use

| Action               | How                         |
| -------------------- | --------------------------- |
| Create a blur box    | Click the bookmark          |
| Move the box         | Drag it                     |
| Resize the box       | Drag one of the corners     |
| Change blur strength | Hold `Alt` and scroll       |
| Turn blur off/on     | Click the box               |
| Close the box        | Hover the box and click `×` |
| Hide active box      | Press `Escape`              |

---

## Common use cases

* Hide names, emails, addresses, balances, IDs, messages, or private notes
* Take screenshots without exposing sensitive information
* Record tutorials while hiding personal data
* Share your screen more safely
* Blur distractions while reading or working
* Quickly cover part of a page without editing the screenshot later

---

## Why use a bookmarklet?

A bookmarklet is just a bookmark that runs a small piece of JavaScript.

That means:

* You do not need to install a browser extension
* You do not need to create an account
* You can remove it anytime by deleting the bookmark
* It only runs when you click it

---

## Privacy

Region Blur runs locally in your browser.

It does not:

* collect data
* send data to a server
* track your browsing
* use analytics
* require login
* require any permission

It only saves the latest blur percentage in your browser's `localStorage`.

---

## Browser support

Region Blur works best on modern desktop browsers that support `backdrop-filter`.

Recommended browsers:

* Chrome
* Edge
* Brave
* Arc
* Safari

Some websites may block bookmarklets or restrict custom JavaScript. In that case, the bookmarklet may not work on that specific page.

---

## Project structure

```txt
region-blur-bookmarklet/
├─ src/
│  └─ region-blur.js
├─ dist/
│  ├─ region-blur.min.js
│  └─ region-blur.bookmarklet.txt
├─ scripts/
│  └─ build-bookmarklet.mjs
├─ assets/
│  └─ demo.gif
├─ docs/
│  └─ index.html
└─ README.md
```

---

## Build from source

Install dependencies:

```bash
npm install
```

Build the bookmarklet:

```bash
npm run build
```

Generated files:

```txt
dist/region-blur.min.js
dist/region-blur.bookmarklet.txt
```

Copy the content of this file into a bookmark URL:

```txt
dist/region-blur.bookmarklet.txt
```

---

## Roadmap

Possible future improvements:

* Save box position and size
* Add keyboard shortcuts
* Add custom blur color
* Add export/import settings
* Add a browser extension version

---

## License

MIT License

You can use, modify, and share this project freely.
