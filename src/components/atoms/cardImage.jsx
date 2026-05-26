function CardImage({ target }) {
  return (
    <>
      <div className="flex justify-center">
        <img
          src={target}
          alt="icon"
          className="w-full max-w-[400px] rounded-lg md:w-40 md:h-40"
        />
      </div>
    </>
  );
}

export default CardImage;
