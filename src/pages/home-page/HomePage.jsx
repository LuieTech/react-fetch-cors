import "./HomePage.css"
import beers from "../../assets/beers.png"
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="d-flex flex-column align-items-center p-4">
      <article className="article">
        <div className="d-flex justify-content-center">
          <NavLink to={"/beers"}>
            <img src={beers} alt="all-beers" style={{ width: "600px" }} />
          </NavLink>
          
        </div>
        <div className="intro">
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
            inventore necessitatibus qui commodi ab deleniti numquam excepturi.
          </p>
        </div>
      </article>
      <article className="article">
        <div className="d-flex justify-content-center">
          <NavLink to={"/random-beer"}>
            <img src={beers} alt="all-beers" style={{ width: "600px" }} />
          </NavLink>
        </div>
        <div className="intro">
          <h2>Random Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
            inventore necessitatibus qui commodi ab deleniti numquam excepturi.
          </p>
        </div>
      </article>
      <article className="article">
        <div className="d-flex justify-content-center">
          <NavLink to={"/new-beer"}>
            <img src={beers} alt="all-beers" style={{ width: "600px" }} />
          </NavLink>
        </div>
        <div className="intro">
          <h2>New Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
            inventore necessitatibus qui commodi ab deleniti numquam excepturi.
          </p>
        </div>
      </article>
    </div>
  );
}

export default HomePage;
