const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@hackersareherewhereareyou',
      icon: 'fab fa-youtube',
      color: 'bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800',
      description: 'Watch tutorials and cybersecurity content'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Likhithsai2580',
      icon: 'fab fa-github',
      color: 'bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600',
      description: 'Check out my open-source projects and contributions'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/LuckyMod25',
      icon: 'fab fa-twitter',
      color: 'bg-blue-400 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600',
      description: 'Follow me for tech updates and insights'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/seemala-likith-sai-47570a307/',
      icon: 'fab fa-linkedin',
      color: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800',
      description: 'Connect with me professionally'
    }
  ];

  return (
    <section id="social" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">Connect with Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialLinks.map((link, index) => (
            <div key={index} className="flex flex-col items-center">
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${link.color} text-white rounded-full p-4 mb-4 transition duration-300 transform hover:scale-110`}
              >
                <i className={`${link.icon} text-3xl`}></i>
              </a>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{link.name}</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">{link.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;