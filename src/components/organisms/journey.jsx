import HeadTitle from "../atoms/headTitle";
import CardJourney from "./card";

function Journey() {
  return (
    <div
      className="mt-20 pt-16 flex flex-col justify-center items-center"
      id="journey"
    >
      <HeadTitle label="My Journey" />
      <CardJourney />
    </div>
  );
}

export default Journey;
