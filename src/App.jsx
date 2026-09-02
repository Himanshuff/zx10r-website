import { useEffect } from "react";
import "./App.css";

import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MotorcycleShowcase from "./components/MotorcycleShowcase";
import ModelSelector from "./components/ModelSelector";
import TechnologySection from "./components/TechnologySection";
import RacingSection from "./components/RacingSection";
import AccessoriesSection from "./components/AccessoriesSection";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Loader />

      <Navbar />

      <Hero />

      <MotorcycleShowcase />

      <ModelSelector />

      <TechnologySection />

      <RacingSection />

      <AccessoriesSection />

      <Gallery />

      <Footer />
    </>
  );
}

export default App;