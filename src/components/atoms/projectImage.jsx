function ProjectImage({ target }) {
  return (
    <>
      <div className="flex justify-center">
        <img
          src={target}
          alt="icon"
          className="w-full max-w-100 rounded-lg md:w-52 md:h-40"
        />
      </div>
    </>
  );
}

export default ProjectImage;
