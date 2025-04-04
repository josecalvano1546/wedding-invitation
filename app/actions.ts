"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface RsvpResponse {
  success: boolean
  error?: string
}

export async function sendRsvp(formData: FormData): Promise<RsvpResponse> {
  const name = formData.get("name") as string
  const phone = formData.get("phone") as string
  const attendance = formData.get("attendance") as string
  const guests = formData.get("guests") as string
  const message = formData.get("message") as string

  if (!name || !phone || !attendance) {
    return {
      success: false,
      error: "Por favor, completa todos los campos requeridos.",
    }
  }

  try {
    // Enviar email a los novios
    await resend.emails.send({
      from: "Boda <no-reply@gracielacarlos.site>",
      to: ["josecalvano1546@gmail.com", "gcalvano45@gmail.com"],
      subject: `Confirmación de asistencia: ${name}`,
      html: `
        <h1>Nueva confirmación de asistencia</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Asistencia:</strong> ${attendance === "yes" ? "Sí asistirá" : "No asistirá"}</p>
        <p><strong>Acompañantes:</strong> ${guests}</p>
        <p><strong>Mensaje:</strong> ${message || "No dejó mensaje"}</p>
      `,
    })

    // Enviar confirmación al invitado (si se proporciona un email)
    // Como ya no tenemos email, esta parte se podría omitir o adaptar para enviar un SMS 
    

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido'
    return {
      success: false,
      error: `Hubo un error al enviar tu confirmación: ${errorMessage}. Por favor, intenta nuevamente.`,
    }
  }
}

