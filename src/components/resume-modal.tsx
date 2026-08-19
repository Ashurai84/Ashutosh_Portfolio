import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, CheckCircle2, FileText, Sparkles, Eye, ArrowDown } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

type ResumeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDownload = () => {
    setIsDownloading(true);
    setDownloadSuccess(false);
    setProgress(0);

    // Simulate smooth, high-tech downloading progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          setDownloadSuccess(true);

          // Trigger actual download of user's Ashutosh.pdf
          const link = document.createElement("a");
          link.href = PERSONAL_INFO.resumeUrl;
          link.download = "Ashutosh_Pankaj_Rai_Resume.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          setTimeout(() => setDownloadSuccess(false), 4000);
          return 100;
        }
        return prev + 25;
      });
    }, 120);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0b1120] border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden text-white z-10"
          >
            {/* Header Controls */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-slate-800 bg-[#070b16]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <span>{PERSONAL_INFO.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono">
                      Official Resume
                    </span>
                  </h2>
                  <p className="text-xs text-slate-400">Founder @ PostAura · Full-Stack & AI Engineer</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Download Button */}
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-cyan-500 text-white shadow-lg shadow-pink-500/20 hover:scale-105 active:scale-95 transition disabled:opacity-50"
                >
                  {isDownloading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Preparing {progress}%...</span>
                    </>
                  ) : downloadSuccess ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                      <span>Downloaded! 🚀</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Download Resume (PDF)</span>
                    </>
                  )}
                </button>

                {/* Open In New Tab */}
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition"
                  title="Open PDF in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Close */}
                <button
                  onClick={onClose}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Downloading Progress Banner */}
            <AnimatePresence>
              {isDownloading && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-gradient-to-r from-cyan-950/80 via-purple-950/80 to-pink-950/80 border-b border-cyan-500/30 px-6 py-3"
                >
                  <div className="flex items-center justify-between text-xs text-cyan-300 font-mono mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <ArrowDown className="w-3.5 h-3.5 animate-bounce text-pink-400" /> Downloading Ashutosh.pdf...
                    </span>
                    <span className="font-bold">{progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500"
                      style={{ width: `${progress}%` }}
                      transition={{ ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* PDF Viewer Frame */}
            <div className="flex-1 w-full bg-[#050814] relative overflow-hidden min-h-[60vh]">
              <iframe
                src={`${PERSONAL_INFO.resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                title="Ashutosh Pankaj Rai Resume"
                className="w-full h-full min-h-[60vh] border-0"
              />
            </div>

            {/* Bottom Footer Actions */}
            <div className="px-6 py-3.5 bg-[#070b16] border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Verified Builder & Startup Founder Resume</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-300 hover:text-white transition flex items-center gap-1 font-semibold"
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
