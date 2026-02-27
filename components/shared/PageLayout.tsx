import React, { useState } from 'react';
import { SiteNavbar } from './SiteNavbar';
import { SiteFooter } from './SiteFooter';
import { ContactModal } from '../ContactModal';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-[#F9F8F2] via-[#F5F6E8] to-[#F3F4E4] font-sans selection:bg-[#2CD5C4] selection:text-white">
      <SiteNavbar onContactClick={openModal} />
      {typeof children === 'function'
        ? (children as (onContactClick: () => void) => React.ReactNode)(openModal)
        : children}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
};
