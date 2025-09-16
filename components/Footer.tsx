
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="px-4 md:px-8 lg:px-16 py-8 border-t border-zinc-300">
      <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Architecte Brutaliste. Tous droits réservés.
        </p>
        <div className="flex space-x-6 text-sm font-bold uppercase tracking-widest text-zinc-600">
          <a href="#" className="hover:text-[#B8860B] transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-[#B8860B] transition-colors duration-300">Behance</a>
          <a href="#" className="hover:text-[#B8860B] transition-colors duration-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
