'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeMeta() {
  const { theme } = useTheme();

  useEffect(() => {
    const metaThemeColor = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]'
    );
    if (metaThemeColor) {
      metaThemeColor.content = theme === 'dark' ? '#0f172a' : '#ffffff';
    }
  }, [theme]);

  return null;
}
