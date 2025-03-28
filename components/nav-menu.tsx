"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-playfair text-xl font-bold">
              G & C
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className="hover:text-primary-dark transition-colors">
                Inicio
              </Link>
              <Link href="#ceremonia" className="hover:text-primary-dark transition-colors">
                Ceremonia
              </Link>
              <Link href="#dresscode" className="hover:text-primary-dark transition-colors">
                Vestimenta
              </Link>
              <Link href="#regalos" className="hover:text-primary-dark transition-colors">
                Regalos
              </Link>
              <Link href="#confirmar" className="hover:text-primary-dark transition-colors">
                Confirmar
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-800 hover:text-primary-dark focus:outline-none"
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary-dark"
              onClick={closeMenu}
            >
              Inicio
            </Link>
            <Link
              href="#ceremonia"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary-dark"
              onClick={closeMenu}
            >
              Ceremonia
            </Link>
            <Link
              href="#dresscode"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary-dark"
              onClick={closeMenu}
            >
              Vestimenta
            </Link>
            <Link
              href="#regalos"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary-dark"
              onClick={closeMenu}
            >
              Regalos
            </Link>
            <Link
              href="#confirmar"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary-dark"
              onClick={closeMenu}
            >
              Confirmar
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

