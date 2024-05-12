"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const skillsData = [
    "HTML5",
    "CSS",
    "Python",
    "SQL",
    "NoSQL",
    "R",
    "Node.js",
    "Git",
    "Gitlab",
    "DBeaver",
    "MongoDB",
    "ProstgreSQL",
    "PowerBI",
    "Tableau",
    "Excel",
    "Jupyter",
    "VSCode",
    "Jira",
    "Docker",
    "AWS",
    "Azure",
    "Flash",
    "Django",
    "PyTorch",
    "Scikit-learn",
    "Tensorflow",
    "Keras",
    "Pandas",
    "Numpy",
    "Scipy",
    "Matplotlib",
    "Seaborn",
    "Selenium",
    "Spark",
    "SpaCy",
    "NLTK",
    "OpenCV",
    "Data Science",
    "Data Analysis",
    "Data Visualization",
    "Data Mining",
    "Data Engineering",
    "Data Cleaning",
    "Data Wrangling",
    "Data Integration",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "A/B Testing",
    "Ad-hoc Analysis",
    "Agile Methodology"
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 0,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.01 * index,
      },
    }),
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 scroll-mt-28 text-center sm:mb-40 mx-auto mt-20"
    >
      <div className="mb-6">
        <h2 className="text-3xl font-semibold mb-2 mx-auto">
          Skills & Technologies
        </h2>
        <p className="text-gray-600 mx-auto">
          Here are some of the technologies and tools I'm proficient with:
        </p>
      </div>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-black borderBlack rounded-xl px-5 py-3 dark:bg-white/10 text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
