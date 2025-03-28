"use client"

import { useState } from "react"
import { Gift } from "lucide-react"

export function Gifts() {
  const [showBankDetails, setShowBankDetails] = useState(false)

  return (
    <section className="section" id="gifts">
      <h2 className="section-title fade-in">REGALOS</h2>

      <div className="card p-8 text-center max-w-2xl mx-auto fade-in-up">
        <div className="mb-8 flex items-center justify-center">
          <div className="w-12 h-px bg-gold"></div>
          <div className="mx-4 text-gold">
            <Gift className="w-6 h-6" />
          </div>
          <div className="w-12 h-px bg-gold"></div>
        </div>

        <p className="text-neutral-600 mb-8 font-serif">
          Respecto al regalo, la casa está armada, ¡así que no se compliquen! Ahora, si quieren colaborar con la luna de
          miel, les dejamos el CBU.
        </p>

        <button onClick={() => setShowBankDetails(!showBankDetails)} className="btn btn-primary">
          {showBankDetails ? "Ocultar datos bancarios" : "Ver datos bancarios"}
        </button>

        {showBankDetails && (
          <div className="mt-8 p-6 bg-neutral-50 rounded-md border border-neutral-200 transition-all duration-300">
            <p className="font-serif text-lg">CBU: 0000000000000000000000</p>
            <p className="text-sm text-neutral-500 mt-2 font-serif">Alias: BODA.GRACIELA.CARLOS</p>
          </div>
        )}
      </div>
    </section>
  )
}

