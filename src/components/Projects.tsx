'use client';

import { useEffect, useState } from 'react';

interface Project {
  name: string;
  description: string;
  html_url: string;
  language: string;
  fork: boolean;
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/Likhithsai2580/repos?per_page=100')
      .then(response => response.json())
      .then(data => {
        const nonForkedProjects = data.filter((project: Project) => !project.fork);
        setProjects(nonForkedProjects);
        setDisplayedProjects(nonForkedProjects.slice(0, 6));
      })
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const handleShowMore = () => {
    const currentLength = displayedProjects.length;
    const newProjects = projects.slice(currentLength, currentLength + 6);
    setDisplayedProjects([...displayedProjects, ...newProjects]);
    if (displayedProjects.length + 6 >= projects.length) {
      setShowMore(false);
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description || 'No description available'}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Language: {project.language || 'Not specified'}</p>
                <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold">View on GitHub</a>
              </div>
            </div>
          ))}
        </div>
        {showMore && projects.length > displayedProjects.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleShowMore}
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-300 shadow-lg text-lg font-semibold"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}