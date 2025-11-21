import { useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Kontak</h2>
          <p className="text-white/70 mt-2">Ada proyek menarik? Ayo diskusi.</p>
        </div>

        <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
          <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Nama" className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white" />
          <input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white" />
          <input required value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} placeholder="Subjek" className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white md:col-span-2" />
          <textarea required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Pesan" rows={5} className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white md:col-span-2" />
          <div className="md:col-span-2 flex items-center gap-3">
            <button className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:opacity-90" disabled={status==='loading'}>
              {status==='loading' ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
            {status==='success' && <span className="text-emerald-400">Terkirim! Saya akan segera membalas.</span>}
            {status==='error' && <span className="text-rose-400">Gagal mengirim. Coba lagi.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;