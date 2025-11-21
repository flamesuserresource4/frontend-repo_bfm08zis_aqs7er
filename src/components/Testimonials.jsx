import { useEffect, useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

function Testimonials(){
  const [items, setItems] = useState([]);
  useEffect(()=>{
    (async()=>{
      try{
        const res = await fetch(`${API_BASE}/api/testimonials`);
        if(res.ok){
          setItems(await res.json());
        }
      }catch(e){
        setItems([
          {author:'CEO, HealthCo', role:'Client', message:'Outstanding delivery and attention to detail.'}
        ]);
      }
    })();
  },[]);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Testimoni</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90">
              <p className="">“{t.message}”</p>
              <div className="mt-4 text-sm text-white/60">{t.author}{t.role?` • ${t.role}`:''}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;