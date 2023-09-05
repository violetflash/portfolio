// @flow
import { SectionHeading } from '@/components/section-heading';
import { projectsData } from '@/lib/data';
import * as React from 'react';

type Props = {

};
export const Projects = (props: Props) => {
  return (
    <section>
      <SectionHeading text="Projects" />
      <div>
        {
          projectsData.map((project, index) => (
            <Project key={index} {...project} />
          ))
        }
      </div>
    </section>
  );
};


type ProjectProps = {
  project: keyof typeof projectsData;
};
export const Project = (props: ProjectProps) => {

  return (
    <div>

    </div>
  );
};