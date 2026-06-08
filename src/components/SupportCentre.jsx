import { FaSearch, FaChevronRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SupportImg from "../assets/SupportImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SupportCentre() {
  return (
    <>
      <Navbar />
      <div className="relative overflow-x-hidden">
        <div className="container py-5 px-3">
          {/* Top Section */}
          <div className="row align-items-center mb-5">
            <div className="col-12 col-lg-3 mb-4 mb-lg-0">
              {/* Left Image */}
              <img
                src={SupportImg}
                alt="Support"
                className="img-fluid mx-auto d-block support-image1"
                style={{
                  position: "absolute",
                  height: "275px",
                  width: "410px",
                  top: "60px",
                  left: "-80px",
                  transform: "rotate(-10deg)",
                }}
              />
            </div>

            <div className="col-12 col-lg-6 text-center text-lg-start finance-mobile">
              <div className="text-center mb-2">
                <span
                  className="Acc-text"
                  style={{
                    backgroundColor: "#4A3AF61A",
                    padding: "5px 15px",
                    borderRadius: "60px",
                  }}
                >
                  Support Centre
                </span>
              </div>
              <h1 className="Finance-head mb-4">How can we help you?</h1>

              {/* Search Bar */}
              {/* Search Bar */}
              <div
                className="position-relative w-full lg:w-[1076px] mb-4 text-start responsive-margin-left support-ipad-pro-width"
                style={{ marginLeft: 0 }}
              >
                <input
                  type="text"
                  placeholder="Search jobs"
                  className="w-full pr-12 px-4 py-2 focus:outline-none"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 1)",
                    borderRadius: "45px",
                    backgroundColor: "rgba(237, 235, 254, 1)",
                  }}
                />
                <div className="position-absolute top-0 bottom-0 end-0 d-flex align-items-center">
                  <div
                    className="h-100 px-4 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "rgba(43, 108, 176, 1)",
                      borderTopRightRadius: "45px",
                      borderBottomRightRadius: "45px",
                    }}
                  >
                    <FontAwesomeIcon icon={faSearch} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Five Spans */}
              <div
                className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-center support-centre-tags support-tags"
                style={{ width: "892px", marginLeft: "-8rem" }}
              >
                {["Account", "Billing", "Products", "Shipping", "Returns"].map(
                  (item, index) => (
                    <span
                      key={index}
                      className="bg-[#F7F8FF] text-[#262626] px-3 py-1 rounded-pill text-sm flex items-center justify-center"
                      style={{ width: "156px", height: "45px" }}
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="col-12 col-lg-3 mt-4 mt-lg-0">
              {/* Right Image */}
              <img
                src={SupportImg}
                alt="Help"
                className="img-fluid mx-auto d-block support-image2"
                style={{
                  position: "absolute",
                  height: "275px",
                  width: "410px",
                  transform: "scaleX(-1) rotate(-10deg)",
                  top: "60px",
                  right: "-80px",
                }}
              />
            </div>
          </div>

          {/* Main Content Section */}
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              {/* Six Cards */}
              <div className="mb-4 d-flex flex-column align-items-center w-100 px-3">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="d-flex justify-content-between align-items-center bg-light p-3 mb-3 rounded shadow-sm w-100"
                    style={{
                      maxWidth: "993px", // maintains desktop layout
                    }}
                  >
                    <span className="text-dark">
                      Help with a product purchase
                    </span>
                    <FaChevronRight className="text-gray-500" />
                  </div>
                ))}
              </div>

              {/* Not Found Text */}
              <h5 className="mb-4 text-base sm:text-lg ms-5 sm:ms-12">
                Can’t find what you’re looking for?
              </h5>

              {/* Two Cards */}
              <div className="d-flex flex-column align-items-center w-100">
                {[...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    className="d-flex justify-content-between align-items-center bg-light p-3 mb-3 rounded shadow-sm w-100"
                    style={{ maxWidth: "993px" }}
                  >
                    <span className="text-dark">Visit our FAQ’s Section</span>
                    <FaChevronRight className="text-gray-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
