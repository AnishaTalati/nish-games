import axios from "axios";
import { Link } from "react-router-dom";

const reviewsApi = axios.create({
  baseURL: "https://nc-games-app.herokuapp.com/api",
});

export const getCategories = async () => {
  const { data } = await reviewsApi.get("/categories");
  return data.categories;
};

export const getReviews = async (params) => {
  const categories = [
    "strategy",
    "hidden-roles",
    "dexterity",
    "push-your-luck",
    "roll-and-write",
    "deck-building",
    "engine-building",
  ];
  if (categories.includes(params)) {
    const { data } = await reviewsApi.get(`/reviews`, {
      params: { category: params },
    });
    return data.reviews;
  } else {
    const { data } = await reviewsApi.get(`/reviews?${params}`, {
      params,
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

export const postComment = (review_id, comment) => {
  return reviewsApi
    .post(`/reviews/${review_id}/comments`, comment)
    .then((response) => {
      console.log(response);
    });
};

export const deleteComment = (comment_id) => {
  return reviewsApi.delete(`/comments/${comment_id}`).then((response) => {
    console.log(response.data);
  });
};
