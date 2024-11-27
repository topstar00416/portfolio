import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

export function ProjectCard({ title, description, image, tech, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <a 
            href={liveUrl}
            className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Live Demo
          </a>
          <a 
            href={githubUrl}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="h-4 w-4 mr-2" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}