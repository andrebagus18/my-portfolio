import { useState } from "react";

function ProjectModal({ project, onClose }) {
  const [selectedImage, setSelectedImge] = useState(null);

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
        <div className="flex gap-4 p-6 overflow-x-auto no-scrollbar">
          {project.image.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${project.title} ${index + 1}`}
              onClick={() => setSelectedImge(image)}
              className="w-52 h-40 rounded-2xl object-cover shrink-0"
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
        {/* Image Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImge(null)}
          >
            <div className="flex flex-col gap-1 items-center justify-center">
              <img
                src={selectedImage}
                alt={project.title}
                className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl"
              />
              <span className=" text-sm italic font-light text-white ">
                {project.title}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectModal;
