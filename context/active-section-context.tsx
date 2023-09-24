'use client'
import { SectionName } from '@/types';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: Dispatch<SetStateAction<SectionName>>;
  lastClickTime: number;
  setLastClickTime: Dispatch<SetStateAction<number>>;
};

type ActiveSectionContextProviderProps = {
  children: ReactNode
};
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export const ActiveSectionContextProvider = ({ children }: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [lastClickTime, setLastClickTime] = useState(0); // we need to keep track of this to temporarily disable the
  // observer when user clicks on the menu link

  return (
    <ActiveSectionContext.Provider value={{
      activeSection,
      setActiveSection,
      lastClickTime,
      setLastClickTime
    }}>
      {children}
    </ActiveSectionContext.Provider>
  )
};