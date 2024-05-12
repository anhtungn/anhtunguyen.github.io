"use client";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

const Experience = () => {
  
  const experiencesData = [
    {
      title: "Graduated bootcamp",
      location: "Miami, FL",
      description: "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
      icon: <FaGraduationCap />,
      date: "2019",
    },
    {
      title: "Front-End Developer",
      location: "Orlando, FL",
      description: "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
      icon: <CgWorkAlt />,
      date: "2019 - 2021",
    },
    {
      title: "Full-Stack Developer",
      location: "Houston, TX",
      description: "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
      icon: <FaReact />,
      date: "2021 - present",
    },
  ];

  return (
    <section id="experience" className="mb-28 scroll-mt-28 text-center sm:mb-40 mx-auto ml-4">
      <h2 className="text-3xl font-semibold mb-2 mx-auto">Experiences</h2>
      <VerticalTimeline lineColor="black">
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              boxShadow: "none",
              background: '#f3f4f6', 
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{ borderRight: "0.4rem solid #9ca3af" }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: 'black',
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="font-normal !mt-0">{item.location}</p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
