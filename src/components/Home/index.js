// import NavBar from "../Navbar";

const Home = () => {
  return (
    <>
      {/* <NavBar/> */}
      <div
        className="flex flex-row justify-around items-center  mx-auto h-screen sm:h-full  lg:h-screen w-full bg-cover object-cover  "
        style={{
          backgroundImage: 'url("./Image/Bitmap.jpg")',
        }}
      >
        <div className="flex  mx-auto sm:w-[60%]  md:pt-[60px] flex-col justify-center items-center lg:flex-row md:flex md:flex-col  sm:pt-[70px] sm:flex sm:flex-col sm:justify-center sm:items-center  sm:mt-[100px] p-4 ">
          <div className=" sm:mx-auto w-full  text-center sm:text-center sm:flex sm:flex-col sm:justify-center sm:items-center sm:p-[20px]   ">
            <p className="text-[#D0D6F9] font-[BarlowCondensed] h-[34px] text-[20px] sm:text-[28px] font-[400]">
              SO, YOU WANT TO TRAVEL TO
            </p>
            <h1 className=" text-[#FFFFFF] font-[Bellefair] sm:w-[445px] mx-auto  text-[40px] sm:text-[58px] font-[400]">
              SPACE
            </h1>
            <h3 className="text-[#D0D6F9] font-[BarlowCondensed] mx-auto w-[90%] sm:w-[400px]  text-[18px]">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </h3>
          </div>
          <div className="bg-white h-[274px] w-[274px] mt-5 sm:mt-0 rounded-full flex flex-col justify-center items-center   ">
            <h3 className="text-[#0B0D17] font-[Bellefair] w-[379px] h-[34px] text-[32px] text-center font-[400]  ">
              EXPLORE
            </h3>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Home;
