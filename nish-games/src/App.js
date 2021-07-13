import "./App.css";
import { Route, Switch, useParams } from "react-router-dom";
import { useState } from "react";
import Header from "./components/header";
import BrowsingBar from "./components/browsingBar";
import Reviews from "./components/reviews";
import UsersList from "./components/usersList";
import ReviewPage from "./components/reviewPage";
import { UserContext } from "./contexts/user";

function App() {
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
          <Route exact path="/reviews/:owner">
            <Reviews reviews={reviews} setReviews={setReviews} />
          </Route>
          <Route exact path="/login">
            <UsersList />
          </Route>
          <Route exact path="/reviews/:review_id">
            <ReviewPage useParams={useParams} />
          </Route>
          <Route exact path="/reviews/:votes">
            <Reviews useParams={useParams} />
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
