import HeadTitle from "../atoms/headTitle";
import CardProject from "./cardProject";

function Project() {
  return (
    <div
      className=" mt-20 pt-16 flex flex-col items-center justify-center"
      id="project"
    >
      <HeadTitle label="My Project" />
      <CardProject />
    </div>
  );
}

export default Project;
