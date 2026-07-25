import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

function useTypewriter(text, { typingSpeed = 90, deletingSpeed = 45, pause = 1500 } = {}) {
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && display === text) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && display === "") {
      timeout = setTimeout(() => setIsDeleting(false), 400);
    } else {
      const next = isDeleting
        ? text.slice(0, display.length - 1)
        : text.slice(0, display.length + 1);

      timeout = setTimeout(
        () => setDisplay(next),
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [display, isDeleting, text, typingSpeed, deletingSpeed, pause]);

  return display;
}

export default function Hero() {
  const typed = useTypewriter("Frontend Developer");

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fafafa]">

      {/* Dot Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#d6d6d6_1px,transparent_1px)] [background-size:22px_22px]"></div>

      {/* Gradient Blur */}
      <div className="absolute top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-200 blur-[140px] opacity-40 sm:left-32 sm:translate-x-0"></div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between px-6 pt-28 sm:px-8 lg:flex-row lg:pt-24">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-center lg:-mt-10 lg:text-left"
        >

          <div className="mb-6 inline-flex items-center rounded-full border bg-white px-4 py-2 shadow-sm sm:mb-8 sm:px-5">

            <div className="mr-3 h-3 w-3 shrink-0 rounded-full bg-orange-500"></div>

            <span className="text-xs tracking-[3px] uppercase sm:text-sm sm:tracking-[4px]">
              MERN STACK DEVELOPER
            </span>

          </div>

          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-black sm:text-6xl lg:text-7xl">
            Nitesh
            <span className="ml-2 font-serif italic font-medium sm:ml-4">Pandey</span>
          </h1>

          <h2 className="mt-3 text-3xl font-light text-gray-500 sm:text-4xl lg:text-5xl">
            Creative
          </h2>

          <h3 className="mt-1 min-h-[1.2em] font-mono text-3xl text-orange-500 sm:text-4xl lg:text-5xl">
            {typed}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.9 }}
              className="ml-1 inline-block w-[2px] translate-y-[2px] bg-orange-500 align-middle h-[0.85em]"
            />
          </h3>

          <p className="mx-auto mt-8 max-w-md text-base leading-8 text-gray-500 sm:mt-10 sm:text-lg sm:leading-9 lg:mx-0 lg:max-w-none">
            I build beautiful, responsive and high-performance web
            applications using React, Tailwind CSS, Node.js and modern
            frontend technologies.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 sm:mt-12 sm:gap-5 lg:justify-start">

            <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: .95 }}
  onClick={() =>
    window.open("https://github.com/Niteshpandey80", "_blank", "noopener,noreferrer")
  }
  className="rounded-2xl bg-orange-500 px-7 py-3.5 text-sm text-white shadow-xl sm:px-9 sm:py-4 sm:text-base"
>
  <span className="flex items-center gap-3">
    Explore Work
    <FaArrowRight />
  </span>
</motion.button>

            <motion.a
  href="https://drive.google.com/uc?export=download&id=1-R8T0JIgcYotINNvN6Wy3ySS4ovCYak2"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  className="inline-block rounded-2xl border bg-white px-7 py-3.5 text-sm sm:px-9 sm:py-4 sm:text-base"
>
  Download CV
</motion.a>

          </div>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative mt-16 flex h-[420px] w-full max-w-[420px] items-center justify-center sm:h-[520px] sm:max-w-[480px] lg:mt-0 lg:h-[620px] lg:w-[520px] lg:max-w-none"
        >

          <div className="absolute h-[80%] w-full rounded-[40px] border"></div>


          <motion.div
            animate={{
              y: [-15, 15, -15],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute left-4 top-16 h-28 w-28 rounded-3xl bg-white shadow-2xl sm:left-10 sm:top-24 sm:h-40 sm:w-40"
          >
            <div className="flex h-full items-center justify-center">

              <div className="h-10 w-10 rounded-full border-4 border-orange-500 sm:h-14 sm:w-14"></div>

            </div>
          </motion.div>

          {/* Bottom Card */}

          <motion.div
            animate={{
              y: [15, -15, 15],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute bottom-16 right-4 w-56 rounded-3xl bg-black p-6 shadow-2xl sm:bottom-24 sm:right-10 sm:w-72 sm:p-8"
          >

            <div className="mb-5 h-2 rounded bg-gray-700"></div>

            <div className="mb-4 h-2 w-2/3 rounded bg-orange-500"></div>

            <div className="mb-4 h-2 w-5/6 rounded bg-gray-700"></div>

            <div className="h-2 w-1/2 rounded bg-gray-700"></div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}