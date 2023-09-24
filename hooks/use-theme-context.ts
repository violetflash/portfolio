import { ThemeContext } from '@/context/theme-context-provider';
import { useContext } from 'react';

export const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('useThemeContext hook must be use within an ThemeContextProvider');
  }

  return themeContext;
};