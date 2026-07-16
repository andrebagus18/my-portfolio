function ProjectImage({ target }) {
  return (
    <>
      <div className="w-full">
        <img
          src={target}
          alt="icon"
          className="rounded-xl md:h-60 h-40 w-full"
        />
      </div>
    </>
  );
}

export default ProjectImage;
