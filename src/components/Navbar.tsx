'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoImg from '@/assets/om.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="lg:w-[90%] mx-auto flex items-center justify-between bg-gray-800 text-white px-4 sticky top-0 z-20 border-b border-gray-700">
      {/* Logo Section */}
      <div className="flex items-center">
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md hover:bg-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <Link href="/" className="ml-4">
          <Image src={logoImg} alt="Logo" width={100} height={100} />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-6">
        <li className="hover:text-gray-300">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href="/about">About Us</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href="/blogs">Blogs</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>

      {/* Login & Register Buttons */}
      <div className="hidden lg:flex space-x-4">
        <Link
          href="/login"
          className="border border-white text-white px-4 py-2 rounded-lg bg-transparent hover:bg-white hover:text-gray-800 transition duration-200"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="border border-white text-white px-4 py-2 rounded-lg bg-transparent hover:bg-white hover:text-gray-800 transition duration-200"
        >
          Register
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 z-10 w-full bg-gray-900 text-white p-4 lg:hidden">
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link href="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link href="/about" onClick={toggleMenu}>About Us</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link href="/blogs" onClick={toggleMenu}>Blogs</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link href="/support" onClick={toggleMenu}>Support</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link href="/login" onClick={toggleMenu}>Login</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link href="/register" onClick={toggleMenu}>Register</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
