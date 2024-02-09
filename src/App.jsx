import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
