import React from 'react';
import Image from 'next/image';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Python', icon: 'devicon-python-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Next.js', icon: '/next.svg' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'Cybersecurity', icon: '/cybersecurity-icon.svg' },
    { name: 'Web Development', icon: 'devicon-html5-plain colored' },
    { name: 'Game Development', icon: '/game-development-icon.svg' },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {skill.icon.startsWith('/') || skill.icon.startsWith('http') ? (
                <Image src={skill.icon} alt={skill.name} width={64} height={64} className="mb-4 dark:invert" />
              ) : (
                <i className={`${skill.icon} text-6xl mb-4`}></i>
              )}
              <span className="text-lg font-semibold text-gray-700 dark:text-gray-300 text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;