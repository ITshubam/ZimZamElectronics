import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const header = () => {
  const [scrolled, setScrolled] = useState(false);

  const HandleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
      console.log(offset);
    };

    useEffect(() => {
      window.addEventListener("scroll", HandleScroll);
    }, []);

  return (
    <nav className={`navbar navbar-expand-lg nav_sec1
     ${scrolled ?"sticky_nav1" :""}`}>
      <div className="container gx-0">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto  mb-lg-0 nav_ul">
            <li className="nav_li">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav_li">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav_li">
              <NavLink to="/products" className="nav-link">
                Products
              </NavLink>
            </li>
            <li className="nav_li">
              <NavLink to="/contact" className="nav-link">
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button className="btn btn-outline-success search-button" type="button">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <NavLink to="/cart" className="cart-link ms-3">
              <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default header;
