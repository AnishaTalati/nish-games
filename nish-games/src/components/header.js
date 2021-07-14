import { Link, Route } from "react-router-dom";
import { UserContext } from "../contexts/user";
import { useContext } from "react";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="header">
      <a href="/">
        <h1>Nish's Game Reviews </h1>
      </a>

      <p className="login">
        <Link to="/login">Login</Link>
      </p>
      <p className="current-user">
        Currently Logged in as:
        <img className="current-user-img" src={user.avatar_url}></img>
        <span>{user.username}</span>
      </p>
    </div>
  );
};

export default Header;
