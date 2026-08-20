import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Compass } from "lucide-react";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const STAGES = [
  {
    stage: 1,
    year: "2023",
    title: "The Beginning",
    desc: "Started my journey in Computer Science with curiosity & excitement.",
    icon: "📈",
    accent: "#ec4899", // Pink
    badgeBg: "bg-pink-500/20 text-pink-300 border-pink-500/40",
    gradientBorder: "from-pink-500/50 via-pink-500/20 to-transparent",
  },
  {
    stage: 2,
    year: "2023",
    title: "Exploring & Learning",
    desc: "Dived into development, DSA, and building small projects.",
    icon: "</>",
    accent: "#f97316", // Orange
    badgeBg: "bg-orange-500/20 text-orange-300 border-orange-500/40",
    gradientBorder: "from-orange-500/50 via-orange-500/20 to-transparent",
  },
  {
    stage: 3,
    year: "2024",
    title: "Building Projects",
    desc: "Built full-stack projects, explored AI, and shipped real solutions.",
    icon: "📦",
    accent: "#eab308", // Yellow
    badgeBg: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
    gradientBorder: "from-yellow-500/50 via-yellow-500/20 to-transparent",
  },
  {
    stage: 4,
    year: "2024",
    title: "Automation & AI",
    desc: "Discovered AI automation with n8n and started creating smart workflows.",
    icon: "⚡",
    accent: "#10b981", // Green
    badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    gradientBorder: "from-emerald-500/50 via-emerald-500/20 to-transparent",
  },
  {
    stage: 5,
    year: "2025",
    title: "Hackathons & Wins",
    desc: "Won Best Innovation Award at Hack With Mumbai 2.0 with Bombay.Bytes.",
    icon: "🏆",
    accent: "#00f0ff", // Blue / Cyan
    badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    gradientBorder: "from-cyan-500/50 via-cyan-500/20 to-transparent",
  },
  {
    stage: 6,
    year: "2025",
    title: "Teaching & Mentoring",
    desc: "Started conducting workshops for BBA & MBA students and sharing knowledge.",
    icon: "👥",
    accent: "#a855f7", // Purple
    badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    gradientBorder: "from-purple-500/50 via-purple-500/20 to-transparent",
  },
  {
    stage: 7,
    year: "2025 & Beyond",
    title: "Building PostAura",
    desc: "Building PostAura – AI LinkedIn Writing Workspace to help professionals express better.",
    icon: "🎯",
    accent: "#ec4899", // Magenta
    badgeBg: "bg-pink-500/20 text-pink-300 border-pink-500/40",
    gradientBorder: "from-pink-500/60 via-rose-500/30 to-purple-600/20",
    isPostAura: true,
    link: "https://postaura.dev/",
  },
];

export const Journey: React.FC = () => {
  return (
    <SectionWrapper idName="journey">
      <>
        {/* Header */}
        <motion.div variants={textVariant()} className="space-y-1">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            My Journey
          </h2>
          <p className="text-slate-400 text-sm">
            Every step has shaped who I am today.
          </p>
        </motion.div>

        {/* Continuous Flowing Spectrum Wave Container */}
        <div className="mt-10 relative">
          {/* Glowing Continuous Wave Ribbon Path (Desktop) */}
          <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-4 rounded-full bg-gradient-to-r from-pink-500 via-orange-500 via-yellow-400 via-emerald-500 via-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.6)] z-0" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 relative z-10">
            {STAGES.map((s, idx) => (
              <motion.div
                key={s.stage}
                variants={fadeIn("up", "spring", idx * 0.1, 0.75)}
                className={`p-[1px] rounded-2xl bg-gradient-to-b ${s.gradientBorder} shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between`}
              >
                <div className="bg-[#0b1120] p-4 rounded-2xl h-full flex flex-col justify-between border border-slate-800/90 relative overflow-hidden">
                  {/* Hover Glow */}
                  <div
                    className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-15 group-hover:opacity-35 transition"
                    style={{ backgroundColor: s.accent }}
                  />

                  <div className="space-y-2">
                    {/* Top Icon and Year */}
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${s.badgeBg}`}>
                        {s.year}
                      </span>
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold border"
                        style={{
                          backgroundColor: `${s.accent}15`,
                          borderColor: `${s.accent}40`,
                          color: s.accent,
                        }}
                      >
                        {s.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-black text-white group-hover:text-transparent group-hover:bg-clip-text transition"
                        style={{ backgroundImage: `linear-gradient(to right, #ffffff, ${s.accent})` }}
                    >
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-4">
                      {s.desc}
                    </p>
                  </div>

                  {/* Stage Foot Indicator / Link */}
                  <div className="mt-4 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-slate-400">
                      Step 0{s.stage}
                    </span>

                    {s.isPostAura && (
                      <a
                        href={s.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] font-bold text-pink-400 hover:text-white flex items-center gap-0.5 transition"
                      >
                        <span>Visit</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </>
    </SectionWrapper>
  );
};

export default Journey;
