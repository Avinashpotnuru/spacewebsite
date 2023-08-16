import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Crew1 = () => {
  return (
    <div className="flex flex-col  md:flex md:flex-row md:justify-around md:items-center p-[30px]   sm:m-[20px] ">
      <div className="flex flex-col justify-center items-center order-2 md:order-1 xl:order-1 ">
        <h1 className="  text-[#FFFFFF] uppercase font-[Bellefair]   text-center text-[24px]sm:text-[32px] font-[400] mb-5">
          Commander
        </h1>
        <h3 className=" text-center text-[#FFFFFF] font-[Bellefair]  text-[32px] sm:text-[40px] mb-5 md:text-[56px] font-[400]">
          Douglas Hurley
        </h3>
        <h3 className="sm:h-[128px] sm:w-[444px] text-center text-[#D0D6F9] font-[Barlow]  mb-5 text-[18px] font-[400]">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </h3>
      </div>
      <div className="flex justify-center items-center order-1 md:order-2 mb-[40px] xl:order-1 ">
        <img
          className="h-auto w-[500px] object-top"
          src="/Image/crew1.png"
          alt="crew-1"
        />
      </div>
    </div>
  );
};
const Crew2 = () => {
  return (
    <div className="flex flex-col  md:flex md:flex-row md:justify-around md:items-center p-[30px]   sm:m-[20px] ">
      <div className="flex flex-col justify-center items-center order-2 md:order-1 xl:order-1 ">
        <h1 className="   text-[#FFFFFF] uppercase font-[Bellefair] text-center text-[24px]  sm:text-[32px] font-[400] mb-5">
          Mission Specialist
        </h1>
        <h3 className=" text-center text-[#FFFFFF] font-[Bellefair]  text-[30px] sm:text-[40px] mb-5 md:text-[56px] font-[400]">
          MARK SHUTTLEWORTH
        </h3>
        <h3 className="sm:h-[128px] sm:w-[444px] text-center text-[#D0D6F9] font-[Barlow]  mb-5 text-[18px] font-[400]">
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the
          company behind the Linux-based Ubuntu operating system. Shuttleworth
          became the first South African to travel to space as a space tourist.
        </h3>
      </div>
      <div className="flex justify-center items-center order-1 md:order-2 mb-[40px] xl:order-1 ">
        <img
          className="h-auto w-[500px] object-top"
          src="/Image/crew2.png"
          alt="crew-1"
        />
      </div>
    </div>
  );
};
const Crew3 = () => {
  return (
    <div className="flex flex-col  md:flex md:flex-row md:justify-around md:items-center p-[30px]   sm:m-[20px] ">
      <div className="flex flex-col justify-center items-center order-2 md:order-1 xl:order-1 ">
        <h1 className="  text-[#FFFFFF] uppercase font-[Bellefair]   text-center text-[24px] sm:text-[32px] font-[400] mb-5">
          PILOT
        </h1>
        <h3 className=" text-center text-[#FFFFFF] font-[Bellefair]  text-[32px] sm:text-[40px]  mb-5 md:text-[56px] font-[400]">
          Victor Glover
        </h3>
        <h3 className="sm:h-[128px] sm:w-[444px] text-center text-[#D0D6F9] font-[Barlow]  mb-5 text-[18px] font-[400]">
          Pilot on the first operational flight of the SpaceX Crew Dragon to the
          International Space Station. Glover is a commander in the U.S. Navy
          where he pilots an F/A-18.He was a crew member of Expedition 64, and
          served as a station systems flight engineer.
        </h3>
      </div>
      <div className="flex justify-center items-center order-1 md:order-2 mb-[40px] xl:order-1 ">
        <img
          className="h-auto w-[500px] object-top"
          src="/Image/crew3.png"
          alt="crew-1"
        />
      </div>
    </div>
  );
};
const Crew4 = () => {
  return (
    <div className="flex flex-col  md:flex md:flex-row md:justify-around md:items-center p-[30px]   sm:m-[20px] ">
      <div className="flex flex-col justify-center items-center order-2 md:order-1 xl:order-1 ">
        <h1 className="  text-[#FFFFFF] uppercase font-[Bellefair]  text-center text-[24px] sm:text-[32px] font-[400] mb-5">
          Flight Engineer
        </h1>
        <h3 className=" text-center text-[#FFFFFF] font-[Bellefair] text-[32px] sm:text-[40px]  mb-5 md:text-[56px] font-[400]">
          Anousheh Ansari
        </h3>
        <h3 className="sm:h-[128px] sm:w-[444px] text-center text-[#D0D6F9] font-[Barlow]  mb-5 text-[18px] font-[400]">
          Anousheh Ansari is an Iranian American engineer and co-founder of
          Prodea Systems. Ansari was the fourth self-funded space tourist, the
          first self-funded woman to fly to the ISS, and the first Iranian in
          space.
        </h3>
      </div>
      <div className="flex justify-center items-center order-1 md:order-2 mb-[40px] xl:order-1 ">
        <img
          className="h-auto w-[500px] object-top"
          src="/Image/crew4.png"
          alt="crew-1"
        />
      </div>
    </div>
  );
};

const Crew = () => {
  const settings = {
    dots: true,
    infinite: true,
    // slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div
      className=" h-full w-full bg-cover flex flex-col items-center overflow-y"
      style={{
        backgroundImage: 'url("./Image/blackbg.png")',
      }}
    >
      <div className=" sm:pt-[130px] lg:pt-[130px] flex justify-start items-start w-[100%]">
        <h1 className="text-[#FFFFFF]  uppercase font-[BarlowCondensed] text-[20px] md:text-[28px] mx-auto sm:mx-[165.5px] pt-[20px] self-start sm:text-center ">
          <span className="text-[#FFFFFF] mr-4  font-[BarlowCondensed] opacity-25 font-bold">
            02
          </span>{" "}
          Meet your crew
        </h1>
      </div>

      <div className=" m-6 w-[90%]  z-30 ">
        <Slider {...settings}>
          <div>
            <Crew1 />
          </div>

          <div>
            <Crew2 />
          </div>
          <div>
            <Crew3 />
          </div>
          <div>
            <Crew4 />
          </div>
        </Slider>
      </div>
      {/* <Dots/> */}
    </div>
  );
};
export default Crew;
