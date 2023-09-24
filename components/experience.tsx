// @flow
'use client'
import { useSectionInView } from '@/hooks/use-section-in-view';
import { experiencesData } from '@/lib/data';
import * as React from 'react';
import { SectionHeading } from '@/components/section-heading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

type Props = {

};
export const Experience = (props: Props) => {

  const { ref } = useSectionInView({
    sectionName: 'Experience'
  })
  return (
    <section ref={ref} id="experience" className="mb-28 sm:mb-40 scroll-mt-28 text-skin-base dark:text-skin-inverted">
      <SectionHeading text="My experience" />
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                icon={item.icon}
                contentStyle={{
                  background: '#f3f4f6',
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem'
                }}
                iconStyle={{
                  color: 'var(--color-text-base)',
                  background: 'var(--color-text-inverted)',
                  // background: 'white',
                  fontSize: '1.3rem'
                }}
                contentArrowStyle={{
                  borderRight: '0.4rem solid #9ca3af',
                }}
                date={item.date}
                dateClassName="text-skin-base"
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className='font-normal !mt-0'>{item.location}</p>
                <p className='!mt-1 !mb-3 !font-normal'>{item.description}</p>
                {item.url && <a className='!mt-4 !font-normal' href={item.url} target="_blank">{item.url}</a>}
              </VerticalTimelineElement>
            </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};