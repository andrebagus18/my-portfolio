import IconButton from "../atoms/iconButton";

function HeroDesc() {
  return (
    <div className="w-full">
      <div id="home" className="pt-20">
        <span className="text-cyan-500 font-normal italic text-sm md:text-lg">
          Hello, I'm
        </span>
        <h1 className="text-cyan-500 font-bold text-4xl mt-2 md:text-5xl">
          Andre
        </h1>
        <h3 className="text-cyan-500 font-bold text-2xl md:text-3xl mb-2">
          <span className="text-slate-200 font-bold text-2xl md:text-3xl">
            And I'm&nbsp;
          </span>
          Front-End Developer
        </h3>
        <p className="text-slate-200 font-normal text-lg sm:text-xl">
          Frontend Developer passionate about building responsive and
          user-friendly web applications. Experienced with HTML, CSS,
          JavaScript, React, and creating personal projects to improve
          problem-solving and development skills. Always learning new
          technologies and interested in remote opportunities and international
          collaboration.
        </p>
      </div>
      <div className="mt-8 flex items-center gap-6">
        <IconButton variant="wa" url={`https://wa.me/6287759275892`} />
        <IconButton variant="github" url={`https://github.com/andrebagus18`} />
        <IconButton
          variant="linkedin"
          url={`https://linkedin.com/in/andre-bagus`}
        />
      </div>
    </div>
  );
}

export default HeroDesc;
