'use client'

import { ProjectData } from '@/types';
import { cn } from '@/utils/cn';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { useRef } from 'react';

export const Project = ({ tags, title, imageUrl, description, linkUrl }: ProjectData) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <motion.section
      className={cn(
        'group mb-3',
        'sm:mb-8',
        'last:mb-0'
      )}
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
    >
      <div
        className={cn(
          'relative flex flex-col sm:flex-row bg-gray-100  border border-black/5 rounded-lg' +
          ' overflow-hidden' +
          ' transition',
          'w-[min(100%,68rem)]',
          'text-skin-muted dark:text-skin-muted-inverted',
          'h-unset sm:pr-8 sm:h-[22rem] sm:max-w-[45rem]',
          'hover:bg-gray-200',
          'sm:group-even:flex-row-reverse',
        )}
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed mb-2">{description}</p>
          <Link href={linkUrl} target="_blank" className={cn('underline text-blue-400 hover:text-blue-500 transition')}>{linkUrl}</Link>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, i) => (
              <li
                key={i}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className={cn(
            'sm:absolute top-8 sm:-right-28 sm:w-[28.25rem] sm:h-auto rounded-t-lg shadow-2xl transition',
            'group-even:right-[initial] group-even:-left-28 sm:group-hover:translate-x-3' +
            ' sm:group-hover:translate-y-3' +
            ' sm:group-hover:-rotate-2 sm:group-hover:scale-[1.14]',
            'sm:group-even:group-hover:-translate-x-3 sm:group-even:group-hover:translate-y-3' +
            ' sm:group-even:group-hover:rotate-2',
            'w-full h-full object-cover',
          )}
        />
      </div>
    </motion.section>
  );
};