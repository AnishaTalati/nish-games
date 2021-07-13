import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://nc-games-app.herokuapp.com/api",
});

export const getCategories = async () => {
  const { data } = await reviewsApi.get("/categories");
  return data.categories;
};

export const getReviews = async (category, owner) => {
  const { data } = await reviewsApi.get("/reviews", {
    params: { category: category },
  });
  return data.reviews;
};

export const getUsers = async () => {
  const { data } = await reviewsApi.get("/users");
  return data.users;
};
