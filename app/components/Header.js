"use client";
import React, { useState, useEffect } from "react";
import { Pacifico } from "next/font/google";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/New_Logo.jpg";
import white_logo from "../assets/White_Logo_2.png";
import { motion, useAnimation } from "framer-motion";
import { usePathname } from "next/navigation";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["cyrillic-ext"],
});

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();
  const headerControls = useAnimation();
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setScrolled(true);
        controls.start({ opacity: 1, y: 0 });
        headerControls.start({ opacity: 1, y: 0 });
      } else {
        setScrolled(false);
        if (isLandingPage) {
          controls.start({ opacity: 0, y: -20 });
          headerControls.start({ opacity: 0, y: -20 });
        } else {
          controls.start({ opacity: 1, y: 0 });
          headerControls.start({ opacity: 1, y: 0 });
        }
      }
    };

    // Initial header state based on page
    if (!isLandingPage) {
      setScrolled(true);
      controls.start({ opacity: 1, y: 0 });
      headerControls.start({ opacity: 1, y: 0 });
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, headerControls, isLandingPage]);

  let Links = [
    { name: "About Us", link: "/about" },
    { name: "Gallery", link: "#" },
    { name: "Packages", link: "/packages" },
    { name: "Services", link: "#" },
    { name: "Accomodation", link: "/accomodations" },
    { name: "Event", link: "#" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="relative z-50">
      {/* DESKTOP HEADER */}
      <div className="hidden lg:flex fixed top-0 left-0 right-0 bg-white shadow-md p-5 items-center justify-between z-50">
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="logo"
            className="h-12 w-auto object-contain"
            height={50}
            width={100}
          />
        </Link>
        <div className="flex space-x-6 font-normal text-lg">
          {Links.map((e) => (
            <Link key={e.name} href={e.link} className="hover:text-[#FF5A00]">
              {e.name}
            </Link>
          ))}
        </div>
        <a
          className="bg-[#FF5A00] text-white px-10 py-3 rounded-lg font-semibold hover:bg-[#FF4500] transition-all duration-300"
          href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=I%20want%20to%20book%20a%20room`}
          target="_blank"
          rel="noopener noreferrer">
          Contact Us
        </a>
      </div>

      {/* MOBILE HEADER - TRANSPARENT (Only for landing page before scroll) */}
      {!scrolled && isLandingPage && (
        <div
          className="fixed top-0 left-0 right-0 z-40 p-5 flex justify-between items-center lg:hidden 
          bg-black bg-opacity-30 backdrop-blur-sm transition-all duration-300">
          <Link href="/" className="flex items-center">
            <Image
              src={white_logo} // White logo on transparent header
              alt="white logo"
              className="h-12 w-auto object-contain transition-opacity duration-300"
              height={60}
              width={120}
            />
          </Link>
          <div onClick={() => setOpen(!open)} className="cursor-pointer">
            <RxHamburgerMenu className="h-7 w-8 text-[#FEF1E0]" />
          </div>
        </div>
      )}

      {/* MOBILE HEADER - SOLID BACKGROUND (For all other pages and landing page after scroll) */}
      {(scrolled || !isLandingPage) && (
        <motion.div
          initial={{
            opacity: isLandingPage ? 0 : 1,
            y: isLandingPage ? -20 : 0,
          }}
          animate={isLandingPage ? controls : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-30 p-5 bg-white shadow-md flex justify-between items-center lg:hidden">
          <Link href="/" className="flex items-center">
            <Image
              src={Logo} // Normal logo for solid header
              alt="logo"
              className="h-10 w-auto object-contain transition-opacity duration-300"
              height={50}
              width={100}
              priority
            />
          </Link>
          <div onClick={() => setOpen(!open)} className="cursor-pointer">
            <RxHamburgerMenu className="h-7 w-8 text-black" />
          </div>
        </motion.div>
      )}

      {/* MOBILE MENU OVERLAY - No changes needed */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: open ? "0%" : "-100%", opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-6 font-bold text-xl z-50 shadow-lg p-10 lg:hidden">
        <IoCloseOutline
          className="h-8 w-8 text-black absolute top-6 right-6 cursor-pointer"
          onClick={() => setOpen(false)}
        />
        {Links.map((e) => (
          <Link
            key={e.name}
            href={e.link}
            className={`${pacifico.className} hover:text-[#FF5A00]`}
            onClick={() => setOpen(false)}>
            {e.name}
          </Link>
        ))}
        <a
          className="bg-[#FF5A00] text-white px-10 py-3 rounded-lg font-semibold hover:bg-[#FF4500] transition-all duration-300"
          href={
            navigator.userAgent.match(/Android/i)
              ? `intent://send?phone=${process.env.NEXT_PUBLIC_PHONE_NUMBER}&text=I%20want%20to%20book%20a%20room#Intent;scheme=whatsapp;package=com.whatsapp;end;`
              : `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=I%20want%20to%20book%20a%20room`
          }
          target="_blank"
          rel="noopener noreferrer">
          Contact Us
        </a>
      </motion.div>
    </nav>
  );
};

export default Header;
