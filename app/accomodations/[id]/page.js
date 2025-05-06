import Image from "next/image";
import roomData from "../../../roomData.json";

export default function RoomPage({ params }) {
  const { id } = params;
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
    <div className="max-w-6xl mx-auto p-6 space-y-10 mt-24">
      {/* Room Image */}
      <div>
        <Image
          src={room.image}
          alt={room.name}
          width={800}
          height={500}
          className="rounded-xl object-cover w-full h-[400px]"
        />
      </div>

      {/* Title and Basic Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold uppercase">{room.name}</h1>
          <p className="mt-2 text-gray-600">
            {room.size} · {room.view} · {room.bedType}
          </p>
        </div>
        <div className="bg-orange-600 text-white text-xl font-semibold px-6 py-3 rounded">
          From INR 4100
        </div>
      </div>

      {/* Main Amenities */}
      <div className="flex flex-wrap gap-4 text-gray-700 font-medium">
        {room.mainAmenities?.map((item, i) => (
          <div key={i} className="bg-orange-100 px-3 py-1 rounded">
            {item}
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="border-t-2 border-gray-200 my-6" />

      {/* Amenities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-800">
        {/* Room Amenities */}
        <div>
          <h3 className="font-semibold mb-2 uppercase">Room Amenities</h3>
          <div className="grid grid-cols-2 gap-2">
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
          <div className="grid grid-cols-2 gap-2">
            {room.bathroomAmenities?.map((item, i) => (
              <div key={i} className="bg-gray-100 p-2 rounded text-center">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Essentials */}
        <div>
          <h3 className="font-semibold mb-2 uppercase">Essential Amenities</h3>
          <div className="grid grid-cols-2 gap-2">
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
