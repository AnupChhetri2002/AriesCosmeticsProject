import React from "react";
import { MdCardMembership } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GiBoxUnpacking } from "react-icons/gi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoLeafOutline } from "react-icons/io5";
import { IoEarthOutline } from "react-icons/io5";
import { TbVaccineBottleOff } from "react-icons/tb";
import { LuVegan } from "react-icons/lu";
import { FaPhone } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { TiLocation } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div className="h-[184rem] mx-auto p-4 ">
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
      <div className=" flex md:flex-row flex-col md:w-full md:h-[38rem]">
        <div className=" h-[20rem] pl-2 md:h-[38rem] md:w-[56rem] md:pl-24 md:pt-12 bg-[#EEF0E5] ">
          <img
            className="w-full object-cover md:w-[500px] "
            src="picture1.png"
            alt="Cream"
          />
        </div>
        <div className="bg-[#EEF0E5] h-full md:h-[38rem]">
          <p className="pl-3 text-[18px] font-serif md:text-2xl md:pt-12">
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
              <div className="mt-10 ml-7 h-14">
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
      <div className="h-[45rem] w-full bg-[#  ] mt-12 md:mt-0  md:h-[35rem] bg-[#ecdec1]">
        <div className="h-[9rem] w-full flex  flex-col items-center">
          <h1 className="pt-9 font-logo text-xl md:text-3xl">Best in Market</h1>
          <h1 className="pt-2 font-boldFont text-3xl md:text-5xl">
            Healthiest Cosmetics
          </h1>
        </div>
        <div className=" h-[22rem] flex flex-col gap-y-6 items-center md:flex-row md:gap-x-10 md:h-[18rem]">
          <div className="flex items-center flex-col md:ml-24">
            <h1 className="text-4xl font-boldFont md:text-6xl">4300k</h1>
            <h1 className="text-xl font-boldFont">Products Sold</h1>
          </div>
          <div className="flex items-center flex-col md:ml-24">
            <h1 className="text-4xl font-boldFont md:text-6xl">99.99%</h1>
            <h1 className="text-xl font-boldFont">Satisfaction Guaranteed</h1>
          </div>
          <div className="flex items-center flex-col md:ml-20">
            <h1 className="text-4xl font-boldFont md:text-6xl">42k</h1>
            <h1 className="text-xl font-boldFont">Customer Satisfied</h1>
          </div>
          <div className="flex items-center flex-col md:ml-20">
            <h1 className="text-4xl font-boldFont md:text-6xl">0.01%</h1>
            <h1 className="text-xl font-boldFont">Defective Returns</h1>
          </div>
        </div>
        <div className="mt-14 md:h-[6rem] w-full h-[9rem] md:w-[40rem] md:ml-[23rem] md:mt-0">
          <h1 className="font-serif text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </h1>
        </div>
      </div>
      <div className="h-[57rem] w-full bg-[#F9F7C9] md:mt-1 md:h-[29rem]">
        <div className="h-[10rem] w-full flex flex-col items-center ">
          <h1 className="pt-7 text-2xl font-logo">Testimonial</h1>
          <h1 className="text-3xl font-boldFont">Our Client Reviews</h1>
        </div>
        <div className="h-full w-full bg-[#F9F7C9]  md:flex md:flex-row md:gap-7">
          <div>
            <video
              src="cream.mp4"
              autoPlay
              loop
              muted
              className="w-80 h-72 object-cover mx-auto md:mt-3 md:h-[27rem] md:w-[26rem] md:ml-4"
            />
          </div>
          <div>
            <video
              src="eyebrow.mp4"
              autoPlay
              loop
              muted
              className="w-80 h-72 object-cover mx-auto mt-3  md:h-[27rem] md:w-[26rem]"
            />
          </div>
          <div>
            <video
              src="lotion.mp4"
              autoPlay
              loop
              muted
              className="w-80 h-72 object-cover mx-auto mt-3  md:h-[27rem] md:w-[26rem]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#eef0e5] mt-36 h-[38rem] w-full">
        <div className="h-[14rem] w-full">
          <h1 className="flex items-center justify-center pt-8 font-logo2 text-4xl">
            AERIES
          </h1>
          <div className="mt-3 md:h-[6rem] w-full h-[6rem] md:w-[40rem] md:ml-[23rem] md:mt-0">
            <h1 className="font-serif text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </h1>
          </div>
          <div className="flex flex-row pl-12">
            <div className="flex items-center justify-center space-x-4">
              <a href="/home" className="text-lime-700  hover:text-indigo-600">
                Home
              </a>
              <a href="/Shop" className="text-lime-700  hover:text-indigo-600">
                Shop
              </a>
              <a href="/About" className="text-lime-700 hover:text-indigo-600">
                About
              </a>
              <a
                href="/Gallery"
                className="text-lime-700 hover:text-indigo-600"
              >
                Gallery
              </a>
            </div>
          </div>
        </div>
        <div className="h-[12rem] w-full bg-[#eef0e5]">
          <div className=" p-8">
            <h2 className="text-3xl font-boldFont mb-4 pl-1">
              Contact Information
            </h2>
            <ul className="pl-8">
              <li className="mb-2">
                <FaPhone className="absolute text-xl " />
                <a
                  href="tel:+9841583459"
                  className="text-blue-500 hover:underline pl-12"
                >
                  +977 9841583459
                </a>
              </li>
              <li className="mb-2">
                <CgMail className="absolute text-2xl" />

                <a
                  href="mailto:info@example.com"
                  className="text-blue-500 hover:underline pl-12"
                >
                  anupac2002@gmail.com
                </a>
              </li>
              <li>
                <TiLocation className="absolute text-2xl" />
                <a
                  href="Contact us"
                  className="text-blue-500 hover:underline pl-12"
                >
                  Baneshwor, KTM, Nepal{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-between px-[4rem] text-2xl">
            <div className="bottom-3 bg-[#ecdec1] h-[2.5rem] w-[2.5rem] rounded-full flex justify-center items-center pt-1  hover:bg-green-700">
              <FaInstagram />
            </div>
            <div className="bottom-3 bg-[#ecdec1] h-[2.5rem] w-[2.5rem] rounded-full flex justify-center items-center pt-1  hover:bg-green-700">
              <FaFacebook />
            </div>
            <div className="bottom-3 bg-[#ecdec1] h-[2.5rem] w-[2.5rem] rounded-full flex justify-center items-center pt-1  hover:bg-green-700">
              <FaLinkedin />
            </div>
            <div className="bottom-3 bg-[#ecdec1] h-[2.5rem] w-[2.5rem] rounded-full flex justify-center items-center pt-1 hover:bg-green-700">
              <FaTwitter />
            </div>
          </div>
        </div>
        <div className="h-[12rem] w-full pt-5">
          <div className="bg-[#eef0e5] p-8">
            <h2 className="text-2xl font-boldFont mb-4 flex justify-center items-center">
              {" "}
              Newsletter
            </h2>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
              />
              <button
                type="submit"
                className=" bg-red-600 text-white px-4 py-2 "
              >
                Subscribe
              </button>
              <p className="text-sm text-gray-500">
                We do not spam. We send offers instead.
              </p>
            </form>
          </div>
          <div className="bg-[#eef0e5]">
            <div className="flex items-center justify-center bg">
              <img src="payment.png" alt="payment" className="w-48 h-6" />
            </div>
            <footer className="text-center text-gray-500 mt-4">
              <p className="mb-2">
                &copy; 2023 Lilac WeDesignTech All Right Reserved
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
