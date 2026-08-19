import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ExternalLink, Flame, CheckCircle2, ArrowRight } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

export const BuildingInPublic: React.FC = () => {
  return (
    <section className="py-8 max-w-7xl mx-auto px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0c1329] via-[#0f172a] to-[#140f28] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl shadow-cyan-950/30"
      >
        {/* Glow corner accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Left info */}
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 text-xs font-bold flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-cyan-400" /> Currently Building & Iterating
              </span>
              <span className="text-xs text-slate-400">Founder & Creator Initiative</span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
                PostAura
                <span className="text-sm font-normal text-slate-400 font-mono">postaura.dev</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-1">
                An AI writing workspace designed to turn rough thoughts into polished, voice-matched LinkedIn posts with minimal effort. Features the Antigravity Scoring Engine for hook analysis and algorithm-optimized formatting.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-slate-300 pt-1">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Live Web Product
              </span>
              <span className="flex items-center gap-1.5 text-purple-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Google Gemini API Powered
              </span>
              <span className="flex items-center gap-1.5 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Antigravity Scoring Engine
              </span>
            </div>
          </div>

          {/* Right Action */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[200px]">
            <a
              href="https://postaura.dev/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 transition"
            >
              <span>Try PostAura Live</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/Ashurai84/Post-Aura"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition"
            >
              <span>View Source Code</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BuildingInPublic;
