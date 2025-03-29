import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, attendance, guests, message } = body

    if (!name || !email || !attendance) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Enviar email a los novios
    await resend.emails.send({
      from: `Boda <no-reply@gracielacarlos.site>`,
      to: ["josecalvano1546@gmail.com", "gcalvano45@gmail.com"],
      subject: `Confirmación de asistencia: ${name}`,
      html: `
        <h1>Nueva confirmación de asistencia</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asistencia:</strong> ${attendance === "yes" ? "Sí asistirá" : "No asistirá"}</p>
        <p><strong>Acompañantes:</strong> ${guests}</p>
        <p><strong>Mensaje:</strong> ${message || "No dejó mensaje"}</p>
      `,
      replyTo: email,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

