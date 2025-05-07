import React from "react";
import { League_Gothic, Inter } from "next/font/google";
import image1 from "../assets/Group 2.jpg";
import image2 from "../assets/Group 3.jpg";
import image3 from "../assets/Group 4.jpg";
import image4 from "../assets/Group 5.jpg";
import image5 from "../assets/Group 6.jpg";
import Image_Slider from "../components/Image_Slider";
import Link from "next/link";
import Image from "next/image";
const LeagueGothic = League_Gothic({
  weight: "400",
  subsets: ["latin"],
});
const InterFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Our_Accomodation = () => {
  const images = [image1, image2, image3, image4, image5];
  return (
    <div>
      <div
        className={`${LeagueGothic.className} text-5xl md:text-6xl lg:text-7xl mt-20 text-[#FF5A00] flex justify-center `}>
        OUR ACCOMODATION
      </div>
      <div className="bg-[#f2f2f2] mt-10">
        <div className="grid relative grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center  mt-5 px-5 mb-5 ">
            <Image
              src={image1}
              alt="Logo"
              width={500}
              height={500}
              className="relative z-10 object-cover black p-1 rounded-xl h-[100%]  w-auto"
            />
          </div>
          <div className="mt-[-10] md:mt-20 xl:mt-32">
            <div className="flex justify-center items-center text-center">
              <div
                className={`${LeagueGothic.className} px-2 text-6xl md:text-6xl lg:text-8xl mt-20 max-w-[25ch] md:max-w-[32ch]`}>
                GET YOUR AFFORDABLE ROOMS
              </div>
            </div>
            <div
              className={`${InterFont.className}  mt-5 px-2 flex justify-end items-center text-center max-w-[70ch]`}>
              Book your stay online and secure your vacations on time with an
              amazing discount!
            </div>
            <div className="flex justify-center pb-24">
              <Link
                href="/accomodations"
                className={`${InterFont.className} flex justify-center mt-10 bg-[#FF5A00] text-white w-1/3 py-3 rounded-md `}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our_Accomodation;
