import HeadTitle from "../atoms/headTitle";

function About() {
  return (
    <div
      className="w-full flex flex-col items-center justify-center overflow-hidden px-4 pt-16"
      id="about"
    >
      <HeadTitle label="About Me" />
      <div className="flex flex-col overflow-hidden glass-bg py-5 rounded-3xl lg:w-4xl mt-8">
        <p className="text-slate-200 font-normal text-md md:text-lg px-5">
          I'm a Front-End Engineer specializing in React, Tailwind CSS, and
          intermediate-level skills in Express.js, PHP, MySQL, and MongoDB. I
          focus on building high-performance, pixel-perfect web applications
          with clean, maintainable code. My expertise lies in responsive,
          fast-loading front-end interfaces, with a slight back-end approach.
          After completing a project, I ensure every product I build is
          well-integrated and user-centric. I'm committed to transforming your
          vision into a scalable digital reality with a modern technology stack.
        </p>
        <div className="flex flex-col gap-2 mt-10">
          <div>
            <span className="text-slate-200 text-md md:text-lg font-medium px-5">
              My Skill *
            </span>
          </div>
          <div className="flex gap-4 text-slate-200 text-md md:text-lg h-auto ">
            <ul className="px-5 gap-4 sm:flex">
              <li>-- ReactJS</li>
              <li>-- TailwindCSS</li>
              <li>-- ExpressJS</li>
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
