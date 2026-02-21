import React, { useState } from 'react';
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

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-[#F9F8F2] via-[#F5F6E8] to-[#F3F4E4] font-sans selection:bg-[#2CD5C4] selection:text-white">
      <H2Navbar onContactClick={openModal} />
      <H2Hero onContactClick={openModal} />
      <H2Marquee />
      <H2About onContactClick={openModal} />
      <H2Services />
      <H2Companies />
      <H2Features />
      <H2CTA onContactClick={openModal} />
      <H2Footer onContactClick={openModal} />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}

export default App;
