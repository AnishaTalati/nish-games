import { useEffect, useState } from "react";
import Comments from "./comments";
import useVote from "../hooks/useVote";
import { Link } from "react-router-dom";

const ReviewPage = ({ useParams }) => {
  const { review_id } = useParams();
  const [review, setReview] = useState([]);
  const { votes, incVotes } = useVote(0);
  const { votes: votes2, incVotes: incVotes2 } = useVote(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://nc-games-app.herokuapp.com/api/reviews/${review_id}`)
      .then((response) => response.json())
      .then((data) => {
        setReview(data.review);
      });
  }, [review_id]);

  useEffect(() => {
    fetch(
      `https://nc-games-app.herokuapp.com/api/reviews/${review_id}/comments`
    )
      .then((response) => response.json())
      .then((data) => {
        setComments(data.comments);
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
              Written by: {info.owner}
              <br />
              <Link to={`/reviews/${info.owner}`}>
                More Reviews from this author
              </Link>
            </p>

            <p>
              Category: {info.category} <br />
              <Link to={`/reviews/${info.category}`}>
                More reviews from this category
              </Link>
            </p>

            <p>
              Votes: {info.votes + votes}{" "}
              <button onClick={incVotes}>Vote</button>
            </p>
            <Comments review={review}>
              {comments.map((comment) => (
                <p key={comment.comment_id}>
                  {comment.author}
                  <br />
                  Created at: {comment.created_at}
                  <br />
                  {comment.body}
                  <br />
                  Votes: {comment.votes + votes2}
                  <button onClick={incVotes2}>Vote</button>
                </p>
              ))}
            </Comments>
          </span>
        );
      })}
    </div>
  );
};

const DropDown = ({ children }) => {
  return <div className="dropdown">{children}</div>;
};

export default ReviewPage;
