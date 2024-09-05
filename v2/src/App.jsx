import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectSec from "./components/ProjectSec";
import SkillsSec from "./components/SkillsSec";
import TechSec from "./components/TechSec";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="websiteContainer">
        <Header />
        <div className="mainContainer">
          <Hero />
          <section className="myInformationSection">
            <AboutMe />
            <TechSec />
            <SkillsSec />
            <ProjectSec />
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
