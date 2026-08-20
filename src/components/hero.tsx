import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ExternalLink, Sparkles, Brain, Monitor } from "lucide-react";
import { Hero3DWorld, ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { PERSONAL_INFO } from "../constants";
import { ResumeModal } from "./resume-modal";

export const Hero: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [active3DMode, setActive3DMode] = useState<"ai" | "workstation">("ai");

  return (
    <>
      <section className="relative w-full min-h-[92vh] mx-auto flex flex-col justify-between pt-24 sm:pt-28 pb-6 overflow-hidden">
        {/* Subtle Multi-Color Atmospheric Gradient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-gradient-to-tr from-pink-500/15 via-orange-500/10 to-yellow-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-gradient-to-bl from-cyan-500/15 via-blue-600/10 to-purple-600/15 blur-[130px] rounded-full pointer-events-none -z-10" />

        <div className={cn(styles.paddingX, "max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center")}>
          {/* Left Hero Content */}
          <div className="lg:col-span-6 flex flex-col items-start relative z-30 space-y-4 sm:space-y-5">
            {/* Live Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-pink-500/30 backdrop-blur-md shadow-lg shadow-pink-500/10 text-xs font-medium text-slate-200"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 font-bold tracking-wide">● Building AI products</span>
              <span className="text-slate-500">|</span>
              <span className="text-pink-300 font-medium">Founder @ PostAura</span>
            </motion.div>

            {/* Main Headline with Multi-Color Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1"
            >
              <p className="text-2xl sm:text-3xl font-bold text-slate-300">
                Hi, I'm
              </p>
              <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 via-yellow-300 via-cyan-400 to-purple-500">
                Ashutosh.
              </h1>
            </motion.div>

            {/* Supporting Identity & Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-1.5"
            >
              <p className="text-base sm:text-xl font-bold text-slate-100 flex items-center gap-2 flex-wrap">
                <span>Founder of <a href="https://postaura.dev/" target="_blank" rel="noreferrer" className="text-pink-400 font-extrabold hover:underline">PostAura</a></span>
                <span className="text-slate-500 hidden sm:inline">·</span>
                <span className="text-cyan-300">Full-Stack Developer</span>
              </p>
              <p className="text-sm sm:text-base font-semibold text-purple-300">
                AI & Automation Builder · Educator
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed pt-2">
                {PERSONAL_INFO.headline}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-orange-500 to-cyan-500 text-black font-black text-sm shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-105 active:scale-95 transition flex items-center gap-2"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsResumeOpen(true)}
                className="px-5 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 text-sm font-semibold hover:border-cyan-500/60 hover:text-white hover:bg-slate-800 transition flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-extrabold text-sm shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-105 active:scale-95 transition-all duration-300 ease-out flex items-center gap-2"
              >
                <span>Let's Connect</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
            </motion.div>
          </div>

          {/* Right Interactive 3D Canvas */}
          <div className="lg:col-span-6 w-full h-[420px] sm:h-[480px] lg:h-[520px] relative overflow-hidden flex flex-col items-center justify-center pointer-events-auto">
            {/* Top Mode Switcher */}
            <div className="absolute top-2 right-2 z-20 flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-lg">
              <button
                onClick={() => setActive3DMode("ai")}
                className={`px-3 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition ${
                  active3DMode === "ai"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
                title="AI Ecosystem & Live Systems"
              >
                <Brain className="w-3.5 h-3.5 text-pink-300" />
                <span>AI Ecosystem</span>
              </button>
              <button
                onClick={() => setActive3DMode("workstation")}
                className={`px-3 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition ${
                  active3DMode === "workstation"
                    ? "bg-cyan-500 text-black shadow-md shadow-cyan-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Interactive 3D Developer Workstation PC"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>3D Workstation</span>
              </button>
            </div>

            {/* 3D Canvas Container */}
            <div className="w-full h-full flex items-center justify-center">
              {active3DMode === "workstation" ? <ComputersCanvas /> : <Hero3DWorld />}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="w-full flex justify-center items-center pt-4">
          <a href="#about" className="flex flex-col items-center gap-1.5 group">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 group-hover:text-cyan-400 transition">
              Scroll to explore journey
            </span>
            <div className="w-[24px] h-[40px] rounded-2xl border-2 border-pink-500/30 flex justify-center items-start p-1 shadow-[0_0_10px_rgba(236,72,153,0.15)]">
              <motion.div
                animate={{
                  y: [0, 14, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-cyan-400 shadow-[0_0_8px_#ec4899]"
              />
            </div>
          </a>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Hero;
