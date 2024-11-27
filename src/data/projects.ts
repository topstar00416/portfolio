import { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: 'Apporto - Cloud Streaming Platform',
    description: 'Developed a cutting-edge cloud streaming platform enabling seamless application and desktop streaming with enterprise-grade performance.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    tech: ['Cloud Streaming', 'WebRTC', 'Kubernetes', 'React'],
    liveUrl: 'https://www.apporto.com',
    githubUrl: 'https://github.com/kevinmiller/apporto-streaming'
  },
  {
    title: 'Beejern - Video Collaboration Platform',
    description: 'Built a sophisticated video collaboration platform featuring real-time streaming, interactive features, and seamless content sharing capabilities.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800',
    tech: ['WebRTC', 'Socket.IO', 'React', 'Node.js'],
    liveUrl: 'beejern.com/index.html',
    githubUrl: 'https://github.com/kevinmiller/beejern'
  },
  {
    title: 'Futudent - Dental Video Platform',
    description: 'Led the development of a specialized video streaming platform for dental professionals, enabling high-quality clinical video capture and secure sharing.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    tech: ['WebRTC', 'DASH', 'React', 'Cloud Streaming'],
    liveUrl: 'https://futudent.com',
    githubUrl: 'https://github.com/kevinmiller/dental-streaming'
  },
  {
    title: 'Showfer - Content Delivery Platform',
    description: 'Architected a modern content delivery platform with advanced streaming capabilities and real-time analytics.',
    image: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&q=80&w=800',
    tech: ['HLS', 'Node.js', 'AWS MediaServices', 'Redis'],
    liveUrl: 'https://showfer.com',
    githubUrl: 'https://github.com/kevinmiller/showfer-platform'
  }
];