import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, FolderGit2, CheckCircle2, Layers, Flame } from "lucide-react";
import { GitHubIcon } from "./icons";
import { PROJECTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const CATEGORIES = ["All", "AI & Startups", "Hackathon Wins", "Full-Stack"] as const;

export const Works: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? (PROJECTS as readonly any[])
      : (PROJECTS as readonly any[]).filter(
          (p) => p.category === selectedCategory
        );

  return (
    <SectionWrapper idName="projects">
      <>
        {/* Header */}
        <motion.div variants={textVariant()}>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">
            <FolderGit2 className="w-4 h-4" /> Case Studies & Live Products
          </div>
          <h2 className={styles.sectionHeadText}>Featured Projects.</h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2">
            Each project represents an end-to-end technical journey — from identifying real pain points to architecting AI workflows and shipping production code.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition duration-200 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Case Study Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id || project.name}
              variants={fadeIn("up", "spring", idx * 0.15, 0.75)}
              className="group p-[1px] rounded-3xl bg-gradient-to-b from-slate-700/40 via-slate-800/20 to-transparent hover:from-cyan-500/50 hover:to-purple-500/20 transition duration-500 shadow-xl"
            >
              <div className="bg-[#0b1120] rounded-3xl p-5 sm:p-6 h-full flex flex-col justify-between border border-slate-800/80 relative overflow-hidden">
                <div>
                  {/* Top Image Preview & Badges */}
                  <div className="relative w-full h-[200px] rounded-2xl overflow-hidden mb-5 bg-slate-900 border border-slate-800">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-80" />

                    {/* Featured / Category Pill */}
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      {project.featured && (
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/90 text-black text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
                          <Flame className="w-3 h-3" /> Flagship
                        </span>
                      )}
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-slate-300 text-[10px] font-mono">
                        {project.category}
                      </span>
                    </div>

                    {/* Quick Link Buttons Floating */}
                    <div className="absolute bottom-3 right-3 flex gap-2">
                      {project.live_site_link && (
                        <a
                          href={project.live_site_link}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded-full bg-cyan-500 text-black flex items-center justify-center shadow-lg hover:scale-110 transition"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.source_code_link && (
                        <a
                          href={project.source_code_link}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded-full bg-slate-900/90 border border-slate-700 text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
                          title="GitHub Source"
                        >
                          <GitHubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-black text-white group-hover:text-cyan-300 transition">
                    {project.name}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 mt-0.5">{project.tagline}</p>

                  {/* Description */}
                  <p className="text-slate-300 text-xs leading-relaxed mt-2 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Problem & Solution Snippet */}
                  <div className="mt-3.5 pt-3 border-t border-slate-800/80 space-y-1.5 text-[11px]">
                    <div className="flex items-start gap-1.5 text-slate-300">
                      <strong className="text-cyan-300 shrink-0">Problem:</strong>
                      <span className="text-slate-400">{project.problem}</span>
                    </div>
                    <div className="flex items-start gap-1.5 text-slate-300">
                      <strong className="text-purple-300 shrink-0">Solution:</strong>
                      <span className="text-slate-400">{project.solution}</span>
                    </div>
                  </div>
                </div>

                {/* Tags & Action Footer */}
                <div className="mt-5 pt-3 border-t border-slate-800/80">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {project.tags.map((tag: { name: string; color: string }) => (
                      <span
                        key={tag.name}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 ${tag.color}`}
                      >
                        #{tag.name}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between gap-2">
                    {project.live_site_link ? (
                      <a
                        href={project.live_site_link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-500/30 text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <span>{project.name === "PostAura" ? "Launch PostAura" : "Live Product / Demo"}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <a
                        href={project.source_code_link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-bold transition flex items-center justify-center gap-1.5"
                      >
                        <span>View Repository</span>
                        <GitHubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};

export default Works;
