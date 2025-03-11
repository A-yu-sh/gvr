import React from "react";
import { League_Gothic, Inter } from "next/font/google";
import { GoIssueClosed } from "react-icons/go";

const LeagueGothic = League_Gothic({
  weight: "400",
});

const InterFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const amenities = [
  "Swimming Pool",
  "Restaurant",
  "Jungle Safari",
  "Lounge",
  "Dry Cleaning",
  "Intercom",
  "Smoking Rooms",
  "Power Backup",
  "Free Parking",
  "Laundry Service",
  "Dining Area",
  "Public Restrooms",
];

const Amenities = () => {
  return (
    <div className="bg-[#F2F2F2] mt-20">
      <div className="grid grid-cols-1 md:grid-cols-[50%_50%] pb-24">
        <div className="flex justify-center mt-10 md:mt-32 ">
          <div>
            <div className="text-sm text-[#FF5A00] font-semibold flex justify-center md:justify-start">
              A M E N I T I E S
            </div>
            <div
              className={`${LeagueGothic.className} text-6xl md:text-6xl lg:text-8xl text-center md:text-start flex justify-center max-w-[11ch]`}>
              OUR PREMIUM SERVICES
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 gap-4 mt-24">
            {amenities.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={`${InterFont.className} flex items-center`}>
                  <span className="mt-1 mx-2 text-[#FF5A00]">
                    <GoIssueClosed />
                  </span>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
