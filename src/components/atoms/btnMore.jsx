import UseText from "../../store/useTExt";

function BtnMore({ onClick }) {
  // ambil semua data nya
  const isExpand = UseText((state) => state.isExpand);
  const toggleText = UseText((state) => state.toggleText);

  return (
    <>
      <button
        onClick={onClick}
        className="bg-none border-none text-cyan-300 font-thin text-md italic text-left cursor-pointer"
      >
        {isExpand ? "show less..." : "see more..."}
      </button>
    </>
  );
}

export default BtnMore;
