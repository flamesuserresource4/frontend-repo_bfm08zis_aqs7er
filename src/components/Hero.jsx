import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full border border-white/20 text-white text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Available for freelance • Mobile Developer
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Crafting delightful mobile experiences
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          I build fast, polished apps for iOS and Android — from MVP to production. Flutter, React Native, native SDKs, you name it.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:opacity-90 transition">Lihat Proyek</a>
          <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/15 transition font-medium">Hubungi Saya</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_10%,rgba(99,102,241,0.25),transparent),radial-gradient(500px_300px_at_80%_50%,rgba(16,185,129,0.25),transparent)]" />
    </section>
  );
}

export default Hero;