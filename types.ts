import { links, projectsData } from '@/lib/data';

export type SectionName = typeof links[number]['name'];
export type ProjectData = typeof projectsData[number];
export type Theme = 'light' | 'dark';
