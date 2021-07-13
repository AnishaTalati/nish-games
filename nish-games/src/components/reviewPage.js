import { useEffect, useState } from "react";
import Comments from "./comments";

const ReviewPage = ({ useParams }) => {
  const { review_id } = useParams();
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch(`https://nc-games-app.herokuapp.com/api/reviews/${review_id}`)
      .then((response) => response.json())
      .then((data) => {
        setReview(data.review);
      });
  }, [review_id]);

  return (
    <div>
      {review.map((info) => {
        return (
          <span>
            <h2 key={info.review_id}>{info.title}</h2>
            <p>{info.review_body}</p>
            <p>{info.designer}</p>
            <p>
              Category: {info.category} <br />
              <button>More reviews from this category</button>
            </p>
            <p>
              {info.owner}
              <br />
              <button>More Reviews from this Owner</button>
            </p>
            <p>
              Votes: {info.votes} <button>Up Vote</button>
            </p>
            <Comments review={review} />
          </span>
        );
      })}
    </div>
  );
};

export default ReviewPage;
