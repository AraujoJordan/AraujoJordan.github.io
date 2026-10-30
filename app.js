/* Progressive enhancements. Reading, navigation and email work without JavaScript. */
(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const scheme = document.querySelector('meta[name="color-scheme"]');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

  function activeTheme() {
    return root.dataset.theme || (systemTheme.matches ? 'dark' : 'light');
  }

  function updateToggle() {
    const theme = activeTheme();
    const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
    // An explicit effective theme also keeps the icon in sync with system changes.
    root.dataset.theme = theme;
    toggle.setAttribute('aria-label', label);
    toggle.title = label;
  }

  let followsSystem = !root.dataset.theme;
  toggle.hidden = false;
  updateToggle();
  toggle.addEventListener('click', () => {
    followsSystem = false;
    const next = activeTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    if (scheme) scheme.content = next;
    try { localStorage.setItem('color-scheme', next); } catch (_) {}
    updateToggle();
  });
  systemTheme.addEventListener('change', () => {
    if (!followsSystem) return;
    root.dataset.theme = systemTheme.matches ? 'dark' : 'light';
    updateToggle();
  });
  document.getElementById('year').textContent = new Date().getFullYear();

  const header = document.querySelector('.header-shell');
  const navigation = [...document.querySelectorAll('.site-nav a')].map((link) => ({
    link,
    section: document.getElementById(link.hash.slice(1))
  })).filter(({ section }) => section);
  let navigationFrame = 0;

  function measureHeader() {
    root.style.setProperty('--header-offset', `${Math.ceil(header.getBoundingClientRect().height) + 24}px`);
  }

  function updateNavigation() {
    navigationFrame = 0;
    header.classList.toggle('is-scrolled', window.scrollY > 12);
    const readingLine = header.getBoundingClientRect().height + 48;
    let current = null;
    navigation.forEach(({ section }) => {
      if (section.getBoundingClientRect().top <= readingLine) current = section.id;
    });
    // The short footer may never reach the reading line on a tall screen.
    if (window.scrollY > 0 && window.scrollY + window.innerHeight >= root.scrollHeight - 4) current = 'contact';
    navigation.forEach(({ link, section }) => {
      if (section.id === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  function queueNavigationUpdate() {
    if (!navigationFrame) navigationFrame = window.requestAnimationFrame(updateNavigation);
  }

  measureHeader();
  updateNavigation();
  window.addEventListener('scroll', queueNavigationUpdate, { passive: true });
  window.addEventListener('resize', () => { measureHeader(); queueNavigationUpdate(); });
  window.addEventListener('pageshow', queueNavigationUpdate);
  // Font loading can change wrapping and section positions after the first paint.
  if (document.fonts) document.fonts.ready.then(() => { measureHeader(); queueNavigationUpdate(); });

  const copyEmail = document.getElementById('copy-email');
  const copyStatus = document.getElementById('copy-status');
  const emailLink = document.querySelector('.email-link');
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    copyEmail.hidden = false;
    const label = copyEmail.querySelector('span');
    let copyReset;
    copyEmail.addEventListener('click', async () => {
      clearTimeout(copyReset);
      copyEmail.disabled = true;
      try {
        await navigator.clipboard.writeText(decodeURIComponent(emailLink.getAttribute('href').slice(7).split('?')[0]));
        label.textContent = 'Copied';
        copyStatus.textContent = 'Email address copied. Say hello whenever you’re ready.';
      } catch (_) {
        label.textContent = 'Try again';
        copyStatus.textContent = 'Couldn’t copy. Select the address above or click it to open your email app.';
      } finally {
        copyEmail.disabled = false;
        copyReset = setTimeout(() => {
          label.textContent = 'Copy address';
          copyStatus.textContent = '';
        }, 5000);
      }
    });
  }

  // Keep content visible by default. Motion never gates reading or navigation.
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches || !('IntersectionObserver' in window) || !('animate' in Element.prototype)) return;

  const animations = new Set();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (!isIntersecting) return;
      observer.unobserve(target);
      // Keyboard focus and deep links must be available immediately.
      if (target.contains(document.activeElement) || target.closest(':target')) return;
      const animation = target.animate([
        { opacity: .35, transform: 'translateY(14px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 550, easing: 'cubic-bezier(.2, .65, .3, 1)' });
      animations.add(animation);
      animation.finished.catch(() => {}).finally(() => animations.delete(animation));
    });
  }, { threshold: .1 });

  document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
  reducedMotion.addEventListener('change', ({ matches }) => {
    if (!matches) return;
    observer.disconnect();
    animations.forEach((animation) => animation.cancel());
  });
})();
