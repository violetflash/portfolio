// @flow
import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { ProjectData, projectsData } from '@/lib/data';
import * as React from 'react';

const renderProjectByType = (type: ProjectData['type']) => {
  return projectsData
    .filter((project) => project.type === type)
    .map((project, index) => (
      <Project key={index} {...project} />
    ))
};

type Props = {

};
export const Projects = (props: Props) => {

  return (
    // <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
    <section className="">
      <SectionHeading text="Projects" />
      <h3 className="text-center mb-2">Commerce Apps that i worked on</h3>
      <div>
        {renderProjectByType('commerce')}
      </div>
      <h3 className="text-center mt-6 mb-2">My personal projects</h3>
      {renderProjectByType('personal')}
    </section>
  );
};