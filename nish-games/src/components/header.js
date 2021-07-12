import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>Nish's Game Reviews </h1>
      <span className="login">
        <Link>Log In</Link>
      </span>
    </div>
  );
};

export default Header;
