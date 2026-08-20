import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Trophy, Award, GraduationCap, GitBranch, Sparkles } from "lucide-react";

export const HeroAchievementStrip: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 -mt-2 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Best Innovation Award */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-[1px] rounded-2xl bg-gradient-to-r from-pink-500/50 via-rose-500/30 to-transparent shadow-lg hover:scale-[1.02] transition group"
        >
          <div className="bg-[#0b1120] p-4 sm:p-5 rounded-2xl h-full flex flex-col justify-between border border-slate-800/80">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">🏆</span>
                <h4 className="text-white text-sm font-bold group-hover:text-pink-400 transition">
                  Best Innovation Award
                </h4>
              </div>
            </div>

            <div className="mt-2 space-y-0.5">
              <p className="text-xs text-slate-300 font-medium">Hack With Mumbai 2.0</p>
              <p className="text-[11px] text-slate-400">Bombay.Bytes</p>
            </div>

            <div className="mt-4 pt-2 border-t border-slate-800/80 flex justify-end">
              <a
                href="https://www.linkedin.com/posts/ashutosh-pankaj-rai_bestinnovationaward-hackwithmumbai-bombaybytes-activity-7427016824233549824-EEZ2"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-pink-400 hover:text-white flex items-center gap-1 transition"
              >
                <span>View Post</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Card 2: GitHub Invertocat Gold Pin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-[1px] rounded-2xl bg-gradient-to-r from-amber-500/50 via-yellow-500/30 to-transparent shadow-lg hover:scale-[1.02] transition group"
        >
          <div className="bg-[#0b1120] p-4 sm:p-5 rounded-2xl h-full flex flex-col justify-between border border-slate-800/80">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">🏅</span>
                <h4 className="text-white text-sm font-bold group-hover:text-amber-400 transition">
                  GitHub Invertocat Gold Lapel Pin
                </h4>
              </div>
            </div>

            <div className="mt-2 space-y-0.5">
              <p className="text-xs text-slate-300 font-medium">Microsoft Fabric IQ — Hyderabad</p>
              <p className="text-[11px] text-slate-400">Enterprise AI & Copilot Dev Days</p>
            </div>

            <div className="mt-4 pt-2 border-t border-slate-800/80 flex justify-end">
              <a
                href="https://www.linkedin.com/posts/ashutosh-pankaj-rai_microsoftfabric-fabriciq-aiagents-activity-7455191076803510272-FSzt"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-amber-400 hover:text-white flex items-center gap-1 transition"
              >
                <span>View Post</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Educator & Mentor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-[1px] rounded-2xl bg-gradient-to-r from-cyan-500/50 via-blue-500/30 to-transparent shadow-lg hover:scale-[1.02] transition group"
        >
          <div className="bg-[#0b1120] p-4 sm:p-5 rounded-2xl h-full flex flex-col justify-between border border-slate-800/80">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">🎓</span>
                <h4 className="text-white text-sm font-bold group-hover:text-cyan-400 transition">
                  Educator & Mentor
                </h4>
              </div>
            </div>

            <div className="mt-2 space-y-0.5">
              <p className="text-xs text-slate-300 font-medium">BBA & MBA Workshops</p>
              <p className="text-[11px] text-slate-400">No-Code · Prompt Engg · n8n Automation</p>
            </div>

            <div className="mt-4 pt-2 border-t border-slate-800/80 flex justify-end">
              <a
                href="#teaching"
                className="text-xs font-bold text-cyan-400 hover:text-white flex items-center gap-1 transition"
              >
                <span>View More</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Card 4: 110+ Repositories Active Builder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-[1px] rounded-2xl bg-gradient-to-r from-emerald-500/50 via-teal-500/30 to-transparent shadow-lg hover:scale-[1.02] transition group"
        >
          <div className="bg-[#0b1120] p-4 sm:p-5 rounded-2xl h-full flex flex-col justify-between border border-slate-800/80">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">📈</span>
                <h4 className="text-white text-sm font-bold group-hover:text-emerald-400 transition">
                  110+ Repositories
                </h4>
              </div>
            </div>

            <div className="mt-2 space-y-0.5">
              <p className="text-xs text-slate-300 font-medium">GitHub Active Builder</p>
              {/* Activity Sparkline Wave Indicator */}
              <div className="h-4 flex items-center gap-0.5 pt-1">
                <span className="w-1.5 h-2 rounded bg-emerald-500" />
                <span className="w-1.5 h-3 rounded bg-emerald-400" />
                <span className="w-1.5 h-2.5 rounded bg-emerald-500" />
                <span className="w-1.5 h-4 rounded bg-emerald-300 animate-pulse" />
                <span className="w-1.5 h-3 rounded bg-emerald-400" />
                <span className="w-1.5 h-2 rounded bg-emerald-600" />
                <span className="w-1.5 h-3.5 rounded bg-emerald-400" />
              </div>
            </div>

            <div className="mt-4 pt-2 border-t border-slate-800/80 flex justify-end">
              <a
                href="https://github.com/Ashurai84"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-emerald-400 hover:text-white flex items-center gap-1 transition"
              >
                <span>View GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroAchievementStrip;
