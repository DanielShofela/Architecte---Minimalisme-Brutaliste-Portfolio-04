
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a href="#" className="group block">
      <div className="overflow-hidden bg-zinc-200">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="font-display text-2xl md:text-3xl uppercase">{project.title}</h3>
                <p className="text-zinc-500 font-semibold tracking-wider uppercase mt-1">
                    {project.category} / {project.year}
                </p>
            </div>
            <div className="w-10 h-10 border border-zinc-900 flex items-center justify-center flex-shrink-0
                            group-hover:bg-zinc-900 group-hover:text-[#F5F5F3] transition-colors duration-300">
                <ArrowIcon className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
