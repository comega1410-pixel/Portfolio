import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Roadmap from "./components/Roadmap";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RobotAssistant from "./components/RobotAssistant";

function App() {
  return (
    <ThemeProvider>
      <div className="app-root" style={{ minHeight: "100vh" }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Roadmap />
          <Education />
          <Contact />
        </main>
        <Footer />
        <RobotAssistant />
      </div>
    </ThemeProvider>
  );
}

export default App;
