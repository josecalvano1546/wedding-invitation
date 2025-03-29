"use client"

import { Download } from "lucide-react"
import { useRef } from "react"
import html2canvas from "html2canvas"

export function DownloadCard() {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleDownload = async () => {
    if (!cardRef.current) return

    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        backgroundColor: null,
        logging: false,
      })

      const image = canvas.toDataURL("image/png")
      const link = document.createElement("a")
      link.href = image
      link.download = "invitacion-graciela-carlos.png"
      link.click()
    } catch (error) {
      console.error("Error al generar la imagen:", error)
    }
  }

  return (
    <section className="section" id="download-card">
      <h2 className="section-title fade-in">INVITACIÓN</h2>

      <div className="flex flex-col items-center fade-in-up">
        <div ref={cardRef} className="download-card mb-8 relative h-[600px]">
          {/* Fondo con textura sutil */}
          <div className="absolute inset-0 bg-white"></div>

          {/* Borde dorado */}
          <div className="absolute inset-4 border border-gold opacity-40"></div>
          <div className="absolute inset-6 border border-gold/20"></div>

          {/* Contenido de la tarjeta */}
          <div className="relative z-10 flex flex-col items-center justify-between h-full p-10">
            <div className="text-center">
              {/* Monograma elegante */}
              <div className="mb-6 flex items-center justify-center">
                <div className="w-8 h-px bg-gold opacity-50"></div>
                <span className="font-tangerine text-6xl text-gold mx-4">G & C</span>
                <div className="w-8 h-px bg-gold opacity-50"></div>
              </div>

              <h2 className="text-xl uppercase tracking-widest text-center font-serif mb-4">Graciela & Carlos</h2>

              {/* Separador decorativo */}
              <div className="w-16 h-px bg-gold/50 mx-auto mb-6"></div>

              {/* Texto principal */}
              <p className="text-center font-serif text-neutral-600 mb-8 text-sm italic px-4">
                De común acuerdo y en plena posesión de nuestras facultades mentales (sean las que sean) hemos decidido
                emprender una "nueva aventura": ¡CASARNOS!
              </p>
            </div>

            <div className="text-center">
              <p className="font-script text-2xl text-gold mb-4">Te invitamos a nuestra boda</p>

              <div className="font-serif mb-6">
                <p className="text-lg mb-1">17 de Mayo de 2025</p>
                <p className="text-lg">18:30 hs</p>
              </div>

              <div className="w-12 h-px bg-gold/50 mx-auto mb-4"></div>

              <p className="font-serif text-neutral-600 text-sm mb-1">Sede Club de Regatas Corrientes</p>
              <p className="font-serif text-neutral-600 text-sm">Salón de usos múltiples/terraza</p>
              <p className="font-serif text-neutral-600 text-sm mb-1"></p>
              

              {/* Elemento decorativo inferior */}
              <div className="mt-6 w-24 h-px bg-gold/30 mx-auto"></div>
            </div>
          </div>
        </div>

        <button onClick={handleDownload} className="btn btn-primary flex items-center gap-2">
          <Download className="w-4 h-4" />
          Descargar invitación
        </button>
      </div>
    </section>
  )
}

