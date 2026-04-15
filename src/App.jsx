import { useState } from "react";
import NavButton from "./components/atoms/navButton";
import IconButton from "./components/atoms/iconButton";
import SendMail from "./components/molecules/sendMail";
import profile from "./assets/saya.webp";
import adminPanel from "./assets/adminPanel.webp";
import sCountry from "./assets/searchCountry.webp";
import tBlog from "./assets/techBlog.webp";
import toDoApp from "./assets/toDoApp.webp";
import webVideo from "./assets/webVideo.webp";
import sPort from "./assets/slicingPort.webp";
import dashAdmin from "./assets/dashAdmin.webp";

function App() {
  return (
    <>
      <div className="bg-[#000315] bg-[radial-gradient(circle,rgba(1, 51, 61, 1) 0%, rgba(0, 2, 18, 1) 100%)] w-full h-auto ">
        <div className="w-full items-center">
          <div className="h-screen overflow-hidden w-full mb-10 items-center">
            {/* navbar */}
            <nav className="glass-bg fixed z-10 w-full ">
              <div className="py-3 mx-4 flex items-center justify-between">
                <a
                  href="#home"
                  className="text-slate-300
                 text-3xl font-bold md:ml-8"
                >
                  Andre
                  <span className="text-cyan-500 font-bold text-2xl">.Bs</span>
                </a>
                <div className="hidden sm:flex sm:text-lg md:mr-8 items-center justify-between gap-4 md:gap-8 mr-3">
                  <NavButton target="#about" label="About" />
                  <NavButton target="#journey" label="Journey" />
                  <NavButton target="#project" label="My Project" />
                  <NavButton target="#mail" label="Send Mail" />
                </div>
                <button
                  className="sm:hidden w-10 h-10 rounded-full bg-cyan-950 bg-center bg-cover "
                  style={{ backgroundImage: `url(${profile})` }}
                ></button>
              </div>
            </nav>
            {/* hero section */}
            <section className=" px-8 md:px-14 md:grid md:grid-cols-2 md:gap-10 flex items-center justify-center ">
              <div className="w-full">
                <div id="home" className="pt-20">
                  <span className="text-cyan-500 font-normal italic text-sm md:text-lg">
                    Hello, Myself
                  </span>
                  <h1 className="text-cyan-500 font-bold text-4xl mt-2 md:text-5xl">
                    Andre
                  </h1>
                  <h3 className="text-cyan-500 font-bold text-2xl md:text-3xl mb-2">
                    <span className="text-slate-200 font-bold text-2xl md:text-3xl">
                      And I'm&nbsp;
                    </span>
                    Front-End Engineer
                  </h3>
                  <p className="text-slate-200 font-normal text-md sm:text-lg">
                    Front-End Engineer dedicated to architecting
                    high-performance, scalable web applications with a focus on
                    clean code and seamless user experiences. Specializing in
                    bridging the gap between complex design systems and robust
                    engineering, transforming creative visions into interactive
                    digital realities.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-6">
                  <IconButton
                    variant="wa"
                    url={`https://wa.me/6287759275892`}
                  />
                  <IconButton
                    variant="github"
                    url={`https://github.com/andrebagus18`}
                  />
                  <IconButton
                    variant="linkedin"
                    url={`https://linkedin.com/in/andre-bagus`}
                  />
                </div>
              </div>
              <div className="hidden md:flex md:w-[300px] md:h-60 items-center justify-center object-cover rounded-">
                <img src={profile} alt="profile" className="ml-40 mt-20" />
              </div>
            </section>
          </div>
          <main className=" px-8 mt-5">
            {/* About */}
            <div
              className="w-full flex flex-col items-center justify-center overflow-hidden px-4 pt-16"
              id="about"
            >
              <div className="flex flex-col items-center mb-4">
                <h1 className="text-cyan-500 font-bold text-3xl">About Me</h1>
                <hr className="w-10 rounded-full h-0.5 bg-slate-300" />
              </div>
              <div className="flex flex-col glass-bg px-6 py-6 rounded-3xl lg:w-4xl mt-8">
                <p className="text-slate-200 font-normal text-md md:text-lg">
                  I'm a Full-Stack Developer specializing in React, Tailwind
                  CSS, Express.js, PHP, MySQL, MongoDB, and more. I focus on
                  building high-performance, pixel-perfect web applications with
                  clean, maintainable code. My expertise lies in bridging
                  complex backend logic with responsive, fast-loading frontend
                  interfaces. After completing a project, I ensure every product
                  I create is well-integrated and user-centric. I'm committed to
                  transforming your vision into a scalable digital reality with
                  a modern technology stack.
                </p>
                <div className="flex flex-col gap-2 mt-10">
                  <div>
                    <span className="text-slate-200 text-md md:text-lg font-medium">
                      My Skill *
                    </span>
                  </div>
                  <div className="flex gap-4 text-slate-200 text-md md:text-lg">
                    <span>-- ReactJS</span>
                    <span>-- TailwindCSS</span>
                    <span>-- MySQL</span>
                    <span>-- MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
            {/* My Journey */}
            <div
              className="mt-20 pt-16 flex flex-col justify-center items-center"
              id="journey"
            >
              <div className="flex flex-col items-center mb-4">
                <h1 className="text-cyan-500 font-bold text-3xl">My Journey</h1>
                <hr className="w-10 rounded-full h-0.5 bg-slate-300" />
              </div>
              <div className="grid grid-rows-4 gap-8 mt-8 items-center justify-center lg:w-4xl">
                <div className="flex items-center gap-4">
                  <img
                    src={toDoApp}
                    alt="icon"
                    className="w-24 h-24 rounded-lg md:w-28 md:h-28"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-cyan-500 font-bold text-xl">
                      ToDo App
                    </h1>
                    <span className="text-slate-200 font-normal text-md md:text-lg">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Doloribus, mollitia quos unde maiores illum rem molestias
                      placeat! Deleniti possimus nostrum molestiae error, dolor
                      dignissimos obcaecati magnam voluptatum reprehenderit nemo
                      in.
                    </span>
                    <button className="bg-none border-none text-cyan-300 font-thin text-md italic text-left cursor-pointer">
                      see more...
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={sPort}
                    alt="icon"
                    className="w-24 h-24 rounded-lg md:w-28 md:h-28"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-cyan-500 font-bold text-xl">
                      Sliching Portfolio Web
                    </h1>
                    <span className="text-slate-200 font-normal text-md md:text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit repellat tempora eaque eius unde autem, obcaecati
                      repellendus sed, cupiditate, omnis ipsum debitis dolor?
                      Neque, libero veritatis. Aut nemo quos similique!
                    </span>
                    <button className="bg-none border-none text-cyan-300 font-thin text-md italic text-left cursor-pointer">
                      see more...
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={dashAdmin}
                    alt="icon"
                    className="w-24 h-24 rounded-lg md:w-28 md:h-28"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-cyan-500 font-bold text-xl">
                      Dashboard Admin
                    </h1>
                    <span className="text-slate-200 font-normal text-md md:text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempora recusandae facere dignissimos! Ea laboriosam saepe
                      expedita doloremque necessitatibus deleniti perferendis
                      magnam qui placeat possimus dolore, tenetur, nobis
                      obcaecati voluptates esse!
                    </span>
                    <button className="bg-none border-none text-cyan-300 font-thin text-md italic text-left cursor-pointer">
                      see more...
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={webVideo}
                    alt="icon"
                    className="w-24 h-24 rounded-lg md:w-28 md:h-28"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-cyan-500 font-bold text-xl">
                      Web Video
                    </h1>
                    <span className="text-slate-200 font-normal text-md md:text-lg">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Porro, facere eius? Commodi aliquid nemo, inventore velit
                      repellendus voluptas ratione asperiores delectus
                      voluptatem ipsam, corporis repellat. Similique nesciunt
                      sed ratione magni.
                    </span>
                    <button className="bg-none border-none text-cyan-300 font-thin text-md italic text-left cursor-pointer">
                      see more...
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* My Project */}
            <div
              className=" mt-20 pt-16 flex flex-col items-center justify-center"
              id="project"
            >
              <div className="flex flex-col items-center mb-4">
                <h1 className="text-cyan-500 font-bold text-3xl">My Project</h1>
                <hr className="w-10 rounded-full h-0.5 mt-1 bg-slate-300" />
              </div>
              <div className="grid grid-rows-3 gap-6 mt-8 w-full lg:w-4xl justify-center items-center">
                {/* card 1 */}
                <div className=" flex gap-4 items-center">
                  <img
                    src={adminPanel}
                    alt="icon"
                    className="w-24 h-24 rounded-lg md:w-52 md:h-40"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-cyan-500 font-bold text-xl">
                      Admin Panel
                    </h1>
                    <span className="text-slate-200 text-md">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod quibusdam facilis ullam reprehenderit? Nam,
                      voluptates. Sapiente magni sit dolores sunt?
                    </span>
                  </div>
                </div>
                {/* card 2 */}
                <div className="flex gap-4 mt-2 items-center">
                  <div className="flex flex-col">
                    <h1 className="text-cyan-500 font-bold text-xl">
                      Search Country
                    </h1>
                    <span className="text-slate-200 text-md">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod quibusdam facilis ullam reprehenderit? Nam,
                      voluptates. Sapiente magni sit dolores sunt?
                    </span>
                  </div>
                  <img
                    src={sCountry}
                    alt="icon"
                    className="w-24 h-24 rounded-lg md:w-52 md:h-40"
                  />
                </div>
                {/* card 3 */}
                <div className="flex gap-4 mt-4 items-center">
                  <img
                    src={tBlog}
                    alt="icon"
                    className="w-24 h-24 rounded-lg md:w-52 md:h-40"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-cyan-500 font-bold text-xl">
                      Tech Blog
                    </h1>
                    <span className="text-slate-200 text-md">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod quibusdam facilis ullam reprehenderit? Nam,
                      voluptates. Sapiente magni sit dolores sunt?
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* connect Email */}
            <SendMail />
          </main>
          <footer className=" px-8 mt-12 border border-t border-slate-700">
            <div className="w-full h-auto p-6 flex flex-col items-center">
              <h1 className="text-slate-200 font-normal text-xl">
                Andre Bagus Setiawan
              </h1>
              <p className="text-sm text-gray-500">
                ©2026 All Rights Reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
