// @flow
import { SectionHeading } from '@/components/section-heading';
import { ProjectData, projectsData } from '@/lib/data';
import Image from 'next/image';
import * as React from 'react';

type Props = {

};
export const Projects = (props: Props) => {
  return (
    // <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
    <section className="">
      <SectionHeading text="Projects" />
      <h3 className="text-center mb-2">Commerce Apps that i worked on</h3>
      <div>
        {
          projectsData
            .filter((project) => project.type === 'commerce')
            .map((project, index) => (
              <Project key={index} {...project} />
            ))
        }
      </div>
      <h3 className="text-center mb-2">My personal projects</h3>
      {
        projectsData
          .filter((project) => project.type === 'personal')
          .map((project, index) => (
            <Project key={index} {...project} />
          ))
      }
    </section>
  );
};


export const Project = ({ tags, title, imageUrl, description,  }: ProjectData) => {

  return (
    <section className="bg-gray-100 max-w-[45rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[22rem]">

      <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2">
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
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl"
      />
    </section>
  );
};