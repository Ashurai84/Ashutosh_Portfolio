import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, MessageSquare, Share2, Award } from "lucide-react";
import { LinkedInIcon } from "./icons";
import { LINKEDIN_POSTS, PERSONAL_INFO } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

export const LinkedinSection: React.FC = () => {
  return (
    <SectionWrapper idName="linkedin">
      <>
        {/* Header */}
        <motion.div variants={textVariant()}>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">
            <LinkedInIcon className="w-4 h-4" /> Personal Brand & Insights
          </div>
          <h2 className={styles.sectionHeadText}>
            More than a profile. It's where I share what I'm building.
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2">
            Following my journey through hackathon wins, AI architecture experiments, product releases, and tech workshops.
          </p>
        </motion.div>

        {/* LinkedIn Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {LINKEDIN_POSTS.map((post, idx) => (
            <motion.div
              key={post.title}
              variants={fadeIn("up", "spring", idx * 0.15, 0.75)}
              className="p-[1px] rounded-2xl bg-gradient-to-b from-blue-500/30 via-slate-800/20 to-transparent hover:from-cyan-500/50 transition duration-300 shadow-xl group"
            >
              <div className="bg-[#0b1120] rounded-2xl p-5 sm:p-6 h-full flex flex-col justify-between border border-slate-800 relative overflow-hidden">
                <div className="space-y-3">
                  {/* Photo Preview Thumbnail */}
                  {"image" in post && post.image && (
                    <div className="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden border border-slate-700/80 mb-3 shadow-md">
                      <img
                        src={post.image as string}
                        alt={post.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-60" />
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-[10px] font-bold font-mono">
                      {post.badge}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">{post.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug group-hover:text-cyan-300 transition">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <LinkedInIcon className="w-3.5 h-3.5 text-blue-400" />
                    <span>LinkedIn Post</span>
                  </div>

                  <a
                    href={post.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-white transition"
                  >
                    <span>View Post</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Connect Banner */}
        <div className="mt-10 flex justify-center">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white text-sm font-extrabold flex items-center gap-2.5 shadow-xl shadow-blue-500/20 hover:scale-105 active:scale-95 transition"
          >
            <LinkedInIcon className="w-4 h-4 fill-white" />
            <span>Connect on LinkedIn (Ashutosh Pankaj Rai)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </>
    </SectionWrapper>
  );
};

export default LinkedinSection;
