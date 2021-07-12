import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import BrowsingBar from "./components/browsingBar";
import Reviews from "./components/reviews";
import UsersList from "./components/usersList";

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
      </Switch>
    </div>
  );
}

export default App;
