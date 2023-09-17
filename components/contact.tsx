// @flow
import { SectionHeading } from '@/components/section-heading';
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
        <input type="email" className="h-14 rounded-lg border-black"/>
        <textarea name="" id="" cols={30} rows={10}></textarea>
        <button type="submit" className="flex gap-2">Submit <FaPaperPlane /></button>
      </form>
    </section>
  );
};