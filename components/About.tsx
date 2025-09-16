import React from 'react';

const About: React.FC = () => {
  return (
    <section id="a-propos" className="py-24 md:py-32 lg:py-48 border-t border-zinc-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <h2 className="font-display text-4xl md:text-5xl uppercase">
            À Propos
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-6 text-lg md:text-xl text-zinc-700 leading-relaxed">
          <p>
            Nous croyons en une architecture qui transcende le simple bâtiment pour devenir une expérience. Notre approche est ancrée dans le minimalisme brutaliste, où la matérialité brute, la structure exposée et la géométrie pure sont les fondements de chaque projet.
          </p>
          <p>
            Chaque ligne est intentionnelle, chaque volume est sculpté par la lumière et l'ombre. Nous créons des espaces qui sont à la fois imposants et intimes, fonctionnels et poétiques, conçus pour durer et pour inspirer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;