"use client"
import { BriefcaseBusinessIcon, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#1C1C1C] shadow-md lg:px-8">
        <div className="flex items-center gap-3">
          <BriefcaseBusinessIcon className="text-[#4ADE80] h-6 w-6" />
          <span className="text-xl font-semibold text-white">PostJob</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-6 ml-5 mr-5">
          <a href="#" className="text-gray-300 hover:text-white transition">
            AI Cover Letter Generator
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            Resume Template
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            Pricing
          </a>
        </div>

        <div className="hidden sm:flex items-center space-x-4">
          <button
            className="px-4 py-2 rounded-lg border border-[#3BC070] bg-black text-white font-thin hover:bg-[#2F2F2F] transition"
          >
            Sign In
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-[#4ADE80] text-black font-medium hover:bg-[#3BC070] transition"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button data-testid="menubutton"
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-[72px] bg-[#1C1C1C] p-4 sm:hidden z-40">
          <div className="flex flex-col gap-4">
            <a href="#" data-testid='AI' className="text-gray-300 hover:text-white transition">
              AI Cover Letter Generator
            </a>
            <a href="#" data-testid='resutemp' className="text-gray-300 hover:text-white transition">
              Resume Template
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Pricing
            </a>
            <button data-testid='signin'
              className="w-full px-4 py-2 rounded-lg border border-gray-600 text-white bg-transparent hover:bg-gray-800 transition"
            >
              Sign In
            </button>
            <button data-testid='getstart'
              className="w-full px-4 py-2 rounded-lg bg-[#4ADE80] text-black font-medium hover:bg-[#3BC070] transition"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
