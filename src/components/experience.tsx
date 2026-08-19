import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { EXPERIENCES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { ExternalLink, Briefcase, Sparkles, Building2 } from "lucide-react";
import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
  experience: (typeof EXPERIENCES)[number];
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#0c1329",
      color: "#fff",
      border: "1px solid rgba(0, 240, 255, 0.2)",
      borderRadius: "16px",
      boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
    }}
    contentArrowStyle={{ borderRight: "7px solid rgba(0, 240, 255, 0.3)" }}
    date={experience.date}
    iconStyle={{
      background: experience.iconBg,
      border: "2px solid #00f0ff",
      boxShadow: "0 0 15px rgba(0, 240, 255, 0.4)",
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[55%] h-[55%] object-contain"
        />
      </div>
    }
  >
    {/* Header */}
    <div>
      <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold">
          {experience.badge}
        </span>
        <span className="text-xs text-slate-400 font-mono">{experience.type}</span>
      </div>

      <h3 className="text-white text-[20px] font-extrabold tracking-wide">{experience.title}</h3>
      <p className="text-cyan-400 text-[14px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    {/* Bullet Points */}
    <ul className="mt-4 list-disc ml-5 space-y-1.5">
      {experience.points.map((point, i) => (
        <li
          key={`experience-point-${i}`}
          className="text-slate-300 text-[13px] pl-1 leading-relaxed"
        >
          {point}
        </li>
      ))}
    </ul>

    {/* Optional Link Button */}
    {experience.link && (
      <div className="mt-4 pt-3 border-t border-slate-800/80">
        <a
          href={experience.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-white transition"
        >
          <span>
            {experience.company_name.includes("PostAura")
              ? "Visit PostAura →"
              : experience.company_name.includes("ASR LABS")
              ? "Explore ASR LABS →"
              : "View Details →"}
          </span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    )}
  </VerticalTimelineElement>
);

export const Experience: React.FC = () => {
  return (
    <SectionWrapper idName="experience">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">
            <Briefcase className="w-4 h-4" /> Career & Milestones
          </div>
          <h2 className={styles.sectionHeadText}>Experience & Timeline.</h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2">
            A chronological timeline of products founded, hackathons conquered, engineering labs maintained, and academic pursuits.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mt-12 flex flex-col">
          <VerticalTimeline>
            {EXPERIENCES.map((experience, i) => (
              <ExperienceCard key={i} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </>
    </SectionWrapper>
  );
};

export default Experience;
