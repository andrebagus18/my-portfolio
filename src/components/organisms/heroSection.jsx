import HeroImage from "../atoms/heroImage";
import HeroDesc from "../molecules/heroDesc";

function HeroSection() {
  return (
    <>
      <section className=" px-8 md:px-14 md:grid md:grid-cols-2 md:gap-10 flex items-center justify-center ">
        <HeroDesc />
        <HeroImage />
      </section>
    </>
  );
}

export default HeroSection;
