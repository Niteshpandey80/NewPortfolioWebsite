import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
const socials = [
  { label: "GitHub", href: "https://github.com/Niteshpandey80" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nitesh-panday-8a8811380" },
  { label: "Instagram", href: "https://www.instagram.com/the_codinghub?igsh=MTlkb3BmeXdhMnlhNg%3D%3D" },
];
const headline = "Let's build something";

function MagneticButton({ children, ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      {...props}
    >
      {children}
    </motion.a>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#fafafa] py-32">

      {/* Dot Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#d6d6d6_1px,transparent_1px)] [background-size:22px_22px]"></div>

      {/* Ambient glows */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/3 top-1/4 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-orange-300 opacity-25 blur-[130px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="pointer-events-none absolute right-1/3 bottom-1/4 h-[360px] w-[360px] translate-x-1/2 rounded-full bg-pink-300 opacity-20 blur-[120px]"
      />

      {/* Slow rotating dashed ring, purely decorative */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-black/5"
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">

        {/* Letter-by-letter headline reveal */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.03 } } }}
          className="text-5xl font-black leading-[1.05] text-black sm:text-6xl lg:text-7xl"
        >
          {headline.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 24, rotate: -6 },
                show: { opacity: 1, y: 0, rotate: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        {/* Script word with drawn underline */}
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{ fontFamily: "'Caveat', cursive" }}
            className="-mt-1 text-6xl font-semibold text-orange-500 sm:text-7xl lg:text-8xl"
          >
            meaningful.
          </motion.h2>

          <motion.svg
            viewBox="0 0 300 24"
            className="absolute -bottom-2 left-1/2 h-6 w-[85%] -translate-x-1/2"
            fill="none"
          >
            <motion.path
              d="M4 14C60 4 120 20 160 10C200 2 250 18 296 8"
              stroke="#f97316"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
            />
          </motion.svg>

          {/* orbiting sparkles around the word */}
          <motion.span
            animate={{ rotate: [0, 15, 0], scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -right-8 -top-2 text-orange-400"
          >
            <Sparkles size={22} />
          </motion.span>
          <motion.span
            animate={{ rotate: [0, -15, 0], scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 3.4, ease: "easeInOut", delay: 0.5 }}
            className="absolute -left-6 top-1/3 text-pink-400"
          >
            <Sparkles size={14} />
          </motion.span>
        </div>

        {/* Magnetic glowing CTA */}
        <MagneticButton
  href="https://myall-links-dnr2.vercel.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNTY3MDY3MzQzMzUyNDI3AAGnuIvXo1MUGC8xCnU6cWVSBBCdjW0e8GzhBsUmFeQe8xtNcRHgyDrYsBHqD-8_aem_lDYdTp3esLLOYfS8M6GuZA"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 1.3 }}
  whileHover={{ scale: 1.06 }}
  whileTap={{ scale: 0.95 }}
  className="relative mt-16 inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white"
>
  <motion.span
    animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.15, 1] }}
    transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
    className="absolute inset-0 -z-10 rounded-2xl bg-orange-500 blur-2xl"
  />
  <motion.span
    animate={{ rotate: [0, -12, 12, 0] }}
    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
  >
    <Mail size={18} />
  </motion.span>
  Contact Me
</MagneticButton>

        {/* Socials */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 1.6 } } }}
          className="mt-16 flex items-center gap-3 font-mono text-xs uppercase tracking-[3px] text-gray-400"
        >
          {socials.map((social, i) => (
            <motion.span
              key={social.label}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3"
            >
              {i > 0 && <span className="text-gray-300">·</span>}
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative transition-colors hover:text-orange-500"
              >
                {social.label}
              </a>
            </motion.span>
          ))}
        </motion.div>

      </div>

    </footer>
  );
}