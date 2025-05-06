import React from "react";
import HotelRoomCard from "./RoomCards";

import { League_Gothic, Inter } from "next/font/google";
import Container from "../components/Container";

const LeagueGothic = League_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  return (
    <div>
      <Container>
        <div
          className={`${LeagueGothic.className} text-5xl md:text-6xl lg:text-7xl text-[#FF5A00] flex justify-center mt-32`}>
          Accommodations at Green Vista Resort
        </div>
        <div className="lg:flex gap-10 justify-center">
          <HotelRoomCard />
          <HotelRoomCard />
          <HotelRoomCard />
          <HotelRoomCard />
        </div>
      </Container>
    </div>
  );
};

export default page;
