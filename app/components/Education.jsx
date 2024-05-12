"use client";
import React, { useRef } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      title: "Master’s Degree, Data Science & Business Analysis",
      location: "EDC Paris Business School - Paris, France",
      description: "Developed skills in the 5 interconnected areas of data science, including Information Systems & IT, AI for Cybersecurity, Mathematics & Statistics, Business & Areas of expertise, and Communication & Impact",   
      date: "2021 - 2023",
    },
    {
      title: "Bachelor’s Degree, Mathematics and computer scicence applied to the humanitites and social sciences",
      location: "University of Rennes I  - Rennes, France",
      description: "This interdisciplinary program combined coursework in mathematics, computer science, and economics, with a focus on applying these disciplines to human and social sciences. Coursework included topics such as data analysis, machine learning, statistics, and programming, as well as economic theory and policy.",
      icon: <FaGraduationCap />,
      date: "2019 - 2020",
    },
  ];
  const ref = useRef(null);
  return (
    <section id="educations" ref={ref} className="mb-28 scroll-mt-10 text-center mx-auto">
      <h2 className="text-3xl font-semibold mx-auto ">Educations</h2>
      <VerticalTimeline lineColor="black">
        {educationData.map((item, index) => (
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
            dateClassName="text-red-500 font-semibold"
            icon={item.icon}
            iconStyle={{
              background: "#ffffff",
              padding: "0.5rem",
              borderRadius: "50%",
            }}
          >
            <h3 className="font-bold capitalize text-purple-500">{item.title}</h3>
            <p className="font-normal !mt-0 ">{item.location}</p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 text-justify">{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Education;
