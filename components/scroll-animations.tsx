"use client"

import { useEffect } from "react"

export function ScrollAnimations() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in-up, .fade-in")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    fadeElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      fadeElements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])

  return null
}

