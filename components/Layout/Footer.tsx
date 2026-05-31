import React, { useState } from 'react';
import { Instagram, Facebook, Youtube, Phone, Pin } from 'lucide-react';
import { SOCIAL_LINKS } from '../../constants';
import TermsModal from '../TermsModal';
import PrivacyModal from '../PrivacyModal';

const Footer: React.FC = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-ivory border-t border-stone-200 pt-16 pb-8">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">

          {/* Social Icons */}
          <div className="flex space-x-8 mb-8">
            <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-gold-600">
              <Instagram size={24} />
            </a>
            <a href={SOCIAL_LINKS.FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-gold-600">
              <Facebook size={24} />
            </a>
            <a href={SOCIAL_LINKS.PHONE} className="text-stone-600 hover:text-gold-600">
              <Phone size={24} />
            </a>
            <a href={SOCIAL_LINKS.PINTEREST} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-gold-600">
              <Pin size={24} />
            </a>
            <a href={SOCIAL_LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-gold-600">
              <Youtube size={24} />
            </a>
          </div>

          {/* Brand */}
          <h3 className="font-serif text-2xl text-brown-900 mb-2">
            Digital Invitation Design Studio
          </h3>
          <p className="text-stone-500 text-sm mb-8">
            Weddings • Anniversaries • Birthdays
          </p>

          {/* Legal Links */}
          <div className="flex space-x-6 text-xs text-stone-400 uppercase tracking-wider mb-8">
            <button
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-gold-600"
            >
              Terms & Conditions
            </button>

            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-gold-600"
            >
              Privacy Policy
            </button>
          </div>

          {/* Copyright */}
          <p className="text-xs text-stone-400">
            © 2026 CardCampus
          </p>
        </div>
      </footer>

      {/* Popups */}
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </>
  );
};

export default Footer;
