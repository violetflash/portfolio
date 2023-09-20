'use client';
// @flow
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { skillsData } from '@/lib/data';
import { cn } from '@/utils/cn';
import { Variants, motion } from 'framer-motion';
import * as React from 'react';

const fadeInAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
}

type Props = {

};
export const Skills = (props: Props) => {

  const { ref } = useSectionInView({
    threshold: 0.5,
    sectionName: 'Skills'
  })

  return (
    <section id="skills" ref={ref} className="mb-10 sm:mb-28 scroll-mt-28">
      <SectionHeading text="My skills" />
      <ul className={cn('flex flex-wrap max-w-[46rem] gap-2')}>
        {skillsData.map((skill, index) => (
          <motion.li
            key={skill}
            className={cn('bg-white border-black-custom px-2 py-2 rounded-lg')}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};