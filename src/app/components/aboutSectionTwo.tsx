'use client'
import { FileText, Mail, Users, Send, LayoutGrid, FileSearch } from 'lucide-react'


        

const aboutSectionTwo=()=> {
  return (
    <div className="sm:min-h-screen below-sm:min-h-screen below-sm:flex below-sm:flex-col bg-[#1C1C1C] px-2 py-5 text-white md:px-4 lg:px-6" data-testid="about-section">
      <div className="mx-auto max-w-6xl " >
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Spend less time
            <br />
            looking for work
          </h1>
          <p className="mb-8 text-gray-400">
            We&apos;ll help you through the hardest part of your job search.
          </p>
          <button className="rounded-full border border-[#4ADE80] bg-transparent px-1 py-2 text-[#4ADE80] hover:bg-[#4ADE80] hover:text-black">
            Create an Account
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {/* Cover Letter */}
          <div className="rounded-lg border border-gray-800 bg-[#2A2A2A] p-6 ">
            <div className="mb-4">
              <FileText className="h-6 w-6 text-[#4ADE80]" />
            </div>
            <h3 className="mb-3 text-lg font-semibold">Cover Letter</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              A cover letter is a document that accompanies a job application and is written to introduce the applicant to the employer.
            </p>
          </div>

          {/* Resignation Letters */}
          <div className="rounded-lg border border-gray-800 bg-[#2A2A2A] p-6 ">
            <div className="mb-4">
              <Mail className="h-6 w-6 text-[#4ADE80]" />
            </div>
            <h3 className="mb-3 text-lg font-semibold">Resignation Letters</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              A resignation letter is a formal document that an employee writes to inform their employer of their decision to leave the company.
            </p>
          </div>

          {/* Connection Request */}
          <div className="rounded-lg border border-gray-800 bg-[#2A2A2A] p-6">
            <div className="mb-4">
              <Users className="h-6 w-6 text-[#4ADE80]" />
            </div>
            <h3 className="mb-3 text-lg font-semibold">Connection Request</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              A connection request is a message sent on a social networking site, such as LinkedIn, requesting to connect with another user.
            </p>
          </div>

          {/* Outreach Emails */}
          <div className="rounded-lg border border-gray-800 bg-[#2A2A2A] p-6  ">
            <div className="mb-4">
              <Send className="h-6 w-6 text-[#4ADE80]" />
            </div>
            <h3 className="mb-3 text-lg font-semibold">Outreach Emails</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Outreach emails are messages sent by individuals or businesses to introduce themselves, establish a connection, or propose a collaboration.
            </p>
          </div>

          {/* Resume Optimization */}
          <div className="rounded-lg border border-gray-800 bg-[#2A2A2A] p-6 ">
            <div className="mb-4">
              <LayoutGrid className="h-6 w-6 text-[#4ADE80]" />
            </div>
            <h3 className="mb-3 text-lg font-semibold">Resume Optimization</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users.
            </p>
          </div>

          {/* Resume Design */}
          <div className="rounded-lg border border-gray-800 bg-[#2A2A2A] p-6  ">
            <div className="mb-4">
              <FileSearch className="h-6 w-6 text-[#4ADE80]" />
            </div>
            <h3 className="mb-3 text-lg font-semibold">Resume Design</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data from resumes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}




export default aboutSectionTwo;