// @flow
"use client"
import { useActiveSectionContext } from '@/hooks/use-active-section-context';
import { useSectionInView } from '@/hooks/use-section-in-view';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { cn } from '@/utils/cn';

type Props = {

};
export const Intro = (props: Props) => {

  const { ref } = useSectionInView({
    threshold: 1,
    sectionName: 'Home'
  });

  const {setActiveSection, setLastClickTime} = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1561131989-b8112bafbd43?fit=crop&w=368&h=368&q=100"
              width="192"
              height="192"
              quality="95"
              className="h-24 w-24  rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              priority={true} // will be loaded AFAP
              // src={photoImg}
              alt="Alex Portrait"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">Hello, I'm Alexander.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">4 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          className="group bg-gray-900 px-7 py-3 flex items-center gap-2 app-button-primary"
          onClick={() => {
            setActiveSection('Contact');
            setLastClickTime(Date.now())
          }}
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
        </Link>
        <a
          href="/CV.pdf"
          download
          className={cn(
            "group px-7 py-3 flex items-center gap-2 app-button-secondary"
          )}
        >
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className={cn("flex gap-2 items-center rounded-full bg-white p-4 text-gray-700 outline-none" +
            " hover:text-gray-950", 'app-button-secondary')}
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className={cn("flex gap-2 items-center rounded-full bg-white p-4 text-gray-700 text-[1.35rem] outline-none" +
            " hover:text-gray-950" +
            " border border-black/10",
            "app-button-secondary"
          )}
          href="https://github.com/violetflash/portfolio"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};