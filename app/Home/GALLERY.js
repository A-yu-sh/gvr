"use client";
import React, { useState, useEffect } from "react";
import { League_Gothic, Inter } from "next/font/google";
import Link from "next/link";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";
import InteractiveBentoGallery from "@/components/interactive-bento-gallery";

const LeagueGothic = League_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const InterFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const GALLERY = () => {
  const image_links = [
    {
      id: 1,
      type: "image",
      title: "Anurag Mishra",
      desc: "Driven, innovative, visionary",
      mediaUrl:
        "https://firebasestorage.googleapis.com/v0/b/coffee-shop-b6e1a.appspot.com/o/Green_Vista_Resort%2FDarjeeling.jpg?alt=media&token=da1e5ca0-5bc3-488b-b16d-06a647cf4c62",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 2,
      type: "video",
      title: "Dog Puppy",
      desc: "Adorable loyal companion.",
      mediaUrl: "https://cdn.pixabay.com/video/2024/07/24/222837_large.mp4",
      span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 3,
      type: "image",
      title: "Forest Path",
      desc: "Mystical forest trail",
      mediaUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 4,
      type: "image",
      title: "Falling Leaves",
      desc: "Autumn scenery",
      mediaUrl:
        "https://firebasestorage.googleapis.com/v0/b/coffee-shop-b6e1a.appspot.com/o/Green_Vista_Resort%2FCoochbehar.jpg?alt=media&token=42dab326-34ec-4fed-8e01-09e1c81712c2",
      span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 5,
      type: "video",
      title: "Bird Parrot",
      desc: "Vibrant feathered charm",
      mediaUrl:
        "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 6,
      type: "image",
      title: "Beach Paradise",
      desc: "Sunny tropical beach",
      mediaUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 7,
      type: "video",
      title: "Shiva Temple",
      desc: "Peaceful Shiva sanctuary.",
      mediaUrl:
        "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div
        className={`${LeagueGothic.className} text-5xl md:text-6xl lg:text-7xl mt-20 text-[#FF5A00] flex justify-center `}>
        GALLERY
      </div>
      {isMobile ? (
        <ThreeDPhotoCarousel mediaItems={image_links} />
      ) : (
        <InteractiveBentoGallery
          mediaItems={image_links}
          title={"Media Gallery"}
          description={"A collection of images and videos."}
        />
      )}
    </div>
  );
};

export default GALLERY;
