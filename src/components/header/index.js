import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav class="container">
        <div class="logo">JMS Vastu</div>
        <ul class="nav-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/queries">Ask Question</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* <li>
            <a href="#contact">Contact</a>
          </li> */}
        </ul>
        <div class="mobile-menu">
          <i data-lucide="menu"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
