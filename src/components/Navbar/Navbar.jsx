import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={handleHome}>
          Tripsy Booking
        </span>
        <div className="navItems">
          <button className="navButton" onClick={handleRegister}>
            Resgiter
          </button>
          <button className="navButton" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
