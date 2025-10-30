import { Home, Phone, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-emerald-500 text-white grid place-content-center">
            <Home size={18} />
          </div>
          <span className="font-semibold text-lg">SparkleHire</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-emerald-600 transition-colors">Services</a>
          <a href="#maids" className="hover:text-emerald-600 transition-colors">Maids</a>
          <a href="#how" className="hover:text-emerald-600 transition-colors">How it works</a>
          <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-gray-50">
            <Phone size={16} />
            <span className="text-sm">Call us</span>
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">
            <User size={16} />
            <span className="text-sm">Sign in</span>
          </button>
        </div>
      </div>
    </header>
  );
}
