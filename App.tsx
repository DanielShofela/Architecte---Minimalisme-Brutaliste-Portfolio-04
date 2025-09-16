import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (!anchor) return;

      const href = anchor.getAttribute('href');
      
      if (href === '#') {
        event.preventDefault();
        return;
      }

      if (href && href.startsWith('#')) {
        event.preventDefault();
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);
        const headerElement = document.querySelector('header');

        if (targetElement && headerElement) {
          const headerHeight = headerElement.offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          
          window.scrollTo({
            top: targetPosition - headerHeight,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="bg-[#F5F5F3] text-zinc-900 antialiased relative">
      <div className="fixed top-0 left-0 w-full h-full border-zinc-300/40 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 -z-10 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-zinc-300/40 h-full"></div>
        ))}
      </div>
      <Header />
      <main className="px-4 md:px-8 lg:px-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;