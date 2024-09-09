import { Link, useLocation } from "react-router-dom";
import "./NavTabs.css"; // Import custom CSS for additional styling

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs bg-gradient-primary py-3 px-5">
      <li className="nav-item mx-2">
      
      </li>
      <li className="nav-item mx-2">
        <Link
          to="/AboutMe"
          className={
            currentPage === "/AboutMe"
              ? "nav-link active bg-gradient-secondary text-dark"
              : "nav-link text-dark"
          }
        >
          About me
        </Link>
      </li>
      <li className="nav-item mx-2">
        <Link
          to="/Portfolio"
          className={
            currentPage === "/Portfolio"
              ? "nav-link active bg-gradient-secondary text-dark"
              : "nav-link text-dark"
          }
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item mx-2">
        <Link
          to="/Contact"
          className={
            currentPage === "/Contact"
              ? "nav-link active bg-gradient-secondary text-dark"
              : "nav-link text-dark"
          }
        >
          Contact
        </Link>
      </li>
      <li className="nav-item mx-2">
        <Link
          to="/Resume"
          className={
            currentPage === "/Resume"
              ? "nav-link active bg-gradient-secondary text-dark"
              : "nav-link text-dark"
          }
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;