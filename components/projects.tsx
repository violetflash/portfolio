'use client';
// @flow
import * as React from 'react';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { renderProjectByType } from '@/utils/render-project-by-type';

type Props = {

};
export const Projects = (props: Props) => {

  const { ref } = useSectionInView({
    threshold: 0.4,
    sectionName: 'Projects'
  })

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28"
    >
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