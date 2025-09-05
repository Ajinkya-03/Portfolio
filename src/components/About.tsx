import React from 'react';
import { Code, Palette, Laptop, Globe } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const aboutRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();

  const skills = [
    { category: 'Languages', items: ['Python', 'C++', 'JavaScript', 'Java'] },
    { category: 'Frontend', items: ['React', 'TypeScript', 'HTML5', 'CSS3'] },
    { category: 'Styling', items: ['Tailwind CSS', 'Bootstrap', 'CSS Modules'] },
    { category: 'Tools', items: ['Git','Github', 'Vite', 'npm', 'VS Code','Versel', 'Firebase'] },
    { category: 'Design', items: ['Figma','UI/UX','Responsive Design'] }
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices and modern standards.'
    },
    {
      icon: Palette,
      title: 'Design-Focused',
      description: 'Creating beautiful, intuitive interfaces that provide excellent user experiences.'
    },
    {
      icon: Laptop,
      title: 'Websites',
      description: 'Building responsive applications that work seamlessly across all devices.'
    },
    {
      icon: Globe,
      title: 'Modern Tech',
      description: 'Staying updated with the latest frontend technologies and industry trends.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate frontend developer with hands-on experience in building modern web applications. 
            I love turning creative designs into functional, user-friendly websites using latest technologies.
          </p>
        </div>

        <div ref={aboutRef} className="scroll-animate grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">What I Do</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I specialize in creating responsive, accessible web applications with a focus on user experience 
              and performance. My journey started with a curiosity for how websites work, and it has evolved 
              into a passion for crafting digital experiences that users love.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Through my internship and personal projects, I've gained valuable experience in the full 
              frontend development lifecycle, from initial design concepts to deployment and optimization.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <highlight.icon size={32} className="text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{highlight.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={skillsRef} className="scroll-animate">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-shadow">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-center">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full border border-blue-200 dark:border-blue-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;