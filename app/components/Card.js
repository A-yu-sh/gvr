"use client";
import React from "react";
import { League_Gothic, Inter } from "next/font/google";
const LeagueGothic = League_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const Card = ({ img, title, desc, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg  w-72 md:w-72 lg:w-96 mt-10">
      {/* Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-56 object-cover rounded-t-md"
      />

      {/* Content */}
      <div className="p-6 text-center">
        <div
          className={`${LeagueGothic.className} text-[#FF5A00] font-bold text-xl md:text-4xl mb-3 uppercase`}>
          {title}
        </div>
        <p className="text-gray-600 text-sm mb-4 max-w-[50ch]">{desc}</p>

        {/* Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF5A00] text-white px-6 py-2 rounded-md text-sm hover:bg-[#FF3300] transition">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
