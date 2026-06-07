"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname(); // 🚀 Active route ট্র্যাকিংয়ের জন্য
  
  // ডামি ইউজার স্টেট
  const user = null; 

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // 🚀 Active Link চেকার ফাংশন
  const isActive = (path) => pathname === path;

  // মোবাইল মেনু ওপেন থাকলে পেজের ব্যাকগ্রাউন্ড স্ক্রল বন্ধ করার জন্য
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo + Site Name */}
          <Link href="/" className="flex items-center  group">
            
    <Image
      src="https://res.cloudinary.com/dsga4gyw9/image/upload/v1780814979/Adobe_Express_-_file_xf11ly.png"
      alt="Logo"
      width={40}
      height={40}
      className="rounded-full"
    />
 
            <span className="font-bold text-2xl text-gray-800 tracking-wide">
               PlayReserve
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`font-medium transition-all duration-300 ${isActive("/") ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-600 hover:text-blue-600"}`}
            >
              Home
            </Link>
            <Link 
              href="/facilities" 
              className={`font-medium transition-all duration-300 ${isActive("/facilities") ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-600 hover:text-blue-600"}`}
            >
              All Facilities
            </Link>
            
            {user ? (
              <div className="relative">
                <button 
                  onClick={toggleDropdown}
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 focus:outline-none transition-transform hover:scale-110"
                >
                  <FaUserCircle className="text-[28px]" />
                </button>

                {/* Profile Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-lg shadow-xl py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100 mb-1">
                      <p className="text-sm text-gray-500">Signed in as</p>
                      <p className="text-sm font-medium text-gray-900 truncate">user@example.com</p>
                    </div>
                    <Link href="/my-bookings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">My Bookings</Link>
                    <Link href="/add-facility" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Add Facility</Link>
                    <Link href="/manage-facilities" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Manage My Facilities</Link>
                    <div className="border-t border-gray-100 mt-1"></div>
                    <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/login" className="text-blue-600 font-bold hover:text-blue-800 transition-colors">
                  Login
                </Link>
                <Link href="/register" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none transition-transform hover:scale-110">
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* 🚀 Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} 
        onClick={toggleMenu}
      ></div>

      {/* 🚀 Mobile Sidebar Menu */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <span className="font-bold text-xl text-gray-800">Menu</span>
          <button onClick={toggleMenu} className="text-gray-500 hover:text-red-500 transition-colors bg-gray-100 p-2 rounded-full">
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col p-6 space-y-4 overflow-y-auto flex-grow">
          <Link href="/" onClick={toggleMenu} className={`text-lg font-medium transition-colors ${isActive("/") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}>
            Home
          </Link>
          <Link href="/facilities" onClick={toggleMenu} className={`text-lg font-medium transition-colors ${isActive("/facilities") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}>
            All Facilities
          </Link>
          
          {user ? (
            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col space-y-4">
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">My Account</span>
              <Link href="/my-bookings" onClick={toggleMenu} className="text-base font-medium text-gray-700 hover:text-blue-600">My Bookings</Link>
              <Link href="/add-facility" onClick={toggleMenu} className="text-base font-medium text-gray-700 hover:text-blue-600">Add Facility</Link>
              <Link href="/manage-facilities" onClick={toggleMenu} className="text-base font-medium text-gray-700 hover:text-blue-600">Manage My Facilities</Link>
              <button className="text-left text-base font-medium text-red-600 hover:text-red-700 mt-4 pt-4 border-t border-gray-100">Logout</button>
            </div>
          ) : (
            <div className="flex flex-col space-y-3 mt-8 pt-8 border-t border-gray-100">
              <Link href="/login" onClick={toggleMenu} className="w-full text-center border-2 border-blue-600 text-blue-600 px-5 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                Login
              </Link>
              <Link href="/register" onClick={toggleMenu} className="w-full text-center bg-blue-600 text-white px-5 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}