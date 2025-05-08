import Image from "next/image";
import React from "react";
import transparent_logo from "../assets/logo-no-bg.png";
import Container from "../components/Container";
import { League_Gothic } from "next/font/google";

const LeagueGothic = League_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const Bio_Section = () => {
  return (
    <Container>
      <div className=" ">
        <div className="flex justify-center">
          <Image
            src={transparent_logo}
            alt="image"
            width={500}
            height={500}
            className="h-[20%] w-[20%] lg:w-[10%] lg:h-[10%] flex justify-center my-5"
          />
        </div>
        <div
          className={`${LeagueGothic.className} text-5xl md:text-6xl lg:text-7xl text-[#FF5A00] flex justify-center`}>
          GREEN VISTA RESORT
        </div>
        <div className="flex justify-center items-center ">
          <p className="px-10 md:px-0 text-gray-700 leading-relaxed text-center mt-5 text-sm md:text-md lg:text-lg max-w-[168ch] 4xl:text-2xl">
            Green Vista Resort is a reasonable option for travellers looking out
            for resort in Lataguri. It is located in Batabari. From all the
            Budget hotels in Lataguri, Green Vista Resort is very much popular
            among the tourists. A smooth check-in/check-out process, flexible
            policies and friendly management garner great customer satisfaction
            for this property. The Resort has standard Check-In time as 12:00 PM
            and Check-Out time as 11:00 AM. You can find numerous hotels in
            Lataguri under different categories and Green Vista Resort is one
            the best hotel under its category.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Bio_Section;
