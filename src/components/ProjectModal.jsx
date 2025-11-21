import { X, Github, ExternalLink } from 'lucide-react';

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute inset-x-0 bottom-0 md:inset-0 md:grid md:place-items-center">
        <div className="w-full md:max-w-3xl bg-slate-900 rounded-t-2xl md:rounded-2xl border border-white/10 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div>
              <h3 className="text-white text-xl font-semibold">{project.title}</h3>
              <p className="text-white/60 text-sm">{project.short_description}</p>
            </div>
            <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/10 text-white"><X size={20} /></button>
          </div>

          {project.screenshots?.length > 0 && (
            <div className="w-full overflow-x-auto whitespace-nowrap no-scrollbar">
              <div className="flex gap-3 p-4">
                {project.screenshots.map((url, idx) => (
                  <img key={idx} src={url} alt={`screenshot-${idx}`} className="h-56 rounded-xl border border-white/10" />
                ))}
              </div>
            </div>
          )}

          <div className="p-4 md:p-6 space-y-6">
            <div>
              <h4 className="text-white font-semibold mb-2">Detail Proyek</h4>
              <p className="text-white/80 leading-relaxed">{project.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="text-white/90 font-medium mb-2">Peran</h5>
                <div className="text-white/70">{project.role}</div>
              </div>
              <div>
                <h5 className="text-white/90 font-medium mb-2">Platform</h5>
                <div className="flex flex-wrap gap-2">
                  {project.platform?.map(p => (
                    <span key={p} className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/80 border border-white/10">{p}</span>
                  ))}
                </div>
              </div>
            </div>

            {project.highlights?.length > 0 && (
              <div>
                <h5 className="text-white/90 font-medium mb-2">Highlight</h5>
                <ul className="list-disc pl-5 text-white/80 space-y-1">
                  {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              {project.repo_url && (
                <a href={project.repo_url} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white border border-white/15 hover:bg-white/15">
                  <Github size={18}/> Repository
                </a>
              )}
              {project.live_url && (
                <a href={project.live_url} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-900 hover:opacity-90">
                  <ExternalLink size={18}/> Lihat Live
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;