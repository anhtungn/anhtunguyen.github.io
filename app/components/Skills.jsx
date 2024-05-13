"use client";

import React, { useState, useRef, useTransition } from "react";
import { motion } from "framer-motion";
import TabButton from "./TabButton";

const skillsData = [
   "Python", "SQL", "NoSQL", "R", "HTML5", "CSS","Node.js", "Git", "Gitlab",
  "DBeaver", "MongoDB", "ProstgreSQL", "PowerBI", "Tableau", "Excel", "Jupyter",
  "VSCode", "Jira", "Docker", "AWS", "Azure", "Flash", "Django", "PyTorch",
  "Scikit-learn", "Tensorflow", "Keras", "Pandas", "Numpy", "Matplotlib","Scipy", "Matplotlib",
  "Seaborn", "Selenium", "Spark", "SpaCy", "NLTK", "OpenCV", "Data Science",
  "Data Analysis", "Data Visualization", "Data Mining", "Data Engineering",
  "Data Cleaning", "Data Wrangling", "Data Integration", "Machine Learning", 
  "Deep Learning", "Natural Language Processing", "Time Series Analysis", "A/B Testing", "Ad-hoc Analysis", "MLOps",
  "Communication", "Attention to Detail", "Adaptability", "Problem Solving", "Critical Thinking",
  "Teamwork", "Leadership", "Time Management", "Agile Methodology", "Creative"
];

// Categorize skills
const toolsSkills = [ "PowerBI", "Tableau", "Excel", "VSCode", "Jupyter","ProstgreSQL", "MongoDB", 
                      "DBeaver", "Git", "Gitlab","Jira", "Docker", "AWS", "Azure", "Spark", "Flash", 'Django',"Node.js"];
const languagesprogram = ["Python", "PySpark", "SQL", "NoSQL", "R","HTML5", "CSS"]
const libraries = ["PyTorch", "Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib", "SciPy", "Matplotlib",
                  "Seaborn", "Selenium", "SpaCy", "NLTK", "OpenCV"]
const techniquesSkills = ["Data Science", "Data Analysis", "Data Visualization", "Data Mining", "Data Engineering",
                          "Data Cleaning", "Data Wrangling", "Data Integration", "Machine Learning", "Deep Learning",
                          "Natural Language Processing", "Time Series Analysis", "A/B Testing", "Ad-hoc Analysis", "MLOps"];
const softSkills = ["Communication", "Attention to Detail", "Problem Solving", "Critical Thinking", "Adaptability",
                    "Teamwork", "Leadership", "Time Management", "Agile Methodology", "Creative"]
const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [isPending, startTransition] = useTransition();

  const ref = useRef(null);

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

  const handleTabChange = (id) => {
    startTransition(() => {
      setActiveTab(id);
    });
  };

  const filteredSkills = (tab) => {
    switch (tab) {
      case "All":
        return skillsData;
      case "Languages Program":
        return languagesprogram;
      case "tools":
        return toolsSkills;
      case "libraries":
        return libraries;
      case "techniques":
        return techniquesSkills;
      case "soft-skills":
        return softSkills;
      default:
        return [];
    }
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 scroll-mt-28 text-center sm:mb-40 mt-20 "
    >
      <div>
        <h2 className="text-3xl font-semibold mb-2">
          Skills & Technologies
        </h2>
        {/* <p className="text-gray-600 mx-auto">
          Here are some of the technologies and tools I'm proficient with:
        </p> */}
      </div>
      <div className="mb-6 flex justify-center text-black">
        <TabButton active={activeTab === "All"} selectTab={() => handleTabChange("All")}>
          All Skills
        </TabButton>
        <TabButton active={activeTab === "Languages Program"} selectTab={() => handleTabChange("Languages Program")}>
          Languages Program
        </TabButton>
        <TabButton active={activeTab === "tools"} selectTab={() => handleTabChange("tools")}>
          Tools
        </TabButton>
        <TabButton active={activeTab === "libraries"} selectTab={() => handleTabChange("libraries")}>
          Libraries
        </TabButton>
        <TabButton active={activeTab === "techniques"} selectTab={() => handleTabChange("techniques")}>
          Techniques
        </TabButton>
        <TabButton active={activeTab === "soft-skills"} selectTab={() => handleTabChange("soft-skills")}>
          Soft Skills
        </TabButton>
      </div>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {filteredSkills(activeTab).map((skill, index) => (
          <motion.li
            className="bg-black borderBlack rounded-xl px-5 py-3 text-white/80"
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
