import { useEffect, useState } from "react";

export default function HomeContent() {
  const [anim, setAnim] = useState("");
  useEffect(() => {
    let name = "Full Stack Developer";
    for (let i = 0; i < name.length; i++) {
      setTimeout(() => {
        setAnim((prev) => prev + name[i]);
      }, i * 200);
    }
    return ()=> {
      
    }
  }, []);
  return (
    <div className="w-full lg:w-1/2 mb-3 ">
      <h1 className="text-xl lg:text-4xl font-bold mb-3">
        Hi, My Name Is <span className="primary-color">Shamim </span>
        Creative <span className="primary-color">{anim}</span>
      </h1>
      <p className="text-[#a5a2a2] mb-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero facere a
        nostrum officia nam deleniti eaque voluptas odit consectetur modi,
        perspiciatis enim! Tempore voluptatum consequuntur eveniet quis quae
        deleniti dicta.
      </p>
      <div className="mt-5">
        <button className="btn">Register</button>
      </div>
    </div>
  );
}
