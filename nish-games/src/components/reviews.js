import { getReviews, sortReviews } from "../utils/utils";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Reviews = ({ reviews, setReviews }) => {
  const { category } = useParams();

  useEffect(() => {
    getReviews(category).then((response) => {
      setReviews(response);
    });
  }, []);

  return (
    <div>
      <h2>
        {category ? `Showing ${category} Reviews` : `Showing All Reviews`}
      </h2>
      <ul className="reviews-list">
        {" "}
        {reviews.map((review) => {
          return (
            <Link to={`/reviews/${category}/${review.review_id}`}>
              <li className="reviews" key={review.review_id}>
                <h4>{review.title}</h4>
                <img src={review.review_img_url} className="review-img"></img>
                <br />
                Author: {review.owner}
                <br />
                Votes: {review.votes}
                Comments: {review.comment_count}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
