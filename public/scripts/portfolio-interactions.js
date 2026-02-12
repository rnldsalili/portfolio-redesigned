(() => {
  const storageKey = 'portfolio-theme';
  const root = document.documentElement;

  const getTheme = () => {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  };

  const syncThemeControls = () => {
    const isDark = getTheme() === 'dark';

    document.querySelectorAll('[data-theme-toggle]').forEach((node) => {
      node.setAttribute('aria-pressed', String(isDark));
      node.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    });
  };

  const setTheme = (theme) => {
    root.setAttribute('data-theme', theme);

    try {
      window.localStorage.setItem(storageKey, theme);
    } catch {
      // Ignore storage access issues and still update the UI state.
    }

    syncThemeControls();
  };

  const handleThemeToggle = () => {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  };

  const menuElement = document.querySelector('[data-mobile-menu]');
  const triggerElement = document.querySelector('[data-menu-trigger]');
  const closeElement = document.querySelector('[data-menu-close]');
  const mobileLinks = document.querySelectorAll('[data-mobile-link]');
  const menuFocusableSelector =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
  let lastFocusedElement = null;

  const isMenuOpen = () => {
    return Boolean(menuElement && !menuElement.classList.contains('hidden'));
  };

  const getMenuFocusableElements = () => {
    if (!menuElement) {
      return [];
    }

    return Array.from(menuElement.querySelectorAll(menuFocusableSelector)).filter((node) => {
      return node instanceof HTMLElement && !node.hasAttribute('disabled');
    });
  };

  const closeMenu = () => {
    if (!menuElement || !triggerElement) {
      return;
    }

    menuElement.classList.add('hidden');
    menuElement.setAttribute('aria-hidden', 'true');
    triggerElement.setAttribute('aria-expanded', 'false');
    triggerElement.setAttribute('aria-label', 'Open navigation menu');
    document.body.classList.remove('overflow-hidden');

    if (lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus();
      lastFocusedElement = null;
      return;
    }

    if (triggerElement instanceof HTMLElement) {
      triggerElement.focus();
    }
  };

  const openMenu = () => {
    if (!menuElement || !triggerElement) {
      return;
    }

    lastFocusedElement = document.activeElement;
    menuElement.classList.remove('hidden');
    menuElement.setAttribute('aria-hidden', 'false');
    triggerElement.setAttribute('aria-expanded', 'true');
    triggerElement.setAttribute('aria-label', 'Close navigation menu');
    document.body.classList.add('overflow-hidden');

    const focusableElements = getMenuFocusableElements();
    const [firstFocusableElement] = focusableElements;

    if (firstFocusableElement instanceof HTMLElement) {
      firstFocusableElement.focus();
      return;
    }

    if (menuElement instanceof HTMLElement) {
      menuElement.focus();
    }
  };

  if (triggerElement && menuElement) {
    triggerElement.addEventListener('click', () => {
      if (menuElement.classList.contains('hidden')) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  }

  if (closeElement) {
    closeElement.addEventListener('click', closeMenu);
  }

  mobileLinks.forEach((node) => {
    node.addEventListener('click', closeMenu);
  });

  if (menuElement) {
    menuElement.setAttribute('aria-hidden', menuElement.classList.contains('hidden') ? 'true' : 'false');

    menuElement.addEventListener('click', (event) => {
      if (event.target === menuElement) {
        closeMenu();
      }
    });
  }

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isMenuOpen()) {
      closeMenu();
      return;
    }

    if (event.key !== 'Tab' || !isMenuOpen()) {
      return;
    }

    const focusableElements = getMenuFocusableElements();

    if (focusableElements.length === 0) {
      return;
    }

    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    const activeElement = document.activeElement;

    if (event.shiftKey && activeElement === firstFocusableElement) {
      event.preventDefault();
      lastFocusableElement.focus();
      return;
    }

    if (!event.shiftKey && activeElement === lastFocusableElement) {
      event.preventDefault();
      firstFocusableElement.focus();
    }
  });

  document.querySelectorAll('[data-theme-toggle]').forEach((node) => {
    node.addEventListener('click', handleThemeToggle);
  });

  syncThemeControls();
})();
