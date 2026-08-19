import React from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { PERSONAL_INFO } from "../constants";

export const SocialDock: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3 p-2 rounded-2xl bg-[#060919]/80 backdrop-blur-xl border border-slate-800/80 shadow-2xl shadow-black/80"
    >
      <a
        href={PERSONAL_INFO.github}
        target="_blank"
        rel="noreferrer"
        className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 hover:scale-110 transition group relative"
        title="GitHub (@Ashurai84)"
      >
        <GitHubIcon className="w-4 h-4" />
        <span className="absolute right-full mr-2 px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
          GitHub
        </span>
      </a>

      <a
        href={PERSONAL_INFO.linkedin}
        target="_blank"
        rel="noreferrer"
        className="p-2.5 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 hover:scale-110 transition group relative"
        title="LinkedIn"
      >
        <LinkedInIcon className="w-4 h-4" />
        <span className="absolute right-full mr-2 px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
          LinkedIn
        </span>
      </a>

      <a
        href={`mailto:${PERSONAL_INFO.email}`}
        className="p-2.5 rounded-xl text-slate-400 hover:text-pink-400 hover:bg-slate-800/80 hover:scale-110 transition group relative"
        title="Email"
      >
        <Mail className="w-4 h-4" />
        <span className="absolute right-full mr-2 px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
          Email
        </span>
      </a>

      <a
        href="https://postaura.dev/"
        target="_blank"
        rel="noreferrer"
        className="p-2.5 rounded-xl text-slate-400 hover:text-orange-400 hover:bg-slate-800/80 hover:scale-110 transition group relative"
        title="PostAura"
      >
        <Send className="w-4 h-4" />
        <span className="absolute right-full mr-2 px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
          PostAura
        </span>
      </a>
    </motion.div>
  );
};

export default SocialDock;
