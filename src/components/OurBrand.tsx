import delamare from "../assets/delamare.png";
import azam from "../assets/azam.png";
import cocacola from "../assets/cocacola.png";
import ramtos from "../assets/ramtos.png";
import cel from "../assets/cel.png";

function OurBrand() {
  return (
    <section className=" mb-8">
      <h1>Our Brands</h1>
      <div className="flex items-center justify-center lg:gap-10 gap-4">
        <img
          src={delamare}
          alt="delamare"
          className="h-[50px] w-50px object-contain lg:h-[150px] lg:w-[120px]"
        />
        <img
          src={azam}
          alt="azam"
          className="h-[50px] w-50px object-contain lg:h-[150px] lg:w-[120px]"
        />
        <img
          src={cocacola}
          alt="cocacola"
          className="h-[50px] w-50px object-contain lg:h-[150px] lg:w-[120px]"
        />
        <img
          src={ramtos}
          alt="ramtos"
          className="h-[50px] w-50px object-contain"
        />
        <img
          src={cel}
          alt="cel"
          className="h-[50px] w-50px object-contain lg:h-[150px] lg:w-[120px]"
        />
      </div>
    </section>
  );
}

export default OurBrand;
