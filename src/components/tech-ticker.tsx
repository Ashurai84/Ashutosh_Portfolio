import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, Cpu, Database, Server, Layers, Cloud } from "lucide-react";

const TECH_ITEMS = [
  { name: "React", icon: "⚛️", color: "text-cyan-400" },
  { name: "Next.js", icon: "▲", color: "text-white" },
  { name: "Node.js", icon: "🟢", color: "text-emerald-400" },
  { name: "Python", icon: "🐍", color: "text-yellow-400" },
  { name: "MongoDB", icon: "🍃", color: "text-green-500" },
  { name: "TypeScript", icon: "📘", color: "text-blue-400" },
  { name: "n8n", icon: "⚡", color: "text-pink-400" },
  { name: "AWS", icon: "☁️", color: "text-orange-400" },
  { name: "Docker", icon: "🐳", color: "text-blue-400" },
  { name: "Tailwind CSS", icon: "🌊", color: "text-cyan-300" },
  { name: "Figma", icon: "🎨", color: "text-purple-400" },
  { name: "Gemini API", icon: "✨", color: "text-cyan-400" },
];

export const TechTicker: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 mt-6 mb-8">
      <div className="p-3 rounded-2xl bg-[#080d1e]/80 border border-slate-800/80 backdrop-blur-xl flex items-center gap-4 overflow-hidden shadow-xl">
        {/* Label Badge */}
        <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono font-bold text-slate-300 shrink-0 flex items-center gap-1.5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span>I work with</span>
        </div>

        {/* Scrolling / Flex Items */}
        <div className="flex items-center gap-5 overflow-x-auto custom-scrollbar scrollbar-none py-1 text-xs font-medium text-slate-300">
          {TECH_ITEMS.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-1.5 shrink-0 px-2.5 py-1 rounded-lg bg-slate-900/60 hover:bg-slate-800 transition border border-slate-800/60"
            >
              <span className="text-xs">{item.icon}</span>
              <span className={item.color}>{item.name}</span>
            </div>
          ))}
          <span className="text-slate-500 text-xs shrink-0 font-mono">and more...</span>
        </div>
      </div>
    </div>
  );
};

export default TechTicker;
