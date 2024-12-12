'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </NextThemeProvider>
  );
}

// Re-export useTheme from next-themes
export { useTheme } from 'next-themes';
