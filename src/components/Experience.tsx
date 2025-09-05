import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const experienceRef = useScrollAnimation();

  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'Stacklab Pvt',
      location: 'Pune',
      period: 'Dec 2024 - Jan 2024',
      type: 'Internship',
      description: [
        'Developed responsive web application using React.js, and styled it with tailwindCSS making it look attractive.',
        'Collaborated with design team to implementing UI components using figma.',
        'Contributed for bug-fixing and checking the cross-browser compatibility.'
      ],
      technologies: ['React', 'MongoDB', 'Express', 'Git-Github', 'Figma','Node']
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            My professional journey in frontend development, building real-world applications 
            and contributing to meaningful projects.
          </p>
        </div>

        <div ref={experienceRef} className="scroll-animate space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                  <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">{exp.company}</span>
                    <span className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mb-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    exp.type === 'Internship' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
                      : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                  }`}>
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 hover:border-blue-200 dark:hover:border-blue-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;