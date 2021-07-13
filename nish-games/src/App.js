import "./App.css";
import { Route, Switch, useParams } from "react-router-dom";
import { useState } from "react";
import Header from "./components/header";
import BrowsingBar from "./components/browsingBar";
import Reviews from "./components/reviews";
import UsersList from "./components/usersList";
import ReviewPage from "./components/reviewPage";
import Login from "./components/login";

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
        <Route exact path="/:category">
          <Reviews reviews={reviews} setReviews={setReviews} />
        </Route>
        <Route exact path="/:owner">
          <Reviews reviews={reviews} setReviews={setReviews} />
        </Route>
        <Route exact path="/login">
          <UsersList />
        </Route>
        <Route exact path="/:review_id">
          <ReviewPage useParams={useParams} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
