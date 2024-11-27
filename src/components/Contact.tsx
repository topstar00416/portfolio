import React from 'react';
import { Mail, MessageSquare, Send, Sparkles } from 'lucide-react';
import { Container } from './ui/Container';
import { GradientText } from './ui/GradientText';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Let's Build Your Next <GradientText>Streaming Solution</GradientText>
            </h2>
            <p className="text-xl text-gray-600">
              Looking to develop a video streaming platform? Let's discuss how we can bring your vision to life.
            </p>
          </div>
          
          <form className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={4}
                placeholder="Tell me about your streaming project..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg flex items-center justify-center transform hover:scale-105 transition-all duration-200"
            >
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
          
          <div className="mt-12 flex justify-center space-x-8">
            <a href="mailto:kevin.miller@example.com" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
              <Mail className="h-5 w-5 mr-2" />
              Email Me
            </a>
            <a href="#" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
              <MessageSquare className="h-5 w-5 mr-2" />
              Let's Chat
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}