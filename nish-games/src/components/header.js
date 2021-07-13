import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Nish's Game Reviews </h1>
      </Link>
      <span className="login">
        <Link to="/login">Log In</Link>
      </span>
    </div>
  );
};

export default Header;
