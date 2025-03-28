"use client"

import { useState } from "react"
import { sendRsvp } from "@/app/actions"
import { Mail } from "lucide-react"

export function RsvpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [phone, setPhone] = useState("+54 ")
  const [attendance, setAttendance] = useState<"yes" | "no" | null>(null)

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    
    if (!numbers) return "+54 "
    
    if (numbers.length <= 2) return "+54 "
    
    let formatted = "+54 "
    
    if (numbers.length > 2) {
      formatted += numbers.slice(2, 5)
    }
    
    if (numbers.length > 5) {
      formatted += " " + numbers.slice(5)
    }
    
    return formatted
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhone(formatted)
    const hiddenInput = document.getElementById("phone-hidden") as HTMLInputElement
    if (hiddenInput) {
      hiddenInput.value = formatted
    }
  }

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await sendRsvp(formData)

      if (result.success) {
        setAttendance(formData.get("attendance") as "yes" | "no")
        setSubmitted(true)
      } else {
        setError(result.error || "Hubo un error al enviar tu confirmación. Por favor, intenta nuevamente.")
      }
    } catch (err) {
      setError("Hubo un error al enviar tu confirmación. Por favor, intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section className="section" id="rsvp">
        <h2 className="section-title">CONFIRMAR ASISTENCIA</h2>
        <div className="card p-8 text-center max-w-md mx-auto">
          <div className="mb-8 flex items-center justify-center">
            <div className="w-12 h-px bg-gold"></div>
            <div className="mx-4 text-gold">
              <Mail className="w-6 h-6" />
            </div>
            <div className="w-12 h-px bg-gold"></div>
          </div>

          <h3 className="text-xl font-serif mb-4">¡Gracias por confirmar!</h3>
          {attendance === "yes" ? (
            <p className="text-neutral-600 font-serif">Hemos recibido tu confirmación. ¡Nos vemos en la boda! Tu presencia hará este momento aún más especial.</p>
          ) : (
            <div className="text-neutral-600 font-serif">
              <p className="mb-2">Hemos recibido tu confirmación. Lamentamos que no puedas acompañarnos en este día tan especial.</p>
              <p>Te llevaremos en nuestros corazones mientras celebramos este momento único.</p>
            </div>
          )}
        </div>
      </section>
    )
  }

  return (
    <section className="section" id="rsvp">
      <h2 className="section-title fade-in">CONFIRMAR ASISTENCIA</h2>

      <div className="card p-8 max-w-md mx-auto fade-in-up">
        <div className="mb-8 flex items-center justify-center">
          <div className="w-12 h-px bg-gold"></div>
          <div className="mx-4 text-gold">
            <Mail className="w-6 h-6" />
          </div>
          <div className="w-12 h-px bg-gold"></div>
        </div>

        <p className="text-center mb-8 font-serif">Confirmanos tu presencia hasta el 07/05</p>

        <form action={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
              Nombre y apellido *
            </label>
            <input type="text" id="name" name="name" required className="input" placeholder="Tu nombre completo" />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
              Número de teléfono *
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              required
              className="input"
              placeholder="+54 379 4405525"
            />
            <input
              type="hidden"
              id="phone-hidden"
              name="phone"
              value={phone}
            />
          </div>

          <div>
            <label htmlFor="attendance" className="block text-sm font-medium text-neutral-700 mb-1">
              ¿Asistirás? *
            </label>
            <select id="attendance" name="attendance" required className="input">
              <option value="">Selecciona una opción</option>
              <option value="yes">Sí, asistiré</option>
              <option value="no">No podré asistir</option>
            </select>
          </div>

          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-neutral-700 mb-1">
              Número de acompañantes
            </label>
            <select id="guests" name="guests" className="input">
              <option value="0">Solo yo</option>
              <option value="1">1 acompañante</option>
              <option value="2">2 acompañantes</option>
              <option value="3">3 acompañantes</option>
              <option value="4">4 acompañantes</option>
              <option value="5">5 acompañantes</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
              Mensaje (opcional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="input"
              placeholder="Escribe tu mensaje"
            ></textarea>
          </div>

          {error && <div className="p-4 bg-red-50 text-red-700 rounded-md text-sm border border-red-200">{error}</div>}

          <button type="submit" disabled={isSubmitting} className="w-full btn btn-primary">
            {isSubmitting ? "Enviando..." : "Enviar respuesta"}
          </button>
        </form>
      </div>
    </section>
  )
}

