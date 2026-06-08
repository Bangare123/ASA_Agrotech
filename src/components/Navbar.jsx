import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const toggleAboutDropdown = () => setShowAboutDropdown(!showAboutDropdown);
  const aboutRef = useRef();
  const location = useLocation(); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setShowAboutDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg ps-3 pe-2 py-2 mx-3 my-3 "
      style={{
        borderRadius: "24px",
      }}
    >
      <div className="container-fluid d-flex align-items-center ">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="ASA Agrotech"
            style={{ height: "50px", width: "142px" }}
          />
        </Link>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse mobile-menu ${
            isOpen ? "show" : ""
          } ${isOpen ? "position-absolute w-40 z-50 bg-white p-4 shadow" : ""}`}
          id="navbarNav"
          style={{
            visibility: "visible",
            flexGrow: "0",
            top: "60px",
            right: "18px",
          }}
        >
          <ul
            className="navbar-nav flex-column flex-lg-row align-items-start align-items-lg-center ipad-pro-navbar1"
            style={{ gap: "25px" }}
          >
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link navbar-one ${
                  location.pathname === "/" ? "active" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* About Us with dropdown */}
            <li className="nav-item dropdown position-relative" ref={aboutRef}>
              <div className="d-flex align-items-center justify-between">
                {/* Link to About Us page */}
                <Link
                  to="/about"
                  className={`nav-link navbar-one ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  style={{ cursor: "pointer", textDecoration: "none" }}
                >
                  About Us
                </Link>

                {/* Dropdown icon (separate from Link) */}
                <span
                  onClick={toggleAboutDropdown}
                  style={{ cursor: "pointer", padding: "0 6px" }}
                >
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ fontSize: "14px" }}
                  />
                </span>
              </div>

              {/* Dropdown menu */}
              {showAboutDropdown && (
                <ul
                  className="dropdown-menu show "
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    zIndex: 1000,
                    minWidth: "135px",
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <li className="nav-item ">
                    <Link
                      to="/careers"
                      className="nav-link navbar-one "
                      onClick={() => {
                        setShowAboutDropdown(false);
                        setIsOpen(false);
                      }}
                    >
                      Careers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/ourpartners"
                      className="nav-link navbar-one"
                      onClick={() => {
                        setShowAboutDropdown(false);
                        setIsOpen(false);
                      }}
                    >
                      Our Partners
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/sustainability"
                      className="nav-link navbar-one"
                      onClick={() => {
                        setShowAboutDropdown(false);
                        setIsOpen(false);
                      }}
                    >
                      Sustainability
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/supportcentre"
                      className="nav-link navbar-one"
                      onClick={() => {
                        setShowAboutDropdown(false);
                        setIsOpen(false);
                      }}
                    >
                      Support Centre
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Other nav links */}
            <li className="nav-item">
              <Link
                to="/products"
                className={`nav-link navbar-one ${
                  location.pathname === "/products" ? "active" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/accreditation"
                className={`nav-link navbar-one ${
                  location.pathname === "/accreditation" ? "active" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Accreditation
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/finance"
                className={`nav-link navbar-one ${
                  location.pathname === "/finance" ? "active" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Finance
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/brand"
                className={`nav-link navbar-one ${
                  location.pathname === "/brand" ? "active" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Our Brand
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/blogs"
                className={`nav-link navbar-one ${
                  location.pathname === "/blogs" ? "active" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
            </li>
            <li
              className={`nav-item list-unstyled d-block d-lg-none ms-lg-3`}
              style={{ marginLeft: "-16px" }}
            >
              <Link
                to="/contactus"
                className="btn btn-primary btn-sm"
                style={{
                  height: "38px",
                  width: "142px",
                  borderRadius: "25px",
                  backgroundColor: "rgba(43, 108, 176, 1)",
                  fontSize: "17px",
                  padding: "5px",
                }}
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us button */}
        <li className="nav-item list-unstyled d-none d-lg-block ms-lg-3">
          <Link
            to="/contactus"
            className="btn btn-primary btn-sm"
            style={{
              height: "38px",
              width: "142px",
              borderRadius: "25px",
              backgroundColor: "rgba(43, 108, 176, 1)",
              fontSize: "17px",
              padding: "5px",
            }}
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </li>
      </div>
    </nav>
  );
}
