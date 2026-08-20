import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, GraduationCap, Sparkles, ExternalLink, CheckCircle2, Quote, Award } from "lucide-react";
import { TEACHING_EXPERIENCES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

export const Teaching: React.FC = () => {
  return (
    <SectionWrapper idName="teaching">
      <>
        {/* Header */}
        <motion.div variants={textVariant()}>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">
            <BookOpen className="w-4 h-4" /> Mentorship & Workshops
          </div>
          <h2 className={styles.sectionHeadText}>I Build. I Teach. I Share.</h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2">
            Turning what I learn into practical, hands-on masterclasses for business and engineering students.
          </p>
        </motion.div>

        {/* Workshop Cards Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TEACHING_EXPERIENCES.map((workshop, idx) => (
            <motion.div
              key={workshop.title}
              variants={fadeIn(idx % 2 === 0 ? "right" : "left", "spring", idx * 0.3, 0.75)}
              className="p-[1px] rounded-3xl bg-gradient-to-b from-purple-500/30 via-cyan-500/20 to-transparent shadow-2xl group"
            >
              <div className="bg-[#0b1120] rounded-3xl p-6 sm:p-7 h-full flex flex-col justify-between border border-slate-800 relative overflow-hidden">
                <div className="space-y-4">
                  {/* Workshop Real Photo Header / Thumbnail */}
                  {workshop.image && (
                    <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-slate-700/80 shadow-lg">
                      <img
                        src={workshop.image}
                        alt={workshop.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-80" />

                      {/* Top Floating Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-[#060919]/90 border border-purple-500/40 text-purple-300 text-xs font-bold flex items-center gap-1.5 backdrop-blur-md shadow-md">
                          <GraduationCap className="w-3.5 h-3.5 text-purple-400" /> {workshop.audience}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                        <span className="font-semibold px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-slate-700/60">
                          {workshop.organization}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition">
                      {workshop.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
                      {workshop.description}
                    </p>
                  </div>

                  {/* Curriculum Topics */}
                  <div className="space-y-1.5 pt-1">
                    <p className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                      Hands-On Curriculum:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {workshop.topics.map((topic, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Concise 1-Line Recognition Card */}
                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-purple-500/20 relative">
                    <Quote className="w-3.5 h-3.5 text-purple-400/60 absolute top-2.5 right-3" />
                    <p className="text-xs italic text-slate-300 pr-5">
                      "{workshop.recognition}"
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-5 pt-3 border-t border-slate-800 flex justify-end">
                  <a
                    href={workshop.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-white transition"
                  >
                    <span>{workshop.linkText}</span>
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

export default Teaching;
