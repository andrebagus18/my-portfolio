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
          Front-End Engineer
        </h3>
        <p className="text-slate-200 font-normal text-md sm:text-lg">
          Front-End Engineer dedicated to architecting high-performance,
          scalable web applications with a focus on clean code and seamless user
          experiences. Specializing in bridging the gap between complex design
          systems and robust engineering, transforming creative visions into
          interactive digital realities.
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
