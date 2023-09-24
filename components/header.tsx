'use client'
import { useActiveSectionContext } from '@/hooks/use-active-section-context';
import { links } from '@/lib/data';
import { SectionName } from '@/types';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';

type Props = {};
export const Header = (props: Props) => {
  const { activeSection, setActiveSection, setLastClickTime } = useActiveSectionContext();

  const onMenuClick = (sectionName: SectionName) => {
    setActiveSection(sectionName);
    setLastClickTime(Date.now());
  };

  return (
    <header className="z-[999] relative">
      <motion.div
        className={cn("fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40" +
          " bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem]" +
          " sm:w-[37rem] sm:rounded-full",
          "dark:bg-slate-800"
          )}
        initial={{y: -100, x: "-50%", opacity: 0}}
        animate={{y: 0, x: "-50%", opacity: 1}}
      ></motion.div>
      <nav
        className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
      >
        <ul className="flex w-[23rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="relative h-3/4 flex items-center justify-center inset-0 text-gray-500 dark:text-gray-300"
              initial={{y: -100, opacity: 0}}
              animate={{y: 0, opacity: 1}}
            >
              <Link
                href={link.hash}
                className={cn(
                  'flex w-full items-center justify-center px-3 py-3 transition',
                  { 'text-gray-950': activeSection === link.name },
                  { 'hover:text-gray-950 dark:hover:text-gray-50': activeSection !== link.name }
                )}
                onClick={() => onMenuClick(link.name)}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    className={cn('bg-gray-100 rounded-full absolute inset-0 -z-10')}
                    layoutId='activeSection'
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};