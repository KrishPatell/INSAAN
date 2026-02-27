import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { H2Navbar } from './components/home2/H2Navbar';
import { H2Hero } from './components/home2/H2Hero';
import { H2Marquee } from './components/home2/H2Marquee';
import { H2About } from './components/home2/H2About';
import { H2Services } from './components/home2/H2Services';
import { H2Companies } from './components/home2/H2Companies';
import { H2Features } from './components/home2/H2Features';
import { H2CTA } from './components/home2/H2CTA';
import { H2Footer } from './components/home2/H2Footer';
import { ContactModal } from './components/ContactModal';
import { SiteNavbar } from './components/shared/SiteNavbar';
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
    <H2Navbar onContactClick={onContactClick} />
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

/* ────────────── INNER PAGE WRAPPER ────────────── */

const InnerPage: React.FC<{
  children: (onContactClick: () => void) => React.ReactNode;
  onContactClick: () => void;
}> = ({ children, onContactClick }) => (
  <>
    <SiteNavbar onContactClick={onContactClick} />
    {children(onContactClick)}
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
        {/* Home — uses original H2Navbar */}
        <Route path="/" element={<HomePage onContactClick={openModal} />} />

        {/* Inner pages — use SiteNavbar with React Router links */}
        <Route
          path="/about"
          element={
            <InnerPage onContactClick={openModal}>
              {(oc) => <AboutPage onContactClick={oc} />}
            </InnerPage>
          }
        />
        <Route
          path="/companies"
          element={
            <InnerPage onContactClick={openModal}>
              {(oc) => <CompaniesPage onContactClick={oc} />}
            </InnerPage>
          }
        />
        <Route
          path="/solutions"
          element={
            <InnerPage onContactClick={openModal}>
              {(oc) => <SolutionsPage onContactClick={oc} />}
            </InnerPage>
          }
        />
        <Route
          path="/contact"
          element={
            <InnerPage onContactClick={openModal}>
              {(oc) => <ContactPage onContactClick={oc} />}
            </InnerPage>
          }
        />
      </Routes>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}

export default App;
