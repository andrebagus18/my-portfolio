function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto no-scrollbar rounded-2xl border border-slate-700 bg-slate-900/80 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full h-8 bg-glass-bg w-9 text-lg text-white backdrop-blur-sm cursor-pointer"
        >
          X
        </button>
        <div className="grid grid-cols-1 p-6 sm:grid-cols-3 justify-center items-center">
          {project.image.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${project.title} ${index + 1}`}
              className="w-52 h-52 rounded-2xl object-cover"
            />
          ))}
        </div>
        <div className="p-6 pt-0 sm:p-8 sm:pt-0">
          <h2 className="text-3xl font-bold text-cyan-400">{project.title}</h2>
          <p className="mt-5 leading-7 text-slate-300">{project.desc}</p>
          {/* tech */}
          <div className="mt-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-5 py-1.5 text-sm text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
