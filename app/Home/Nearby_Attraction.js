import React from "react";
import { League_Gothic, Inter } from "next/font/google";
import Card from "../components/Card";
import { Nearby_Attraction_Data } from "../data/Nearby_Attraction";
import Link from "next/link";

const LeagueGothic = League_Gothic({
  weight: "400",
});
const InterFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const Nearby_Attraction = () => {
  return (
    <div>
      <div
        className={`${LeagueGothic.className} text-5xl md:text-6xl lg:text-7xl text-[#FF5A00] flex justify-center mt-20`}>
        NEARBY ATTRACTION
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Nearby_Attraction_Data.map((e) => {
          return (
            <div key={e.id} className="flex justify-center">
              <Card img={e.Image} desc={e.Description} title={e.Name} />
            </div>
          );
        })}
      </div>
      <Link
        href="#"
        className={`${InterFont.className} text-md md:text-lg lg:text-xl text-[#FF5A00] font-bold underline flex justify-center mt-10`}>
        Explore More
      </Link>
    </div>
  );
};

export default Nearby_Attraction;
