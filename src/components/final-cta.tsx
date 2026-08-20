import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download, Sparkles } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { PERSONAL_INFO } from "../constants";
import { ResumeModal } from "./resume-modal";

export const FinalCTA: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-[#0b1120] via-[#0f172a] to-[#140f28] border border-cyan-500/30 overflow-hidden shadow-2xl text-center space-y-6"
        >
          {/* Ambient Glows */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Ready to Collaborate & Build
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-black text-white max-w-3xl mx-auto leading-tight tracking-tight">
            Let's Build Something That Matters.
          </h2>

          {/* Subtext */}
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Whether it's an AI product, automation workflow, full-stack application, or an idea worth exploring — I'm always interested in building.
          </p>

          {/* Action Buttons Grid */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 hover:brightness-110 text-white font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-purple-500/25 hover:scale-105 active:scale-95 transition"
            >
              <Mail className="w-4 h-4 text-cyan-200" />
              <span>Email Me Directly</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-300 hover:text-white hover:bg-blue-600/40 text-sm font-bold flex items-center gap-2 transition"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-sm font-bold flex items-center gap-2 transition"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <button
              onClick={() => setIsResumeOpen(true)}
              className="px-5 py-3 rounded-xl bg-purple-600/20 border border-purple-500/40 text-purple-300 hover:text-white hover:bg-purple-600/40 text-sm font-bold flex items-center gap-2 transition"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default FinalCTA;
