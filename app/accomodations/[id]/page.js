import Image from "next/image";
import roomData from "../../../roomData.json";
import Link from "next/link";

export default async function RoomPage({ params }) {
  const { id } = await params;
  const roomId = parseInt(id);
  const room = roomData.rooms.find((room) => room.id === roomId);

  if (!room) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-medium">Room not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-10 mt-24 px-4 sm:px-6 lg:px-8">
      {/* Room Image */}
      <div>
        <Image
          src={room.image}
          alt={room.name}
          width={800}
          height={500}
          className="rounded-xl object-cover w-full h-[250px] sm:h-[350px] md:h-[400px]"
        />
      </div>

      {/* Title and Basic Info */}
      <div className="md:flex bg-gray-100 rounded-lg overflow-hidden">
        {/* Left Content */}
        <div className="flex-1 p-5">
          <h1 className="text-2xl sm:text-3xl font-bold uppercase text-orange-600">
            {room.name}
          </h1>
          <div className="mt-2 text-gray-600">
            <p className="max-w-[90ch]">{room.description}</p>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Link
              href="/accomodations/[id]"
              as={`/accomodations/${roomId}`}
              className="w-full sm:w-auto px-4 py-2 text-center rounded text-white bg-orange-600 font-medium hover:bg-orange-700 transition-colors duration-300">
              Book Now
            </Link>
            <button className="w-full sm:w-auto px-4 py-2 text-center rounded font-medium text-orange-600  hover:bg-orange-50 transition-colors duration-300">
              Back to Overview
            </button>
          </div>
        </div>

        {/* Orange Price Box */}
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-800">
        {/* Room Amenities */}
        <div>
          <h3 className="font-semibold mb-2 uppercase">Room Amenities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {room.roomAmenities?.map((item, i) => (
              <div key={i} className="bg-gray-100 p-2 rounded text-center">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Bathroom Amenities */}
        <div>
          <h3 className="font-semibold mb-2 uppercase">Bathroom Amenities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {room.bathroomAmenities?.map((item, i) => (
              <div key={i} className="bg-gray-100 p-2 rounded text-center">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Essential Amenities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-800">
        <div>
          <h3 className="font-semibold mb-2 uppercase">Essential Amenities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {room.essentialAmenities?.map((item, i) => (
              <div key={i} className="bg-gray-100 p-2 rounded text-center">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
