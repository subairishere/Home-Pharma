import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/imgs/carousel-1.jpg";
import img2 from "../../assets/imgs/carousel-2.jpg";
import img3 from "../../assets/imgs/carousel-3.jpg";

export default function index() {
  return (
    <Carousel showThumbs={false}>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
    </Carousel>
  );
}
