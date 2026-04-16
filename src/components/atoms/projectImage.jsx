function ProjectImage({ target }) {
  return (
    <>
      <img
        src={target}
        alt="icon"
        className="w-24 h-24 rounded-lg md:w-52 md:h-40"
      />
    </>
  );
}

export default ProjectImage;
