import BtnMore from "./btnMore";
import { useState } from "react";

function Cards({ text }) {
  const [isExpand, setIsExpand] = useState(false);
  const limit = 200;

  const renderText = isExpand ? text : `${text.substring(0, limit)}..`;
  return (
    <>
      <span className="text-slate-200 font-normal text-md md:text-lg">
        {renderText}
      </span>
      <BtnMore isExpand={isExpand} onClick={() => setIsExpand(!isExpand)} />
    </>
  );
}

export default Cards;
