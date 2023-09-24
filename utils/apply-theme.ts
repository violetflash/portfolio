import { Theme } from '@/types';

export const applyTheme = (theme: Theme) => {
  document.documentElement.classList.remove('light');
  document.documentElement.classList.remove('dark');
  document.documentElement.classList.add(theme);
  localStorage.setItem('theme', theme);
}