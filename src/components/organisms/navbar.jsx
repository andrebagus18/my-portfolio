import NavButton from "../atoms/navButton";
import NavLogo from "../atoms/navLogo";
import LogoButton from "../atoms/logoButton";

function Navbar() {
  return (
    <>
      <nav className="glass-bg fixed z-10 w-full ">
        <div className="py-3 mx-4 flex items-center justify-between">
          <NavLogo />
          <div className="hidden sm:flex sm:text-lg md:mr-8 items-center justify-between gap-4 md:gap-8 mr-3">
            <NavButton target="#about" label="About" />
            <NavButton target="#journey" label="Journey" />
            <NavButton target="#project" label="My Project" />
            <NavButton target="#mail" label="Send Mail" />
          </div>
          <LogoButton />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
