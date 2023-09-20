'use client'
import { sendEmail } from '@/actions/send-email';
// @flow
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import * as React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

type Props = {

};
export const Contact = (props: Props) => {

  const { ref } = useSectionInView({
    sectionName: 'Contact'
  })

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <SectionHeading text="Contact Me" />
      <p className="text-gray-700">Please contact me directly at <a className="" href="mailto:ktotaam@mail.ru">ktotaam@mail.ru</a></p>
      <form
        action={async (formData) => {
          console.log('Running on client');
          try {
            await sendEmail(formData);
          } catch (e) {

          }
        }}
        className="flex flex-col gap-4 mt-4"
      >
        <input
          type="email"
          name="email"
          required
          maxLength={500}
          className={cn("h-14", 'styled-input')}
          placeholder="Your email"
        />
        <textarea
          name="message"
          id=""
          cols={30}
          rows={10}
          className={cn('h-52 my-3 resize-none', 'styled-input')}
          placeholder="Your message"
          maxLength={5000}
          required
        />
        <button
          type="submit"
          className={cn('group flex items-center justify-center gap-2 h-[3rem] w-[8rem]', 'app-button bg-gray-900 text-white')}
        >
          Submit
          <FaPaperPlane
            className={cn('text-xs opacity-70', 'group-hover:-translate-y-1 group-hover:translate-x-1' +
            ' transition'
            )} />
        </button>
      </form>
    </motion.section>
  );
};