import { Star, MapPin, Shield } from "lucide-react";

const maids = [
  {
    name: "Aisha Rahman",
    rating: 4.9,
    jobs: 320,
    location: "Downtown",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    badges: ["Top Rated", "Background Checked"],
  },
  {
    name: "Maria Gomez",
    rating: 4.8,
    jobs: 210,
    location: "Uptown",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop",
    badges: ["Punctual", "Pet Friendly"],
  },
  {
    name: "Priya Sharma",
    rating: 4.7,
    jobs: 190,
    location: "Midtown",
    img: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=800&auto=format&fit=crop",
    badges: ["Detail Oriented"],
  },
];

export default function FeaturedMaids() {
  return (
    <section id="maids" className="py-14 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Featured Maids</h2>
            <p className="text-gray-600 mt-1">Handpicked professionals trusted by hundreds of homes.</p>
          </div>
          <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Book now</button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {maids.map((m) => (
            <article key={m.name} className="border rounded-2xl overflow-hidden bg-white hover:shadow-md transition-shadow">
              <div className="h-52 w-full overflow-hidden">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{m.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin size={16} className="text-emerald-600" /> {m.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={16} fill="currentColor" />
                    <span className="font-medium text-sm">{m.rating}</span>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {m.badges.map((b) => (
                    <span key={b} className="inline-flex items-center gap-1 px-2 py-1 rounded-full border text-xs bg-white">
                      <Shield size={12} className="text-emerald-600" /> {b}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-600">{m.jobs} jobs completed</span>
                  <button className="px-3 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700">Select</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
