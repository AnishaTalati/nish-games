import { Link } from "react-router-dom";

const BrowsingBar = () => {
  return (
    <div className="browsing-bar">
      <h2>
        <Link to="/">All Reviews</Link>
        <Link to="/">By Category</Link>
        <Link to="/">By Game</Link>
        <Link>By Author</Link>
        <Link>Most Popular</Link>
      </h2>
    </div>
  );
};

export default BrowsingBar;
