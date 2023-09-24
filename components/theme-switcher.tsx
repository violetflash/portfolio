// @flow
'use client';
import { useThemeContext } from '@/hooks/use-theme-context';
import { cn } from '@/utils/cn';
import * as React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      className={cn("fixed bottom-5 right-5 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem]" +
      " borer border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center",
      'hover:scale-[1.15] transition-all active:scale-105',
      'bg-skin-button-inverted text-skin-inverted',
      )}
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsMoon /> : <BsSun />}
    </button>
  );
};