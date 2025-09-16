
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-32">
       <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#D4AF37]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
       <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#B8860B]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
       <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-zinc-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <style>{`
        @keyframes blob {
	        0% { transform: translate(0px, 0px) scale(1); }
	        33% { transform: translate(30px, -50px) scale(1.1); }
	        66% { transform: translate(-20px, 20px) scale(0.9); }
	        100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
      
      <div className="relative">
        <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[15rem] leading-none uppercase select-none">
          <span className="block">Forme</span>
          <span className="block text-right">Fonction</span>
        </h1>
        <p className="mt-8 text-right font-bold tracking-widest text-zinc-600 uppercase">
          Architecture & Espace
        </p>
      </div>
    </section>
  );
};

export default Hero;
