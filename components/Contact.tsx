import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 md:py-32 lg:py-48 border-t border-zinc-300 text-center">
            <h2 className="font-display text-4xl md:text-5xl uppercase mb-4">
                Discutons de votre projet
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-12">
                Nous sommes toujours à la recherche de collaborations inspirantes. Contactez-nous pour transformer votre vision en réalité.
            </p>
            <a href="mailto:contact@architecte.com" 
               className="inline-block relative text-xl md:text-2xl lg:text-3xl font-bold group text-zinc-900">
                <span>contact@architecte.com</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B8860B] transition-all duration-500 group-hover:w-full"></span>
            </a>
        </section>
    );
};

export default Contact;