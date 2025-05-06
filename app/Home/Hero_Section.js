"use client";
import React from "react";
import image1 from "../assets/Group 5.jpg";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MoveDown } from "lucide-react";

const PoppinsFont = Poppins({
  weight: "700",
  subsets: ["latin"],
});

const Hero_Section = () => {
  return (
    <div
      className="relative w-full h-screen  "
      onContextMenu={(e) => e.preventDefault()}>
      {/* Social & Book Now Buttons (Centered Left Side) */}
      <div className="absolute top-52 lg:top-1/2 -left-2 transform -translate-y-1/2 flex flex-col space-y-6 text-white z-20 items-center">
        <a
          href="https://www.facebook.com/greenvistadooars/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FF5A00] transition-all text-xl">
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/greenvistaresort/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FF5A00] transition-all text-xl">
          <FaInstagram />
        </a>
        <button className="hover:text-[#FF5A00] transition-all py-6 -rotate-90 text-sm font-light">
          Book Now
        </button>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image1}
          alt="Background Image"
          width={1920}
          height={1080}
          className="w-full h-full max-w-full max-h-full object-cover"
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Text Content with Fade Animation */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-6 md:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}>
        <h1
          className={`${PoppinsFont.className} text-7xl md:text-8xl font-extrabold leading-tight`}>
          Green Vista
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-[#FF5A00]">
          A Place of Peace & Tranquility
        </h2>
        <p className="text-lg md:text-2xl mt-3 md:mt-5 max-w-xl">
          Discover a haven of serenity and luxury at our resort.
        </p>
        <p className="text-lg md:text-2xl mt-3 md:mt-5 max-w-xl">
          Trusted By 1500+ Customers
        </p>
      </motion.div>

      {/* Scroll Down Indicator with Fade Animation */}
      <div className="absolute bottom-20 w-full flex justify-center">
        <motion.div
          className="flex flex-col items-center text-white cursor-pointer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [10, 0, 10] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }>
          <p className="text-sm mb-2 tracking-widest">SCROLL DOWN</p>

          <MoveDown size={20} className="text-white animate-bounce mt-2" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero_Section;
