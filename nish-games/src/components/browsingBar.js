import { Link } from "react-router-dom";
import { getCategories } from "../utils/utils";
import { useEffect, useState } from "react";

const BrowsingBar = ({ reviews }) => {
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
          <button className="dropbtn">Review By Category</button>
          <div className="dropdown-content">
            {categories.map((category) => {
              return (
                <a key={category.slug} href={`/reviews/${category.slug}`}>
                  {category.slug}
                </a>
              );
            })}
          </div>
        </DropDown>
        <DropDown>
          <button className="dropbtn">Review By Owner</button>
          <div className="dropdown-content">
            {reviews.map((review) => {
              return (
                <a key={review.review_id} href={`/reviews/${review.owner}`}>
                  {review.owner}
                </a>
              );
            })}
          </div>
        </DropDown>
        <DropDown>
          <div className="dropbtn">
            <Link to="/reviews/:votes">Most Popular</Link>
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
