import { useContext, useEffect, useState } from "react";
import Comments from "./comments";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/user";
import Votes from "./Votes";
import CommentVotes from "./CommentVotes";
import AddComment from "./addComment";

const ReviewPage = ({ useParams }) => {
  const { review_id } = useParams();
  const [review, setReview] = useState([]);
  const [comments, setComments] = useState([]);
  const { user } = useContext(UserContext);
  let username = user.username;
  const [commentBody, setCommentBody] = useState("");

  useEffect(() => {
    fetch(`https://nc-games-app.herokuapp.com/api/reviews/${review_id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
          <span key={info.review_id}>
            <h2>{info.title}</h2>
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
            <Votes review_id={info.review_id} votes={info.votes} />
            <br />
            <AddComment>
              <form>
                <label id="review-body">
                  <textarea id="review-body" value></textarea>
                </label>
                <button>Submit Comment</button>
              </form>
            </AddComment>
            <br />
            <Comments review={review}>
              {" "}
              {comments.map((comment) => (
                <p key={comment.comment_id}>
                  {comment.author}
                  <br />
                  Created at: {comment.created_at}
                  <br />
                  {comment.body}
                  <br />
                  <CommentVotes
                    review_id={info.review_id}
                    comment_id={comment.comment_id}
                    votes={comment.votes}
                  />
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
