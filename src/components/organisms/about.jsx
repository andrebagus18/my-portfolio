import HeadTitle from "../atoms/headTitle";

function About() {
  return (
    <div
      className="w-full flex flex-col items-center justify-center overflow-hidden px-4 pt-20"
      id="about"
    >
      <HeadTitle label="About Me" />
      <div className="flex flex-col overflow-hidden glass-bg p-2 rounded-3xl mt-8">
        <div className="p-5">
          <p className="text-slate-200 font-normal text-lg md:text-lg lg:text-xl">
            Hi, I'm Andre, a Frontend Developer from Indonesia passionate about
            building modern, responsive, and user-friendly web applications. I
            focus on frontend development, creating intuitive user interfaces
            and solving real-world problems. I'm also continuously expanding my
            knowledge of backend development to understand how APIs, server-side
            logic, and databases work together to build complete web
            applications. I enjoy learning new technologies and improving my
            skills through hands-on projects.
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-10 mb-4">
          <div>
            <span className="text-slate-200 text-xl md:text-2xl font-medium px-5">
              My Skills *
            </span>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-5 text-slate-200 text-lg md:text-xl h-auto ">
            <div className="flex flex-col gap-2">
              <span className="text-slate-200 text-xl font-bold">Frontend</span>
              <ul className="px-5 list-disc text-xl">
                <li className="p-1">React</li>
                <li className="p-1">JavaScript</li>
                <li className="p-1">CSS3</li>
                <li className="p-1">Tailwind CSS</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-slate-200 text-xl font-bold">
                Backend & APIs
              </span>
              <ul className="px-5 list-disc text-xl">
                <li className="p-1">Laravel</li>
                <li className="p-1">Node JS</li>
                <li className="p-1">Express JS</li>
                <li className="p-1">REST API</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-slate-200 text-xl font-bold">Database</span>
              <ul className="px-5 list-disc text-xl">
                <li className="p-1">MySQL</li>
                <li className="p-1">PostgreSQL</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-slate-200 text-xl font-bold">Tools</span>
              <ul className="px-5 list-disc text-xl">
                <li className="p-1">Git & Github</li>
                <li className="p-1">Postman</li>
                <li className="p-1">VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
