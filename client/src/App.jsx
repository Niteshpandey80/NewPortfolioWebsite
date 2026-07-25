import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Marqu from "./components/Marqu";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,       // higher = more "lag" / smoother easing
      effects: true,      // enables data-speed / data-lag attributes if you use them later
      smoothTouch: 0.1,   // light smoothing on touch devices
    });

    return () => smoother.kill();
  }, []);

  return (
    <>
      <Navbar />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <About />
          <Marqu/>
          <Projects/>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;