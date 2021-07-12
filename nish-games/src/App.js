import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import BrowsingBar from "./components/browsingBar";
import Reviews from "./components/reviews";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowsingBar />
      <Switch>
        <Route exact path="/">
          <Reviews />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
