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
    </div>
  );
};

export default Header;
