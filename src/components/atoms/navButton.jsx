function NavButton({ target, label }) {
  return (
    <a
      href={target}
      className=" text-cyan-500 hover:text-cyan-600 font-normal text-md relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
    >
      {label}
    </a>
  );
}

export default NavButton;
