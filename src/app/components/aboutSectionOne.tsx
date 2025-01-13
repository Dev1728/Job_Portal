'use client'

import Image from "next/image";
import img from '@/app/assets/images/img.jpg'
const AboutSectionOne=()=>{
    return(
        <div className="px-8 py-12 sm:h-auto  h-screen InBetween:h-auto mt-5 flex flex-col items-center justify-center  ">
          <div className="bg-[#e4e448] h-screen  below-sm:h-auto container rounded-xl flex flex-col sm:p-12  below-sm:p-8 relative overflow-hidden">
            <div className="flex flex-col items-center justify-center">
              <h1 className=" text-3xl lg:text-4xl sm:text-2xl below-sm:text-lg font-semibold text-center">Submit Better Job <br></br> Application</h1>
              <p className=" text-6xl lg:text-6xl sm:text-5xl below-sm:text-3xl font-semibold mt-3">10x faster</p>
              <p className="text-thin below-sm:text-xs flex flex-wrap text-center below-sm:w-auto w-[400px] mt-5">
                AI cover letter generator, resume keyword checker, outreach, message writer, and Powered by GPT
              </p>
              <div className="relative w-full below-sm:mt-10 sm:place-items-center below-sm:place-items-center">
                <Image
                  src={img}
                  alt="imgDashboard"
                  width={600}
                  height={500}
                  className=" shadow-lg below-sm:h-[500px] lg:h-[700px] lg:w-[700px] lg:mt-20 sm:h-[550px] sm:mt-20 below-sm:mt-10"
                />
              </div>
            </div>
          </div>
      </div>
    )
}
export default AboutSectionOne;