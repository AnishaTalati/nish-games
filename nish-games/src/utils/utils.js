import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://nc-games-app.herokuapp.com/api",
});

export const getReviews = async () => {
  const { data } = await reviewsApi.get("/reviews");
  return data.reviews;
};

export const getUsers = async () => {
  const { data } = await reviewsApi.get("/users");
  return data.users;
};
