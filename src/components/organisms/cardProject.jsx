import HeadProject from "../atoms/headProject";
import ProjectImage from "../atoms/projectImage";
import adminPanel from "../../assets/adminPanel.webp";
import sCountry from "../../assets/searchCountry.webp";
import tBlog from "../../assets/techBlog.webp";
import Cards from "../atoms/cards";

function CardProject() {
  return (
    <>
      <div className="grid grid-rows-3 gap-8 mt-8 w-full lg:w-4xl justify-center items-center">
        {/* card 1 */}
        <div className="w-full flex flex-col md:flex-row md:justify-center items-center gap-6">
          <ProjectImage target={adminPanel} />
          <div className="flex flex-col">
            <HeadProject label="Admin Panel" />
            <p className="text-slate-200 font-normal text-lg md:text-xl">
              An admin panel developed using JavaScript and CSS3 with a focus on
              scalable structure and modern UI design. It features full CRUD
              functionality for efficient data management, interactive tables,
              and dynamic user interfaces. The system also includes role-based
              access concepts, improving control and security. Built with a
              responsive layout, it ensures a seamless experience across desktop
              and mobile devices while maintaining a clean, professional, and
              visually engaging interface.
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="w-full flex flex-col md:flex-row md:justify-center items-center gap-6">
          <ProjectImage target={sCountry} />
          <div className="flex flex-col">
            <HeadProject label="Search Country" />
            <p className="text-slate-200 font-normal text-lg md:text-xl">
              A country search application built using JavaScript and CSS3 with
              a focus on dynamic data interaction and clean UI. It uses a dummy
              API to simulate real-world data fetching, allowing users to search
              and explore country information in real-time. Designed with a
              responsive layout, the app provides a smooth and user-friendly
              experience across desktop and mobile devices with a modern and
              minimal interface.
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div className="w-full flex flex-col md:flex-row md:justify-center items-center gap-6">
          <ProjectImage target={tBlog} />
          <div className="flex flex-col">
            <HeadProject label="Tech Blog" />
            <p className="text-slate-200 font-normal text-lg md:text-xl">
              A website slicing project focused on converting modern tech design
              into a fully functional front-end using HTML, CSS, and JavaScript.
              Emphasizes clean code structure, pixel-perfect implementation, and
              responsive design across various screen sizes. The result delivers
              a sleek, modern tech-style interface with smooth layout and
              consistent user experience on both desktop and mobile devices.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProject;
