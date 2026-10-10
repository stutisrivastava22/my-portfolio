"use client";

import { useState } from "react";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-[#F8FAFC] selection:bg-[#6366F1]/30 selection:text-white">
      {/* Background Animated Gradient Orbs & Sparkles */}
      <BackgroundEffects />

      {/* Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col gap-6 md:gap-10">
        {/* 01 Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 02 About Me Section */}
        <About onOpenResume={() => setIsResumeOpen(true)} />

        {/* 03 Skills Section */}
        <Skills />

        {/* 04 Projects Centerpiece with Expandable Architecture Case Studies */}
        <Projects />

        {/* 05 Experience & Achievements */}
        <Experience />

        {/* 06 Get In Touch */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Printable / Viewable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
