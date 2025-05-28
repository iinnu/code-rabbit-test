import { useState, useEffect } from 'react';

import { THEME_MODES, AUTO_MODE, DARK_MODE, LIGHT_MODE } from 'constants/theme';

type ThemeMode = (typeof THEME_MODES)[number];

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>(AUTO_MODE);

  const applyTheme = (theme: ThemeMode) => {
    switch (theme) {
      case LIGHT_MODE:
        document.documentElement.classList.remove('dark');
        break;
      case DARK_MODE:
        document.documentElement.classList.add('dark');
        break;
      case AUTO_MODE:
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        break;
    }
  };

  useEffect(() => {
    const storedTheme = (localStorage.getItem('theme') ?? AUTO_MODE) as ThemeMode;

    applyTheme(storedTheme);
    setMode(storedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', mode);
    applyTheme(mode);
  }, [mode]);

  return { mode, setMode };
}
