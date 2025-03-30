import { CountdownTimer } from "./countdown-timer"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-16 px-4 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto z-10 fade-in">
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-px bg-gold"></div>
          <h1 className="text-4xl md:text-5xl font-tangerine text-gold mx-4 tracking-wide">G <span className="text-gold text-2xl font-tangerine">&</span> C</h1>
          <div className="w-16 h-px bg-gold"></div>
        </div>

        <p className="text-lg md:text-xl mb-12 font-serif text-neutral-600 italic">
          De común acuerdo y en plena posesión de nuestras facultades mentales (sean las que sean) hemos decidido
          emprender una "nueva aventura": ¡CASARNOS!
        </p>

        <div className="mb-12">
          <CountdownTimer targetDate="2025-05-17T18:30:00" />
        </div>

        <div className="text-2xl md:text-3xl font-script text-gold mb-4">Estás invitado</div>
        <p className="mt-2 text-neutral-600 font-serif">Queremos que seas parte de este momento tan especial.</p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#ceremony" className="btn btn-primary">
            Detalles de la Ceremonia
          </a>
          <a href="#rsvp" className="btn btn-secondary">
            Confirmar Asistencia
          </a>
        </div>
      </div>
    </section>
  )
}

