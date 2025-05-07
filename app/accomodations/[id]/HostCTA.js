import React from "react";
import Image from "next/image";
import { League_Gothic, Inter } from "next/font/google";

const LeagueGothic = League_Gothic({
  weight: "400",
  subsets: ["latin"],
});
const InterFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function EventHostingCTA() {
  const eventImages = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/coffee-shop-b6e1a.appspot.com/o/Green_Vista_Resort%2Fimages.jpeg?alt=media&token=c270b40e-987d-411b-892d-4d67e2c40234",
      alt: "Corporate event with people networking",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/coffee-shop-b6e1a.appspot.com/o/Green_Vista_Resort%2Fimages_gv.jpeg?alt=media&token=e07a5673-ceb8-4ce4-9850-9652fc7fc81e",
      alt: "Elegant catered event setup",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/coffee-shop-b6e1a.appspot.com/o/Green_Vista_Resort%2Fimages_gv_2.jpeg?alt=media&token=cbbefe48-6b40-4f1f-bb5f-469145b2f3e1",
      alt: "Professional event planning meeting",
    },
  ];

  return (
    <div className="w-full rounded-lg bg-gray-100 p-8 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center">
          <h2
            className={`${LeagueGothic.className} text-center md:text-start text-4xl font-bold text-orange-500 mb-4`}>
            HOST YOUR EVENT WITH US
          </h2>
          <p
            className={`${InterFont.className} text-center md:text-start text-gray-700`}>
            If you are interested in hosting any of our services for your event,
            do let us know and we shall be more than happy to help.
          </p>
        </div>

        {/* Right Column - Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {eventImages.map((image, index) => (
            <div key={index} className="h-28 overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
