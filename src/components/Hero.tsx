import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-32 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-6xl font-bold mb-4 text-gray-800 dark:text-gray-100 leading-tight">
            Likhith Sai
          </h1>
          <p className="text-3xl mb-6 text-blue-600 dark:text-blue-400 font-semibold">Web Developer & Designer</p>
          <p className="mb-8 text-gray-600 dark:text-gray-300 text-lg">
            Crafting beautiful and functional web experiences with passion and precision.
          </p>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-300 shadow-lg text-lg font-semibold"
          >
            Get in Touch
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
            <Image
              src="/images/profile.jpg"
              alt="Likhith Sai"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;