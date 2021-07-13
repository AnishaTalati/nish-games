import "./App.css";
import { Route, Switch, useParams } from "react-router-dom";
import Header from "./components/header";
import BrowsingBar from "./components/browsingBar";
import Reviews from "./components/reviews";
import UsersList from "./components/usersList";
import ReviewPage from "./components/reviewPage";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowsingBar />
      <Switch>
        <Route exact path="/">
          <Reviews />
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
