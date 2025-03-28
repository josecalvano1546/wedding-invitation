import Link from "next/link"
import { MapPin, Clock, Calendar } from "lucide-react"

export function Ceremony() {
  return (
    <section className="section" id="ceremony">
      <h2 className="section-title fade-in">CEREMONIA</h2>

      <div className="card p-8 fade-in-up">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 flex items-center justify-center">
            <div className="w-12 h-px bg-gold"></div>
            <div className="mx-4 text-gold">
              <Clock className="w-6 h-6" />
            </div>
            <div className="w-12 h-px bg-gold"></div>
          </div>

          <h3 className="text-xl font-serif mb-6">Ceremonia civil y ecuménica</h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gold" />
              <div className="text-xl font-serif">17 MAYO 2025</div>
            </div>
            <div className="h-8 w-px bg-neutral-200 hidden md:block"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gold" />
              <div className="text-xl font-serif">
                18:30 <span className="text-sm">hs</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin className="w-5 h-5 text-gold" />
            <p className="text-neutral-600 font-serif">Sede Club de Regatas Corrientes</p>
          </div>
          <p className="text-neutral-600 mb-8 font-serif">Salón de usos múltiples/terraza</p>

          <Link
            href="https://www.google.com/maps/place/Regatas+Corrientes/@-27.4584402,-58.8286241,17z/data=!3m1!4b1!4m6!3m5!1s0x94456ca831249b8f:0x18c0bfd9559877bd!8m2!3d-27.4584402!4d-58.8286241!16s%2Fg%2F11btxkc1vj?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="btn btn-primary"
          >
            Ver ubicación
          </Link>
        </div>
      </div>
    </section>
  )
}

