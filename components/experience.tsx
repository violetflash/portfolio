// @flow
'use client'
import { experiencesData } from '@/lib/data';
import * as React from 'react';
import { SectionHeading } from '@/components/section-heading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

type Props = {

};
export const Experience = (props: Props) => {
  return (
    <section id="experience">
      <SectionHeading text="My experience" />
        hahah
      <VerticalTimeline>
        {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement className="vertical-timeline-element--work" icon={item.icon}>
                <h3>{item.title}</h3>
                <p>{item.location}</p>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};