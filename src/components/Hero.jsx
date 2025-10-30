import { Shield, Star, Clock, Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-10 grid md:grid-cols-2 gap-8 items-center relative">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Hire trusted, vetted maids on-demand
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Book professional home cleaning, deep cleaning, and housekeeping services with transparent pricing and flexible scheduling.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Shield className="text-emerald-600" size={18} />
              Background checked
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Star className="text-emerald-600" size={18} />
              4.8/5 average rating
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Clock className="text-emerald-600" size={18} />
              Same-day availability
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Shield className="text-emerald-600" size={18} />
              Insurance coverage
            </div>
          </div>

          <div className="mt-8 bg-white border rounded-xl p-2 flex items-center gap-2 shadow-sm">
            <Search className="text-gray-500 ml-1" size={20} />
            <input
              aria-label="Search location"
              placeholder="Enter your city or ZIP"
              className="flex-1 px-3 py-2 outline-none"
            />
            <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">
              Check availability
            </button>
          </div>

          <p className="mt-3 text-xs text-gray-500">No payment required until service is completed.</p>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop"
              alt="Professional maid cleaning a modern home"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
