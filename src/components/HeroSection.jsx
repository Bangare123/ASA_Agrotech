import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Bird1 from "../assets/Bird1.png";
import Bird2 from "../assets/Bird2.png";
import Bird3 from "../assets/Bird3.png";
import Card1 from "../assets/Ship.png";
import Card2 from "../assets/mdi_bird.png";
import Card3 from "../assets/ic_round-local-shipping.png";
import Card4 from "../assets/subway_location.png";
import Background1 from "../assets/Background1.png";
import Background2 from "../assets/Background2.png";
import Background3 from "../assets/Background3.png";
import "../css/HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-8 ">
      {/* 1️⃣ Row: Text then Image */}
      <div className="flex flex-col lg:flex-row  gap-4 w-full px-[3%] pt-3 ">
        <div className="flex-1 mt-5 ">
          <p className="Hero-One">
            Fueling Feathered Lives with{" "}
            <span className="Hero-span"> Every Seed </span>
          </p>
          <p className="Hero-Two">
            We offer top-quality bird feed products and services that are
            trusted, secure, and recognized globally for their safety and
            reliability.
          </p>
          <div className="d-flex gap-4 mt-4">
            <button
              className="bg-[#2B6CB0] text-white p-3 Home-Learn"
              style={{
                borderTopLeftRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            >
              Learn More{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </button>
            <button
              className="btn mt-2 mt-md-0 Home-Learn"
              style={{
                border: "1px solid #D1D5DB",
                borderBottomLeftRadius: "20px",
                borderTopRightRadius: "20px",
                padding: "12px 20px",
              }}
            >
              View Products
              <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </button>
          </div>
        </div>
        <div className="flex-1 px-[3%]">
          <img
            src={Bird1}
            alt="Hero 1"
            className="w-full"
            style={{
              height: "434px",
              width: "651px",
              borderTopRightRadius: "150px",
              borderBottomLeftRadius: "150px",
              border: "6px solid rgba(255, 255, 255, 1)",
              boxShadow:
                "4px 4px 4px rgba(0, 0, 0, 0.25), -4px -4px 4px rgba(0, 0, 0, 0.25)",
            }}
          />
        </div>
      </div>

      {/* 2️⃣ Row: Image then Text */}
      <div className="flex flex-col lg:flex-row items-center gap-4 w-full p-[3%]">
        <div
          className="resp-ipad-pro"
          style={{
            height: "532px",
            width: "502px",
            borderTopLeftRadius: "165px",
            borderBottomRightRadius: "165px",
            border: "6.63px solid #FFFFFF",
            boxShadow: "4.42px 4.42px 4.42px 0px rgba(0, 0, 0, 0.25)",
            overflow: "hidden",
            maxWidth: "95vw", // ensures it doesn't overflow on smaller screens
          }}
        >
          <img
            src={Bird2}
            alt="Hero 2"
            style={{
              width: "100%",
              height: "100%",
              transform: "scaleX(-1)",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-4">
          <span className="Hero-feature">+ FEATURES</span>
          <span className="Hero-right ">
            Essential Features for <br /> Smart Bird Nutrition
          </span>

          <div className="flex flex-wrap justify-center sm:justify-start gap-15 mt-5 px-4 sm:px-0 feature-resp">
            <div
              className="d-flex flex-column align-items-center justify-content-center text-center p-3 rounded-circle shadow"
              style={{
                width: "150px",
                height: "150px",
                backgroundColor: "#f8f9fa",
              }}
            >
              <img
                src={Card1}
                alt="Feature 1"
                style={{ width: "40px", height: "40px" }}
              />
              <p className="mt-2 feature-card">
                Flexible shipping with customized packaging - from bulk to
                retail-ready.
              </p>
            </div>

            <div
              className="d-flex flex-column align-items-center justify-content-center text-center p-3 rounded-circle shadow"
              style={{
                width: "150px",
                height: "150px",
                backgroundColor: "#f8f9fa",
              }}
            >
              <img
                src={Card2}
                alt="Feature 2"
                style={{ width: "40px", height: "40px" }}
              />
              <p className="mt-2 feature-card">
                Premium quality seeds for all seasonal feeding needs.
              </p>
            </div>

            <div
              className="d-flex flex-column align-items-center justify-content-center text-center p-3 rounded-circle shadow"
              style={{
                width: "150px",
                height: "150px",
                backgroundColor: "#f8f9fa",
              }}
            >
              <img
                src={Card3}
                alt="Feature 3"
                style={{ width: "40px", height: "40px" }}
              />
              <p className="mt-2 feature-card">
                Expert-crafted nutritional blends for birds' health.
              </p>
            </div>

            <div
              className="d-flex flex-column align-items-center justify-content-center text-center p-3 rounded-circle shadow"
              style={{
                width: "150px",
                height: "150px",
                backgroundColor: "#f8f9fa",
              }}
            >
              <img
                src={Card4}
                alt="Feature 4"
                style={{ width: "40px", height: "40px" }}
              />
              <p className="mt-2 feature-card">
                Sustainable sourcing with quality assurance guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3️⃣ Row: Three Cards */}
      <div className="flex flex-col lg:flex-row justify-center gap-4 w-full bg-[#F7F9FF] py-5 cards-resp">
        <div className="card w-80 shadow cards-three">
          <div className="card-body">
            <img
              src={Background1}
              style={{
                height: "56px",
                width: "56px",
                backgroundColor: "#D5DEFF",
                padding: "10px",
                borderRadius: "16px",
              }}
            />
            <span className="Hero-card mt-4 d-inline-block">Premium Seeds</span>
            <p className="Hero-para">
              Our Niger seeds are heat-treated in USDA approved facilities,
              ensuring highest quality for your birds.
            </p>
            <button className="Hero-read mb-2">
              Read More
              <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </button>
          </div>
        </div>
        <div className="card w-80 shadow cards-three">
          <div className="card-body">
            <img
              src={Background2}
              style={{
                height: "56px",
                width: "56px",
                backgroundColor: "#D5DEFF",
                padding: "10px",
                borderRadius: "16px",
              }}
            />
            <span className="Hero-card mt-4 d-inline-block">
              Quality Control
            </span>
            <p className="Hero-para">
              Stringent quality control with automated systems to ensure
              consistency in every batch of bird feed.
            </p>
            <button className="Hero-read mb-2">
              Read More <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </button>
          </div>
        </div>
        <div className="card w-80 shadow cards-three">
          <div className="card-body">
            <img
              src={Background3}
              style={{
                height: "56px",
                width: "56px",
                backgroundColor: "#D5DEFF",
                padding: "10px",
                borderRadius: "16px",
              }}
            />
            <span className="Hero-card mt-4 d-inline-block">
              Global Distribution
            </span>
            <p className="Hero-para">
              Reliable distribution network ensuring fresh bird feed reaches
              customers across the globe.
            </p>
            <button className="Hero-read mb-2">
              Read More <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </button>
          </div>
        </div>
      </div>

      {/* 4️⃣ Row: Full Width Image */}
      <div className="w-full flex justify-center p-[3%]">
        <img
          src={Bird3}
          alt="Hero 3"
          className="w-full max-w-[990px] h-[609px] object-cover image-trans2"
          style={{
            borderTopRightRadius: "150px",
            borderBottomLeftRadius: "150px",
          }}
        />
      </div>

      <div
        className="absolute left-1/2 transform -translate-x-1/2 px-4 md:px-8 my-5 p-4 rounded-xl w-[90%] md:w-[700px] image-trans"
        style={{
          top: "121rem",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(8px)",
        }}
      >
        <h1 className="home-whohead ">Who We Are</h1>
        <p className="home-who text-justify">
          At ASA Agrotech Pvt. Ltd., we’ve built a strong reputation in the
          global bird feed industry, proudly serving clients across multiple
          countries for nearly two decades. Known for delivering clean,
          high-quality bird food products, we are committed to excellence in
          every step of our process. We are among the select few facilities
          approved by the United States Department of Agriculture (USDA) for the
          production of heat-treated Niger (Nyjer) seeds. Our advanced,
          USDA-certified facility operates with a fully automated quality
          control system, featuring preset, regulated temperatures to meet USDA
          standards ensuring consistent, contamination-free processing with
          minimal human intervention. With a deep focus on safety, quality, and
          innovation, ASA Agrotech continues to be a trusted name in bird feed
          manufacturing worldwide.
        </p>
        <div className="w-full text-end">
          {" "}
          {/* Aligns button to right */}
          <button
            className="btn  text-sm md:text-base lg:text-lg px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 flex items-center gap-2"
            style={{
              backgroundColor: "#2B6CB0",
              color: "#FFFFFF",
              borderTopRightRadius: "20px",
              borderBottomLeftRadius: "20px",
            }}
          >
            Learn More About Us
            <span className="text-base md:text-lg">
              <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
