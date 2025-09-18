import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-black/90 text-white shadow-md">
      <div className="max-w-full px-4 py-2 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="text-lg font-semibold tracking-tight">
          kooji.ai
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-6 text-sm">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/review" className="hover:text-gray-400">
            Code Review
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
