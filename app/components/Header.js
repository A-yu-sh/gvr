"use client";
import React, { useState } from "react";
import { Pacifico } from "next/font/google";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/New_Logo.jpg";
import { motion } from "framer-motion";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["cyrillic-ext"],
});

const Header = () => {
  const [open, setOpen] = useState(false);

  let Links = [
    { name: "About Us", link: "#" },
    { name: "Gallery", link: "#" },
    { name: "Packages", link: "#" },
    { name: "Accomodation", link: "#" },
    { name: "Event", link: "#" },
  ];

  return (
    <nav className="relative z-50">
      <div className="fixed bg-white shadow-md -mt-2 h-24 top-0 left-0 right-0 grid grid-cols-2 md:grid-cols-[20%_60%_20%] p-5">
        {/* Logo */}
        <div className="flex justify-start md:justify-around items-center mt-[-10px]">
          <Link href="/" className="flex justify-start md:justify-center">
            <Image
              src={Logo}
              alt="logo"
              className="h-full w-full mt-2 md:h-w-3/4 md:w-3/4 md:mt-0 object-contain relative z-50"
              height={5000}
              width={5000}
            />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex md:items-center md:justify-center space-x-6 font-bold md:font-normal text-lg">
          {Links.map((e) => (
            <Link key={e.name} href={e.link} className="hover:text-[#FF5A00]">
              {e.name}
            </Link>
          ))}
        </div>

        {/* Contact for Desktop */}
        <div className="hidden md:flex md:justify-evenly mt-[-12]">
          <a
            className="bg-[#FF5A00] text-white px-20 py-3 my-5 mr-5 rounded-lg font-semibold hover:bg-[#FF4500] transition-all duration-300"
            href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=I%20want%20to%20book%20a%20room`}
            target="_blank"
            rel="noopener noreferrer">
            Contact Us
          </a>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: open ? "0%" : "-100%", opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`md:hidden fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-6 font-bold text-xl z-50 shadow-lg p-10`}>
          {Links.map((e) => (
            <Link
              key={e.name}
              href={e.link}
              className={`${pacifico.className}hover:text-[#FF5A00]`}
              onClick={() => setOpen(false)}>
              {e.name}
            </Link>
          ))}

          <a
            className="bg-[#FF5A00] text-white px-10 py-3 rounded-lg font-semibold hover:bg-[#FF4500] transition-all duration-300"
            href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=I%20want%20to%20book%20a%20room`}
            target="_blank"
            rel="noopener noreferrer">
            Contact Us
          </a>
        </motion.div>

        {/* Hamburger Icon */}
        <div
          onClick={() => setOpen(!open)}
          className="flex justify-end md:hidden mt-3 z-[60]">
          {open ? (
            <IoCloseOutline className="h-7 w-8 cursor-pointer" />
          ) : (
            <RxHamburgerMenu className="h-7 w-8 cursor-pointer" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
