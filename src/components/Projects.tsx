import React from 'react';
import { ExternalLink, Github, Globe, Code } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const projectsRef = useScrollAnimation();

  const projects = [
    {
      title: 'Go-RSVP',
      description: 'An event management platform for organizing, joining and connecting with possible attendees !',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'MongoDB', 'Tailwind CSS', 'Express', 'Node','Git-Github'],
      liveUrl: 'https://go-rsvp.vercel.app/',
      githubUrl: 'https://github.com/Ajinkya-03/GoRSVP',
      features: ['Event creation', 'RSVP system', 'User authentication', 'Connect with attendees']
    },
    {
      title: 'MoneyVue',
      description: 'It is a personal finance tracker website where user can track his/her personal finances and keep a record by donwloading in an CSV file',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'CSS3', 'Node', 'Chartjs', 'Firebase','Git-Github'],
      liveUrl: 'https://moneyvue-6f9a8.web.app/',
      githubUrl: 'https://github.com/Ajinkya-03/MoneyVeu',
      features: ['Finance tracking', 'CSV export', 'Charts', 'Authentication']
    },
    {
      title: 'FilmByte',
      description: 'A ready to go platform for users to keep track all the latest movies and valt them .',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TailwindCSS', 'TMDB API'],
      liveUrl: 'https://film-byte.vercel.app/',
      githubUrl: 'https://github.com/Ajinkya-03/FilmByte',
      features: ['Drag & drop interface', 'Real-time collaboration', 'Project tracking', 'Team management']
    },
    {
      title: 'RideX',
      description: 'A responsive car rental website showcasing modern cars for rental using secure login system',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML' , 'CSS', 'JS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      features: ['Dynamic UI', 'Secure Login', 'Responsive']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white/40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating my skills in building 
            modern web applications with cutting-edge technologies.
          </p>
        </div>

        <div ref={projectsRef} className="scroll-animate grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg shadow-sm border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-gray-900/20 transition-all duration-300 group hover:transform hover:scale-[1.02]">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                {project.features && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full border border-blue-700 hover:bg-blue-900/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm font-medium hover:transform hover:scale-105"
                  >
                    <Globe size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-300 text-sm font-medium hover:transform hover:scale-105"
                  >
                    <Code size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;