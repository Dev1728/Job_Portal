'use client'

import Image from "next/image"
import { Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react'
import images from '@/app/assets/images/images.png'
const footerSection =()=>{
    return (

    <div className="flex flex-col h-screen below-sm:min-h-screen sm:h-auto lg:h-auto">
      {/* Templates Section */}
      <section className="bg-black text-white py-8 md:py-4 px-4 md:px-8 ">
        <div className="max-w-7xl mx-auto  grid lg:grid-cols-2 gap-16 items-center ">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Free resume design templates
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl">
              By following these design tips, you can create a professional and effective resume 
              that will help you stand out to recruiters and hiring managers.
            </p>
            <button 
              
              className="text-white border border-white hover:bg-white hover:text-black px-1 py-2 rounded-lg"
            >
              Create an Account
            </button>
          </div>
          <div className="relative inset-0 order-1 lg:order-2 aspect-square max-w-sm mx-auto">
            <Image
              src={images}
              alt="Resume Design Templates"
              width={300}
              height={300}
              className="object-contain rounded-full below-sm:w-[200px] below-sm:h-[200px]"
            />
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <div className="lg:min-h-screen">
      <section className="bg-[#5EE65E] py-16 md:py-20 px-4 md:px-8 ">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What is next</h2>
          <p className="text-gray-800 mb-8">
            Submit better job app — 10x faster. AI cover letter generator, resume keyword checker, 
            outreach message writer, and more. Powered by GPT
          </p>
          <button className="bg-black text-white hover:bg-gray-800 rounded-xl px-2 py-3">
            Try For Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5EE65E] py-12 px-4 md:px-8 lg:h-auto sm:h-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Platform Column */}
            <div>
              <h3 className="font-bold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Plans and Prices</a></li>
                <li><a href="#" className="hover:underline">AI Create Letters</a></li>
                <li><a href="#" className="hover:underline">AI Resume Checker</a></li>
                <li><a href="#" className="hover:underline">Resume Templates</a></li>
                <li><a href="#" className="hover:underline">Sell Templates</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
              </ul>
            </div>

            {/* Features Column */}
            <div>
              <h3 className="font-bold mb-4">Features</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">AI Cover Letter Creator</a></li>
                <li><a href="#" className="hover:underline">Resume Keywords Optimizer</a></li>
                <li><a href="#" className="hover:underline">ATS Resume Checker</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">4 AI Tools for Applying a Job</a></li>
                <li><a href="#" className="hover:underline">How to optimize Resume keywords</a></li>
                <li><a href="#" className="hover:underline">Why you should use Chat GPT for create Resume</a></li>
                <li><a href="#" className="hover:underline">What should you include in a Cover Letter</a></li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <p className="mb-4">support@gmail.com</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-600"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-gray-600"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="hover:text-gray-600"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="hover:text-gray-600"><MessageCircle className="w-5 h-5" /></a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm border-t border-black/10 pt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <span>© Copywriting</span>
            <span>|</span>
            <span>All Rights Reserved</span>
            <span>|</span>
            <a href="#" className="hover:underline">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:underline">Privacy</a>
          </div>
        </div>
      </footer>
      </div>
    </div>
  


    )
}

export default footerSection;