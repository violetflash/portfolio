'use client'
// @flow
import { Theme } from '@/types';
import { applyTheme } from '@/utils/apply-theme';
import { createContext, useEffect } from 'react';
import * as React from 'react';

export type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextProps | null>(null);

type ThemeContextProviderProps = {
  children: React.ReactNode
};
export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = React.useState<Theme>('light');

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;
    const themeToUse = localTheme
      ? localTheme
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    setTheme(themeToUse)
    applyTheme(themeToUse);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};