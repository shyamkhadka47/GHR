"use client"

import { useEffect, useState, useCallback } from "react"
import { ChevronUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled past hero section (100vh)
  const toggleVisibility = useCallback(() => {
    if (window.scrollY > window.innerHeight - 600) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [])

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    toggleVisibility()
    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [toggleVisibility])

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50
        w-12 h-12 rounded-full
        bg-[#82B440] text-white
        flex items-center justify-center
        shadow-lg
        transition-all duration-300 ease-in-out
        hover:bg-[#72a038] hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-[#82B440] focus:ring-offset-2
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  )
}

