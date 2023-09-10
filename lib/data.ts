import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import chilledButterImg from "@/public/chilledButter.png";
import originalSoftImg from "@/public/originalSoft.png";
import vocabV1Img from "@/public/vocab-v1.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ChilledButter",
    description:
      "Online Scheduling Software for small business. Staff management, Smart Calendar, Online Booking, etc...",
    tags: ["React", "TypeScript", "Redux Toolkit", "Material UI", "Docker", "Cypress"],
    linkUrl: "https://chilledbutter.com/",
    imageUrl: chilledButterImg,
    type: 'commerce'
  },
  {
    title: "TraceWay",
    description:
      "An incredibly flexible marking and track&trace solution for large manufacturing companies. ",
    tags: ["React", "TypeScript", "Material UI", "Cypress"],
    linkUrl: "https://original-soft.pro/",
    imageUrl: originalSoftImg,
    type: 'commerce'
  },
  {
    title: "Vocabulary",
    description:
      "JS OOP based project for personal use for learning/training new words.",
    tags: ["Javascript", "OOP", "Firebase"],
    linkUrl: "https://vocab-ktotaam.vercel.app/",
    imageUrl: vocabV1Img,
    type: 'personal'
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Redux Toolkit",
  "Material UI",
  "Docker",
  "Cypress",
  "SQL",
] as const;