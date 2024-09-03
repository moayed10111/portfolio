import { Link, useLocation } from 'react-router-dom';
import './NavTabs.css'; // Import custom CSS for additional styling

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs bg-dark py-3 px-5">
      <li className="nav-item mx-2">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active bg-gradient-secondary text-white' : 'nav-link text-light'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item mx-2">
        <Link
          to="/AboutMe"
          className={currentPage === '/AboutMe' ? 'nav-link active bg-gradient-secondary text-white' : 'nav-link text-light'}
        >
          About me
        </Link>
      </li>
      <li className="nav-item mx-2">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active bg-gradient-secondary text-white' : 'nav-link text-light'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item mx-2">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active bg-gradient-secondary text-white' : 'nav-link text-light'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item mx-2">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active bg-gradient-secondary text-white' : 'nav-link text-light'}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;