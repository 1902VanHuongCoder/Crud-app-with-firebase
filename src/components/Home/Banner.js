import React from "react";
import woman from "../../assets/woman.png";
import { BsSearch } from "react-icons/bs";
import shoes1 from "../../assets/shoes1.png";
import shoes2 from "../../assets/shoes2.png";
import shoes3 from "../../assets/shoes3.png";
import hat1 from "../../assets/hat1.png";
import hat2 from "../../assets/hat2.png";
import hat3 from "../../assets/hat3.png";
import shirt1 from "../../assets/shirt1.png";
import shirt2 from "../../assets/shirt2.png";
import shirt3 from "../../assets/shirt3.png";
const Banner = () => {
  return (
    <div className="flex relative w-full bg-gradient-to-r from-violet-200 to-pink-200 h-[400px]">
      <div className="lg:w-1/2 w-full flex flex-col gap-y-4 justify-center items-center h-full lg:items-start lg:pl-[20px] xl:pl-[60px] 2xl:pl-[80px]">
        <h1 className="sm:text-6xl text-2xl font-semibold drop-shadow-xl text-[#ee4d2d]">
          The Clothes <br className="lg:block hidden" />
          World
        </h1>
        <p className="sm:text-xl text-sm font-semibold drop-shadow-xl text-[#ee4d2d]">
          You can find anything here
        </p>
        <div className="relative w-fit">
          <button className="absolute right-[10px] top-[5px] bg-[#e4e4e5] p-2 rounded-full">
            <BsSearch />
          </button>
          <input
            className="outline-none rounded-lg h-10 w-[280px] border-[rgba(0,0,0,.2)]"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="w-1/2 h-full relative lg:block hidden">
        <div className="w-[300px] h-[70px] bg-white rounded-lg shadow-lg absolute -left-[110px] top-[50px] flex">
          <img
            src={shoes1}
            alt="shoes1"
            width={100}
            className="rotate-[335deg] absolute left-[7%] "
          />
          <img
            src={shoes2}
            alt="shoes2"
            width={100}
            className="rotate-[335deg] absolute left-[36%]"
          />
          <img
            src={shoes3}
            alt="shoes3"
            width={100}
            className="rotate-[335deg] absolute left-[70%]"
          />
        </div>
        <div className="w-[300px] h-[70px] bg-white rounded-lg shadow-lg absolute -left-[150px] top-[160px] flex">
          <img
            src={hat1}
            alt="shoes1"
            width={100}
            className=" absolute left-[0%] top-[-10px]"
          />
          <img
            src={hat2}
            alt="shoes2"
            width={100}
            className=" absolute left-[36%] top-[-10px]"
          />
          <img
            src={hat3}
            alt="shoes3"
            width={100}
            className=" absolute left-[70%] top-[-10px]"
          />
        </div>
        <div className="w-[300px] h-[70px] bg-white rounded-lg shadow-lg absolute -left-[110px] top-[270px] flex">
          <img
            src={shirt1}
            alt="shoes1"
            width={100}
            className=" absolute left-[0%] top-[-10px]"
          />
          <img
            src={shirt2}
            alt="shoes2"
            width={100}
            className="  absolute left-[36%] top-[-10px]"
          />
          <img
            src={shirt3}
            alt="shoes3"
            width={100}
            className="  absolute left-[70%] top-[-10px]"
          />
        </div>
        <div className="absolute w-[550px] right-0 bottom-0">
          <img src={woman} alt="woman" className="w-fit h-fit" />
        </div>
      </div>
    </div>
  );
};

export default Banner;