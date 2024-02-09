import { Link } from "react-router-dom";
import Logo from "../components/Logo";

export default function Footer() {
  return (
    <footer className="w-full h-[200px] ">
      <div className="flex flex-col justify-center items-center ">
        <div className="mt-10">
          <Logo />
        </div>
        <div>
          <p className="text-center">
            2024 All Right Reserved || Rakib Khan Shamim
          </p>
        </div>
        <div>
          <ul className="text-[#7d7d7d]">
            <li>
              <Link
                to={"https://www.facebook.com/profile.php?id=100092464380010"}
                target="_blank"
              >
                Facebook |
              </Link>

              <Link to={"https://github.com/codingshamim"} target="_blank">
                | Github
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
