import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(59,130,246,0.25),transparent),radial-gradient(1000px_600px_at_110%_10%,rgba(16,185,129,0.25),transparent)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <Testimonials />
        <Contact />
        <footer className="py-10 text-center text-white/60">© {new Date().getFullYear()} Your Name — Mobile Developer</footer>
      </main>
    </div>
  );
}

export default App;