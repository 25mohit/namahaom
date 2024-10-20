"use client";
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  
  return (
    <nav className="flex nav select-none">
      <div className="pc-nav w-full flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/"><i>Task Management</i></Link>
        </div>

        {/* Center Menu */}
        <div className="hidden md:flex space-x-8 text-md text-blue-600">
          <span className="cursor-pointer hover:text-gray-400 transition duration-300">Home</span>
          <span className="cursor-pointer hover:text-gray-400 transition duration-300">About</span>
          <span className="cursor-pointer hover:text-gray-400 transition duration-300">Services</span>
          <span className="cursor-pointer hover:text-gray-400 transition duration-300">Contact</span>
          <span className="cursor-pointer hover:text-gray-400 transition duration-300"><b>Logout</b></span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`mobile-nav fixed z-10 top-0 right-0 h-full w-64 text-gray-700 p-6 transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <button onClick={toggleMenu} className="text-red-500">
          <FiX size={24} />
        </button>
        <div className="mt-8 space-y-6 flex flex-col">
          <span onClick={toggleMenu} className="block text-xl transition duration-300">
            Home
          </span>
          <span onClick={toggleMenu} className="block text-xl transition duration-300">
            About
          </span>
          <span onClick={toggleMenu} className="block text-xl transition duration-300">
            Services
          </span>
          <span onClick={toggleMenu} className="block text-xl transition duration-300">
            Contact
          </span>
          <span onClick={toggleMenu} className='block text-xl transition duration-300'>Logout</span>
        </div>
      </div>
    </nav>
  );
}