import React from "react";
import image1 from "../assets/Group 2.jpg";
import image2 from "../assets/Group 3.jpg";
import image3 from "../assets/Group 4.jpg";
import image4 from "../assets/Group 5.jpg";
import image5 from "../assets/Group 6.jpg";
import Image_Slider from "../components/Image_Slider";
import Container from "../components/Container";
import Bio_Section from "./Bio_Section";
import Nearby_Attraction from "./Nearby_Attraction";
import Amenities from "./Amenities";
import Our_Accomodation from "./Our_Accomodation";
import Opinion_And_Reviews from "./Opinion_And_Reviews";
import GALLERY from "./GALLERY";

const page = () => {
  const images = [image1, image2, image3, image4, image5];
  return (
    <div>
      <Container>
        <Image_Slider images={images} timer={3000} /> <Bio_Section />
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
