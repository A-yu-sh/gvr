"use client";
import { useState } from "react";

export default function HotelRoomCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-xs  rounded-lg overflow-hidden shadow-md bg-white mt-20 mb-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="relative">
        <img
          src="/api/placeholder/400/320"
          alt="Executive Four Bed Room"
          className="w-full h-56 object-cover"
        />
      </div>

      <div className="px-4 py-4">
        <h2 className="text-lg font-bold text-orange-500">
          EXECUTIVE FOUR BED ROOMS
        </h2>

        <div className="mt-2 text-sm text-gray-600">
          <p className="text-xs">270 sq.ft (25 sq.mt) | Pool View | King Bed</p>
          <div className="mt-3 space-y-2">
            <span className="block inline-flex items-center text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 mr-1 text-green-500"
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
              2 twin bed
            </span>
            <span className="block inline-flex items-center text-xs ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 mr-1 text-green-500"
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
              Private Balcony
            </span>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            className={`px-4 py-1.5 text-sm rounded text-white font-medium ${
              isHovered ? "bg-orange-600" : "bg-orange-500"
            } transition-colors duration-300`}>
            Details
          </button>

          <button
            className={`px-4 py-1.5 text-sm  font-medium ${
              isHovered ? "text-orange-600" : "text-orange-500"
            } transition-colors duration-300`}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
