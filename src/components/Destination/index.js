import { useState } from "react";

const Moon = () => {
  return (
    <div className="flex flex-col justify-around items-center   md:flex w-full sm:flex sm:flex-col sm:justify-center sm:items-center md:justify-center md:items-center md:flex-row   p-3  ">
      <img
        className=" w-[200px] h-[200px] sm:w-[340px] sm:h-[340px]  p-3 xl:mr-8 sm:ml-[20px]"
        src="Image/moon.png"
        alt="moon"
      />
      <div className=" p-5 sm:p-[22px] m-3 text-center mx-auto">
        <h1 className=" w-full sm:w-[400px] mx-auto  font-[Bellefair] font-[400] text-[60px] sm:text-[80px] text-[white] text-center mb-3">
          MOON
        </h1>

        <h3 className=" w-[80%]  mx-auto sm:w-[444px]  font-[Barlow] mb-3 text-[18px] text-[white]">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </h3>
        <div className=" m-3 flex flex-col justify-between py-3 sm:flex sm:flex-row ">
          <div className="mb-[15px]">
            <h1 className="text-[#D0D6F9] font-[Bellefair] text-[14px]  h-[17px] mb-3">
              AVG. DISTANCE
            </h1>
            <h3 className="text-[white] font-[Bellefair] text-[28px] uppercase">
              384,400 km
            </h3>
          </div>
          <div className="">
            <h1 className="text-[#D0D6F9] font-[Bellefair] uppercase text-[14px]  h-[17px] mb-3">
              Est. travel time
            </h1>
            <h3 className="text-[white] font-[Bellefair] text-[28px] uppercase">
              3 days
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

function Mars() {
  return (
    <div className="flex flex-col justify-around items-center  md:flex  w-[100%] sm:flex sm:flex-col sm:justify-center sm:items-center md:justify-center md:items-center md:flex-row   p-3  ">
      <img
        className="w-[200px] h-[200px] sm:w-[340px] sm:h-[340px]  p-3 xl:mr-8 sm:ml-[20px]"
        src="Image/mars.png"
        alt="moon"
      />
      <div className="p-[30px] m-3 text-center">
        <h1 className="w-full sm:w-[400px] mmx-auto  font-[Bellefair] font-[400] text-[60px] sm:text-[100px] text-[white] text-center mb-3">
          MARS
        </h1>

        <h3 className="w-[80%]  mx-auto sm:w-[444px]   font-[Barlow] mb-3 text-[18px] text-[white]">
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </h3>
        <div className=" m-3 flex flex-col justify-between py-3 sm:flex sm:flex-row ">
          <div className="mb-[15px]">
            <h1 className="text-[#D0D6F9] font-[Bellefair] text-[14px]  h-[17px] mb-3">
              AVG. DISTANCE
            </h1>
            <h3 className="text-[white] font-[Bellefair] text-[28px] uppercase">
              9 months
            </h3>
          </div>
          <div className="">
            <h1 className="text-[#D0D6F9] font-[Bellefair] uppercase text-[14px]  h-[17px] mb-3">
              Est. travel time
            </h1>
            <h3 className="text-[white] font-[Bellefair] text-[28px] uppercase">
              3 days
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
function Europa() {
  return (
    <div className="flex flex-col justify-around items-center  md:flex  w-[100%] sm:flex sm:flex-col sm:justify-center sm:items-center md:justify-center md:items-center md:flex-row   p-3  ">
      <img
        className="w-[200px] h-[200px] sm:w-[340px] sm:h-[340px] p-3 xl:mr-8 sm:ml-[20px]"
        src="Image/EUROPA.png"
        alt="moon"
      />
      <div className="p-[30px] m-3 text-center">
        <h1 className="w-full sm:w-[400px] m mx-auto font-[Bellefair] font-[400] text-[60px] sm:text-[100px] text-[white] text-center mb-3">
          EUROPA
        </h1>

        <h3 className="w-[80%]  mx-auto sm:w-[444px]  font-[Barlow] mb-3 text-[18px] text-[white]">
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </h3>
        <div className=" m-3 flex flex-col justify-between py-3 sm:flex sm:flex-row ">
          <div className="mb-[15px]">
            <h1 className="text-[#D0D6F9] font-[Bellefair] text-[14px]  h-[17px] mb-3">
              AVG. DISTANCE
            </h1>
            <h3 className="text-[white] font-[Bellefair] text-[28px] uppercase">
              628 MIL. km
            </h3>
          </div>
          <div className="">
            <h1 className="text-[#D0D6F9] font-[Bellefair] uppercase text-[14px]  h-[17px] mb-3">
              Est. travel time
            </h1>
            <h3 className="text-[white] font-[Bellefair] text-[28px] uppercase">
              3 years
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
function Titan() {
  return (
    <div className="flex flex-col justify-around items-center  md:flex  w-[100%] sm:flex sm:flex-col sm:justify-center sm:items-center md:justify-center md:items-center md:flex-row   p-3  ">
      <img
        className="w-[200px] h-[200px] sm:w-[340px] sm:h-[340px] p-3 xl:mr-8 sm:ml-[20px]"
        src="Image/TITAN.png"
        alt="moon"
      />
      <div className="p-[30px] m-3 text-center">
        <h1 className="w-full sm:w-[400px] m mx-auto  font-[Bellefair] font-[400] text-[60px] sm:text-[100px] text-[white] text-center mb-3">
          TITAN
        </h1>

        <h3 className="w-[80%]  mx-auto sm:w-[444px]   font-[Barlow] mb-3 text-[18px] text-[white]">
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </h3>
        <div className=" m-3 flex flex-col justify-between py-3 sm:flex sm:flex-row ">
          <div className="mb-[15px]">
            <h1 className="text-[#D0D6F9] font-[Bellefair] text-[14px]  h-[17px] mb-3">
              AVG. DISTANCE
            </h1>
            <h3 className="text-[white] font-[Bellefair] text-[28px] uppercase">
              1.6 BIL. km
            </h3>
          </div>
          <div className="">
            <h1 className="text-[#D0D6F9] font-[Bellefair] uppercase text-[14px]  h-[17px] mb-3">
              Est. travel time
            </h1>
            <h3 className="text-[white] font-[Bellefair] text-[28px] uppercase">
              7 years
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

const Destination = () => {
  const [index, setIndex] = useState(0);
  return (
    <div
      className="bg-[#525050] min-h-screen w-full object-cover flex justify-center items-center "
      style={{
        backgroundImage: 'url("./Image/blackbg.png")',
        backgroundSize: "cover",
      }}
    >
      <div className="w-full flex flex-col justify-center items-center  sm:pt-[120px] lg:pt-[120px] ">
        <h3 className="text-[#FFFFFF] pt-[40px] uppercase text-[20px] text-center  font-[Barlow Condensed] text-[16px] sm:text-[23px] md:text-[28px] sm:mx-[165.5px]">
          <span className="  sm:text-[#FFFFFF] mr-4  font-[BarlowCondensed] opacity-25 font-bold">
            01
          </span>{" "}
          Pick your destination
        </h3>
        <div className="flex flex-col justify-center items-center w-full">
          <nav className="h-[34px] w-[285.5px] mx-[90px]  my-[30px]">
            <ul className="flex justify-around items-center text-[#D0D6F9]">
              <li
                className={`  ${
                  index === 0 ? "border-b-4 border-indigo-500" : ""
                }`}
                onClick={() => setIndex(0)}
              >
                MOON
              </li>

              <li
                className={`  ${
                  index === 1 ? "border-b-4 border-indigo-500" : ""
                }`}
                onClick={() => setIndex(1)}
              >
                MARS
              </li>

              <li
                className={`  ${
                  index === 2 ? "border-b-4 border-indigo-500" : ""
                }`}
                onClick={() => setIndex(2)}
              >
                EUROPA
              </li>

              <li
                className={` ${
                  index === 3 ? "border-b-4 border-indigo-500" : ""
                }`}
                onClick={() => setIndex(3)}
              >
                TITAN
              </li>
            </ul>
          </nav>
          <div>
            <div hidden={index !== 0}>
              <Moon />
            </div>
            <div hidden={index !== 1}>
              <Mars />
            </div>
            <div hidden={index !== 2}>
              <Europa />
            </div>
            <div hidden={index !== 3}>
              <Titan />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Destination;
