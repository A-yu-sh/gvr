import React from "react";

import Image_Slider from "../components/Image_Slider";
import Container from "../components/Container";
import Bio_Section from "./Bio_Section";
import Nearby_Attraction from "./Nearby_Attraction";
import Amenities from "./Amenities";
import Our_Accomodation from "./Our_Accomodation";
import Opinion_And_Reviews from "./Opinion_And_Reviews";
import GALLERY from "./GALLERY";
import Hero_Section from "./Hero_Section";

const page = () => {
  return (
    <div>
      <Container>
        <Hero_Section />

        <Bio_Section />
        <Nearby_Attraction />
      </Container>{" "}
      <Amenities />
      <Our_Accomodation />
      <Opinion_And_Reviews />
      <GALLERY />
    </div>
  );
};

export default page;
