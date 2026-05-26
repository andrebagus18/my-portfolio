import Cards from "../atoms/cards";
import CardImage from "../atoms/cardImage";
import CardHead from "../atoms/cardHead";
import toDoApp from "../../assets/toDoApp.webp";
import webVideo from "../../assets/webVideo.webp";
import sPort from "../../assets/slicingPort.webp";
import dashAdmin from "../../assets/dashAdmin.webp";

function CardJourney() {
  return (
    <div className="grid grid-rows-4 gap-8 mt-8 items-center justify-center lg:w-4xl px-5">
      <div className="w-full flex flex-col md:flex-row md:justify-center items-center gap-6">
        <CardImage target={toDoApp} />
        <div className="flex flex-col">
          <CardHead label="ToDo App" />
          <p className="text-slate-200 font-normal text-lg md:text-xl">
            This Todo List app I developed as part of my front-end development
            journey. Built using JavaScript and CSS3, it features add, edit, and
            delete tasks with dynamic interactions. The design is responsive so
            it remains comfortable to use on various devices, including mobile,
            with a simple and user-friendly interface.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row md:justify-center items-center gap-6">
        <CardImage target={webVideo} />
        <div className="flex flex-col">
          <CardHead label="Web video" />
          <p className="text-slate-200 font-normal text-lg md:text-xl">
            Aplikasi web video yang dikembangkan menggunakan React.js dan
            Tailwind CSS dengan pendekatan modern front-end. Menggunakan Zustand
            untuk state management, Axios untuk pengambilan data API, serta
            MockAPI sebagai sumber data. Dilengkapi dengan fitur login dan
            register dengan desain responsif, sehingga memberikan pengalaman
            pengguna yang aman, interaktif, dan nyaman di berbagai perangkat.
            Aplikasi ini juga menampilkan daftar video dengan performa optimal
            dan UI yang clean serta modern.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row md:justify-center items-center gap-6">
        <CardImage target={sPort} />
        <div className="flex flex-col">
          <CardHead label="Slicing Web Portfolio" />
          <p className="text-slate-200 font-normal text-lg md:text-xl">
            Web Slicing with Tailwind CSS. This website slicing project, from
            design to code, uses Tailwind CSS as part of the front-end
            development process. The focus is on implementing a clean layout,
            using utility-first styling, and ensuring a responsive display
            across various screen sizes. The final result features a consistent,
            modern UI optimized for both desktop and mobile user experiences.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row md:justify-center items-center gap-6">
        <CardImage target={dashAdmin} />
        <div className="flex flex-col">
          <CardHead label="Dashboard admin" />
          <p className="text-slate-200 font-normal text-lg md:text-xl">
            The admin dashboard I developed uses JavaScript and CSS3, focusing
            on a modern and interactive interface. It features components such
            as data overviews, tables, and structured navigation to facilitate
            data management. The design is responsive and clean, ensuring a
            comfortable and visually appealing experience across various
            devices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardJourney;
