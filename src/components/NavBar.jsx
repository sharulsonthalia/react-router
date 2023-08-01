import { Link } from "react-router-dom"

const NavBar = () => {

    return(
        <div id="navbar">
          <nav>
            <Link className="navLink" to="/">Yellow</Link>
            <Link className="navLink" to="/blue">Blue</Link>
            <Link className="navLink" to="/red">Red</Link>
            <Link className="navLink" to="/green">Green</Link>
            <Link className="navLink" to="/purple">Purple</Link>
            <Link className="navLink" to="/orange">Orange</Link>

          </nav>
        </div>
    )
}

export default NavBar