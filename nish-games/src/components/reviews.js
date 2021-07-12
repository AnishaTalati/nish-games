import { getReviews } from "../utils/utils";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews().then((response) => {
      setReviews(response);
    });
  }, []);
  return (
    <div>
      <h2>Reviews</h2>
      <ul className="reviews-list">
        {reviews.map((review) => {
          return <li key={review.review_id}>{review.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Reviews;
