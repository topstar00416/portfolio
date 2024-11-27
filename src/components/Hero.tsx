import React from 'react';
import { Video, ArrowRight } from 'lucide-react';
import { Container } from './ui/Container';
import { GradientText } from './ui/GradientText';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 overflow-hidden">
      <Container>
        <div className="relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 mb-8">
              <Video className="h-4 w-4 mr-2" />
              <span>Senior Video Streaming Developer</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
              Building the Future of <GradientText>Video Streaming</GradientText>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Hi, I'm Kevin Miller. I specialize in developing high-performance video streaming solutions that scale to millions of users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
              >
                View My Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 rounded-full text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transform hover:scale-105 transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-white to-purple-50 blur-3xl opacity-75" />
        </div>
      </Container>
    </section>
  );
}