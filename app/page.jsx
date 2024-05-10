import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
// import AchievementsSection from "./components/AchievementsSection";
import {motion} from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gardient-to-b from-white-100 to-red-100">
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}

// const Homepage = () => {
//   return <div>Hello World</div>;
// };

// export default Homepage;