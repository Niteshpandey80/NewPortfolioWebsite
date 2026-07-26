import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full px-4 pt-4">

      <div
        className={`mx-auto flex max-w-6xl items-center justify-between transition-all duration-500 ${
          scrolled
            ? "rounded-full border border-white/40 bg-white/70 px-6 py-3 shadow-xl backdrop-blur-xl"
            : "rounded-full border border-transparent bg-transparent px-6 py-4 shadow-none backdrop-blur-0"
        }`}
      >


        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black font-bold text-white shadow-md">
            N
          </div>

          <h1 className="text-xl font-bold tracking-tight">
            Nitesh<span className="text-orange-500">.</span>
          </h1>

        </div>

        <div className="hidden items-center gap-8 lg:flex">

          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setActive(link)}
              className={`group relative text-sm font-medium tracking-wide transition-colors ${
                active === link
                  ? "text-orange-500"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {link.toUpperCase()}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-orange-500 transition-all duration-300 ${
                  active === link ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}

        </div>

       
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-md transition-shadow hover:shadow-xl"
        >
          Hire Me
          <span className="text-orange-400">↗</span>
        </motion.button>

      </div>

    </nav>
  );
}