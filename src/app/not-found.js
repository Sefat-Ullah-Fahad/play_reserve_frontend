
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      {/* Big 404 heading */}
      <h1 className="text-7xl font-extrabold mb-4 animate-bounce">404</h1>

      {/* Subtitle */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-400 mb-8 text-center max-w-md">
        Sorry, we couldn’t find the page you’re looking for. Maybe it’s under construction or booked already! 🏟️
      </p>

      {/* Home Button */}
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>

      {/* Simple Animated Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white opacity-20 rounded-full animate-bounce"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}