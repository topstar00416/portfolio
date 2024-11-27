import React from 'react';
import { Container } from './ui/Container';
import { ProjectCard } from './ProjectCard';
import { GradientText } from './ui/GradientText';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <GradientText>Projects</GradientText>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my work in video streaming, demonstrating scalability, performance, and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}