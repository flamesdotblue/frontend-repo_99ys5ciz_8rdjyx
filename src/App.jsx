import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FeaturedMaids from "./components/FeaturedMaids";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <FeaturedMaids />
      </main>
      <footer id="contact" className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} SparkleHire. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-emerald-700">Privacy</a>
            <a href="#" className="hover:text-emerald-700">Terms</a>
            <a href="#" className="hover:text-emerald-700">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
