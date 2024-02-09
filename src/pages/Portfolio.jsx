import PageTitle from "../components/PageTitle";
import PortfolioItem from "../components/PortfolioItem";
import { portfolio } from "../data/portfolio";

export default function Portfolio() {
  const sliced = portfolio.slice(0, 3);
  const portfolioList = sliced.map((portfolioItem) => (
    <PortfolioItem key={portfolioItem.id} portfolioItem={portfolioItem} />
  ));
  return (
    <div className="section" id="portfolio">
      <PageTitle title="Portfolio">My Latest Works!</PageTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
        {portfolioList}
      </div>
      <div className="mt-5 w-full flex justify-center items-center">
        <button className="btn">Show More</button>
      </div>
    </div>
  );
}
