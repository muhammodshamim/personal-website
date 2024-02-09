import { useState } from "react";
import Logo from "./Logo";
import MenuList from "./MenuList";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex justify-between items-center py-5">
      <div className="logo">
        <Logo />
      </div>
      <div
        className={menu ? "menu lg:hidden active-menu" : "menu lg:hidden"}
        onClick={() => setMenu(!menu)}
      >
        <span></span>
      </div>
      <div className={menu ? "menulist active-menu" : "menulist"}>
        <MenuList />
      </div>
    </div>
  );
}
