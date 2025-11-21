import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/projects/featured`);
        if (res.ok) {
          const data = await res.json();
          setProjects(data);
        } else {
          const res2 = await fetch(`${API_BASE}/api/projects`);
          const data2 = await res2.json();
          setProjects(data2);
        }
      } catch (e) {
        // fallback sample if API not available
        setProjects([
          {
            title: 'Sample App',
            slug: 'sample-app',
            short_description: 'Contoh proyek mobile',
            description: 'Deskripsi contoh proyek mobile',
            platform: ['iOS','Android'],
            tech_stack: ['Flutter','Firebase'],
            role: 'Developer',
            highlights: ['Feature A','Feature B'],
            cover_image: 'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=1600&auto=format&fit=crop',
            year: 2024
          }
        ]);
      }
    };
    load();
  }, []);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Proyek Unggulan</h2>
            <p className="text-white/70 mt-2">Pilihan karya dengan dampak terbesar</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} onSelect={setSelected} />)
          )}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

export default Projects;