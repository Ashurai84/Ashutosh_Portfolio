import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, ExternalLink, Calendar, MapPin, CheckCircle, Sparkles, ShieldCheck } from "lucide-react";
import { ACHIEVEMENTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

export const Achievements: React.FC = () => {
  return (
    <SectionWrapper idName="achievements">
      <>
        {/* Header */}
        <motion.div variants={textVariant()}>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">
            <Trophy className="w-4 h-4" /> Proof of Work & Honors
          </div>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2">
            Verified competitive milestones, national hackathon championships, and enterprise recognitions.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={fadeIn(idx % 2 === 0 ? "right" : "left", "spring", idx * 0.3, 0.75)}
              className="relative p-[1px] rounded-3xl bg-gradient-to-b from-cyan-500/40 via-purple-500/20 to-transparent shadow-2xl group"
            >
              <div className="bg-[#0b1120] rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between relative overflow-hidden border border-slate-800/80">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition duration-500 pointer-events-none" />

                <div className="space-y-4">
                  {/* Real Photo Thumbnail / Banner */}
                  {"image" in item && item.image && (
                    <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden border border-slate-700/80 mb-2 shadow-lg">
                      <img
                        src={item.image as string}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-70" />
                    </div>
                  )}

                  {/* Top Badge & Header */}
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> {item.badge}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Title & Event */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-cyan-300 transition">
                      {item.title}
                    </h3>
                    <p className="text-cyan-400 font-semibold text-sm sm:text-base mt-0.5 flex items-center gap-1.5">
                      <span>{item.event}</span>
                    </p>
                    <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Link */}
                <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" /> Verified On LinkedIn
                  </span>

                  <a
                    href={item.postLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-500/30 text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-cyan-500/10"
                  >
                    <span>View LinkedIn Post</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};

export default Achievements;
