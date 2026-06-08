import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "../assets/logoFooter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Facebook from "../assets/Facebook.png";
import LinkedIn from "../assets/LinkedIn.png";
import Youtube from "../assets/Youtube.png";

export default function Footer() {
  return (
    <footer className="bg-[#064383] text-white py-4">
      <div className="container d-flex flex-column gap-4">
        {/* First Row */}
        <div className="row text-center text-md-start g-4">
          {/* Logo and Description */}
          <div className="col-12 col-md-6 col-lg-3 order-1 order-lg-1">
            <img src={logo} className="mx-auto mx-md-0" />
            <p className="footer-data  mt-2">
              ASA Agrotech is the leader of supplying bird feed products to
              locations such as USA, Canada and UK as well as to other European
              Markets.
            </p>
            <div className="d-flex gap-3 mt-4 justify-content-center justify-content-lg-start">
              {[Facebook, Youtube, LinkedIn].map((icon, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-center align-items-center rounded-circle"
                  style={{
                    height: "40px",
                    width: "40px",
                    backgroundColor: "black",
                  }}
                >
                  <img
                    src={icon}
                    alt="Social Icon"
                    className="img-fluid"
                    style={{ maxHeight: "20px", maxWidth: "20px" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div
            className="col-12 col-md-6 col-lg-6 order-2 order-lg-2 d-flex flex-wrap justify-content-around footer-three "
            style={{ marginTop: "5rem" }}
          >
            <div className="text-start" style={{ minWidth: "100px" }}>
              <h6 className="footer-head mb-2">Company</h6>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/about"
                    className="footer-data  text-decoration-none "
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="footer-data text-decoration-none"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="footer-data text-decoration-none">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partners"
                    className="footer-data text-decoration-none"
                  >
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-start" style={{ minWidth: "100px" }}>
              <h6 className="footer-head mb-2">Products</h6>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/bird-feed"
                    className="footer-data text-decoration-none"
                  >
                    Bird Feed
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bird-feed-mixes"
                    className="footer-data text-decoration-none"
                  >
                    Bird Feed Mixes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bird-feed"
                    className="footer-data text-decoration-none"
                  >
                    Nectar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bird-feed-mixes"
                    className="footer-data text-decoration-none"
                  >
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-start" style={{ minWidth: "100px" }}>
              <h6 className="mb-2 footer-head">Support</h6>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/supportcentre"
                    className="footer-data text-decoration-none"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="footer-data text-decoration-none">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="footer-data text-decoration-none"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="footer-data text-decoration-none"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Address */}
          <div
            className="col-12 col-lg-3 order-2 order-lg-3 footer-three"
            style={{ marginTop: "5rem" }}
          >
            <h6 className="mb-4 text-center text-lg-start footer-head">
              Get in Touch
            </h6>

            {/* Each info row: icon left always, text centered on mobile, left on desktop */}
            <div className="d-flex align-items-start mb-3">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="me-2 text-blue-400 mt-1"
                style={{ minWidth: "24px" }} // fix icon width so text aligns nicely
              />
              <span className="w-100 text-center text-lg-start footer-data">
                ASA Agrotech Pvt Ltd. Lihgaon Road, <br /> Mahalgaon, Nagpur
                -441202 Maharashtra, India
              </span>
            </div>

            <div className="d-flex align-items-start mb-3">
              <FontAwesomeIcon
                icon={faPhone}
                className="me-2 text-blue-400 mt-1"
                style={{ minWidth: "24px" }}
              />
              <div className="w-100 text-center text-lg-start footer-data">
                <div>+91 85301 09888</div>
                <div>+91 712 2424910-911</div>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="me-2 text-blue-400 mt-1"
                style={{ minWidth: "24px" }}
              />
              <span className="w-100 text-center text-lg-start footer-data">
                info@myhappywings.com
              </span>
            </div>
          </div>
        </div>

        <hr
          style={{
            margin: "0px",
            border: "none",
            borderTop: "2px solid black",
          }}
        />

        {/* Bottom Links */}
        <div className="row text-center pt-3">
          <div className="col-12 col-md-6 text-center text-md-start">
            <p className="footer-data">
              © 2025 ASA Agrotech. All rights reserved.
            </p>
          </div>

          <div className="col-12 col-md-6">
            <ul className="list-unstyled d-flex flex-wrap justify-content-center justify-content-md-end gap-3">
              <li>
                <Link to="/help" className="footer-data text-decoration-none">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/faq" className="footer-data text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="footer-data text-decoration-none"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
