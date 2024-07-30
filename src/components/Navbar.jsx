import { NavLink } from "react-router-dom";
import HomeImg from "../assets/home-icon.png"
import "./Navbar.css"

function Navbar() {

  return(
    <div className="navbar">
      <NavLink to={"/"}>
        <img src={HomeImg} alt="home-Img"/>
      </NavLink>
    </div>
  )

}

export default Navbar;
