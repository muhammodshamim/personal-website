import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <div className="logo">
        {" "}
        <span>S</span>hamim <span>.</span>
      </div>
    </Link>
  );
}
