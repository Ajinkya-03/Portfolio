import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, Book } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Education = () => {
  const educationRef = useScrollAnimation();
  const certificationsRef = useScrollAnimation();
  const achievementsRef = useScrollAnimation();

  const education = [
    {
      degree: 'Bachelor of Computer Engineering',
      institution: 'MET Bhujbal Knowledge City',
      location: 'Nashik , Maharashtra',
      period: '2022 - 2026',
      gpa: '7.4/10',
      status: 'UG',
      description: 'Focused on web development, software engineering, and computer systems. Active member of the Student Association of Computer(SAC).',
      coursework: [
        'Web Development',
        'Data Structures & Algorithms',
        'Software Engineering',
        'Database Management',
        'Computer Networks',
        'Agile Methodology',
      ]
    }
  ];

  const certifications = [
    {
      title: 'React Developer Certification',
      issuer: 'Scaler',
      date: 'May 2025',
      credentialId: 'Scaler-2025',
      skills: ['React', 'JSX', 'Hooks', 'State Management','APIs']
    },
    {
      title: 'GIT-GITHUB',
      issuer: 'Mircosft Learn',
      date: '2024',
      credentialId: 'FCC-JS-2023',
      skills: ['Git','Github','Bash','Push','Pull','PR']
    },
    {
      title: 'Infosys Springboard',
      issuer: 'Infosys',
      date: '2023',
      credentialId: 'FCC-RWD-2023',
      skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive Design']
    }
  ];

  const achievements = [
    {
      title: 'Participant for HackOctober Fest',
      description: 'Achieved and Gained hands on experience for open-world collaboration for hackathon fest',
      period: '2024'
    },
    {
      title: 'Arrdino certificate',
      description: 'First place in University Tech Hackathon for developing an innovative web application',
      period: 'March 2024'
    },
    {
      title: 'Technical Core Committee Member (SAC)',
      description: 'Elected as the core committee member for the technical team to manage all the technical workshops and events ',
      period: '2024 - 2035'
    },
    {
      title: 'Discipline Advisory Head (SAC)',
      description: 'Elected as the discipline advisory head to take the charge of the discipline of the crowd and students during events',
      period: '2025 - Present'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            My academic background and continuous learning journey in computer science 
            and web development.
          </p>
        </div>

        {/* Formal Education */}
        <div ref={educationRef} className="scroll-animate mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Formal Education</h3>
          {education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300 hover:transform hover:scale-[1.01]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                  <div className="flex flex-col space-y-2 text-gray-600 dark:text-gray-300">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">{edu.institution}</span>
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium mb-2">
                    {edu.status}
                  </span>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">GPA: {edu.gpa}</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{edu.description}</p>

              <div>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Relevant Coursework</h5>
                <div className="grid md:grid-cols-3 gap-2">
                  {edu.coursework.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 hover:border-blue-200 dark:hover:border-blue-600 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div ref={certificationsRef} className="scroll-animate mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center space-x-3 mb-4">
                  <Award size={24} className="text-yellow-500 dark:text-yellow-400" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{cert.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Issued: {cert.date}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">ID: {cert.credentialId}</p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full border border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div ref={achievementsRef} className="scroll-animate">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Achievements & Leadership</h3>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300 hover:transform hover:scale-[1.01]">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <GraduationCap size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{achievement.title}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">{achievement.period}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;