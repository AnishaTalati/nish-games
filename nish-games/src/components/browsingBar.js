import { Link } from "react-router-dom";
import { getReviews } from "../utils/utils";
import { getCategories } from "../utils/utils";
import { useEffect, useState } from "react";

const BrowsingBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  });

  return (
    <div className="browsing-bar">
      <h2>
        <DropDown>
          <button class="dropbtn">Search Review By Category</button>
          <div class="dropdown-content">
            {categories.map((category) => {
              return <a href={`/reviews/${category.slug}`}>{category.slug}</a>;
            })}
          </div>
        </DropDown>
        <DropDown>
          <button class="dropbtn">Search Review By Owner</button>
          <div class="dropdown-content">
            {categories.map((category) => {
              return <a href={`/reviews/${category.slug}`}>{category.slug}</a>;
            })}
          </div>
        </DropDown>

        <Link to="/">By Game</Link>
        <DropDown>
          <div className="dropbtn">
            <Link to="/">Most Popular</Link>
          </div>
        </DropDown>
      </h2>
    </div>
  );
};

const DropDown = ({ children }) => {
  return <div className="dropdown">{children}</div>;
};

export default BrowsingBar;
