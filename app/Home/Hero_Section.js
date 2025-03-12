"use client";
import React, { useState, useEffect } from "react";
import image1 from "../assets/Group 2.jpg";
import image2 from "../assets/Group 3.jpg";
import image3 from "../assets/Group 4.jpg";
import image4 from "../assets/Group 5.jpg";
import image5 from "../assets/Group 6.jpg";
import Image_Slider from "../components/Image_Slider";
import Image from "next/image";
import { Birthstone } from "next/font/google";
import { motion } from "framer-motion";
import { Mouse } from "lucide-react";

const synonyms = ["Nature", "Serenity", "Peace", "Tranquility", "Calmness"];
const BirthStone = Birthstone({
  weight: "400",
  subsets: ["latin"],
});

const Hero_Section = () => {
  const images = [image1, image2, image3, image4, image5];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;

  useEffect(() => {
    const currentWord = synonyms[wordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (text.length < currentWord.length) {
          setText(currentWord.substring(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (text.length > 0) {
          setText(currentWord.substring(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % synonyms.length);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <div className="relative h-[100vh] md:h-screen w-full overflow-hidden">
      <div className="relative w-auto h-screen">
        <div className="relative w-auto h-screen flex justify-center">
          <Image
            src={image1}
            alt="Sliding Image"
            width={500}
            height={500}
            quality={100}
            className="w-auto h-full object-cover "
          />
          <div className="absolute inset-0 max-w-[100%] w-[100%] h-screen xl:w-[88%] bg-black bg-opacity-50 left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 p-4">
        <h1
          className={`${BirthStone.className} text-6xl md:text-8xl max-w[7ch] xl:max-w-[15ch] font-semibold mb-4 drop-shadow-lg`}>
          Lost In <span className="text-[#FF5A00]">{text}</span>
        </h1>
        <p
          className={`${BirthStone.className} text-lg hidden lg:block md:text-3xl mb-8 drop-shadow-lg`}>
          Discover a haven of tranquility and luxury at our resort.
        </p>
        <button className="border border-white text-white px-6 py-2 hover:px-7 hover:py-3 text-sm md:px-8 md:py-3 md:text-base rounded-full hover:bg-white/30 hover:backdrop-blur-none hover:bg-opacity-30 font-semibold transition-colors drop-shadow-md">
          Book Now
        </button>
      </div>

      {/* Scroll Down Button - Centered */}
      {/* Scroll Down Button - Perfectly Centered */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <motion.div
          className="flex flex-col items-center text-white cursor-pointer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [10, 0, 10] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }>
          <p className="text-sm mb-2 tracking-widest">SCROLL DOWN</p>
          {/* Oval Background */}
          <div className="w-10 h-16 border-2 border-white rounded-full flex justify-center items-center">
            {/* Mouse Icon */}
            <Mouse size={20} className="text-white animate-bounce" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero_Section;
