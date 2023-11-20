import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  beverageCarouselData,
  confectioneryCarouselData,
  electronicCarouselData,
} from "../data";
import { BeverageType, ConfectioneryType, ElectronicsType } from "../types";

function OurProducts() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    rtl: true, // Set to true for reverse direction
    arrows: false,
  };

  return (
    <section className="">
      <h1>Our Products</h1>
      <div className=" lg:flex gap-5 lg:mt-10 lg:h-[300px]">
        <div className=" lg:w-1/2 p-10">
          <h2 className=" text-[#4E8098] font-bold text-center mb-5 text-2xl">
            Beverages
          </h2>
          <p className=" lg:text-center text-[#68A4D0] text-[0.7rem] lg:text-[1rem]">
            We supply only the highest quality beverages, sourced from trusted
            producers and rigorously checked for taste, freshness, and
            authenticity. Your satisfaction is our priority, and we strive to
            deliver delightful and satisfying beverage options that exceed your
            expectations.
          </p>
        </div>
        <Slider
          {...settings}
          className=" bg-[#CED3DC]   lg:w-[65%] -skew-y-[2deg]"
        >
          {beverageCarouselData.map(({ image, title }: BeverageType) => (
            <div
              key={title}
              className=" !flex flex-col items-center justify-center"
            >
              <img
                src={image}
                alt={`Image ${title}`}
                className="  w-[105px] h-full  p-5 object-cove"
              />

              <p>{title}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className=" lg:flex gap-5 flex-row-reverse lg:h-[300px]">
        <div className=" lg:w-1/2 p-10">
          <h2 className=" text-[#4E8098] font-bold text-center mb-5 text-2xl">
            Electronics
          </h2>
          <p className=" text-center text-[#68A4D0] text-[0.7rem] lg:text-[1rem]">
            We supply top-quality home appliances from trusted brands, ensuring
            reliability, performance, and customer satisfaction.
          </p>
        </div>
        <Slider
          {...settings2}
          className=" bg-[#4E8098] p-5  lg:w-[60%] -skew-y-[2deg] mt-[0.90rem]"
        >
          {electronicCarouselData.map(({ image, title }: ElectronicsType) => (
            <div
              key={title}
              className=" !flex flex-col items-center justify-center"
            >
              <img
                src={image}
                alt={`Image ${title}`}
                className="  w-[175px] h-full  p-5 object-cove"
              />

              <p>{title}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className=" lg:flex gap-5 -mt-3.5 lg:h-[300px]">
        <div className=" lg:w-1/2 p-10">
          <h2 className=" text-[#4E8098] font-bold text-center mb-5 text-2xl">
            Confectionery
          </h2>
          <p className=" text-center text-[#68A4D0] text-[0.7rem] lg:text-[1rem]">
            We take pride in the quality of our confectionery. Our selection is
            made from the finest ingredients, ensuring exceptional taste and
            freshness. Every treat undergoes rigorous quality checks,
            guaranteeing a delightful experience with every bite.
          </p>
        </div>
        <Slider
          {...settings}
          className=" bg-[#CED3DC] p-5  lg:w-[60%] -skew-y-[2deg] mt0"
        >
          {confectioneryCarouselData.map(
            ({ image, title }: ConfectioneryType) => (
              <div
                key={title}
                className=" !flex flex-col items-center justify-center"
              >
                <img
                  src={image}
                  alt={`Image ${title}`}
                  className="  w-[175px] h-full  p-5 object-cove"
                />

                <p>{title}</p>
              </div>
            )
          )}
        </Slider>
      </div>
    </section>
  );
}

export default OurProducts;
