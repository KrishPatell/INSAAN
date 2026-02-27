import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SiteNavbar } from './components/shared/SiteNavbar';
import { H2Hero } from './components/home2/H2Hero';
import { H2Marquee } from './components/home2/H2Marquee';
import { H2About } from './components/home2/H2About';
import { H2Services } from './components/home2/H2Services';
import { H2Companies } from './components/home2/H2Companies';
import { H2Features } from './components/home2/H2Features';
import { H2CTA } from './components/home2/H2CTA';
import { H2Footer } from './components/home2/H2Footer';
import { ContactModal } from './components/ContactModal';
import { ScrollToTop } from './components/shared/ScrollToTop';
import { SEOHead } from './components/shared/SEOHead';
import { AboutPage } from './pages/AboutPage';
import { CompaniesPage } from './pages/CompaniesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ContactPage } from './pages/ContactPage';

/* ────────────── HOME PAGE (V2 design) ────────────── */

const HomePage: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => (
  <>
    <SEOHead
      title="Insaan Global — Workforce Solutions | Healthcare, Engineering, Construction & Aerospace Staffing"
      description="Insaan Global provides workforce solutions across healthcare, engineering, construction, energy, and aerospace. Connecting high-quality talent with companies worldwide."
      path="/"
      keywords="workforce solutions, staffing, recruitment, healthcare staffing, engineering staffing, construction staffing, aerospace staffing, energy staffing, talent acquisition, workforce management, Insaan Global"
    />
    <SiteNavbar onContactClick={onContactClick} />
    <H2Hero onContactClick={onContactClick} />
    <H2Marquee />
    <H2About onContactClick={onContactClick} />
    <H2Features />
    <H2Companies />
    <H2Services />
    <H2CTA onContactClick={onContactClick} />
    <H2Footer onContactClick={onContactClick} />
  </>
);

/* ────────────── APP ────────────── */

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-[#F9F8F2] via-[#F5F6E8] to-[#F3F4E4] font-sans selection:bg-[#2CD5C4] selection:text-white">
      <ScrollToTop />
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage onContactClick={openModal} />} />

        {/* About */}
        <Route
          path="/about"
          element={
            <>
              <SiteNavbar onContactClick={openModal} />
              <AboutPage onContactClick={openModal} />
            </>
          }
        />

        {/* Companies */}
        <Route
          path="/companies"
          element={
            <>
              <SiteNavbar onContactClick={openModal} />
              <CompaniesPage onContactClick={openModal} />
            </>
          }
        />

        {/* Solutions */}
        <Route
          path="/solutions"
          element={
            <>
              <SiteNavbar onContactClick={openModal} />
              <SolutionsPage onContactClick={openModal} />
            </>
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <>
              <SiteNavbar onContactClick={openModal} />
              <ContactPage onContactClick={openModal} />
            </>
          }
        />
      </Routes>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}

export default App;
