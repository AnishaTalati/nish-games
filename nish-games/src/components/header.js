import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <h1>Nish's Game Reviews </h1>
      </a>
      <span className="login">
        <a href="/login">Log In</a>
      </span>
    </div>
  );
};

export default Header;
