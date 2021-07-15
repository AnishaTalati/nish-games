import axios from "axios";
import { Link } from "react-router-dom";

const reviewsApi = axios.create({
  baseURL: "https://nc-games-app.herokuapp.com/api",
});

export const getCategories = async () => {
  const { data } = await reviewsApi.get("/categories");
  return data.categories;
};

export const getReviews = async (category, query = null) => {
  if (query === null) {
    const { data } = await reviewsApi.get(`/reviews`, {
      params: { category: category, sort_by: query },
    });
    return data.reviews;
  }
};

export const getUsers = async () => {
  const { data } = await reviewsApi.get("/users");
  return data.users;
};

export const patchVotes = (review_id, increment) => {
  return reviewsApi
    .patch(`/reviews/${review_id}`, {
      inc_votes: increment,
    })
    .then((response) => {
      console.log(response.data);
    });
};

export const patchCommentVotes = (review_id, comment_id, increment) => {
  return reviewsApi
    .patch(`/reviews/${review_id}/comments/${comment_id}`, {
      inc_votes: increment,
    })
    .then((response) => {
      console.log(response.data);
    });
};

export const postComment = (username, body) => {
  return;
};
