import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Sparkles, Terminal, Activity } from "lucide-react";
import { GitHubIcon } from "./icons";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { PERSONAL_INFO } from "../constants";

const FEATURED_REPOS = [
  {
    name: "ASR_LABS",
    description: "An active engineering lab — a real-time portfolio tracking my decisions, commits, and projects as they happen.",
    language: "TypeScript",
    color: "#3178c6",
    link: "https://github.com/Ashurai84/ASR_LABS",
    live: "https://asr-labs.vercel.app/",
  },
  {
    name: "Post-Aura",
    description: "AI-powered LinkedIn writing workspace and content generator. Create high-performing posts, hooks, and track growth.",
    language: "TypeScript",
    color: "#3178c6",
    link: "https://github.com/Ashurai84/Post-Aura",
    live: "https://postaura.dev/",
  },
  {
    name: "Dhwani.ai",
    description: "🎙️ AI-powered Voice Banking Assistant for Indian Languages (Hindi, Tamil, Telugu, Bengali) | Groq AI + Sarvam STT/TTS.",
    language: "HTML / JS",
    color: "#e34c26",
    link: "https://github.com/Ashurai84/Dhwani.ai",
  },
  {
    name: "skills-integrate-mcp-with-copilot",
    description: "Production integration of Model Context Protocol (MCP) with GitHub Copilot to empower agentic tool calling.",
    language: "JavaScript",
    color: "#f1e05a",
    link: "https://github.com/Ashurai84/skills-integrate-mcp-with-copilot-ashutosh",
  },
  {
    name: "Krishi_officer",
    description: "The Farmer Empowerment Web App combining AI advisory, marketplace access, and real-time government scheme awareness.",
    language: "TypeScript",
    color: "#3178c6",
    link: "https://github.com/Ashurai84/Krishi_officer",
  },
  {
    name: "new-websits-of-learnvox",
    description: "Modern interactive web platform for LearnVox featuring rich educational tools, UI/UX systems, and student learning paths.",
    language: "HTML / CSS",
    color: "#563d7c",
    link: "https://github.com/Ashurai84/new-websits-of-learnvox",
  },
];

export const GithubSection: React.FC = () => {
  return (
    <SectionWrapper idName="github">
      <>
        {/* Header */}
        <motion.div variants={textVariant()}>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">
            <GitHubIcon className="w-4 h-4" /> Open Source & Telemetry
          </div>
          <h2 className={styles.sectionHeadText}>GitHub Activity.</h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2">
            Explore 110+ open-source repositories, experimental AI agents, and architectural decision records hosted on GitHub.
          </p>
        </motion.div>

        {/* Profile Card & Overview Banner */}
        <motion.div
          variants={fadeIn("up", "tween", 0.1, 0.8)}
          className="mt-8 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl relative overflow-hidden"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 p-[2px] shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-[#0b1120] rounded-2xl flex items-center justify-center">
                <GitHubIcon className="w-9 h-9 text-white" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl font-bold text-white">@Ashurai84</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono">
                  Pro Builder
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Ashutosh Pankaj Rai · Full-Stack & AI Systems</p>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-6 text-center border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-8 w-full md:w-auto justify-between md:justify-start">
            <div>
              <div className="text-2xl font-black text-white">110+</div>
              <p className="text-[11px] text-slate-400">Repositories</p>
            </div>
            <div>
              <div className="text-2xl font-black text-cyan-400">2026</div>
              <p className="text-[11px] text-slate-400">Active Commits</p>
            </div>
            <div>
              <div className="text-2xl font-black text-purple-400">48+</div>
              <p className="text-[11px] text-slate-400">Followers</p>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs flex items-center gap-2 hover:brightness-110 transition shadow-lg shadow-cyan-500/20 w-full md:w-auto justify-center"
          >
            <span>Follow on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Featured Repositories Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_REPOS.map((repo, idx) => (
            <motion.div
              key={repo.name}
              variants={fadeIn("up", "spring", idx * 0.1, 0.75)}
              className="p-5 rounded-2xl bg-[#0b1120] border border-slate-800/90 hover:border-cyan-500/40 transition duration-300 flex flex-col justify-between shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2 font-mono text-sm font-bold text-white group-hover:text-cyan-300 transition">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <span>{repo.name}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    Public
                  </span>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed mt-3 line-clamp-3">
                  {repo.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.color }} />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-3">
                  {repo.live && (
                    <a
                      href={repo.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      Live <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <a
                    href={repo.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-slate-300 hover:text-white flex items-center gap-1 font-semibold"
                  >
                    Repo <ExternalLink className="w-3 h-3" />
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

export default GithubSection;
