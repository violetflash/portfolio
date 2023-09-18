// @flow
import { SectionHeading } from '@/components/section-heading';
import { cn } from '@/utils/cn';
import * as React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

type Props = {

};
export const Contact = (props: Props) => {
  return (
    <section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
    >
      <SectionHeading text="Contact Me" />
      <p className="text-gray-700">Please contact me directly at <a className="" href="mailto:ktotaam@mail.ru">ktotaam@mail.ru</a></p>
      <form
        action=""
        className="flex flex-col gap-4 mb-10 "
      >
        <input type="email" className={cn("h-14", 'styled-input')}/>
        <textarea name="" id="" cols={30} rows={10} className={cn('h-52 my-3 resize-none p-4', 'styled-input')}></textarea>
        <button
          type="submit"
          className={cn('group flex items-center justify-center gap-2 h-[3rem] w-[8rem]', 'app-button')}
        >
          Submit
          <FaPaperPlane
            className={cn('text-xs opacity-70', 'group-hover:-translate-y-1 group-hover:translate-x-1' +
            ' transition'
            )} />
        </button>
      </form>
    </section>
  );
};