import { Link } from "react-router-dom";
import "../css/Navbar.css";
const Navbar = () => {
  return (
    <header>
      <div>
            <h1 class="title">KRITHIKA D H</h1><hr/>
            <nav>
            <ul class="nav-links">
              <Link to="/">ABOUT</Link>
              <Link to="/experience">EXPERIENCE</Link>
              <Link to="/education">EDUCATION</Link>
              <Link to="/projects">PROJECTS</Link>
              <Link to="/skills">SKILLS</Link>
              <Link to="/certifications">CERTIFICATIONS</Link>
              <Link to="/achievements">ACHIEVEMENTS</Link>
              <Link to="/profiles">PROFILES</Link>
              <Link to="/contact">CONTACT</Link>
            </ul>
            </nav>
            <hr/>
        </div>
    </header>
  );
};
export default Navbar;
