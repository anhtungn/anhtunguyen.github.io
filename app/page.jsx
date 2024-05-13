import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Experience from "./components/Experiences";
import Education from "./components/Education";
import EmailSection from "./components/EmailSection";
import ProjectsSection from "./components/ProjectsSection";

import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-blue-100 to-red-100">
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <Skills />
        <Experience />
        <ProjectsSection />
        <Education />
        <EmailSection />
      </div>
        <Footer />
    </main>
  );
}

