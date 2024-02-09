import banner from "../assets/img/home-img.jpg";
export default function HomeImg() {
  return (
    <div className="w-full lg:w-1/2 lg:h-[600px] lg:p-[50px] ">
      <div className="p-2 glass home">
        <img src={banner} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
