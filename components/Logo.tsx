import React from 'react';
import logoImage from '../assets/logo.png';
import whiteLogoImage from '../assets/white-logo.png';

interface LogoProps {
  variant?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  return (
    <img 
      src={variant === 'light' ? whiteLogoImage : logoImage} 
      alt="INSAAN global." 
      className="h-12 md:h-14 object-contain"
    />
  );
};