import Typewriter from "./Herobanner/typewriter";
import PortfolioImage from "../assets/sha-nawaj-khan.png";

const Hero = ({ darkMode }) => {
  return (
    <section id="home" className="overflow-hidden min-h-[calc(100vh-64px)] pt-12 lg:pt-44 transition-colors duration-300">
      {/* IMAGE — MOBILE & TABLET (TOP) */}
      <div className="flex justify-center lg:hidden mb-6">
        <div className="relative flex justify-center">
          <div className="absolute top-[24px] bottom-20 w-[280px] h-[280px] md:w-[398px] md:h-[396px] bg-[#dc143c] rounded-full"></div>
          <img src={PortfolioImage} alt="Profile" className="relative z-10 w-[438px] h-[304px] md:w-[600px] md:h-[420px] rounded-xl" />
        </div>
      </div>

      {/* ROW CONTAINER */}
      <div className="w-full max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        {/* LEFT: TEXT */}
        <div className="ml-8 max-w-[700px] xl:text-left xl:ml-[6%]">
          <p className="pt-8 lg:pt-0 text-[24px] lg:text-[27px] font-bold md:mb-4">
            Hello, my name is
          </p>
          <h1 className="text-[30px] pt-1 lg:pt-0 sm:text-4xl md:text-5xl xl:text-[68px] font-extrabold leading-tight whitespace-nowrap">
            Pathan Sha Nawaj Khan
          </h1>
          <p className="mt-2 md:mt-4 text-2xl sm:text-xl md:text-[32px] lg:text-[40px] font-medium">
            I&apos;m a{" "}
            <span className="text-[#dc143c] font-bold">
              <Typewriter text="Software Engineer." />
            </span>
          </p>
          <button className="mt-5 lg:mt-8 px-8 py-2 bg-[#dc143c] text-[18px] md:text-[20px] text-white rounded-lg font-semibold border-2 border-transparent transition-all duration-300 ease-in-out hover:bg-white hover:text-[#dc143c] hover:border-[#dc143c] hover:-translate-y-1 hover:shadow-lg dark:hover:bg-[#0f1624] dark:hover:text-[#dc143c]">
            Resume
          </button>
        </div>

        {/* RIGHT: IMAGE (POINTED AREA) */}
        <div className="mt-4 relative hidden lg:flex">
          {/* IMAGE (HOVER TRIGGER) */}
          <img src={PortfolioImage} alt="Profile" className="peer relative lg:bottom-[60px] lg:left-[30px] xl:left-20 xl:bottom-24 lg:w-[480px] lg:h-[260px] xl:w-[490px] xl:h-[340px] z-10 rounded-xl cursor-pointer transition-transform duration-700 ease-out hover:scale-125"/>
          {/* RED CIRCLE (RESPONDS TO IMAGE HOVER) */}
          <div
            className="absolute ml-48 lg:right-[10px] lg:bottom-[60px] xl:bottom-24 w-72 h-72 bg-[#dc143c] rounded-full transition-transform duration-700 ease-out peer-hover:scale-110"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
