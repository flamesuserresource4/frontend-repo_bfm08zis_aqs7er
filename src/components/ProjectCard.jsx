function ProjectCard({ project, onSelect }) {
  return (
    <button onClick={() => onSelect(project)} className="group text-left w-full rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition p-4 md:p-6">
      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-900 border border-white/10">
        {project.cover_image ? (
          <img src={project.cover_image} alt={project.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition" />
        ) : (
          <div className="w-full h-full grid place-items-center text-white/40">No Image</div>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between gap-2">
        <div>
          <h3 className="text-white font-semibold text-lg">{project.title}</h3>
          <p className="text-white/60 text-sm line-clamp-2">{project.short_description}</p>
        </div>
        {project.year && <span className="text-white/50 text-sm">{project.year}</span>}
      </div>
      {project.tech_stack?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech_stack.slice(0,4).map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/80 border border-white/10">{t}</span>
          ))}
        </div>
      )}
    </button>
  );
}

export default ProjectCard;