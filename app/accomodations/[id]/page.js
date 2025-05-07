"use client"; // enable client-side interactivity

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import roomData from "../../../roomData.json";
import Link from "next/link";
import EventHostingCTA from "./HostCTA";
import { League_Gothic, Inter } from "next/font/google";

const LeagueGothic = League_Gothic({
  weight: "400",
  subsets: ["latin"],
});
const InterFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RoomPage() {
  const params = useParams();
  const roomId = parseInt(params.id);
  const room = roomData.rooms.find((room) => room.id === roomId);

  const [mainImage, setMainImage] = useState(room?.image);

  if (!room) {
    return (
      <div
        className={`flex items-center justify-center min-h-screen ${InterFont.className}`}>
        <p className="text-xl font-medium">Room not found</p>
      </div>
    );
  }

  return (
    <div
      className={`max-w-6xl mx-auto space-y-10 mt-32 px-4 sm:px-6 lg:px-8 ${InterFont.className}`}>
      {/* Main Image */}
      <div className="">
        {" "}
        <div className="flex justify-center ">
          <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 w-full h-[250px] sm:h-[350px] md:h-[400px]">
            <Image
              src={mainImage}
              alt={room.name}
              fill // makes it responsive inside parent
              quality={100} // maximum clarity
              priority // preload image
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw"
              className="object-cover"
            />
          </div>
        </div>{" "}
        {/* Thumbnails */}
        {room.thumbnails && room.thumbnails.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            {" "}
            {/* Reduced margin-top from mt-10 to mt-4 */}
            {room.thumbnails.map((thumb, index) => (
              <Image
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                width={150}
                height={100}
                className="rounded-lg object-cover w-32 h-20 sm:w-40 sm:h-24 border border-gray-200 shadow-sm cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() => setMainImage(thumb)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="md:flex bg-gray-100 rounded-lg overflow-hidden">
        <div className="flex-1 p-5">
          <h1
            className={`${LeagueGothic.className} text-center lg:text-start text-4xl sm:text-5xl font-bold uppercase text-orange-600`}>
            {room.name}
          </h1>
          <div className="mt-2 text-gray-600">
            <p className="max-w-[90ch] text-center text-md md:text-start mt-10 md:mt-0">
              {room.description}
            </p>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Link
              href="/accomodations/[id]"
              as={`/accomodations/${roomId}`}
              className="w-full sm:w-auto px-4 py-2 text-center rounded text-white bg-orange-600 font-medium hover:bg-orange-700 transition-colors duration-300">
              Book Now
            </Link>
            <button className="w-full sm:w-auto px-4 py-2 text-center rounded font-medium text-orange-600 hover:bg-orange-50 transition-colors duration-300">
              Back to Overview
            </button>
          </div>
        </div>

        <div className="bg-orange-600 text-white text-xl font-semibold px-6 py-4 flex items-center justify-center md:w-60">
          <div className="text-center leading-tight">
            <div>From INR</div>
            <div className="text-3xl font-bold">{room.price}</div>
            <div className="text-sm">+ 5% GST</div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t-2 border-gray-200" />

      {/* Amenities Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-800">
        <div className="space-y-6">
          <div>
            <h3 className="text-center md:text-start font-semibold mb-2 uppercase">
              Room Amenities
            </h3>
            <div className="grid grid-cols-2 mt-2 md:mt-0 sm:grid-cols-3 gap-2">
              {room.roomAmenities?.map((item, i) => (
                <div key={i} className="bg-gray-100 p-2 rounded text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-center md:text-start font-semibold uppercase">
              Bathroom Essentials
            </h3>
            <p className="text-center mt-2 md:mt-0 md:text-start">
              {room.bathroomAmenities?.join(" | ")}
            </p>
          </div>

          <div>
            <h3 className="text-center md:text-start font-semibold uppercase">
              Additional Facilities
            </h3>
            <p className="text-center mt-2 md:mt-0 md:text-start">
              {room.essentialAmenities?.join(" | ")}
            </p>
          </div>
        </div>

        <div className="bg-gray-50 text-center md:text-start p-6 rounded-lg shadow-sm space-y-4">
          <div>
            <h3 className="font-semibold text-lg uppercase mb-2">
              Booking Policies
            </h3>
            <ul className="space-y-1">
              <div>Check-in from 12:00 PM</div>
              <div>Check-out till 11:00 AM</div>
              <div>Early check-in and late check-out on request</div>
              <div>We accept American Express, Master Card, Visa</div>
              <div>Pets are not allowed</div>
              <div>Local ids are allowed</div>
              <div>
                This property is not accessible to guests who use a wheelchair
              </div>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg uppercase mb-2">
              Cancellation Policy
            </h3>
            <p>
              Cancellations must be made 2 days prior to arrival for a full
              refund. Late cancellations will be charged 5% of the total booking
              cost.
            </p>
          </div>
        </div>
      </div>

      <div className="h-5"></div>
      <hr className="border-t-2 border-gray-200" />
      <EventHostingCTA />
      <div className="h-10"></div>
    </div>
  );
}
