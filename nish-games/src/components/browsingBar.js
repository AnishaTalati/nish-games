import { Link } from "react-router-dom";
import { getCategories, sortReviews } from "../utils/utils";
import { useEffect, useState } from "react";

const BrowsingBar = ({ reviews, setQuery }) => {
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
          <button className="dropbtn">Sort By</button>
          <div className="dropdown-content">
            <a href={`/reviews/order_by=asc`}>Most Recent</a>
            <a href={`/reviews?sort_by=votes`}>Most Popular</a>
            <a href={`/reviews?sort_by=comments`}>Most Comments</a>
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
