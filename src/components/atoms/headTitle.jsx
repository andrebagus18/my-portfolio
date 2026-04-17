function HeadTitle({ label }) {
  return (
    <div className="flex flex-col items-center mb-4">
      <h1 className="text-cyan-500 font-bold text-3xl">{label}</h1>
      <hr className="w-14 rounded-full h-1 mt-2 bg-slate-300" />
    </div>
  );
}
export default HeadTitle;
