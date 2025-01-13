"use client"

const featureCards= ()=>{
    return (
    <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-testid='parent'>
        <div className="rounded-lg border border-gray-800 p-6 text-left hover:border-[#3BC070]">
          <div className="mb-4 inline-block rounded-lg bg-gray-800 p-2">
            <svg
              data-testid="feature-icon"
              className="h-6 w-6 text-[#3BC070] "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white">AI Cover Letter Generator</h3>
          <p className="mt-2 text-gray-400">
            The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants.
          </p>
        </div>

        <div className="rounded-lg border border-gray-800 p-6 text-left hover:border-[#3BC070]">
          <div className="mb-4 inline-block rounded-lg bg-gray-800 p-2">
            <svg
              data-testid="feature-icon"
              className="h-6 w-6 text-[#3BC070]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white">Smart Personalization</h3>
          <p className="mt-2 text-gray-400">
            Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users.
          </p>
        </div>

        <div className="rounded-lg border border-gray-800 p-6 text-left hover:border-[#3BC070]">
          <div className="mb-4 inline-block rounded-lg bg-gray-800 p-2">
            <svg
              data-testid="feature-icon"
              className="h-6 w-6 text-[#3BC070]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white">Resume Scanner</h3>
          <p className="mt-2 text-gray-400">
            A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data from resumes.
          </p>
        </div>
      </div>
    )
}

export default featureCards;