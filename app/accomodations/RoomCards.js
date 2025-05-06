"use client";
import { useState } from "react";
import roomData from "../../roomData.json";
import Link from "next/link";

export default function HotelRoomCard({ roomId }) {
  const [isHovered, setIsHovered] = useState(false);

  const room = roomData.rooms.find((r) => r.id === roomId) || roomData.rooms[0];

  return (
    <div
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg overflow-hidden shadow-md bg-white mt-8 mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="relative">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
        />
      </div>

      <div className="px-4 py-4">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-orange-500">
          {room.name}
        </h2>

        <div className="mt-2 text-xs sm:text-sm text-gray-600">
          <p>
            {room.size} | {room.view} | {room.bedType}
          </p>

          <div className="mt-3 space-y-2">
            {room.smallAmenities.map((amenity, index) => (
              <span
                key={index}
                className=" inline-flex items-center text-xs sm:text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {amenity}
              </span>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-gray-200 flex flex-wrap gap-2">
            {room.mainAmenities.map((amenity, index) => (
              <span
                key={index}
                className="bg-gray-100 text-xs rounded px-2 py-1">
                {amenity}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          {" "}
          <Link
            href="/accomodations/[id]"
            as={`/accomodations/${roomId}`}
            className={`w-full sm:w-auto px-4 py-1.5 text-sm rounded text-white font-medium ${
              isHovered ? "bg-orange-600" : "bg-orange-500"
            } transition-colors duration-300`}>
            Details
          </Link>
          <button
            className={`w-full sm:w-auto px-4 py-1.5 text-sm  font-medium ${
              isHovered ? "text-orange-600 " : "text-orange-500"
            } transition-colors duration-300`}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
