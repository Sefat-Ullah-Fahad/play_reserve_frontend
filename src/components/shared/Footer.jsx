import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // New X Logo

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo and Short Info */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <span className="font-bold text-xl text-white tracking-wide">
              SportNest
            </span>
          </Link>
          <p className="text-sm text-gray-400">
            Your ultimate platform to book sports facilities effortlessly. Find, book, and play!
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-white">Contact Information</h3>
          <div className="text-sm space-y-2">
            <p>Email: support@sportnest.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Sports Avenue, City, State</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-600 transition">
              <FaXTwitter className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition">
              <FaLinkedinIn className="text-white" />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SportNest. All rights reserved.
      </div>
    </footer>
  );
}