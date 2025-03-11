"use client";
import React, { useState } from "react";
import { Pacifico } from "next/font/google";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";

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
      <div className="fixed bg-white  top-0 left-0 right-0 grid grid-cols-2 md:grid-cols-[20%_60%_20%] p-5">
        {/* Logo */}
        <div
          className={`${pacifico.className} text-3xl flex justify-start md:justify-center ml-2 md:text-4xl`}>
          <Link href="/">Schn.</Link>
        </div>

        {/* Nav Links + Contact (Responsive) */}
        <div
          className={`md:flex md:justify-center md:space-x-5 absolute md:static bg-white md:bg-transparent 
              left-0 w-full md:w-auto flex flex-col md:flex-row p-7 leading-9 text-black rounded-lg transition-all
              ${
                open
                  ? "top-[105%] opacity-100 z-[300] text-center"
                  : "top-[-1100px] opacity-0 md:opacity-100"
              }`}>
          {Links.map((e) => (
            <Link
              key={e.name}
              href={e.link}
              className="hover:text-[#FF5A00] my-1 md:my-[-14] "
              onClick={() => setOpen(false)}>
              {e.name}
            </Link>
          ))}

          {/* Contact inside dropdown for small screens */}
          <div className="md:hidden">
            <div
              href="/Cart"
              className="bg-[#FF5A00] text-white px-6 py-2 my-5 rounded-lg font-semibold hover:bg-[#FF4500] transition-all duration-300"
              onClick={() => setOpen(false)}>
              Contact Us
            </div>
          </div>
        </div>

        {/* Contact for Desktop */}
        <div className="hidden md:flex md:justify-center mt-0 md:mt-0 ">
          <div
            href="/login"
            className="px-20 py-2 rounded-lg mt-2 ml-7 md:ml-14  text-white bg-[#FF4500]">
            Login
          </div>
        </div>

        {/* Hamburger Icon */}
        <div
          onClick={() => setOpen(!open)}
          className="flex justify-end md:hidden">
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
// "use client";
// import React, { useState } from "react";
// import { Pacifico } from "next/font/google";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { IoCloseOutline, IoPersonCircleOutline } from "react-icons/io5";
// import Link from "next/link";

// import Image from "next/image";

// const pacifico = Pacifico({
//   weight: "400",
//   subsets: ["cyrillic-ext"],
// });

// const Header = () => {
//   const [open, setOpen] = useState(false);

//   let Links = [
//     { name: "About Us", link: "#" },
//     { name: "Blogs", link: "#" },
//     { name: "Gallery", link: "#" },
//     { name: "Packages", link: "#" },
//     { name: "Accomodation", link: "#" },
//     { name: "Event", link: "#" },
//   ];
//   return (
//     <nav className=" relative z-50">
//       <div className="fixed bg-white shadow-md  mb-3 pb-5  top-0 left-0 right-0  grid grid-cols-3">
//         <div
//           className={`${pacifico.className} text-3xl flex justify-start md:justify-center ml-2 md:text-4xl md:ml-5 mt-5`}>
//           <Link href="/">Schn. </Link>
//         </div>

//         <div
//           className={`md:flex md:justify-center md:space-x-5 md:pb-0 absolute md:static border-2
//              bg-white md:bg-inherit border-gray-200 md:border-none md:z-fit z-[auto] left-0 md:w-auto md:pl-0 pl-9
//              flex ml-[0%] sm:ml-[00%] md:ml-0 flex-col md:flex-row  w-full  rounded-lg p-7 leading-9 md:text-black
//               text-black  mt-[4.2rem] md:mt-0 transition-all ease-in-out ${
//                 open ? "top-[15%]" : "top-[-1100px]"
//               }
// `}>
//           {Links.map((e) => {
//             return (
//               <Link
//                 key={e?.name}
//                 href={e?.link}
//                 className="mr-5 hover:text-gray-400">
//                 {e?.name}
//               </Link>
//             );
//           })}
//         </div>
//         <div className=" md:flex md:justify-center flex justify-center ">
//           <Link className="relative" href="/Cart">
//             Contact
//           </Link>
//         </div>
//         <div
//           onClick={() => setOpen(!open)}
//           className="flex justify-end mr-11 md:hidden ">
//           {open ? (
//             <IoCloseOutline className="h-7 w-8 mt-6" />
//           ) : (
//             <RxHamburgerMenu className="h-7 w-8 mt-6" />
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
