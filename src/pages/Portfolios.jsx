import { useState } from "react";
import Item from "../components/Item";
import { portfolio } from "../data/portfolio";

export default function Portfolios() {
  const [input, setInput] = useState("");
  let searchList = portfolio.filter((port) =>
    port.title.toLowerCase().includes(input.toLowerCase())
  );
  const list = searchList.map((port) => (
    <Item key={port.id} portfolio={port} />
  ));

  return (
    <>
      <div className="w-full gap-2 flex-col lg:flex-row flex justify-center items-center">
        <div>
          <select className="w-full outline-none mr-2 p-3 cursor-pointer px-3">
            <option value="Sort" className="outline-none">
              Sort
            </option>
            <option value="Sort">Price Low To High</option>
            <option value="Sort">Price High To Low</option>
          </select>
        </div>
        <div className=" lg:w-1/2 ">
          <input
            type="text"
            placeholder="Search Anyting..."
            className="w-full p-2 bg-[#232323]  outline-none focus-border"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>
          <button className="w-full py-2 px-5 primary-bg lg:ml-2 hover:bg-[#287bda]">
            Search
          </button>
        </div>
      </div>
      <div>
        {searchList.length === 0 && (
          <div className="flex justify-center items-center text-3xl font-bold h-[400px]">
            No Result Found
          </div>
        )}
      </div>
      <div className="p-10 px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {list}
      </div>
    </>
  );
}
