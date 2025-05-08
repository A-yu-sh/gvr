import React from "react";
import Card from "../components/Card";
import data from "../../services.json";
import { League_Gothic } from "next/font/google";

const LeagueGothic = League_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto mt-28 px-4 sm:px-6 lg:px-8">
      <h1
        className={`${LeagueGothic.className} text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 text-orange-600`}>
        Our VALUE ADDED SERVICES
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {data.specialServices.map((service, index) => (
          <div key={index} className="flex justify-center">
            <Card
              title={service.name}
              desc={service.description}
              img={service.image}
              link={service.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
