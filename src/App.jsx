import { useState } from "react";
import profile from "./assets/Andre.png";
import whatsapp from "./assets/whatsapp.webp";

function App() {
  return (
    <>
      <div className="bg-[#000315] bg-[radial-gradient(circle,rgba(1, 51, 61, 1) 0%, rgba(0, 2, 18, 1) 100%)] w-full h-auto ">
        <div className="w-full items-center">
          <div className="h-screen overflow-hidden">
            <nav className="glass-bg fixed z-10 w-full">
              <div className="py-3 mx-4 flex items-center justify-between">
                <span
                  className="text-slate-300
                 text-3xl font-bold"
                >
                  Andre
                  <span className="text-cyan-500 font-bold text-2xl">.Bs</span>
                </span>
                <button
                  className="w-10 h-10 rounded-full bg-cyan-950 bg-center bg-cover "
                  style={{ backgroundImage: `url(${profile})` }}
                ></button>
              </div>
            </nav>
            <section className="pt-22 px-8 flex justify-center ">
              <div className="w-lg">
                <div>
                  <span className="text-cyan-500 font-normal italic text-sm">
                    Hello, Myself
                  </span>
                  <h1 className="text-cyan-500 font-bold text-4xl mt-2">
                    Andre
                  </h1>
                  <h3 className="text-cyan-500 font-bold text-2xl mb-2">
                    <span className="text-slate-200 font-bold text-2xl">
                      And I'm&nbsp;
                    </span>
                    Front-End Engineer
                  </h3>
                  <p className="text-slate-200 font-medium text-sm sm:w-lg">
                    Front-End Engineer dedicated to architecting
                    high-performance, scalable web applications with a focus on
                    clean code and seamless user experiences. Specializing in
                    bridging the gap between complex design systems and robust
                    engineering, transforming creative visions into interactive
                    digital realities.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-6">
                  <button
                    className="w-10 h-10 rounded-full bg-cyan-950 bg-center bg-cover "
                    style={{ backgroundImage: `url(${profile})` }}
                  ></button>
                  <button
                    className="w-10 h-10 rounded-full bg-cyan-950 bg-center bg-cover "
                    style={{ backgroundImage: `url(${profile})` }}
                  ></button>
                  <button
                    className="w-10 h-10 rounded-full bg-cyan-950 bg-center bg-cover "
                    style={{ backgroundImage: `url(${profile})` }}
                  ></button>
                </div>
              </div>
            </section>
          </div>
          <main className=" px-8 mt-5">
            {/* About */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center mb-4">
                <h1 className="text-cyan-500 font-bold text-2xl">About Me</h1>
                <hr className="w-10 rounded-full h-0.5 bg-slate-300" />
              </div>
              <div className="glass-bg p-3 rounded-2xl w-lg">
                <p className="text-slate-200 font-medium text-sm">
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
              </div>
            </div>
            {/* My Journey */}
            <div className="mt-20">
              <div className="flex flex-col items-center mb-4">
                <h1 className="text-cyan-500 font-bold text-2xl">My Journey</h1>
                <hr className="w-10 rounded-full h-0.5 bg-slate-300" />
              </div>
              <div className="grid grid-rows-4 gap-4 mt-8 justify-center">
                <div className="flex items-center gap-4">
                  <img src={whatsapp} alt="icon" className="w-10 h-10" />
                  <div className="flex flex-col">
                    <h1 className="text-cyan-500 font-bold text-xl">
                      ToDo App
                    </h1>
                    <span className="text-slate-200 font-normal text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deserunt, saepe?
                    </span>
                    <button className="bg-none border-none text-cyan-300 font-thin text-sm italic text-left cursor-pointer">
                      see more...
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src={whatsapp} alt="icon" className="w-10 h-10" />
                  <div className="flex flex-col">
                    <h1 className="text-cyan-500 font-bold text-xl">
                      ToDo App
                    </h1>
                    <span className="text-slate-200 font-normal text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deserunt, saepe?
                    </span>
                    <button className="bg-none border-none text-cyan-300 font-thin text-sm italic text-left cursor-pointer">
                      see more...
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src={whatsapp} alt="icon" className="w-10 h-10" />
                  <div className="flex flex-col">
                    <h1 className="text-cyan-500 font-bold text-xl">
                      ToDo App
                    </h1>
                    <span className="text-slate-200 font-normal text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deserunt, saepe?
                    </span>
                    <button className="bg-none border-none text-cyan-300 font-thin text-sm italic text-left cursor-pointer">
                      see more...
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src={whatsapp} alt="icon" className="w-10 h-10" />
                  <div className="flex flex-col">
                    <h1 className="text-cyan-500 font-bold text-xl">
                      ToDo App
                    </h1>
                    <span className="text-slate-200 font-normal text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deserunt, saepe?
                    </span>
                    <button className="bg-none border-none text-cyan-300 font-thin text-sm italic text-left cursor-pointer">
                      see more...
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* My Project */}
            <div className=" mt-20">
              <div className="flex flex-col items-center mb-4">
                <h1 className="text-cyan-500 font-bold text-2xl">My Project</h1>
                <hr className="w-10 rounded-full h-0.5 mt-1 bg-slate-300" />
              </div>
              <div className="grid grid-rows-3 gap-3 mt-8 justify-center items-center">
                {/* card 1 */}
                <div className=" flex gap-4 w-lg">
                  <img src={whatsapp} alt="icon" className="w-24 h-24" />
                  <span className="text-slate-200 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod quibusdam facilis ullam reprehenderit? Nam, voluptates.
                    Sapiente magni sit dolores sunt?
                  </span>
                </div>
                {/* card 2 */}
                <div className="flex gap-4 mt-2 w-lg">
                  <span className="text-slate-200 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod quibusdam facilis ullam reprehenderit? Nam, voluptates.
                    Sapiente magni sit dolores sunt?
                  </span>
                  <img src={whatsapp} alt="icon" className="w-24 h-24" />
                </div>
                {/* card 3 */}
                <div className="flex gap-4 mt-4 w-lg">
                  <img src={whatsapp} alt="icon" className="w-24 h-24" />
                  <span className="text-slate-200 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod quibusdam facilis ullam reprehenderit? Nam, voluptates.
                    Sapiente magni sit dolores sunt?
                  </span>
                </div>
              </div>
            </div>
            {/* connct Email */}
            <div className="mt-20">
              <div className="flex flex-col items-center mb-4">
                <h1 className="text-cyan-500 font-bold text-2xl">
                  Let's Connct and Say Hi
                </h1>
                <hr className="w-10 rounded-full h-0.5 mt-1 bg-slate-300" />
              </div>
              <div className="w-full flex items-center justify-center">
                <div className="flex flex-col w-lg">
                  <form action="">
                    <div className="flex flex-col mt-2.5">
                      <label className="text-sm font-medium text-slate-200 mb-1">
                        Your Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        className="w-full border text-slate-200 border-slate-200 rounded-md p-3"
                        type="text"
                        name="fullName"
                        placeholder="John Doe"
                        // value={dataForm.fullName}
                        // onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col mt-2.5">
                      <label className="text-sm font-medium text-slate-200 mb-1">
                        Your Email<span className="text-red-500">*</span>
                      </label>
                      <input
                        className="w-full border text-slate-200 border-slate-200 rounded-md p-3"
                        type="mail"
                        name="fullName"
                        placeholder="Johndoe@gmail.com"
                        // value={dataForm.fullName}
                        // onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col mt-2.5">
                      <label className="text-sm font-medium text-slate-200 mb-1">
                        Message<span className="text-red-500">*</span>
                      </label>
                      <textarea
                        className="w-full border text-slate-200 border-slate-200 rounded-md p-3"
                        type="text"
                        name="content"
                        placeholder="Hello, I'm John Doe let's be friends"
                        // value={dataForm.fullName}
                        // onChange={handleChange}
                        required
                      />
                    </div>
                    <button className="w-full h-10 mt-4 rounded-md bg-cyan-500 text-slate-200 font-normal ">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
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
