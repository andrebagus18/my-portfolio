import { Link } from "react-router-dom";

function IconButton({ onClick, variant = "wa", url }) {
  const bg =
    "w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-950 bg-center bg-cover border-2 hover:border-cyan-400 border-cyan-700";
  const styles = {
    wa: `${bg} bg-[url('./assets/whatsapp.webp')]`,
    github: `${bg} bg-[url('./assets/github.webp')]`,
    linkedin: `${bg} bg-[url('./assets/linkedin.webp')]`,
  };

  const className = styles[variant] || bg;

  if (url) {
    return <a href={url} target="_blank" className={className}></a>;
  }
  return <button onClick={onClick} className={className}></button>;
}

export default IconButton;
