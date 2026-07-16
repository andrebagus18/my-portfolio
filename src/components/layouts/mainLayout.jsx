import About from "../organisms/about";
import Footer from "../organisms/footer";
import HeroSection from "../organisms/heroSection";
import Journey from "../organisms/journey";
import Navbar from "../organisms/navbar";
import Project from "../organisms/project";
import SendMail from "../organisms/sendMail";

function MainLayout() {
  return (
    <>
      <div className="bg-[#000315] bg-[radial-gradient(circle,rgba(1, 51, 61, 1) 0%, rgba(0, 2, 18, 1) 100%)] w-full h-auto ">
        <div className="w-full items-center">
          <div className="min-h-dvh w-full mb-10">
            <Navbar />
            <HeroSection />
          </div>
          <main className="px-6 md:px-8 lg:px-18 mt-5">
            <About />
            {/* <Journey /> */}
            <Project />
            <SendMail />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
