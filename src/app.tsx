import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Achievements,
  BuildingInPublic,
  Contact,
  Experience,
  Feedbacks,
  FinalCTA,
  Footer,
  GithubSection,
  Hero,
  HeroAchievementStrip,
  Journey,
  LinkedinSection,
  Navbar,
  SocialDock,
  StarsCanvas,
  Teaching,
  Tech,
  WhatIDo,
  Works,
} from "./components";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#030712] text-white min-h-screen selection:bg-pink-500 selection:text-white font-sans overflow-x-hidden">
        {/* Floating Social Dock (Right Screen Edge) */}
        <SocialDock />

        {/* Minimal Glass Navigation */}
        <Navbar />

        {/* Cinematic Hero Section with 3D Cyber Lab */}
        <div className="relative">
          <Hero />
        </div>

        {/* 4 Floating Achievement Strip Cards Under Hero */}
        <HeroAchievementStrip />

        {/* 3D Card Deck Carousel ("What I Do") + Infinite Technology Marquee ("I Work With") */}
        <WhatIDo />

        {/* The Builder's Journey (Multi-Color Spectrum Flow) */}
        <Journey />

        {/* Currently Building in Public (PostAura) */}
        <BuildingInPublic />

        {/* About Section */}
        <About />

        {/* Experience Timeline */}
        <Experience />

        {/* Featured Projects & Case Studies */}
        <Works />

        {/* Achievements / Proof of Work Vault */}
        <Achievements />

        {/* Teaching & Mentorship */}
        <Teaching />

        {/* Technical Skills Constellation */}
        <Tech />

        {/* GitHub Telemetry Section */}
        <GithubSection />

        {/* LinkedIn Personal Brand Section */}
        <LinkedinSection />

        {/* Endorsements / Feedback */}
        <Feedbacks />

        {/* Final Call to Action */}
        <FinalCTA />

        {/* Contact Section with 3D Earth and Stars */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
