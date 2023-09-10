import { Project } from '@/components/project';
import { projectsData } from '@/lib/data';
import { ProjectData } from '@/types';
import * as React from 'react';

export const renderProjectByType = (type: ProjectData['type']) => {
  return projectsData
    .filter((project) => project.type === type)
    .map((project, index) => (
      <Project key={index} {...project} />
    ))
};