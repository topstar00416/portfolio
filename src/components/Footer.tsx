import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Container } from './ui/Container';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
              Kevin Miller
            </h3>
            <p className="text-gray-400 max-w-md">
              Senior Video Streaming Developer specializing in scalable streaming solutions.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/kevinmiller" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/kevinmiller"
              target="_blank"
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://twitter.com/kevinmiller"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Kevin Miller. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}