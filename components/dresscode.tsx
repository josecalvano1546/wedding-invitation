import { Shirt } from "lucide-react"

export function Dresscode() {
  return (
    <section className="section" id="dresscode">
      <h2 className="section-title fade-in">VESTIMENTA</h2>

      <div className="card p-8 text-center max-w-md mx-auto fade-in-up">
        <div className="mb-8 flex items-center justify-center">
          <div className="w-12 h-px bg-gold"></div>
          <div className="mx-4 text-gold">
            <Shirt className="w-6 h-6" />
          </div>
          <div className="w-12 h-px bg-gold"></div>
        </div>

        <h3 className="text-xl font-serif mb-6">SPORT</h3>

        <p className="text-neutral-600 font-serif">
          Asiste vestido de sport para disfrutar cómodamente de nuestra celebración.
        </p>
      </div>
    </section>
  )
}

