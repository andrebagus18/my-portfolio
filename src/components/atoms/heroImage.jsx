import profile from "../../assets/saya.webp";

function HeroImage() {
  return (
    <div className="hidden md:flex lg:w-90 lg:h-60 md:w-70 md:h-50 items-center justify-center object-cover rounded-">
      <img
        src={profile}
        alt="profile"
        className="md:ml-20 md:mb-20 lg:ml-40 lg:mt-40 xl:mt-60"
      />
    </div>
  );
}

export default HeroImage;
