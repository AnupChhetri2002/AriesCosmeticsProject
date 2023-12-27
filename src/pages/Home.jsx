import React from "react";

const Home = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-[1rem] md:text-2xl lg:text-6xl font-bold text-[#F3F8FF]">
            AeRieS<span className="text-[#49108B]"> Cosmetics</span>
          </h1>
          <h1 className="px-4 text-[1rem] md:text-2xl lg:text-6xl font-bold text-[#F3F8FF]">
            Shop<span className="text-[#49108B]"> Fast</span>
          </h1>
          <button className="md:h-12 md:w-40 ml-2 mt-5 bg-[#E26EE5] hover:bg-black hover:text-white text-[#13070f] text-[12px] py-1 px-2 transition-all duration-300 ease-in-out  md:text-2xl h- w-[6rem]">
            Shop Now
          </button>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="bakgrnd.png"
          alt="background"
        />
      </div>
      <div className="mt-4">
        <img
          className="w-full max-h-[200px] object-cover"
          src="shipping.png"
          alt="Shipping"
        />
      </div>
    </div>
  );
};

export default Home;
