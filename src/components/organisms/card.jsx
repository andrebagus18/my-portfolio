import toDoApp from "../../assets/toDoApp.webp";
import webVideo from "../../assets/webVideo.webp";
import sPort from "../../assets/slicingPort.webp";
import dashAdmin from "../../assets/dashAdmin.webp";
import CardImage from "../atoms/cardImage";
import BtnMore from "../atoms/btnMore";
import CardHead from "../atoms/cardHead";

function CardJourney() {
  return (
    <div className="grid grid-rows-4 gap-8 mt-8 items-center justify-center lg:w-4xl">
      <div className="flex items-center gap-4">
        <CardImage target={toDoApp} />
        <div className="flex flex-col">
          <CardHead label="ToDo App" />
          <span className="text-slate-200 font-normal text-md md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
            mollitia quos unde maiores illum rem molestias placeat! Deleniti
            possimus nostrum molestiae error, dolor dignissimos obcaecati magnam
            voluptatum reprehenderit nemo in.
          </span>
          <BtnMore />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <CardImage target={sPort} />
        <div className="flex flex-col">
          <CardHead label="Sliching Portfolio Web" />
          <span className="text-slate-200 font-normal text-md md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            repellat tempora eaque eius unde autem, obcaecati repellendus sed,
            cupiditate, omnis ipsum debitis dolor? Neque, libero veritatis. Aut
            nemo quos similique!
          </span>
          <BtnMore />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <CardImage target={dashAdmin} />
        <div className="flex flex-col">
          <CardHead label="Dashboard Admin" />
          <span className="text-slate-200 font-normal text-md md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            recusandae facere dignissimos! Ea laboriosam saepe expedita
            doloremque necessitatibus deleniti perferendis magnam qui placeat
            possimus dolore, tenetur, nobis obcaecati voluptates esse!
          </span>
          <BtnMore />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <CardImage target={webVideo} />
        <div className="flex flex-col">
          <CardHead label="Web Video" />
          <span className="text-slate-200 font-normal text-md md:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
            facere eius? Commodi aliquid nemo, inventore velit repellendus
            voluptas ratione asperiores delectus voluptatem ipsam, corporis
            repellat. Similique nesciunt sed ratione magni.
          </span>
          <BtnMore />
        </div>
      </div>
    </div>
  );
}

export default CardJourney;
