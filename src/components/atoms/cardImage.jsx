function CardImage({ target }) {
  return (
    <>
      <img
        src={target}
        alt="icon"
        className="w-24 h-24 rounded-lg md:w-28 md:h-28"
      />
    </>
  );
}

export default CardImage;
