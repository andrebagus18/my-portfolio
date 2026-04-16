import profile from "../../assets/saya.webp";

function HeroImage() {
  return (
    <div className="hidden md:flex md:w-[300px] md:h-60 items-center justify-center object-cover rounded-">
      <img src={profile} alt="profile" className="ml-40 mt-20" />
    </div>
  );
}

export default HeroImage;
