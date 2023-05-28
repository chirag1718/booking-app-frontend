import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Tripsy Booking</span>
        <div className="navItems">
          <button className="navButton">Resgiter</button>
          <button className="navButton ">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
