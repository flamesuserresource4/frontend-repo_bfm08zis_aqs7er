import { Menu } from 'lucide-react';

function Navbar(){
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 backdrop-blur px-4 py-2">
          <a href="#" className="text-white font-semibold tracking-tight">md.dev</a>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#projects" className="hover:text-white">Proyek</a>
            <a href="#contact" className="hover:text-white">Kontak</a>
          </nav>
          <button className="md:hidden p-2 text-white/90"><Menu size={20}/></button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;