import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import galleria from "../assets/galleria.png";
import imara from "../assets/Imara.png";
import trm from "../assets/trm.png";
import mountain from "../assets/mountain.png";
import kenya from "../assets/kenya.png";

function TrustedBy() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <section className=" mt-20">
      <h1>Trusted By</h1>
      <Slider {...settings} className="flex justify-around">
        <img
          src={galleria}
          alt="galleria"
          className=" lg:h-[100px] lg:w-[150px] h-[80px] w-[80px] object-contain"
        />
        <img
          src={imara}
          alt="imara"
          className=" lg:h-[100px] lg:w-[150px] h-[80px] w-[80px] object-contain"
        />
        <img
          src={trm}
          alt="trm"
          className=" lg:h-[100px] lg:w-[150px] h-[80px] w-[80px] object-contain"
        />
        <img
          src={mountain}
          alt="mountain"
          className=" lg:h-[100px] lg:w-[150px] h-[80px] w-[80px] object-contain"
        />
      </Slider>

      <div className="flex mt-5 p-10 justify-around">
        <div className="text-[#A31621] font-bold">
          <h2 className="flex flex-col text-4xl mb-3">
            20{" "}
            <span className="text-[#4E8098] border-b-2 p-1 border-[#4E8098] text-sm">
              Counties
            </span>
          </h2>
          <h2 className="flex flex-col text-4xl mb-3">
            576{" "}
            <span className="text-[#4E8098] border-b-2 p-1 border-[#4E8098] text-sm">
              Customers
            </span>
          </h2>

          <h2 className="flex flex-col text-4xl mb-3">
            47{" "}
            <span className="text-[#4E8098] border-b-2 p-1 border-[#4E8098] text-sm">
              Employees
            </span>
          </h2>
        </div>
        <div>
          <img
            src={kenya}
            alt="kenya"
            className="lg:h-[450px] lg:w-[450px] h-[300px] w-[350px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;
