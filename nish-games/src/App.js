import "./App.css";
import { Route, Switch, useParams } from "react-router-dom";
import { useState } from "react";
import Header from "./components/header";
import BrowsingBar from "./components/browsingBar";
import Reviews from "./components/reviews";
import UsersList from "./components/usersList";
import ReviewPage from "./components/reviewPage";

function App() {
  const [reviews, setReviews] = useState([]);

  return (
    <div className="App">
      <Header />
      <BrowsingBar reviews={reviews} setReviews={setReviews} />
      <Switch>
        <Route exact path="/">
          <Reviews reviews={reviews} setReviews={setReviews} />
        </Route>
        <Route exact path="/reviews/:category">
          <Reviews reviews={reviews} setReviews={setReviews} />
        </Route>
        <Route exact path="/login">
          <UsersList />
        </Route>
        <Route exact path="/reviews/:review_id">
          <ReviewPage useParams={useParams} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
