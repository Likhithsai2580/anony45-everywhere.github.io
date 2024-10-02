'use client';

import React from 'react';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md py-4 fixed top-0 left-0 right-0 z-10">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition duration-300">
          Likhith Sai
        </Link>
        <ul className="flex space-x-6 items-center">
          <li><Link href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Projects</Link></li>
          <li><Link href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Skills</Link></li>
          <li><Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Contact</Link></li>
          <li><a href="/resume.pdf" className="bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-100 px-4 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300">Resume</a></li>
          <li><DarkModeToggle /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;