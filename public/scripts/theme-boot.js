(() => {
  const storageKey = 'portfolio-theme';
  const attr = 'data-theme';

  const getSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  let nextTheme = getSystemTheme();

  try {
    const storedTheme = window.localStorage.getItem(storageKey);

    if (storedTheme === 'light' || storedTheme === 'dark') {
      nextTheme = storedTheme;
    }
  } catch {
    // Ignore storage access issues and fall back to system preference.
  }

  document.documentElement.setAttribute(attr, nextTheme);
})();
