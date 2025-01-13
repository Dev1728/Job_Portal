'use client'

import Image from "next/image";

import tempimg from '@/app/assets/images/tempImg.jpg';
import images from '@/app/assets/images/images.png';

const AIOptimization= () => {
  return (
    <main className="below-sm:min-h-screen lg:h-screen sm:min-h-screen flex flex-col bg-[#5EE65E]">
      {/* Hero Section */}
      <section className=" flex items-center max-w-7xl mx-auto p-4 md:p-8 lg:p-10  h-[50%] mt-10 below-sm:mt-0 ">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Free AI cover letter generator powered by GPT
            </h1>
            <p className="text-base md:text-lg mb-8 max-w-xl overflow-wrap: break-word">
              A free AI cover letter generator powered by GPT is a tool that uses artificial intelligence 
              and natural language processing to help job seekers create customized and effective cover letters.
            </p>
            <button 
              className="bg-black text-white hover:bg-gray-800 px-2 py-3 text-lg rounded-full"
            >
              Try For Free Now
            </button>
          </div>
          <div className="order-1 lg:order-2 below-sm:mb-0 " data-testid='parent'>
            <div className="relative aspect-square max-w-sm mx-auto sm:place-items-center">
              <div className=" inset-0 below-sm:flex below-sm:flex-col below-sm:items-center ">
                <Image
                  src={tempimg}
                  alt="AI Cover Letter Generator illustration"
                  width={250}
                  height={200}
                  className="object-contain  rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="flex-1 flex items-center max-w-7xl mx-auto p-4 md:p-8 lg:p-10 h-[50%]">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          <div className="relative aspect-square max-w-sm mx-auto">
            <div className="inset-0 rounded-full">
              <Image
                data-testid='Resume-Optimization-illustration'
                src={images}
                alt="Resume Optimization illustration"
                width={250}
                height={250}
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              Optimize the keywords in your resume
            </h2>
            <p className="text-base md:text-lg mb-8 max-w-xl overflow-wrap: break-word">
              By optimizing keywords in your resume, you can increase your chances of getting noticed 
              by recruiters and landing interviews for the jobs you want.
            </p>
            <button 
              className="bg-black text-white hover:bg-gray-800 px-2 py-3 text-lg rounded-full"
            >
              Optimize your Resume
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AIOptimization;
