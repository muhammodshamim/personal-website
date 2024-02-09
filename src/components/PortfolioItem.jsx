export default function PortfolioItem({ portfolioItem }) {
  const description = portfolioItem.description.slice(0, 200);
  return (
    <div className="glass p-2">
      <div className="h-[200px]">
        <img src={portfolioItem.thumb} className="object-cover w-full h-full" />
      </div>
      <h1 className="text-base md:text-2xl mt-2 mb-2 font-bold">
        {portfolioItem.title}
      </h1>
      <p className="text-[#7d7d7d]">{description}</p>
      <button className="btn">View Details</button>
    </div>
  );
}
