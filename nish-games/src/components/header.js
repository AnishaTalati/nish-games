import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>Nish's Game Reviews </h1>
      <span className="login">
        <Link to="/login">Log In</Link>
      </span>
    </div>
  );
};

export default Header;
