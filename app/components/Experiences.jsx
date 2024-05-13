"use client";
import React, { useRef } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CgWorkAlt } from "react-icons/cg";

const Experience = () => {
  const experiencesData = [
    {
      title: "Data Scientist",
      location: "VNDIRECT Securities Corporation - Hanoi,Vietnam",
      description: "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
      icon: <CgWorkAlt />,
      date: "Novembre 2023 - Present",
    },
    {
      title: "Data Analyst",
      location: "SNCF Voyageurs - Paris, France",
      description: "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
      icon: <CgWorkAlt />,
      date: "Septembre 2021 - August 2023",
    },
    {
      title: "Data Analyst Internship",
      location: "The Faculty of Economics of the Université of Rennes 1 - Rennes, France ",
      description: "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
      icon: <CgWorkAlt />,
      date: "Juin 2021 - August 2021",
    },
  ];
  const ref = useRef(null);
  return (
    <section id="experiences" ref={ref} className="mb-28 scroll-mt-10 text-center mx-auto">
      <h2 className="text-3xl font-semibold mx-auto">Work Experiences</h2>
      <VerticalTimeline lineColor="black">
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            visible = {true}
            contentStyle={{
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              background: '#f3f4f6', 
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 1.2rem",
            }}
            contentArrowStyle={{ borderRight: "2rem solid #9ca3af" }}
            date={item.date}
            dateClassName="text-purple-500 font-bold"
            icon={item.icon}
            iconStyle={{
              background: "#ffffff",
              padding: "0.5rem",
              borderRadius: "50%",
            }}
          >
            <h3 className="font-semibold capitalize text-purple-500">{item.title}</h3>
            <p className="font-normal !mt-0">{item.location}</p>
            <p className="!mt-1 !font-normal text-black dark:text-black/75">{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
