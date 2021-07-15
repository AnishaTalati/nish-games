import { useState, useEffect } from "react";
import { getReviewsByQuery } from "../utils/utils";
import { Link } from "react-router-dom";

const showQueryReviews = (query) => {
  const [queryReviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewsByQuery(query).then((response) => {
      console.log(response);
      setReviews(response.reviews);
    });
  }, [query]);

  return { queryReviews };
};

export default showQueryReviews;
