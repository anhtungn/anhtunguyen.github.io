"use client";
import {useRef, React} from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer"; // Thêm useInView từ react-intersection-observer
import GithubIcon from "../../public/github.png";
import LinkedinIcon from "../../public/linkedin.png";

const HeroSection = () => {
  const skillRef = useRef();
  const [isSkillRefInView, entry] = useInView({ triggerOnce: true }); // Thêm triggerOnce: true để chỉ kích hoạt một lần

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello! I&apos;s Anh Tu {" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Data Analyst",
                1000,
                "Data Scientist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-black text-base sm:text-lg mb-6 lg:text-xl text-justify">
            Welcome to my digital home, where creativity meets craftsmanship through data-driven design and innovation.
            <br /><br />
            I am a full stack web developer with a passion for creating interactive and responsive web applications.
            I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git.
            I am a quick learner and I am always looking to expand my knowledge and skill set.
            I am a team player and I am excited to work with others to create amazing applications.
          </p>
          <div className="flex items-center">
            <Link
              href="/contact"
              className="px-6 inline-block py-3 rounded-full bg-gradient-to-br from-blue-500 via-purrple-500 to-pink-500 hover:bg-slate-200 text-white "
            >
              <div>Contact me here →</div>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1-vSxZz7WkKMUvz3xLMvLj6QJCX-lkdnI/view?usp=sharing"
              className="px-1 inline-block py-1 rounded-full bg-gradient-to-br from-blue-500 via-pink-500 to-purple-500 hover:bg-slate-800 text-white ml-4"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                Download CV
              </span>
            </Link>
            <div>
              <Link href="https://www.linkedin.com/in/anhtu-nguyen99/" className="px-1 inline-block ml-4">
                <Image src={LinkedinIcon} alt="Linkedin Icon" width={30} height={30}/>
              </Link>
              <Link href="https://github.com/anhtungn" className="px-1 inline-block ml-4">
                <Image src={GithubIcon} alt="Github Icon" width={30} height={30} />
              </Link>
            </div>
          </div>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] lg:-mr-8 relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
  
      </div>
    </section>
  );
};

export default HeroSection;
