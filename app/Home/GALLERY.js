import React from "react";
import { League_Gothic, Inter } from "next/font/google";
import Link from "next/link";
const LeagueGothic = League_Gothic({
  weight: "400",
  subsets: ["latin"],
});
const InterFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const GALLERY = () => {
  return (
    <div>
      <div
        className={`${LeagueGothic.className} text-5xl md:text-6xl lg:text-7xl mt-20 text-[#FF5A00] flex justify-center `}>
        GALLERY
      </div>
    </div>
  );
};

export default GALLERY;
