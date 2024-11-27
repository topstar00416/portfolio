import React from 'react';
import { Video, Wifi, Gauge, Sparkles } from 'lucide-react';
import { Container } from './ui/Container';
import { GradientText } from './ui/GradientText';

const skills = [
  {
    icon: Video,
    title: 'Video Processing',
    description: 'Expert in FFmpeg, transcoding, and adaptive bitrate streaming technologies.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Wifi,
    title: 'Live Streaming',
    description: 'Specialized in WebRTC, HLS, and DASH protocols for real-time video delivery.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Gauge,
    title: 'Performance',
    description: 'Optimizing streaming solutions for scale, latency, and quality of service.',
    gradient: 'from-amber-500 to-orange-500'
  }
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            <span>Expertise</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Streaming Solutions <GradientText>Expert</GradientText>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            With over a decade of experience in video streaming technologies, I specialize in building scalable and efficient streaming solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="relative group p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${skill.gradient} mb-6 text-white transform group-hover:scale-110 transition-transform duration-200`}>
                <skill.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </Container>
      
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50" />
    </section>
  );
}