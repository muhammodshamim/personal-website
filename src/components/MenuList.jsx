import { NavLink } from "react-router-dom";

export default function MenuList() {
  return (
    <ul className="nav flex h-full  lg:h-none flex-col lg:flex-row justify-center items-center gap-10 font-medium glass p-2 rounded-sm ">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/portfolio"}>Portfolio</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </ul>
  );
}
