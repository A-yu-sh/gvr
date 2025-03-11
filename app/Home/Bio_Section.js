import Image from "next/image";
import React from "react";
import transparent_logo from "../assets/logo-no-bg.png";
import Container from "../components/Container";
import { League_Gothic } from "next/font/google";

const LeagueGothic = League_Gothic({
  weight: "400",
});

const Bio_Section = () => {
  return (
    <Container>
      <div className=" ">
        <div className="flex justify-center">
          <Image
            src={transparent_logo}
            alt="image"
            width={500}
            height={500}
            className="h-[20%] w-[20%] lg:w-[10%] lg:h-[10%] flex justify-center my-5"
          />
        </div>
        <div
          className={`${LeagueGothic.className} text-5xl md:text-6xl lg:text-7xl text-[#FF5A00] flex justify-center`}>
          GREEN VISTA RESORT
        </div>
        <div className="flex justify-center items-center ">
          <p className="px-10 md:px-0 text-gray-700 leading-relaxed text-center mt-5 text-sm md:text-md lg:text-lg max-w-[168ch] 4xl:text-2xl">
            Green Vista Resort and Restro Cloudway, in Chalsa, provides a
            peaceful natural retreat. Guests enjoy the Dooars region's lush
            scenery, with eco-friendly practices at the core. Comfortable rooms
            offer stunning views, and Restro Cloudway serves the best local
            cuisine. Explore nearby forests or visit tea gardens. Our staff
            offers personalized service for all guests. Whether for family, or
            solo travel, Green Vista ensures relaxation and lasting memories
            amidst nature's beauty.Each resort is a unique blend of regional
            design, culture and ambience. We aim to deliver an intimate,
            unmatched experience coupled with impeccable service. Universal to
            all our resorts are serene natural backdrops, top-notch facilities,
            unparalleled service and meticulously designed rooms for utmost
            privacy and exclusivity. The design integrates local materials,
            resonating with the natural beauty and cultural essence of the area.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Bio_Section;
