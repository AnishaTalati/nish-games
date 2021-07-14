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
  const [user, setUser] = useState({});
  const [query, setQuery] = useState(null);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Header />
          <BrowsingBar
            reviews={reviews}
            setReviews={setReviews}
            setQuery={setQuery}
          />
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
            <Route exact path="/reviews/:query">
              <Reviews useParams={useParams} />
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
