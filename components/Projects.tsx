import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projets" className="py-24 md:py-32 border-t border-zinc-300">
      <h2 className="font-display text-4xl md:text-5xl uppercase mb-16">
        Projets Récents
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;