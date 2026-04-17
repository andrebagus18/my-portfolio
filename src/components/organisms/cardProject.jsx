import HeadProject from "../atoms/headProject";
import ProjectImage from "../atoms/projectImage";
import adminPanel from "../../assets/adminPanel.webp";
import sCountry from "../../assets/searchCountry.webp";
import tBlog from "../../assets/techBlog.webp";
import Cards from "../atoms/cards";

function CardProject() {
  return (
    <>
      <div className="grid grid-rows-3 gap-6 mt-8 w-full lg:w-4xl justify-center items-center">
        {/* card 1 */}
        <div className=" flex gap-8 items-center">
          <ProjectImage target={adminPanel} />
          <div className="flex flex-col">
            <HeadProject label="Admin Panel" />
            <Cards text="An admin panel developed using JavaScript and CSS3 with a focus on scalable structure and modern UI design. It features full CRUD functionality for efficient data management, interactive tables, and dynamic user interfaces. The system also includes role-based access concepts, improving control and security. Built with a responsive layout, it ensures a seamless experience across desktop and mobile devices while maintaining a clean, professional, and visually engaging interface." />
          </div>
        </div>
        {/* card 2 */}
        <div className="flex gap-8 mt-6 items-center">
          <div className="flex flex-col">
            <HeadProject label="Search Country" />
            <Cards text="A country search application built using JavaScript and CSS3 with a focus on dynamic data interaction and clean UI. It uses a dummy API to simulate real-world data fetching, allowing users to search and explore country information in real-time. Designed with a responsive layout, the app provides a smooth and user-friendly experience across desktop and mobile devices with a modern and minimal interface." />
          </div>
          <ProjectImage target={sCountry} />
        </div>
        {/* card 3 */}
        <div className="flex gap-8 mt-2 items-center">
          <ProjectImage target={tBlog} />
          <div className="flex flex-col">
            <HeadProject label="Tech Blog" />
            <Cards text="A website slicing project focused on converting modern tech design into a fully functional front-end using HTML, CSS, and JavaScript. Emphasizes clean code structure, pixel-perfect implementation, and responsive design across various screen sizes. The result delivers a sleek, modern tech-style interface with smooth layout and consistent user experience on both desktop and mobile devices." />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProject;
