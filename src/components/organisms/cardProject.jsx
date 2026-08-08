import HeadProject from "../atoms/headProject";
import ProjectImage from "../atoms/projectImage";
import ppdb from "../../assets/ppdb.webp";
import todo from "../../assets/toDoApp.webp";
import library from "../../assets/library-books.webp";
import adminPanel from "../../assets/adminPanel.webp";
import calc1 from "../../assets/calc1.webp";
import dashSiswa1 from "../../assets/dashSiswa1.webp";
import Cards from "../atoms/cards";
import { FaGithub } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";

function CardProject({ onDetail }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 w-full">
        {/* card 1 */}
        <div className="w-full flex flex-col p-4 gap-3 border border-cyan-800/40 bg-cyan-900/10 rounded-xl transition-all duration-300 hover:border-cyan-700 hover:scale-105 hover:shadow-2xl hover:z-1 relative">
          <ProjectImage target={ppdb} />
          <div className="flex flex-col">
            <HeadProject label="PPDB Online" />
            <div className="min-h-30 md:min-h-40 mb-4">
              <p className="text-slate-200 font-normal text-md md:text-md lg:text-lg">
                A web-based student admission system that digitizes
                registration, document verification, and admission management,
                reducing manual paperwork and improving administrative
                efficiency.
              </p>
            </div>
          </div>
          <div className="flex mt-auto gap-4">
            <button
              type="button"
              className="px-3 py-1 md:px-4 md:py-2 rounded-xl glass-bg text-cyan-800 text-lg xl:text-xl cursor-pointer hover:text-cyan-500"
            >
              <span className="flex gap-2 xl:gap-4  items-center justify-center">
                <FaGithub className="text-lg xl:text-xl" /> Repo
              </span>
            </button>
            <button
              type="button"
              onClick={() => onDetail("ppdb")}
              className="px-3 py-1 md:px-4 md:py-2 rounded-xl glass-bg text-amber-800 text-lg xl:text-xl cursor-pointer hover:text-amber-500"
            >
              <span className="flex gap-2 xl:gap-4  items-center justify-center">
                <BiMessageSquareDetail className="text-lg xl:text-xl" /> Details
              </span>
            </button>
          </div>
        </div>
        {/* card 2 */}
        <div className="w-full flex flex-col p-4 gap-3 border border-cyan-800/40 bg-cyan-900/10 rounded-xl transition-all duration-300 hover:border-cyan-700 hover:scale-105 hover:shadow-2xl hover:z-1 relative">
          <ProjectImage target={todo} />
          <div className="flex flex-col">
            <HeadProject label="Todo App" />
            <div className="min-h-30 md:min-h-40 mb-4">
              <p className="text-slate-200 font-normal text-md md:text-md lg:text-lg">
                A task management application designed to help users organize
                daily activities, track progress, and improve productivity
                through a simple and intuitive interface.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              className="px-3 py-1 md:px-4 md:py-2 rounded-xl glass-bg text-cyan-800 text-lg xl:text-xl cursor-pointer hover:text-cyan-500"
            >
              <span className="flex gap-4 items-center justify-center">
                <FaGithub className="text-lg xl:text-xl" /> Repo
              </span>
            </button>
            <button
              type="button"
              onClick={() => onDetail("todo")}
              className="px-3 py-1 md:px-4 md:py-2 rounded-xl glass-bg text-amber-800 text-lg xl:text-xl cursor-pointer hover:text-amber-500"
            >
              <span className="flex gap-4 items-center justify-center">
                <BiMessageSquareDetail className="text-lg xl:text-xl" /> Details
              </span>
            </button>
          </div>
        </div>
        {/* card 3 */}
        <div className="w-full flex flex-col p-4 gap-3 border border-cyan-800/40 bg-cyan-900/10 rounded-xl transition-all duration-300 hover:border-cyan-700 hover:scale-105 hover:shadow-2xl hover:z-1 relative">
          <ProjectImage target={library} />
          <div className="flex flex-col">
            <HeadProject label="Library Books" />
            <div className="min-h-30 md:min-h-40 mb-4">
              <p className="text-slate-200 font-normal text-md md:text-md lg:text-lg">
                A library management system that simplifies book cataloging,
                borrowing, and return processes while helping librarians manage
                inventory efficiently.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              className="px-3 py-1 md:px-4 md:py-2 rounded-xl glass-bg text-cyan-800 text-lg xl:text-xl cursor-pointer hover:text-cyan-500"
            >
              <span className="flex gap-4 items-center justify-center">
                <FaGithub className="text-lg xl:text-xl" /> Repo
              </span>
            </button>
            <button
              type="button"
              onClick={() => onDetail("library")}
              className="px-3 py-1 md:px-4 md:py-2 rounded-xl glass-bg text-amber-800 text-lg xl:text-xl cursor-pointer hover:text-amber-500"
            >
              <span className="flex gap-4 items-center justify-center">
                <BiMessageSquareDetail className="text-lg xl:text-xl" /> Details
              </span>
            </button>
          </div>
        </div>
        {/* card 4 */}
        <div className="w-full flex flex-col p-4 gap-3 border border-cyan-800/40 bg-cyan-900/10 rounded-xl transition-all duration-300 hover:border-cyan-700 hover:scale-105 hover:shadow-2xl hover:z-1 relative">
          <ProjectImage target={adminPanel} />
          <div className="flex flex-col">
            <HeadProject label="Admin Panel" />
            <div className="min-h-30 md:min-h-40 mb-4">
              <p className="text-slate-200 font-normal text-md md:text-md lg:text-xl">
                A role-based administration panel that streamlines user
                management, content organization, and system operations through
                an intuitive interface.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              className="px-3 py-1 md:px-4 md:py-2 rounded-xl glass-bg text-cyan-800 text-lg xl:text-xl cursor-pointer hover:text-cyan-500"
            >
              <span className="flex gap-4 items-center justify-center">
                <FaGithub className="text-lg xl:text-xl" /> Repo
              </span>
            </button>
            <button
              type="button"
              onClick={() => onDetail("adminPanel")}
              className="px-3 py-1 md:px-4 md:py-2 rounded-xl glass-bg text-amber-800 text-lg xl:text-xl cursor-pointer hover:text-amber-500"
            >
              <span className="flex gap-4 items-center justify-center">
                <BiMessageSquareDetail className="text-lg xl:text-xl" /> Details
              </span>
            </button>
          </div>
        </div>
        {/* card 5 */}
        <div className="w-full flex flex-col p-4 gap-3 border border-cyan-800/40 bg-cyan-900/10 rounded-xl transition-all duration-300 hover:border-cyan-700 hover:scale-105 hover:shadow-2xl hover:z-1 relative">
          <ProjectImage target={calc1} />
          <div className="flex flex-col">
            <HeadProject label="Calculator" />
            <div className="min-h-30 md:min-h-40 mb-4">
              <p className="text-slate-200 font-normal text-md md:text-md lg:text-lg">
                A simple calculator application that performs basic arithmetic
                operations with a clean interface to provide quick and accurate
                calculations.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              className="px-3 py-1 md:px-4 md:py-2 rounded-xl glass-bg text-cyan-800 text-lg xl:text-xl cursor-pointer hover:text-cyan-500"
            >
              <span className="flex gap-4 items-center justify-center">
                <FaGithub className="text-lg xl:text-xl" /> Repo
              </span>
            </button>
            <button
              type="button"
              onClick={() => onDetail("calc1")}
              className="px-3 py-1 md:px-4 md:py-2 rounded-xl glass-bg text-amber-800 text-lg xl:text-xl cursor-pointer hover:text-amber-500"
            >
              <span className="flex gap-4 items-center justify-center">
                <BiMessageSquareDetail className="text-lg xl:text-xl" /> Details
              </span>
            </button>
          </div>
        </div>
        {/* card 6 */}
        <div className="w-full flex flex-col p-4 gap-3 border border-cyan-800/40 bg-cyan-900/10 rounded-xl transition-all duration-300 hover:border-cyan-700 hover:scale-105 hover:shadow-2xl hover:z-1 relative">
          <ProjectImage target={dashSiswa1} />
          <div className="flex flex-col">
            <HeadProject label="Student Dashboard" />
            <div className="min-h-30 md:min-h-40 mb-4">
              <p className="text-slate-200 font-normal text-md md:text-md lg:text-lg">
                A student dashboard that provides centralized access to academic
                information, announcements, and progress tracking in a
                responsive web interface.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              className="px-3 py-1 md:px-4 md:py-2 rounded-xl glass-bg text-cyan-800 text-lg xl:text-xl cursor-pointer hover:text-cyan-500"
            >
              <span className="flex gap-4 items-center justify-center">
                <FaGithub className="text-lg xl:text-xl" /> Repo
              </span>
            </button>
            <button
              type="button"
              onClick={() => onDetail("dashSiswa1")}
              className="px-3 py-1 md:px-4 md:py-2 rounded-xl glass-bg text-amber-800 text-lg xl:text-xl cursor-pointer hover:text-amber-500"
            >
              <span className="flex gap-4 items-center justify-center">
                <BiMessageSquareDetail className="text-lg xl:text-xl" /> Details
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProject;
