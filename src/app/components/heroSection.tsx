'use client'
import { useState } from "react";
import FeatureCards from "./featureCards";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
  };
  

  return (
    <main className="mx-auto max-w-6xl px-6 pt-20 text-center lg:px-8">
      <h1 className="text-4xl font-bold sm:text-6xl" data-testid='h1'>
        <span className="text-[#4ADE80]">Win your dream job</span>
        <br />
        <span className="mt-2 block text-white">with PostJob</span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-gray-400">
        Submit better job app — 10x faster. AI cover letter generator, resume keyword checker, outreach message writer, and more. Powered by GPT
      </p>

      <div className="mx-auto mt-10 max-w-md">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between rounded-lg px-1 py-2 gap-2 border"
        >
          <input
            value={email}
            onChange={handleInputChange}
            type="email"
            placeholder="Your Email"
            className="bg-transparent text-white border-none outline-none w-full"
          />
          <button
            type="submit"
            className="whitespace-nowrap rounded-lg w-32 h-9 bg-[#4ADE80] text-black hover:bg-[#3BC070]"
          >
            Start For Free
          </button>
        </form>
      </div>

      {/* Feature Cards */}
      <FeatureCards data-testid='feature-cards'/>
    </main>
  );
};

export default HeroSection;
