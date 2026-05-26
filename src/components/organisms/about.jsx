import HeadTitle from "../atoms/headTitle";

function About() {
  return (
    <div
      className="w-full flex flex-col items-center justify-center overflow-hidden px-4 pt-16"
      id="about"
    >
      <HeadTitle label="About Me" />
      <div className="flex flex-col overflow-hidden glass-bg py-5 rounded-3xl lg:w-4xl mt-8">
        <p className="text-slate-200 font-normal text-lg md:text-xl px-5">
          I am a Frontend Developer who enjoys building responsive,
          user-friendly, and modern web applications. I continuously improve my
          skills through personal projects and hands-on experience with
          JavaScript, React, HTML, and CSS. I am passionate about learning new
          technologies, solving problems, and creating clean user interfaces.
          Currently, I am looking for opportunities to grow, collaborate
          internationally, and contribute to meaningful projects.
        </p>
        <div className="flex flex-col gap-2 mt-10">
          <div>
            <span className="text-slate-200 text-lg md:text-xl font-medium px-5">
              My Skill *
            </span>
          </div>
          <div className="flex gap-4 text-slate-200 text-lg md:text-xl h-auto ">
            <ul className="px-5 gap-4 sm:flex">
              <li>-- ReactJS</li>
              <li>-- JavaScript</li>
              <li>-- TailwindCSS</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-10">
          <div>
            <span className="text-slate-200 text-lg md:text-xl font-medium px-5">
              UpSkill *
            </span>
          </div>
          <div className="flex gap-4 text-slate-200 text-lg md:text-xl h-auto ">
            <ul className="px-5 gap-4 sm:flex">
              <li>-- ExpressJS</li>
              <li>-- NodeJS</li>
              <li>-- PHP</li>
              <li>-- MySQL</li>
              <li>-- MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
