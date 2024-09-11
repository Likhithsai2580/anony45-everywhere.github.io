const AboutMe: React.FC = () => {
    return (
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Hi, I'm Likhith Sai, a passionate developer and cybersecurity enthusiast. I love creating web applications, exploring new technologies, and sharing my knowledge through my YouTube channel.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              My journey in tech has led me to explore various areas including web development, game development, and cybersecurity. I'm always eager to learn and take on new challenges.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me creating content for my YouTube channel, participating in CTF competitions, or contributing to open-source projects.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;