// === Store URLs ===
// Replace APPLE_ID_TODO with the numeric App Store ID once the iOS app is published.
const APP_STORE_URL  = "https://apps.apple.com/app/idAPPLE_ID_TODO";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.araujojordan.groce";
const APP_PACKAGE    = "com.araujojordan.groce";

// Matches the listId pattern from DeeplinkUtils.kt: [a-zA-Z0-9_-]+
const LIST_ID_RE = /^[a-zA-Z0-9_-]+$/;

// ─── Platform detection ────────────────────────────────────────────────────────

function isAndroid() {
  return /android/i.test(navigator.userAgent);
}

function isIOS() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

// ─── listId extraction ─────────────────────────────────────────────────────────
// Accepts either:
//   ?listId=abc123          (query param — used after the 404.html redirect from GitHub Pages)
//   /groce/join/abc123      (pathname — matched if served behind a server-side rewrite)

function getListId() {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get("listId");
  if (fromQuery && LIST_ID_RE.test(fromQuery)) return fromQuery;

  const parts = window.location.pathname.split("/").filter(Boolean);
  const joinIdx = parts.indexOf("join");
  const candidate = joinIdx >= 0 ? parts[joinIdx + 1] : null;
  if (candidate && LIST_ID_RE.test(candidate)) return candidate;

  return null;
}

// ─── Deep-link builders ────────────────────────────────────────────────────────

function androidIntentUrl(listId) {
  const fallback = encodeURIComponent(PLAY_STORE_URL);
  return `intent://join/${listId}#Intent;scheme=groce;package=${APP_PACKAGE};S.browser_fallback_url=${fallback};end`;
}

// ─── UI helpers ───────────────────────────────────────────────────────────────

function setStatus(text) {
  const el = document.getElementById("status-msg");
  if (el) el.textContent = text;
}

// ─── Deep-link attempt (called on button press and on page load) ───────────────

function attemptOpen(listId) {
  if (isAndroid()) {
    if (listId) {
      window.location.href = androidIntentUrl(listId);
    } else {
      window.open(PLAY_STORE_URL, "_blank", "noopener");
    }
  } else if (isIOS()) {
    if (listId) {
      window.location.href = `groce://join/${listId}`;
      // If app is not installed the custom scheme silently fails; fall back to the App Store.
      setTimeout(() => {
        setStatus("App not installed — redirecting to the App Store…");
        window.location.href = APP_STORE_URL;
      }, 1500);
    } else {
      window.open(APP_STORE_URL, "_blank", "noopener");
    }
  } else {
    setStatus("Open Groce on your Android or iOS device using the links below.");
  }
}

// ─── Init ─────────────────────────────────────────────────────────────────────

function init() {
  const listId = getListId();

  // Show / populate the join-info box
  const joinBox = document.getElementById("join-info-box");
  if (joinBox) {
    if (listId) {
      joinBox.hidden = false;
      const idEl = document.getElementById("list-id-display");
      if (idEl) idEl.textContent = listId;
    } else {
      joinBox.hidden = true;
    }
  }

  // Wire up the "Open in Groce" button
  const openBtn = document.getElementById("open-in-app");
  if (openBtn) {
    openBtn.addEventListener("click", () => attemptOpen(listId));
  }

  // Set store button hrefs dynamically so the placeholder is easy to spot at runtime
  const iosBtn = document.getElementById("ios-store-btn");
  if (iosBtn) iosBtn.href = APP_STORE_URL;

  const androidBtn = document.getElementById("android-store-btn");
  if (androidBtn) androidBtn.href = PLAY_STORE_URL;

  // Auto-attempt deeplink on mobile page load (only when we have a listId to join)
  if (listId) {
    if (isAndroid()) {
      setStatus("Opening Groce…");
      window.location.href = androidIntentUrl(listId);
    } else if (isIOS()) {
      setStatus("Opening Groce…");
      window.location.href = `groce://join/${listId}`;
      setTimeout(() => {
        setStatus("App not installed — redirecting to the App Store…");
        window.location.href = APP_STORE_URL;
      }, 1500);
    } else {
      setStatus("Open Groce on your Android or iOS device to join this shared list.");
    }
  }
}

document.addEventListener("DOMContentLoaded", init);
