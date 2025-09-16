import React from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="group transition-colors duration-300">
    {children}
    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#B8860B]"></span>
  </a>
);

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full p-4 md:p-8 lg:p-16 flex justify-between items-center z-50 mix-blend-difference">
      <div className="font-display text-2xl text-white">
        <a href="#">A.</a>
      </div>
      <nav className="hidden md:flex items-center space-x-8 text-sm uppercase font-bold tracking-widest text-white">
        <NavLink href="#a-propos">À Propos</NavLink>
        <NavLink href="#projets">Projets</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;
