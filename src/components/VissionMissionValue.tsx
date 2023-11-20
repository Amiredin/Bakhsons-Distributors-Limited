import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

function VissionMissionValue() {
  return (
    <section className="relative mb-24">
      <div className=" bg-[#4E8098] lg:h-[150px] h-[250px]  -skew-y-[2deg]"></div>
      <div className=" bg-[#CED3DC] lg:h-[150px] h-[250px] -skew-y-[2deg]"></div>
      <div className=" absolute lg:top-40   top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:flex items-center justify-around  lg:p-10 lg:gap-10 gap-2 ">
        <div className=" bg-white rounded-full lg:h-72 lg:w-72  h-40 w-40 text-center p-6 flex flex-col items-center justify-center mb-2">
          <VisibilityOutlinedIcon
            className=" !lg:h-20 lg:w-20 underline"
            style={{ height: "50px", width: "100px", color: "#A31621" }}
          />
          <u></u>
          <h2 className=" lg:mt-3 lg:mb-2 lg:text-lg text-sm text-[#4E8098] font-bold leading-relaxed">
            Vission
          </h2>
          <p className="text-[#68A4D0] text-[0.6rem] lg:text-[1rem]">
            Enriching lives through exceptional products, innovation, and
            trusted partnerships.
          </p>
        </div>
        <div className=" bg-white rounded-full lg:h-72 lg:w-72  h-40 w-40 text-center p-6 flex flex-col items-center justify-center mb-2">
          <CheckCircleOutlineIcon
            style={{ height: "50px", width: "100px", color: "#A31621" }}
          />
          <h2 className=" lg:mt-3 lg:mb-2 lg:text-lg text-sm text-[#4E8098] font-bold leading-relaxed">
            Mission
          </h2>
          <p className="text-[#68A4D0] text-[0.6rem] lg:text-[1rem]">
            Delivering excellence through quality products and exceptional
            service.
          </p>
        </div>
        <div className=" bg-white rounded-full lg:h-72 lg:w-72  h-40 w-40 text-center p-6 flex flex-col items-center justify-center mb-2">
          <AssignmentTurnedInIcon
            style={{ height: "50px", width: "100px", color: "#A31621" }}
          />
          <h2 className=" lg:mt-3 lg:mb-2 lg:text-lg text-sm text-[#4E8098] font-bold leading-relaxed">
            Values
          </h2>
          <p className="text-[#68A4D0] text-[0.6rem] lg:text-[1rem]">
            Excellence through integrity, innovation, and partnerships, making a
            positive impact.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VissionMissionValue;
