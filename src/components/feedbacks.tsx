import React from "react";
import { motion } from "framer-motion";
import { Quote, MessageSquareQuote, Sparkles, ExternalLink } from "lucide-react";
import { LinkedInIcon } from "./icons";
import { TESTIMONIALS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type FeedbackCardProps = {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  linkedin?: string;
};

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  linkedin,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="p-[1px] rounded-3xl bg-gradient-to-b from-slate-700/50 via-slate-800/20 to-transparent hover:from-cyan-500/50 hover:to-purple-500/30 transition duration-300 shadow-xl flex-1 min-w-[290px] max-w-md"
  >
    <div className="bg-[#0b1120] p-6 sm:p-8 rounded-3xl h-full flex flex-col justify-between border border-slate-800 relative group overflow-hidden">
      {/* Top subtle glow on hover */}
      <div className="absolute -top-10 -right-10 w-28 h-28 bg-cyan-500/10 group-hover:bg-cyan-500/20 rounded-full blur-2xl transition" />

      <div>
        <Quote className="w-8 h-8 text-cyan-400/40 mb-3 group-hover:text-cyan-400/70 transition" />
        <p className="text-slate-200 text-sm leading-relaxed italic">
          "{testimonial}"
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
        <div className="space-y-0.5">
          {linkedin ? (
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-white font-bold text-sm hover:text-cyan-300 transition inline-flex items-center gap-1.5 group/link"
            >
              <span className="group-hover/link:underline">{name}</span>
              <LinkedInIcon className="w-3.5 h-3.5 text-blue-400 opacity-80 group-hover/link:opacity-100" />
            </a>
          ) : (
            <p className="text-white font-bold text-sm">{name}</p>
          )}

          <p className="text-xs text-cyan-400 font-medium">
            {designation} · <span className="text-slate-400">{company}</span>
          </p>
        </div>

        {/* Real Profile Photo */}
        <div className="relative shrink-0">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/40 group-hover:border-cyan-400 shadow-md shadow-cyan-500/10 transition"
          />
        </div>
      </div>
    </div>
  </motion.div>
);

export const Feedbacks: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="mt-8 rounded-3xl bg-[#080d1e] p-8 sm:p-12 border border-slate-800/80 shadow-2xl relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />

        {/* Title */}
        <motion.div variants={textVariant()}>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">
            <MessageSquareQuote className="w-4 h-4" /> Peer & Mentor Feedback
          </div>
          <h2 className={styles.sectionHeadText}>Endorsements.</h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-1">
            Observations from hackathon jury members, faculty workshop organizers, and collaborators.
          </p>
        </motion.div>

        {/* Feedback Cards */}
        <div className="mt-10 flex flex-wrap gap-6 justify-center">
          {TESTIMONIALS.map((testimonial, i) => (
            <FeedbackCard key={testimonial.name} index={i} {...testimonial} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Feedbacks;
