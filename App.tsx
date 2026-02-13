import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SectionHero } from './components/SectionHero';
import { SectionLeader } from './components/SectionLeader';
import { SectionSolutions } from './components/SectionSolutions';
import { SectionDrivingChange } from './components/SectionDrivingChange';
import { SectionCTA } from './components/SectionCTA';

function App() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-[#F9F8F2] via-[#F5F6E8] to-[#F3F4E4] font-sans selection:bg-[#2CD5C4] selection:text-white">
      <Navbar />
      <SectionHero />
      <SectionLeader />
      <SectionSolutions />
      <SectionDrivingChange />
      <SectionCTA />
      <Footer />
    </main>
  );
}

export default App;
