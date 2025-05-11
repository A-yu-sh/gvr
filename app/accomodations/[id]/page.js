import roomData from "../../../roomData.json";
import RoomDetails from "./RoomDetails";

// ✅ stays in app/accomodations/[id]/page.js
export async function generateMetadata({ params }) {
  const room = roomData.rooms.find((room) => room.id === parseInt(params.id));
  return {
    title: room
      ? `Green Vista Resort | ${room.name}`
      : "Green Vista Resort | Room Not Found",
    description: room
      ? `Details about ${room.name} at Green Vista Resort in Murti.`
      : "Room not found at Green Vista Resort.",
  };
}

export default function RoomPage() {
  return (
    <div>
      <RoomDetails />
    </div>
  );
}
