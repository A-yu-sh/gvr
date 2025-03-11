"use client";
import React, { useState } from "react";
import { Data } from "../data/Reviews";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { League_Gothic, Inter } from "next/font/google";
import Link from "next/link";

const LeagueGothic = League_Gothic({
  weight: "400",
});
const InterFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Opinion_And_Reviews = () => {
  const [index, setIndex] = useState(0);
  const review = Data[index];

  const prevReview = () => {
    setIndex(index === 0 ? Data.length - 1 : index - 1);
  };

  const nextReview = () => {
    setIndex(index === Data.length - 1 ? 0 : index + 1);
  };

  return (
    <div>
      <div
        className={`${LeagueGothic.className} text-5xl md:text-6xl lg:text-7xl mt-20 text-[#FF5A00] flex justify-center `}>
        OPINION AND REVIEWS
      </div>
      <div className="bg-[#f2f2f2] py-20 mt-10 flex flex-col md:flex-row items-center justify-center gap-10 px-10">
        {/* Left Side Rating Box */}
        <div className="bg-white rounded-xl shadow-lg p-10 w-full md:w-1/3 h-auto text-center flex flex-col items-center">
          <div className="text-6xl font-semibold text-gray-800">4.8</div>
          <div className="flex justify-center my-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-xl" />
            ))}
          </div>

          <Link
            href="https://www.google.com/travel/search?q=green%20vista%20resort&g2lb=4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72560029%2C72573224%2C72616120%2C72619927%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72808078%2C72825295%2C72827241%2C72832976%2C72860862%2C72882230%2C72885032%2C72903267&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaSQopEicyJTB4MzllM2Y1NDczYjkxMWRiMToweDg4Y2RmYmJjYjVlMmUyNjgSHBIUCgcI6Q8QAxgNEgcI6Q8QAxgOGAEyBAgAEAAqBwoFOgNJTlI&qs=CAEyKENob0k2TVNMcjh2M191YUlBUm9OTDJjdk1URndZemx0Tm1zeWJoQUI4AkIJCWji4rW8-82IQgkJaOLitbz7zYg&ictx=111&ap=ugEHcmV2aWV3cw"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-[#FF5A00] text-white px-6 py-3 mt-5 rounded-md text-sm hover:bg-[#FF5A00]`}>
            VIEW ALL REVIEWS →
          </Link>
        </div>

        {/* Right Side Review Card */}
        <div className="bg-white rounded-xl shadow-lg p-10  w-full md:w-2/3">
          <div className="relative">
            <p className="text-md md:text-lg text-gray-700 leading-relaxed max-w-[100ch]">
              {review.comment}
            </p>
          </div>

          <div className="flex items-center gap-4 mt-10">
            <div>
              <h3 className={`${InterFont.className} text-md`}>
                - {review.user}
              </h3>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={prevReview}
              className="border rounded-full w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-[#FF5A00] hover:text-white transition">
              <FaChevronLeft />
            </button>
            <button
              onClick={nextReview}
              className="border rounded-full w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-[#FF5A00] hover:text-white transition">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opinion_And_Reviews;
