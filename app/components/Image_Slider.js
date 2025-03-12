"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";

const Image_Slider = ({ images = [], height, width, timer, animation }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const Slide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(Slide, timer);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-dvh ">
      <Image
        src={images[currentImage]}
        alt="Sliding Image"
        width={500}
        height={500}
        quality={100}
        className="w-auto h-dvh object-fill "
      />
    </div>
  );
};

export default Image_Slider;

// lg:full
// sm:1/2
// md:
