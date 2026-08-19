import React from "react";
import { Sparkles } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { SOCIALS, PERSONAL_INFO, NAV_LINKS } from "../constants";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#040714] border-t border-cyan-500/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-cyan-500 flex items-center justify-center font-mono font-black text-xs text-black shadow-lg shadow-pink-500/20 shrink-0">
              AR
            </div>
            <div>
              <p className="text-white font-extrabold text-base tracking-wide">
                {PERSONAL_INFO.name}
              </p>
              <p className="text-xs text-cyan-400 font-medium">Founder @ PostAura · Full-Stack & AI Systems</p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            {NAV_LINKS.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="hover:text-cyan-300 transition">
                {link.title}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition"
              title="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition"
              title="GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://postaura.dev/"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold flex items-center gap-1 hover:bg-cyan-500/20 transition"
              title="PostAura"
            >
              <Sparkles className="w-3 h-3" /> PostAura
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for <span className="text-cyan-400 font-semibold">Student Portfolio Hackathon 2026</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
