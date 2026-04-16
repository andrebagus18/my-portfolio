import HeadProject from "../atoms/headProject";
import ProjectImage from "../atoms/projectImage";
import adminPanel from "../../assets/adminPanel.webp";
import sCountry from "../../assets/searchCountry.webp";
import tBlog from "../../assets/techBlog.webp";

function CardProject() {
  return (
    <div className="grid grid-rows-3 gap-6 mt-8 w-full lg:w-4xl justify-center items-center">
      {/* card 1 */}
      <div className=" flex gap-4 items-center">
        <ProjectImage target={adminPanel} />
        <div className="flex flex-col">
          <HeadProject label="Admin Panel" />
          <span className="text-slate-200 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            quibusdam facilis ullam reprehenderit? Nam, voluptates. Sapiente
            magni sit dolores sunt?
          </span>
        </div>
      </div>
      {/* card 2 */}
      <div className="flex gap-4 mt-2 items-center">
        <div className="flex flex-col">
          <HeadProject label="Search Country" />
          <span className="text-slate-200 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            quibusdam facilis ullam reprehenderit? Nam, voluptates. Sapiente
            magni sit dolores sunt?
          </span>
        </div>
        <ProjectImage target={sCountry} />
      </div>
      {/* card 3 */}
      <div className="flex gap-4 mt-4 items-center">
        <ProjectImage target={tBlog} />
        <div className="flex flex-col">
          <HeadProject label="Tech Blog" />
          <span className="text-slate-200 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            quibusdam facilis ullam reprehenderit? Nam, voluptates. Sapiente
            magni sit dolores sunt?
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
