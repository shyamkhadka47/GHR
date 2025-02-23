import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function ContactUs() {
  return (
    <div className="relative w-full min-h-[600px] bg-gray-100">
      {/* Background Image */}
      <div className="absolute  w-full h-full lg:w-[75%]">
        <Image
          src="/gb3.jpg"
          alt="Construction worker"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Form Card */}
      <div className="container relative mx-auto px-4 py-16 lg:py-24">
        <div className="ml-auto w-full max-w-[600px] bg-white rounded-sm shadow-lg p-8 lg:p-12">
          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 bg-[#82B440]" />
            <span className="text-[#82B440] text-sm font-medium tracking-wider">GET IN TOUCH</span>
          </div>

          <h2 className="text-2xl lg:text-[32px] font-bold mb-8">Marketing For The Digital Age</h2>

          {/* Form */}
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 text-gray-700 border border-gray-200 rounded-sm focus:outline-none focus:border-[#82B440]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 text-gray-700 border border-gray-200 rounded-sm focus:outline-none focus:border-[#82B440]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full px-4 py-3 text-gray-700 border border-gray-200 rounded-sm focus:outline-none focus:border-[#82B440]"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 text-gray-700 border border-gray-200 rounded-sm focus:outline-none focus:border-[#82B440]"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-3 text-gray-700 border border-gray-200 rounded-sm focus:outline-none focus:border-[#82B440] resize-none"
            ></textarea>

            <button
              type="submit"
              className="inline-flex items-center bg-[#82B440] text-white px-6 py-3 rounded-sm hover:bg-[#72a038] transition-colors group"
            >
              Submit Here
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

