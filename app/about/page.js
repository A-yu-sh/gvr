import React from "react";
import { Wifi, Clock, WavesLadder, Dumbbell, Coffee } from "lucide-react";
import Image from "next/image";
import { League_Gothic, Inter } from "next/font/google";

export const metadata = {
  title: "Green Vista Resort | About",
  description:
    "Discover the story, vision, and values behind Green Vista Resort — where luxury meets nature in the heart of Murti, West Bengal.",

  icons: {
    icon: "/favicon.png",
  },
};

const LeagueGothic = League_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const AboutUsPage = () => {
  const propertyImages = [
    "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dr-swimming-pool-during-daytime-qai_Clhyq0s",
    "https://images.unsplash.com/photo-1529316275402-0462fcc4abd6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://images.unsplash.com/photo-1623718649591-311775a30c43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const amenities = [
    {
      name: "Luxurious Rooms",
      description: "Spacious living cabins for refreshed stays.",
      icon: Wifi,
    },
    {
      name: "24/7 Room Service",
      description: "Round-the-clock service for your convenience.",
      icon: Clock,
    },
    {
      name: "Infinity Pool & Spa",
      description: "Relax with breathtaking views.",
      icon: WavesLadder,
    },
    {
      name: "Fitness Center",
      description: "Stay fit with top-class equipment.",
      icon: Dumbbell,
    },
    {
      name: "Complimentary Breakfast",
      description: "Start your day with a delicious meal.",
      icon: Coffee,
    },
  ];

  const reviews = [
    {
      name: "Emily R.",
      review:
        "An absolutely stunning experience! The rooms were luxurious and the staff went above and beyond to make us feel special.",
    },
    {
      name: "James T.",
      review:
        "The best hotel stay I’ve ever had. Impeccable service, great food, and beautiful amenities.",
    },
    {
      name: "Sophia M.",
      review:
        "I loved the spa and the infinity pool! It was a peaceful escape from the city hustle.",
    },
    {
      name: "Daniel K.",
      review:
        "Amazing location, comfortable rooms, and excellent hospitality. Highly recommended!",
    },
    {
      name: "Ava P.",
      review:
        "From check-in to check-out, everything was seamless. Can’t wait to visit again!",
    },
  ];

  return (
    <div className=" min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`${LeagueGothic.className} text-5xl md:text-6xl lg:text-7xl text-[#FF5A00] text-center flex justify-center mt-32`}>
          About Us
        </div>
        <div className="text-center text-gray-700 mb-12 text-md md:text-xl mx-auto">
          <p className="mb-4">
            Nestled near the Murti River in Chalsa, Dooars, Green Vista Resort
            and Restor Cloudway offer a peaceful retreat amidst nature's beauty.
          </p>
          <p className="mb-4">
            Surrounded by lush greenery and stunning forest views, our
            properties provide the perfect escape with modern amenities, cozy
            accommodations, and a range of activities like nature walks and
            jungle safari.
          </p>
          <p>
            Whether you're looking for relaxation or adventure, both resorts
            offer a comfortable stay with homely warmth and breathtaking
            surroundings. Come experience the charm of Dooars with us at Green
            Vista Resort & Restor Cloudway.
          </p>
        </div>

        {/* Image gallery */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
            Discover DreamStay
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {propertyImages.map((url, index) => (
              <div
                key={index}
                className={`relative group overflow-hidden rounded-3xl shadow-lg ${
                  index % 2 === 0 ? "row-span-2" : ""
                }`}
                style={{ height: index % 2 === 0 ? "500px" : "250px" }}>
                <Image
                  src={url}
                  alt={`Property ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <p className="text-white text-xl font-semibold">DreamStay</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
            Why Choose Us
          </h2>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
            At Green Vista Resort & Restor Cloudway, we offer world-class
            amenities, personalized service, and a serene natural setting for an
            unforgettable stay. Our dedicated team ensures every detail is taken
            care of, leaving you with lasting memories.
          </p>
        </section>
        {/* Amenities with icons */}
        {/* Amenities with icons */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {amenities.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-2">
                <div className="w-full h-full border border-gray-300 rounded-lg p-6 flex flex-col items-start">
                  <div className="mb-4 text-gray-400">
                    <item.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Reviews */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
            Guest Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-6 flex flex-col justify-between transform hover:scale-105 hover:shadow-2xl transition duration-500">
                <p className="italic text-gray-600 mb-4">"{item.review}"</p>
                <p className="text-right font-semibold text-gray-800">
                  - {item.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
