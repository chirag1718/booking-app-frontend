import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={handleHome}>
          Tripsy Booking
        </span>
        <div className="navItems">
          <button className="navButton">Resgiter</button>
          <button className="navButton ">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
