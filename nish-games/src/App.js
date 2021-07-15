import "./App.css";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./contexts/user";
import Header from "./components/header";
import BrowsingBar from "./components/browsingBar";
import Reviews from "./components/reviews";
import UsersList from "./components/usersList";
import ReviewPage from "./components/reviewPage";

function App() {
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState({
    username: "cooljmessy",
    avatar_url: "https://i.imgur.com/WfX0Neu.jpg",
    name: "Peter Messy",
  });

  return (
    <BrowserRouter>
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
            <Route exact path="/reviews/:category/:review_id">
              <ReviewPage useParams={useParams} />
            </Route>
            <Route exact path="/login">
              <UsersList />
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
