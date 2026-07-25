import { motion } from "framer-motion";
import { LayoutDashboard, Globe, ArrowUpRight } from "lucide-react";
import img from "../assets/this.jpeg";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-24">

      {/* Dot Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#d6d6d6_1px,transparent_1px)] [background-size:22px_22px]"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:gap-12">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={img}
              alt="Nitesh Pandey"
              className="aspect-[4/5] w-full object-cover object-top grayscale transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0"
            />

            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>

              <span className="font-mono text-xs tracking-wider text-white">
                AVAILABLE FOR WORK
              </span>
            </div>
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >

          <h2 className="text-5xl font-bold leading-[1.05] text-black sm:text-6xl">
            MERN Stack
          </h2>

          <h2 className="text-5xl font-light leading-[1.05] text-orange-500 sm:text-6xl">
            Developer.
          </h2>

          <div className="mt-8 border-l-4 border-orange-500 pl-6">
            <p className="text-lg leading-9 text-gray-700 sm:text-xl">
              I'm <span className="font-semibold text-orange-500">Nitesh Pandey</span>, a passionate
              MERN Stack Developer who enjoys building modern, responsive,
              and scalable web applications. I specialize in creating
              full-stack solutions using React.js, Node.js, Express.js,
              MongoDB, and Tailwind CSS
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">

            {/* Card 1 */}
            <div className="group rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-[0_0_0_1px_rgba(249,115,22,0.4),0_0_30px_rgba(249,115,22,0.35)]">

              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border text-gray-700 transition-colors duration-300 group-hover:border-orange-500 group-hover:text-orange-500">
                <LayoutDashboard size={18} />
              </div>

              <h3 className="font-semibold text-black">
                Frontend Development
              </h3>

              <p className="text-sm text-gray-500">
                React.js • Tailwind CSS • JavaScript • Framer Motion
              </p>

            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-[0_0_0_1px_rgba(249,115,22,0.4),0_0_30px_rgba(249,115,22,0.35)]">

              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border text-gray-700 transition-colors duration-300 group-hover:border-orange-500 group-hover:text-orange-500">
                <Globe size={18} />
              </div>

              <h3 className="font-semibold text-black">
                Backend Development
              </h3>

              <p className="text-sm text-gray-500">
                Node.js • Express.js • MongoDB • REST APIs
              </p>

            </div>

          </div>

          <div className="mt-10 flex items-center gap-2 text-orange-500">

            <ArrowUpRight size={16} />

            <span className="font-mono text-xs uppercase tracking-[3px] text-gray-400">
              BUILDING FAST • MODERN • SCALABLE WEB APPLICATIONS
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}