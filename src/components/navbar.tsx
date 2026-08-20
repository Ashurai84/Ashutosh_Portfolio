import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Download, Sparkles, ExternalLink, Send } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "../constants";
import { ashutoshAvatar } from "../assets";
import { ResumeModal } from "./resume-modal";

export const Navbar: React.FC = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full flex items-center py-3 fixed top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#060919]/90 backdrop-blur-xl border-b border-pink-500/15 shadow-xl shadow-black/50"
            : "bg-[#060919]/50 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-8">
          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            {/* Apple-minimal circular crop Bitmoji with soft 3D depth */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden p-[1.5px] bg-gradient-to-tr from-cyan-400 via-pink-500 to-amber-300 shadow-[0_2px_12px_rgba(0,0,0,0.5),0_0_15px_rgba(236,72,153,0.25)] group-hover:scale-105 transition-transform duration-300 shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0f1d] flex items-center justify-center">
                <img
                  src={ashutoshAvatar}
                  alt="Ashutosh Rai"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#060919]" />
            </div>

            <div className="flex flex-col">
              <p className="text-white text-[15px] sm:text-[16px] font-extrabold cursor-pointer flex items-center gap-1.5 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-pink-300">
                  {PERSONAL_INFO.name}
                </span>
              </p>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                {PERSONAL_INFO.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="list-none hidden xl:flex flex-row items-center gap-5">
            <li>
              <a
                href="#"
                onClick={() => setActive("Home")}
                className={`text-[13px] font-medium transition duration-200 hover:text-pink-400 ${
                  active === "Home" || active === "" ? "text-pink-400 font-semibold" : "text-slate-300"
                }`}
              >
                Home
              </a>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setActive(link.title)}
                  className={`text-[13px] font-medium transition duration-200 hover:text-cyan-400 ${
                    active === link.title ? "text-cyan-400 font-semibold" : "text-slate-300"
                  }`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="text-xs px-3.5 py-1.5 rounded-xl border border-slate-700 bg-slate-900/80 text-slate-200 hover:border-pink-500/50 hover:text-white transition flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-pink-400" /> Resume
            </button>

            <a
              href="#contact"
              className="text-xs px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 via-orange-500 to-cyan-500 text-black font-bold shadow-md shadow-pink-500/20 hover:brightness-110 active:scale-95 transition flex items-center gap-1.5"
            >
              <Send className="w-3 h-3" /> Let's Connect
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="text-xs px-3 py-1.5 rounded-lg bg-pink-500/20 border border-pink-500/40 text-pink-300 font-medium sm:hidden flex items-center gap-1"
            >
              <Download className="w-3 h-3" /> CV
            </button>

            <button
              onClick={() => setToggle(!toggle)}
              className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white"
            >
              {toggle ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Animated Drawer */}
        {toggle && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-[#060919]/95 backdrop-blur-2xl border-b border-pink-500/20 p-6 shadow-2xl flex flex-col gap-4">
            <ul className="list-none flex flex-col gap-2.5">
              <li>
                <a
                  href="#"
                  onClick={() => {
                    setToggle(false);
                    setActive("Home");
                  }}
                  className="block py-2 text-[15px] font-medium border-b border-slate-800/60 text-pink-400"
                >
                  Home
                </a>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => {
                      setToggle(false);
                      setActive(link.title);
                    }}
                    className={`block py-2 text-[15px] font-medium border-b border-slate-800/60 ${
                      active === link.title ? "text-cyan-400 font-bold" : "text-slate-300"
                    }`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2.5 pt-2">
              <button
                onClick={() => {
                  setToggle(false);
                  setIsResumeOpen(true);
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-500 via-orange-500 to-cyan-500 text-black text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg"
              >
                <Download className="w-4 h-4" /> Download Resume
              </button>
              <a
                href="https://postaura.dev/"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl border border-pink-500/40 text-pink-300 text-sm font-medium flex items-center justify-center gap-2"
              >
                Try PostAura <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Navbar;
