import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Brain,
  Workflow,
  Layers,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Code2,
} from "lucide-react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const PILLARS_3D = [
  {
    id: "01",
    title: "Product Founder",
    subtitle: "Creator of PostAura",
    description:
      "Creator of PostAura, an AI LinkedIn writing workspace built to help professionals turn rough ideas into polished, algorithm-rewarded content.",
    accent: "#f97316", // Orange / Amber
    colorName: "Orange",
    gradientBorder: "from-orange-500/60 via-amber-500/30 to-transparent",
    glowShadow: "rgba(249, 115, 22, 0.35)",
    icon: Rocket,
    link: "https://postaura.dev/",
    isExternal: true,
    highlights: ["PostAura Workspace", "Antigravity Scoring", "Gemini API Integration"],
  },
  {
    id: "02",
    title: "AI & Agentic Systems",
    subtitle: "Autonomous Architectures",
    description:
      "Building AI-powered systems, agentic workflows, intelligent applications, and exploring modern LLM-based architectures and Model Context Protocol (MCP).",
    accent: "#a855f7", // Purple / Magenta
    colorName: "Purple",
    gradientBorder: "from-purple-500/60 via-pink-500/30 to-transparent",
    glowShadow: "rgba(168, 85, 247, 0.35)",
    icon: Brain,
    link: "#projects",
    isExternal: false,
    highlights: ["Autonomous Agents", "MCP Tool-Calling", "Voice Multimodal AI"],
  },
  {
    id: "03",
    title: "Automation & Workflows",
    subtitle: "n8n & Process Pipelines",
    description:
      "Designing practical automation workflows with n8n, AI, lead-generation systems, and enterprise business process automation.",
    accent: "#10b981", // Green / Emerald
    colorName: "Green",
    gradientBorder: "from-emerald-500/60 via-teal-500/30 to-transparent",
    glowShadow: "rgba(16, 185, 129, 0.35)",
    icon: Workflow,
    link: "#teaching",
    isExternal: false,
    highlights: ["n8n Masterclasses", "AI Resume-JD Matcher", "Lead Gen Pipelines"],
  },
  {
    id: "04",
    title: "Full-Stack Engineer",
    subtitle: "Production Web Applications",
    description:
      "Building production-ready web applications and full-stack systems using modern frontend and backend technologies (React, Next.js, Node.js, TypeScript).",
    accent: "#00f0ff", // Cyan / Blue
    colorName: "Cyan",
    gradientBorder: "from-cyan-500/60 via-blue-500/30 to-transparent",
    glowShadow: "rgba(0, 240, 255, 0.35)",
    icon: Layers,
    link: "#projects",
    isExternal: false,
    highlights: ["Next.js 14 & React", "Express & REST APIs", "MongoDB & PostgreSQL"],
  },
];

// Technology Marquee Datasets
const MARQUEE_ROW_1 = [
  { name: "React", icon: "⚛️", color: "text-cyan-400" },
  { name: "Next.js 14", icon: "▲", color: "text-white" },
  { name: "Node.js", icon: "🟢", color: "text-emerald-400" },
  { name: "Python", icon: "🐍", color: "text-yellow-400" },
  { name: "MongoDB", icon: "🍃", color: "text-green-500" },
  { name: "TypeScript", icon: "📘", color: "text-blue-400" },
  { name: "n8n Automation", icon: "⚡", color: "text-pink-400" },
  { name: "AWS Cloud", icon: "☁️", color: "text-orange-400" },
  { name: "Docker", icon: "🐳", color: "text-blue-400" },
  { name: "Tailwind CSS", icon: "🌊", color: "text-cyan-300" },
  { name: "Google Gemini API", icon: "✨", color: "text-cyan-400" },
];

const MARQUEE_ROW_2 = [
  { name: "GitHub (110+ Repos)", icon: "🐙", color: "text-purple-400" },
  { name: "Figma UI/UX", icon: "🎨", color: "text-pink-400" },
  { name: "Firebase Firestore", icon: "🔥", color: "text-amber-400" },
  { name: "Postman", icon: "🚀", color: "text-orange-400" },
  { name: "Vercel", icon: "▲", color: "text-white" },
  { name: "Express.js", icon: "⚙️", color: "text-slate-300" },
  { name: "Flutter", icon: "💙", color: "text-sky-400" },
  { name: "Dart", icon: "🎯", color: "text-cyan-400" },
  { name: "REST APIs", icon: "🔌", color: "text-emerald-400" },
  { name: "Git Version Control", icon: "🌿", color: "text-red-400" },
  { name: "PostgreSQL", icon: "🐘", color: "text-blue-400" },
];

export const WhatIDo: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = PILLARS_3D.length;

  const nextCard = () => setActiveIndex((prev) => (prev + 1) % total);
  const prevCard = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextCard();
      if (e.key === "ArrowLeft") prevCard();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const activePillar = PILLARS_3D[activeIndex];

  return (
    <SectionWrapper idName="what-i-do">
      <div className="w-full space-y-16">
        {/* =========================================
            PART 1: "WHAT I DO" 3D DECK CAROUSEL
            ========================================= */}
        <div className="space-y-6">
          {/* Section Header */}
          <motion.div variants={textVariant()} className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              What I Do
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-medium">
              Turning ideas into impactful digital solutions
            </p>
          </motion.div>

          {/* 3D Card Deck Viewport */}
          <div className="relative w-full max-w-5xl mx-auto py-8 px-4 flex items-center justify-center perspective-1200 overflow-hidden min-h-[460px]">
            {/* Left Nav Arrow Button */}
            <button
              onClick={prevCard}
              className="absolute left-2 sm:left-4 z-30 w-11 h-11 rounded-full bg-slate-900/90 border border-slate-700/80 text-white hover:text-cyan-400 hover:border-cyan-400 flex items-center justify-center shadow-xl backdrop-blur-md transition active:scale-95"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav Arrow Button */}
            <button
              onClick={nextCard}
              className="absolute right-2 sm:right-4 z-30 w-11 h-11 rounded-full bg-slate-900/90 border border-slate-700/80 text-white hover:text-cyan-400 hover:border-cyan-400 flex items-center justify-center shadow-xl backdrop-blur-md transition active:scale-95"
              aria-label="Next card"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* 3D Stack Container */}
            <div className="relative w-full max-w-md h-[400px] flex items-center justify-center">
              {PILLARS_3D.map((item, index) => {
                // Calculate position relative to active index
                let offset = index - activeIndex;
                if (offset < -1) offset += total;
                if (offset > total - 2) offset -= total;

                const isActive = offset === 0;
                const isPrev = offset === -1 || (activeIndex === 0 && index === total - 1);
                const isNext = offset === 1 || (activeIndex === total - 1 && index === 0);

                let xPos = 0;
                let zPos = 0;
                let rotateY = 0;
                let scale = 0.85;
                let opacity = 0;
                let zIndex = 1;

                if (isActive) {
                  xPos = 0;
                  zPos = 80;
                  rotateY = 0;
                  scale = 1.02;
                  opacity = 1;
                  zIndex = 20;
                } else if (offset === -1) {
                  xPos = -190;
                  zPos = -80;
                  rotateY = 22;
                  scale = 0.88;
                  opacity = 0.45;
                  zIndex = 10;
                } else if (offset === 1) {
                  xPos = 190;
                  zPos = -80;
                  rotateY = -22;
                  scale = 0.88;
                  opacity = 0.45;
                  zIndex = 10;
                }

                const IconComponent = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    animate={{
                      x: xPos,
                      z: zPos,
                      rotateY: rotateY,
                      scale: scale,
                      opacity: opacity,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 24,
                      duration: 0.6,
                    }}
                    className={`absolute top-0 w-full max-w-[340px] sm:max-w-[380px] h-[380px] p-[1px] rounded-3xl bg-gradient-to-b ${
                      item.gradientBorder
                    } cursor-pointer select-none transition-shadow duration-300 ${
                      isActive ? "pointer-events-auto" : "pointer-events-auto hover:opacity-75"
                    }`}
                    style={{
                      zIndex,
                      boxShadow: isActive ? `0 0 35px ${item.glowShadow}` : "none",
                    }}
                  >
                    <div className="bg-[#0b1120] p-6 sm:p-7 rounded-3xl h-full flex flex-col justify-between border border-slate-800/90 relative overflow-hidden backdrop-blur-2xl">
                      {/* Top Corner Glow */}
                      <div
                        className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-25"
                        style={{ backgroundColor: item.accent }}
                      />

                      <div className="space-y-4">
                        {/* Header: Icon & Number */}
                        <div className="flex items-center justify-between">
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center border shadow-lg"
                            style={{
                              backgroundColor: `${item.accent}15`,
                              borderColor: `${item.accent}50`,
                              color: item.accent,
                            }}
                          >
                            <IconComponent className="w-7 h-7" />
                          </div>

                          <span className="text-xl font-mono font-black text-slate-400">
                            {item.id}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <div>
                          <h3
                            className="text-xl sm:text-2xl font-black text-white tracking-tight"
                            style={{
                              backgroundImage: isActive
                                ? `linear-gradient(to right, #ffffff, ${item.accent})`
                                : "none",
                              WebkitBackgroundClip: isActive ? "text" : "none",
                              color: isActive ? "transparent" : "#ffffff",
                            }}
                          >
                            {item.title}
                          </h3>
                          <p className="text-xs font-semibold mt-0.5" style={{ color: item.accent }}>
                            {item.subtitle}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-4">
                          {item.description}
                        </p>
                      </div>

                      {/* Footer Action Button */}
                      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.accent }} />
                          <span>{item.colorName}</span>
                        </div>

                        <a
                          href={item.link}
                          target={item.isExternal ? "_blank" : "_self"}
                          rel="noreferrer"
                          className="px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 transition shadow-md hover:brightness-110"
                          style={{
                            backgroundColor: `${item.accent}30`,
                            border: `1px solid ${item.accent}70`,
                          }}
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Animated Pagination Dots */}
          <div className="flex items-center justify-center gap-3 pt-2">
            {PILLARS_3D.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: activeIndex === idx ? "28px" : "10px",
                  height: "10px",
                  backgroundColor: activeIndex === idx ? item.accent : "#334155",
                  boxShadow: activeIndex === idx ? `0 0 12px ${item.accent}` : "none",
                }}
              />
            ))}
          </div>
        </div>

        {/* =========================================
            PART 2: "I WORK WITH" INFINITE MARQUEE
            ========================================= */}
        <div className="space-y-6 pt-6 border-t border-slate-800/80">
          {/* Header */}
          <motion.div variants={textVariant()} className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-pink-400 font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> Tech Stack & Tools
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              I Work With
            </h2>
            <p className="text-slate-400 text-sm font-medium">
              Technologies & tools that power my ideas
            </p>
          </motion.div>

          {/* Infinite Marquee Container with Luxury Edge Gradient Masking */}
          <div className="relative w-full overflow-hidden marquee-mask py-4 space-y-4">
            {/* Row 1: Right to Left */}
            <div className="animate-marquee-left flex items-center gap-4">
              {/* Duplicate array for seamless infinite looping */}
              {[...MARQUEE_ROW_1, ...MARQUEE_ROW_1].map((tech, i) => (
                <div
                  key={`tech-row1-${i}`}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#0b1120]/90 hover:bg-slate-800/90 border border-slate-800/90 hover:border-cyan-500/40 backdrop-blur-xl shadow-lg transition duration-200 cursor-pointer select-none group shrink-0"
                >
                  <span className="text-base group-hover:scale-110 transition">{tech.icon}</span>
                  <span className={`text-xs font-bold font-mono ${tech.color}`}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Row 2: Left to Right */}
            <div className="animate-marquee-right flex items-center gap-4">
              {[...MARQUEE_ROW_2, ...MARQUEE_ROW_2].map((tech, i) => (
                <div
                  key={`tech-row2-${i}`}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#0b1120]/90 hover:bg-slate-800/90 border border-slate-800/90 hover:border-pink-500/40 backdrop-blur-xl shadow-lg transition duration-200 cursor-pointer select-none group shrink-0"
                >
                  <span className="text-base group-hover:scale-110 transition">{tech.icon}</span>
                  <span className={`text-xs font-bold font-mono ${tech.color}`}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhatIDo;
