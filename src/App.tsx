import React, { useState } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { SolutionsSection } from './sections/SolutionsSection';
import { GitHubAnalyzerSection } from './sections/GitHubAnalyzerSection';
import { ReadmeBuilderSection } from './sections/ReadmeBuilderSection';
import { WorkflowSection } from './sections/WorkflowSection';
import { SkillsSection } from './sections/SkillsSection';
import { TimelineAndCredentialsSection } from './sections/TimelineAndCredentialsSection';
import { FaqSection } from './sections/FaqSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [username, setUsername] = useState('devnoumannaseer-ctrl');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleAnalyze = (user: string) => {
    setUsername(user);
    const el = document.getElementById('analyzer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenReadmeBuilder = () => {
    const el = document.getElementById('readme-builder');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0b0d0f] text-white selection:bg-[#ff7a1a]/30 selection:text-[#ffb37f]">
      {/* GitHance Ambient Background & Canvas Grid */}
      <AnimatedBackground />

      {/* Smooth Cursor */}
      <CustomCursor />

      {/* GitHance Floating Navbar */}
      <Navbar
        onOpenAnalyzer={() => {
          const el = document.getElementById('analyzer');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenReadmeBuilder={handleOpenReadmeBuilder}
      />

      {/* Main Workspace Sections */}
      <main id="main-content" className="relative z-10 space-y-16 sm:space-y-24">
        {/* 1. Hero Section with GitHance Signature Form & Card */}
        <HeroSection
          username={username}
          onUsernameChange={setUsername}
          onAnalyze={handleAnalyze}
          onOpenReadmeBuilder={handleOpenReadmeBuilder}
        />

        {/* 2. How It Works (Engineering Philosophy with Moving Star Indicator) */}
        <HowItWorksSection />

        {/* 3. Solutions Surface (Bento Grid Projects & Architecture Modal) */}
        <SolutionsSection />

        {/* 4. Flagship Working Tool: Real GitHub Profile & Repository Analyzer */}
        <GitHubAnalyzerSection
          currentUsername={username}
          onUsernameChange={setUsername}
          onOpenReadmeBuilderWithUser={(user) => {
            setUsername(user);
            handleOpenReadmeBuilder();
          }}
        />

        {/* 5. Flagship Working Tool: Live Interactive README & Portfolio Markdown Builder */}
        <ReadmeBuilderSection initialUsername={username} />

        {/* 6. Workflow Shipping Loop (Inputs, Workspace, Artifacts) */}
        <WorkflowSection />

        {/* 7. Skills & Computational Matrix */}
        <SkillsSection />

        {/* 8. Education Timeline & Verified Credentials */}
        <TimelineAndCredentialsSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* 9. Straight Answers Developer FAQ */}
        <FaqSection />

        {/* 10. Direct Transmission Contact Surface */}
        <ContactSection />
      </main>

      {/* GitHance Styled Footer */}
      <Footer />

      {/* Resume / Credential Preview Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
