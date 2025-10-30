import { Sparkles, WashingMachine, Refrigerator, Bath } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Standard Cleaning",
    desc: "Dusting, vacuuming, sweeping, mopping, and general tidying for apartments and homes.",
  },
  {
    icon: Bath,
    title: "Deep Cleaning",
    desc: "Detailed kitchen and bathroom scrubs, baseboards, inside cabinets, and more.",
  },
  {
    icon: WashingMachine,
    title: "Laundry & Ironing",
    desc: "Wash, dry, fold, and ironing services available as add-ons or standalone.",
  },
  {
    icon: Refrigerator,
    title: "Move-in/Move-out",
    desc: "Comprehensive cleaning to make moving day stress-free and spotless.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
            <p className="text-gray-600 mt-1">Choose a package or customize to your needs.</p>
          </div>
          <a href="#maids" className="text-emerald-700 hover:text-emerald-800 font-medium">See available maids →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div key={i} className="rounded-xl border p-4 hover:shadow-sm transition-shadow bg-white">
              <div className="h-10 w-10 rounded-md bg-emerald-50 text-emerald-700 grid place-content-center mb-3">
                <s.icon size={18} />
              </div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
