import PageTitle from "../components/PageTitle";

export default function Contact() {
  return (
    <div className="section contact-section">
      <PageTitle title={"Contact Me"}>Send Me Message</PageTitle>
      <div className="row flex flex-col lg:flex-row justify-between mt-10">
        <div className="form-content lg:w-[40%]">
          <ul>
            <li className="mt-2 flex gap-2">
              <i className="fa-solid fa-location-pin"></i>
              <span>Dhaka,Bangladesh</span>
            </li>
            <li className="mt-2 flex gap-2">
              <i className="fa-solid fa-envelope"></i>{" "}
              <span>codingshamim@gmail.com</span>
            </li>
            <li className="mt-2 flex gap-2">
              <i className="fa-solid fa-phone"></i> <span>01816628413</span>
            </li>
          </ul>
        </div>
        <div className="form mt-10 lg:mt-0 lg:w-[60%]">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 outline-none bg-[#232323]"
          />
          <div className="flex flex-col lg:flex-row gap-2 mt-3">
            <input
              type="text"
              placeholder="Email"
              className="w-full p-2 outline-none bg-[#232323]"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-2 outline-none bg-[#232323]"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className=" mt-3 w-full p-2 outline-none bg-[#232323]"
          />
          <textarea
            className=" outline-none w-full p-2 bg-[#232323] mt-3"
            placeholder="Message..."
            rows={8}
          ></textarea>
          <button className="btn">Send Message</button>
        </div>
      </div>
    </div>
  );
}
