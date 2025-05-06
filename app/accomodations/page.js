import React from "react";
import HotelRoomCard from "./RoomCards";
import roomData from "../../roomData.json";
import { League_Gothic, Inter } from "next/font/google";
import Container from "../components/Container";

const LeagueGothic = League_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  return (
    <div className="">
      <Container>
        <div
          className={`${LeagueGothic.className} text-5xl md:text-6xl lg:text-7xl text-[#FF5A00] text-center flex justify-center mt-32`}>
          Accommodations at Green Vista Resort
        </div>
        <div className="flex justify-center mb-20 mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {roomData.rooms.map((room) => (
              <HotelRoomCard key={room.id} roomId={room.id} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
