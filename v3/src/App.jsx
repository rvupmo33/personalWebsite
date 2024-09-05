// App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Projectpage from "./components/pages/Projectpage";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Resume from "./components/pages/Resume";
import { useEffect } from "react";
import Stackpage from "./components/pages/Stackpage";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div>
      <Header />
      <div className="max-w-[1000px] m-auto px-[30px] overflow-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <section>
                  <About />
                  <Experience />
                  <Projects />
                  <Skills />
                </section>
              </>
            }
          />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projectpage />} />
          <Route path="/stack" element={<Stackpage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
