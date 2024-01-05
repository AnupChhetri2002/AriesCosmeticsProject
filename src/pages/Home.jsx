import React from "react";
import { MdCardMembership } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GiBoxUnpacking } from "react-icons/gi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoLeafOutline } from "react-icons/io5";
import { IoEarthOutline } from "react-icons/io5";
import { TbVaccineBottleOff } from "react-icons/tb";
import { LuVegan } from "react-icons/lu";

const Home = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-[1rem] md:text-2xl lg:text-6xl font-bold text-[#F3F8FF]">
            Aeries <span className="text-[#49108B]"> Cosmetics</span>
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
      <div className="md:h-[200px] h-96 p-5 w-full flex md:text-7xl text-5xl bg-[#ecdec1] mt-4 flex-col md:flex-row ">
        <div className="flex md:h-[200px] md:w-[33%] w:full pt-12 md:pl-28 h-full">
          <div className=" absolute pl-20 md:text-2xl text-xl font-logo pt-2">
            Membership
            <br /> <p className="font-boldFont">Get a membership</p>{" "}
          </div>
          <MdCardMembership />
        </div>
        <div className="flex md:h-[200px] md:w-[33%] w:full pt-12 md:pl-28 h-full ">
          <div className=" absolute pl-20 md:text-2xl text-xl font-logo pt-2">
            Customer Care
            <br /> <p className="font-boldFont">24 *7 Customer Support </p>
          </div>
          <TfiHeadphoneAlt />
        </div>
        <div className="flex md:h-[200px] md:w-[33%] w:full pt-12 md:pl-28 h-full">
          <div className=" absolute pl-20 md:text-2xl text-xl font-logo pt-2">
            Best Packing
            <br /> <p className="font-boldFont">Safe Delivery </p>
          </div>
          <GiBoxUnpacking />
        </div>
      </div>
      <div className="h-[600px]   flex md:flex-row flex-col">
        <div className="bg-[#EEF0E5] h-80 pl-5 md:h-full md:w-[1300px] md:pl-24 md:pt-12">
          <img
            className="w-full h-52] object-cover md:w-[500px] "
            src="picture1.png"
            alt="Cream"
          />
        </div>
        <div className="bg-[#EEF0E5] h-36 md:h-[600px]  ">
          <p className="pl-3 text-[18px] font-serif md:text-2xl md:pt-12 md:h">
            PURE AND SIMPLE
          </p>
          <h1 className="text-3xl pl-3 font-boldFont md:pt-4 md:text-5xl pt-2">
            Deeply Nourishing Hair Serum For Glowing & Healthy Hair
          </h1>
          <div className="bg-[#EEF0E5]  h-[400px]">
            <div className="text-xl pl-3 md:pt-5 md:text-2xl pt-4">
              Ut tempor sem leo, a ultricies quam aliquam eget. Vivamus commodo
              scelerisq ue velit, quis viverra velit bibendum vel. Phasell sus
              id leo et vestibulum.
            </div>
            <div className="flex flex-col justify-between bg-[#EEF0E5] pl-5 pt-3 font-boldFont mt-4 md:flex-row ">
              <div className="flex flex-row text-3xl md:text-6xl">
                {" "}
                <IoLeafOutline />{" "}
                <h1 className="pl-7 text-xl md:text-3xl">Strong & Smooth </h1>
              </div>
              <div className="flex flex-row text-3xl md:text-6xl">
                {" "}
                <IoEarthOutline />{" "}
                <h1 className="pl-7 text-xl md:text-3xl">Sulfate-Free </h1>
              </div>
              <div className="flex flex-row text-3xl md:text-6xl">
                {" "}
                <TbVaccineBottleOff />{" "}
                <h1 className="pl-7 text-xl md:text-3xl">Pareben-Free </h1>
              </div>

              <div className="flex flex-row text-3xl md:text-6xl">
                {" "}
                <LuVegan />{" "}
                <h1 className="pl-7 text-xl md:text-3xl">100% Vegan </h1>
              </div>
            </div>
            <div className="md:h-[195px] h-[150px] flex flex-row bg-[#EEF0E5]">
              <div className="mt-10 ml-7">
                <button className="md:h-12 md:w-40 ml-2 bg-[#d2bfd3] hover:bg-black hover:text-white text-[#13070f] text-[18px] py-1 px-2 transition-all duration-300 ease-in-out  md:text-2xl h-[3rem] w-[7rem] ">
                  Shop Now
                </button>{" "}
              </div>
              <div className=" h-28 w-40 mt-4 ml-4 md:ml-40 md:w-60 ">
                <div className="text-4xl md:text-6xl">
                  <IoChatbubblesOutline />
                  <h1 className="text-[18px]  md:text-2xl font-boldFont">
                    Chat Us At Anytime
                  </h1>
                  <h1 className="text-[20px]">+977 9841583459</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[57rem] w-full bg-gray-500">

      </div>
      <div className="h-[57rem] w-full bg-[#F9F7C9] md:mt-1 md:h-[29rem]">
        <div className="h-[10rem] w-full flex flex-col items-center ">
          <h1 className="pt-7 text-2xl font-logo">
            Testimonial
          </h1>
          <h1 className="text-3xl font-boldFont">
            Our Client Reviews
          </h1>
        </div>
        <div className="h-full w-full bg-[#F9F7C9]  md:flex md:flex-row md:gap-7">
          <div ><video src="cream.mp4" autoPlay loop muted className="w-80 h-72 object-cover mx-auto md:mt-3 md:h-[27rem] md:w-[26rem] md:ml-4"  /></div>
          <div ><video src="eyebrow.mp4" autoPlay loop muted className="w-80 h-72 object-cover mx-auto mt-3  md:h-[27rem] md:w-[26rem]"  /></div>
          <div ><video src="lotion.mp4" autoPlay loop muted className="w-80 h-72 object-cover mx-auto mt-3  md:h-[27rem] md:w-[26rem]"  /></div>
        </div>
      </div>
    </div>
  );
};

export default Home;