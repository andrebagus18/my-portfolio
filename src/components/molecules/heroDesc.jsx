import IconButton from "../atoms/iconButton";

function HeroDesc() {
  return (
    <div className="w-full">
      <div id="home" className="pt-30">
        <span className="text-cyan-500 font-normal italic text-sm md:text-xl">
          Hello, I'm
        </span>
        <h1 className="text-cyan-500 font-bold text-4xl my-2 md:text-4xl xl:text-5xl">
          Andre
        </h1>
        <h3 className="text-cyan-500 font-bold text-2xl md:text-4xl xl:text-5xl mb-4">
          <span className="text-slate-200 font-bold text-2xl md:text-2xl xl:text-3xl">
            And I'm&nbsp;
          </span>
          Frontend Developer
        </h3>
        <p className="text-slate-200 font-normal text-lg sm:text-xl md:text-xl">
          I build responsive and user-friendly web applications, focusing on
          frontend development, clean code, and practical solutions. I also
          explore backend technologies to understand how complete web
          applications work.
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
