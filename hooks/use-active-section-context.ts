import { ActiveSectionContext } from '@/context/active-section-context';
import { useContext } from 'react';

export const useActiveSectionContext = () => {
  const activeSectionContext = useContext(ActiveSectionContext);

  if (!activeSectionContext) {
    throw new Error('useActiveSectionContext hook must be use within an ActiveSectionContextProvider');
  }

  return activeSectionContext;
};