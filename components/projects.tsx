// @flow
import { SectionHeading } from '@/components/section-heading';
import { ProjectData, projectsData } from '@/lib/data';
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


export const Project = ({ tags, title, imageUrl, description,  }: ProjectData) => {

  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {tags.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </ul>
    </article>
  );
};