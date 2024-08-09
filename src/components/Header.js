// src/components/Header.js
import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-2 px-4 flex justify-between items-center">
    <h1 className="text-xl">conlocate</h1>
    <div className="flex items-center space-x-4">
      <FaEnvelope className="text-2xl cursor-pointer hover:text-gray-300" />
    </div>
  </header>
  );
};

export default Header;
