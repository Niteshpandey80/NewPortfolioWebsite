import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Globe,
  Image,
  Sparkles,
  GraduationCap,
  Bot,
  Wand2,
} from "lucide-react";

const projects = [
  {
    id: "text-to-image-generator",
    label: "Text-to-Image Generator",
    icon: Sparkles,
    pos: { top: "26%", left: "18%" },
    tags: ["React", "Node.js", "AI API"],
    desc: "Built a full-stack AI web application that converts text prompts into high-quality images using external AI APIs with secure backend integration.",
    badge: "FULL STACK",
    badgeTone: "success",
    accent: "#8b5cf6",
  },
  {
    id: "gemini-mern-clone",
    label: "Gemini MERN Clone",
    icon: Bot,
    pos: { top: "26%", left: "82%" },
    tags: ["MongoDB", "Express", "React", "Node"],
    desc: "Developed a Gemini-inspired AI platform featuring authentication, REST APIs, real-time updates, and optimized MongoDB performance.",
    badge: "AI PROJECT",
    badgeTone: "info",
    accent: "#0ea5e9",
  },
  {
    id: "college-website",
    label: "College Website",
    icon: GraduationCap,
    pos: { top: "58%", left: "6%" },
    tags: ["React", "JavaScript", "CSS"],
    desc: "Designed and developed a responsive institutional website for TIT Bhopal showcasing courses, faculty, admissions, and events.",
    badge: "RESPONSIVE",
    badgeTone: "success",
    accent: "#22c55e",
  },
  {
    id: "image-enhancer",
    label: "Image Enhancer App",
    icon: Image,
    pos: { top: "58%", left: "94%" },
    tags: ["MERN", "REST API", "Image Processing"],
    desc: "Created a MERN-based image enhancement platform allowing users to upload, enhance, and download images using integrated APIs.",
    badge: "FULL STACK",
    badgeTone: "warning",
    accent: "#f97316",
  },
  {
    id: "portfolio",
    label: "Developer Portfolio",
    icon: Globe,
    pos: { top: "88%", left: "18%" },
    tags: ["React", "Tailwind", "Framer Motion"],
    desc: "Modern responsive portfolio showcasing projects, technical skills, animations, and professional experience with an interactive UI.",
    badge: "LIVE",
    badgeTone: "info",
    accent: "#ec4899",
  },
  {
    id: "future-project",
    label: "More Projects Coming",
    icon: Wand2,
    pos: { top: "88%", left: "82%" },
    tags: ["MERN", "Next.js", "AI"],
    desc: "Continuously building innovative full-stack applications with React, Next.js, AI integrations, and modern web technologies.",
    badge: "IN PROGRESS",
    badgeTone: "danger",
    accent: "#a855f7",
  },
];

const badgeStyles = {
  danger: "bg-red-950/40 text-red-400 border border-red-900/60",
  success: "bg-emerald-950/40 text-emerald-400 border border-emerald-900/60",
  warning: "bg-amber-950/40 text-amber-400 border border-amber-900/60",
  info: "bg-sky-950/40 text-sky-400 border border-sky-900/60",
};

export default function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((p) => p.id === activeId);

  const orbitRef = useRef(null);
  const rafId = useRef(null);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(500px circle at ${mouseX}% ${mouseY}%, ${active.accent}14, transparent 70%)`;

  const handleMouseMove = (e) => {
    if (rafId.current) return; 
    const { clientX, clientY } = e;
    rafId.current = requestAnimationFrame(() => {
      const rect = orbitRef.current.getBoundingClientRect();
      mouseX.set(((clientX - rect.left) / rect.width) * 100);
      mouseY.set(((clientY - rect.top) / rect.height) * 100);
      rafId.current = null;
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-24">

      <div className="absolute inset-0 bg-[radial-gradient(#d6d6d6_1px,transparent_1px)] [background-size:22px_22px]"></div>

      <div className="pointer-events-none absolute left-[10%] top-24 h-72 w-72 animate-orbit-a rounded-full bg-pink-300 opacity-20 blur-[90px]" />
      <div className="pointer-events-none absolute right-[8%] bottom-24 h-80 w-80 animate-orbit-b rounded-full bg-orange-300 opacity-20 blur-[100px]" />

      <style>{`
        @keyframes orbit-a {
          0%, 100% { transform: translate3d(0,0,0); }
          50% { transform: translate3d(40px, -30px, 0); }
        }
        @keyframes orbit-b {
          0%, 100% { transform: translate3d(0,0,0); }
          50% { transform: translate3d(-50px, 40px, 0); }
        }
        .animate-orbit-a { animation: orbit-a 14s ease-in-out infinite; will-change: transform; }
        .animate-orbit-b { animation: orbit-b 16s ease-in-out infinite; will-change: transform; }
        .animate-ring-slow { animation: spin 90s linear infinite; will-change: transform; }
        .animate-ring-slow-reverse { animation: spin-reverse 130s linear infinite; will-change: transform; }
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="font-mono text-xs uppercase tracking-[4px] text-orange-500">
            Selected Work
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-black sm:text-5xl">
            Projects, mapped out.
          </h2>
          <p className="mt-4 text-gray-500">
            Click a node to explore what I built, the stack behind it, and how it shipped.
          </p>
        </motion.div>

        <motion.div
          ref={orbitRef}
          onMouseMove={handleMouseMove}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="relative mx-auto hidden h-[760px] max-w-4xl lg:block"
        >

          <motion.div
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{ background: spotlight }}
          />

   
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] animate-ring-slow rounded-full border border-dashed border-black/10" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] animate-ring-slow-reverse rounded-full border border-dashed border-black/10" />

          <svg className="pointer-events-none absolute inset-0 h-full w-full">
            <AnimatePresence mode="wait">
              {active && (
                <motion.line
                  key={active.id}
                  x1={active.pos.left}
                  y1={active.pos.top}
                  x2="50%"
                  y2="50%"
                  stroke={active.accent}
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              )}
            </AnimatePresence>
          </svg>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 4 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative flex h-full w-full flex-col items-center justify-center rounded-full bg-black px-10 text-center shadow-2xl"
                style={{ boxShadow: `0 0 90px -18px ${active.accent}66` }}
              >
             
                <motion.span
                  animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.15, 0.5] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  className="absolute -inset-3 -z-10 rounded-full"
                  style={{ boxShadow: `0 0 60px 6px ${active.accent}55` }}
                />

                <motion.div
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${active.accent}22`, color: active.accent }}
                >
                  <active.icon size={22} />
                </motion.div>

                <h3 className="font-serif text-2xl font-bold text-white">
                  {active.label}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {active.desc}
                </p>

                <motion.span
                  animate={{ opacity: [1, 0.6, 1] }}
                  transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                  className={`mt-6 rounded-full px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider ${badgeStyles[active.badgeTone]}`}
                >
                  {active.badge}
                </motion.span>
              </motion.div>
            </AnimatePresence>
          </motion.div>

  
          {projects.map((project) => {
            const isActive = project.id === activeId;
            const Icon = project.icon;

            return (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.4 },
                  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260, damping: 18 } },
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: project.pos.top, left: project.pos.left }}
              >

             
                <AnimatePresence>
                  {isActive && (
                    <div className="absolute bottom-full left-1/2 mb-3 flex -translate-x-1/2 flex-col items-center gap-2">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          transition={{ delay: i * 0.06, duration: 0.3 }}
                          className="whitespace-nowrap rounded-full border bg-white px-3 py-1 font-mono text-[10px] tracking-wider text-gray-600 shadow-sm"
                        >
                          {tag.toUpperCase()}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </AnimatePresence>

                {isActive && (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                    className="absolute -inset-2 -z-10 rounded-full opacity-70"
                    style={{
                      background: `conic-gradient(from 0deg, ${project.accent}, transparent 40%, ${project.accent})`,
                      maskImage: "radial-gradient(circle, transparent 62%, black 64%)",
                      WebkitMaskImage: "radial-gradient(circle, transparent 62%, black 64%)",
                    }}
                  />
                )}

                <motion.button
                  onClick={() => setActiveId(project.id)}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md"
                  style={{
                    border: `1.5px solid ${isActive ? project.accent : "rgba(0,0,0,0.1)"}`,
                    color: isActive ? project.accent : "#9ca3af",
                  }}
                >
                  {isActive && (
                    <motion.span
                      animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-full"
                      style={{ border: `1.5px solid ${project.accent}` }}
                    />
                  )}
                  <Icon size={20} />
                </motion.button>

                {/* Label */}
                <span
                  className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-xs tracking-wide transition-colors duration-300 ${
                    parseFloat(project.pos.left) > 50
                      ? "left-full ml-3"
                      : "right-full mr-3"
                  } ${isActive ? "font-semibold" : "text-gray-400"}`}
                  style={isActive ? { color: project.accent } : undefined}
                >
                  {project.label.toUpperCase()}
                </span>

              </motion.div>
            );
          })}

        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:hidden">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-xl"
              >
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${project.accent}1a`, color: project.accent }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-black">{project.label}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">{project.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border bg-gray-50 px-3 py-1 font-mono text-[10px] tracking-wide text-gray-500"
                    >
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>

                <span
                  className={`mt-5 inline-block rounded-full px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider ${badgeStyles[project.badgeTone]}`}
                >
                  {project.badge}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}