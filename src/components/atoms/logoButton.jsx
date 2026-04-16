import profile from "../../assets/saya.webp";

function LogoButton() {
  return (
    <>
      <button
        className="sm:hidden w-10 h-10 rounded-full bg-cyan-950 bg-center bg-cover "
        style={{ backgroundImage: `url(${profile})` }}
      ></button>
    </>
  );
}

export default LogoButton;
