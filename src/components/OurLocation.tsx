function OurLocation() {
  return (
    <section>
      <h1>Our Location</h1>
      <div className=" lg:flex  justify-center lg:h-[450px] lg:mt-5">
        <div>
          <div className="bg-[#4E8098] text-[#FFFFFF] py-10 px-5 h-1/2">
            <h2 className=" font-bold mb-2">Nairobi</h2>
            <p>Near Fortis Industrial Park, Chady Rd, Nairobi</p>
            <p>Call: 0726847646</p>
            <p>Email: Support@bakhsons.co.ke</p>
          </div>
          <div className="bg-[#CED3DC] text-[#4E8098] py-10 px-5 h-1/2">
            <h2 className=" font-bold mb-2">Mombasa</h2>
            <p>Mwambundu road Majengo - mvita</p>
            <p>Call: 0726847646</p>
            <p>Email: Support@bakhsons.co.ke</p>
          </div>
        </div>
        <div className=" overflow-hidden lg:pb-[56.25%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11203.778900338524!2d36.91145929298671!3d-1.3644142402704131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0d07de0f5ddf%3A0xef79534810b17a1d!2sFortis%20Industrial%20Park!5e0!3m2!1sen!2ske!4v1700449535786!5m2!1sen!2ske"
            width="600"
            height="450"
            title="Our Location"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default OurLocation;
