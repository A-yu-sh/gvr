import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
} from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import white_logo from "../assets/White_Logo_2.png";

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-white py-10 px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left Section */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="w-auto h-12 flex items-center justify-center">
              <Image
                src={white_logo}
                alt="Green Vista Resort"
                width={240}
                height={240}
                className="h-20 w-auto object-contain transition-opacity duration-300"
              />
            </div>
          </div>
          <p className="mt-4 text-sm max-w-xs mx-auto md:mx-0">
            Green Vista Resort is a sanctuary of comfort and elegance, providing
            unmatched experiences in breathtaking natural surroundings.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <FaFacebookF className="text-xl cursor-pointer" />
            <FaInstagram className="text-xl cursor-pointer" />
            <FaWhatsapp className="text-xl cursor-pointer" />
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-xl font-bold">Get in touch</h3>
          <div className="mt-4 space-y-2 text-sm">
            <p className="flex justify-center md:justify-start md:items-center gap-2">
              <Phone size={16} /> +91 81013 68313
            </p>
            <p className="flex justify-center md:justify-start md:items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:greenvistaresort@gmail.com"
                className="hover:underline">
                greenvistaresort@gmail.com
              </a>
            </p>

            <p className="flex justify-center md:justify-start md:items-center gap-2">
              <MapPin size={16} /> NH-31, Mangalbari, Chalsa, India, West Bengal
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-xl font-bold">PAYMENT</h3>
          <p className="mt-4 text-sm max-w-xs mx-auto md:mx-0">
            Pay any way you choose. No matter whether it's cash or an
            international payment card, we support all options.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <FaCcVisa className="text-2xl" />
            <FaCcMastercard className="text-2xl" />
            <FaCcAmex className="text-2xl" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-white pt-4 text-center text-xs">
        Copyright ©2025 Green Vista Resort, All rights reserved.
      </div>
    </footer>
  );
}
