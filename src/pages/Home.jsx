import HomeContent from "../components/HomeContent";
import HomeImg from "../components/HomeImg";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <HomeContent />
        <HomeImg />
      </div>
      <Portfolio />
      <Contact />
    </>
  );
}
