import HeadTitle from "../atoms/headTitle";
import ProjectModal from "../molecules/projectModal";
import CardProject from "./cardProject";
import { projects } from "../../data/projects";
import { useState } from "react";

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleDetail = (projectId) => {
    setSelectedProject(projects[projectId]);
  };
  return (
    <div
      className=" mt-20 pt-20 flex flex-col items-center justify-center"
      id="project"
    >
      <HeadTitle label="My Project" />
      <CardProject onDetail={handleDetail} />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default Project;
