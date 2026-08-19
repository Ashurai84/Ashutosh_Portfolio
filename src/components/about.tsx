import React from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { Terminal, Rocket, CheckCircle2, Award, BookOpen, Flame } from "lucide-react";

export const About: React.FC = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Section Header */}
        <motion.div variants={textVariant()}>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">
            <Terminal className="w-4 h-4" /> Who I Am & What Drives Me
          </div>
          <h2 className={styles.sectionHeadText}>
            {PERSONAL_INFO.aboutHeadline}
          </h2>
        </motion.div>

        {/* Narrative Grid */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            variants={fadeIn("right", "tween", 0.1, 1)}
            className="lg:col-span-8 text-slate-300 text-[15px] sm:text-[16px] leading-[28px] space-y-4"
          >
            <p>
              I am a Software Engineering undergraduate at <strong className="text-white">ITM Skills University</strong> (B.Tech Computer Science and Engineering, Class of 2024–2028). Rather than just studying theoretical computer science, my focus is on shipping production software, developing AI-driven products, and engineering agentic workflows.
            </p>

            <p>
              As the founder of <strong className="text-cyan-400">PostAura</strong>, I built an AI writing workspace powered by Google Gemini and a custom scoring engine that formats LinkedIn posts for algorithmic resonance. Beyond founder initiatives, I actively architect full-stack platforms, lead-generation automation pipelines with <strong className="text-purple-300">n8n</strong>, and Model Context Protocol (MCP) tool-calling architectures.
            </p>

            <p>
              I believe in learning by teaching — conducting structured Prompt Engineering workshops for BBA students and AI Automation masterclasses for MBA candidates to demonstrate how AI solves real business bottlenecks.
            </p>

            {/* Quick Core Competencies Tags */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium">
              <span className="px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-300">
                🚀 Product Founder
              </span>
              <span className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300">
                🤖 AI & Agentic Systems
              </span>
              <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                🔄 Automation & Workflows
              </span>
              <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                ⚡ Full-Stack Systems
              </span>
            </div>
          </motion.div>

          {/* Right Highlights Card */}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="lg:col-span-4 p-6 rounded-3xl bg-slate-900/80 border border-cyan-500/20 backdrop-blur-md space-y-4 shadow-xl"
          >
            <div className="flex items-center gap-2 text-white font-bold text-base pb-3 border-b border-slate-800">
              <Rocket className="w-5 h-5 text-cyan-400" /> Identity at a Glance
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Founder @ PostAura</strong> (Live AI writing workspace)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Best Innovation Award Winner</strong> (Hack With Mumbai 2.0)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">GitHub Invertocat Gold Pin</strong> (Microsoft Fabric IQ)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">110+ GitHub Repositories</strong> across AI & Web</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">B.Tech CSE Scholar</strong> @ ITM Skills University</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </>
    </SectionWrapper>
  );
};

export default About;
