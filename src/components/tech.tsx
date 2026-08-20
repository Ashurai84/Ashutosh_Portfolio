import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Database, Layout, Server, Workflow, Sparkles, CheckCircle2 } from "lucide-react";
import { SKILLS_CATEGORIES, TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

export const Tech: React.FC = () => {
  return (
    <SectionWrapper idName="skills">
      <>
        {/* Header */}
        <motion.div variants={textVariant()}>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">
            <Cpu className="w-4 h-4" /> Capabilities & Tooling
          </div>
          <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2">
            A comprehensive, verified inventory of programming languages, modern frameworks, AI APIs, and full-stack tools I build with daily.
          </p>
        </motion.div>

        {/* Grouped Skills Matrix */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              variants={fadeIn("up", "spring", idx * 0.1, 0.75)}
              className="p-[1px] rounded-2xl bg-gradient-to-b from-slate-700/50 via-slate-800/20 to-transparent hover:from-cyan-500/40 hover:to-purple-500/20 transition duration-300 shadow-xl group"
            >
              <div className="bg-[#0b1120] rounded-2xl p-6 h-full flex flex-col justify-between border border-slate-800/90">
                <div>
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition">
                      {cat.icon === "code" && <Code className="w-5 h-5" />}
                      {cat.icon === "layout" && <Layout className="w-5 h-5" />}
                      {cat.icon === "cpu" && <Cpu className="w-5 h-5" />}
                      {cat.icon === "workflow" && <Workflow className="w-5 h-5" />}
                      {cat.icon === "database" && <Database className="w-5 h-5" />}
                    </div>
                    <h3 className="text-white font-bold text-base">{cat.title}</h3>
                  </div>

                  {/* Skills Pills */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-slate-800 transition flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Floating Tech Badges (Physics-styled Interactive 3D Cards) */}
        <div className="mt-16 pt-8 border-t border-slate-800/80">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              Interactive 3D Tech Stack & Tooling
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 sm:gap-6 justify-center">
            {TECHNOLOGIES.map((technology, index) => (
              <motion.div
                key={technology.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                {/* 3D Glassmorphic Orb Container */}
                <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-gradient-to-br from-slate-800/80 via-slate-900/90 to-[#070b16] border border-slate-700/60 p-3 flex items-center justify-center shadow-lg shadow-black/50 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-all duration-300">
                  {/* Subtle glowing background aura */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-300" />
                  
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-12 h-12 object-contain relative z-10 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] group-hover:scale-110 transition duration-300"
                    loading="lazy"
                  />
                </div>

                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 group-hover:text-cyan-300 group-hover:border-cyan-500/40 transition text-center whitespace-nowrap">
                  {technology.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </>
    </SectionWrapper>
  );
};

export default Tech;
