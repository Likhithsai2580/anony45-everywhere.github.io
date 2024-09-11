const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">YouTube Milestone</h3>
            <p className="text-gray-600 dark:text-gray-300">Reached 1000+ subscribers on my YouTube channel, sharing valuable content on cybersecurity and programming.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">CTF Competitions</h3>
            <p className="text-gray-600 dark:text-gray-300">Participated in various Capture The Flag competitions, honing my cybersecurity skills and problem-solving abilities.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Open Source Contributions</h3>
            <p className="text-gray-600 dark:text-gray-300">Contributed to several open-source projects, improving my coding skills and collaborating with developers worldwide.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;