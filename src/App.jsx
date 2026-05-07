import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Navbar from "./layout/Navbar";
import { createContext, useEffect, useState } from "react";

export const BgContext = createContext();

function App() {
  const [background, setBackground] = useState("white");
  const [icon, setIcon] = useState("Sun");

  function handleBackgroundChange() {
    setBackground((prev) => (prev === "white" ? "black" : "white"));
    setIcon((prev) => (prev === "Sun" ? "Moon" : "Sun"));
  }

  useEffect(() => {
    document.body.style.backgroundColor =
      background === "white" ? "#ffffff" : "#000000";
    document.body.style.color = background === "white" ? "#000000" : "#ffffff";
  }, [background]);

  return (
    <>
      <BgContext.Provider value={background}>
        <div
          className="min-h-screen overflow-x-hidden transition-colors"
          style={{
            backgroundColor: background === "white" ? "#ffffff" : "#000000",
            color: background === "white" ? "#000000" : "#ffffff",
          }}
        >
          <Navbar backgroundChange={handleBackgroundChange} bgIcon={icon} />
          <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </main>
        </div>
      </BgContext.Provider>
    </>
  );
}

export default App;
