import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SustainImage1 from "../assets/SustainImage1.png";
import Sustain1 from "../assets/SustainCard1.png";
import Sustain2 from "../assets/SustainCard2.png";
import Sustain3 from "../assets/SustainCard3.png";
import Sustain4 from "../assets/SustainCard4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Sustainability = () => {
  const goalsData = [
    {
      id: 1,
      title: "Tree Plantation",
      description:
        "Planting 1,000 trees annually, with over 10,000 trees planted since inception.",
      bgColor: "linear-gradient(90deg, #4ADE80 100%, #22C55E 0%)",

      src1: Sustain1,
    },
    {
      id: 2,
      title: "Energy Efficiency",
      description:
        "Achieved a 20% reduction in coal consumption over the past year.",
      bgColor: "linear-gradient(90deg, #FBBF24 100%, #F59E0B 0%)",
      src1: Sustain2,
    },
    {
      id: 3,
      title: "Water Conservation",
      description: "100% of rainwater is harvested at our factory site.",
      bgColor: "linear-gradient(90deg, #60A5FA 100%, #3B82F6 0%)",
      src1: Sustain3,
    },
    {
      id: 4,
      title: "Renewable Energy",
      description:
        "80% of our electricity is generated from a solar power plant.",
      bgColor: "linear-gradient(90deg, #2DD4BF 100%, #14B8A6 0%)",
      src1: Sustain4,
    },
  ];

  const progressData = [
    {
      id: 1,
      title: "Trees Planted",
      subtitle: "Target:2022-2025",
      current: 10000,
      target: 15000,
      unit: "trees",
    },
    {
      id: 2,
      title: "Water Saved",
      subtitle: "Target:2022-2025",
      current: 4500000,
      target: 5000000,
      unit: "liters",
    },
    {
      id: 3,
      title: "Carbon Footprint",
      subtitle: "Recycling Drive",
      current: 20,
      target: 40,
      unit: "kg",
    },
    {
      id: 4,
      title: "Renewable Energy",
      subtitle: "Clean Energy Drive",
      current: 50,
      target: 100,
      unit: "MWh",
    },
  ];
  const formatNumber = (num) => {
    return num >= 1000 ? (num / 1000).toFixed(1) + "k" : num;
  };

  return (
    <>
      <Navbar />
      <div className="relative overflow-x-hidden">
        <div className="flex flex-col p-4 gap-5">
          {/* Row with img1, text, img2 */}
          <div className="relative flex flex-col md:flex-row justify-center items-center gap-3">
            {/* Left Image */}
            <img
              src={SustainImage1}
              alt="Product"
              className="img-fluid sustain-resp-img1"
              style={{
                width: "410px",
                height: "275px",
                position: "absolute",
                transform: "scaleX(-1) rotate(25deg)",
                left: "-100px",
                top: "35px",
              }}
            />

            {/* Center Content */}
            <div className="flex flex-col items-center text-center z-10">
              <div className="mb-3">
                <span
                  className="Acc-text"
                  style={{
                    backgroundColor: "#4A3AF61A",
                    padding: "5px 15px",
                    borderRadius: "60px",
                  }}
                >
                  Sustainability Initiatives
                </span>
              </div>

              <span className="Finance-head">
                Driving Positive Change for a <br /> Greener Future
              </span>

              <p className="text-base md:text-lg mt-3 max-w-md">
                we're committed to sustainable practices that protect our planet
                while delivering quality bird feed products
              </p>
            </div>

            {/* Right Image */}
            <img
              src={SustainImage1}
              alt="Product"
              className="img-fluid sustain-resp-img2"
              style={{
                width: "410px",
                height: "275px",
                position: "absolute",
                right: "-100px",
                top: "35px",
                transform: "rotate(22deg)",
              }}
            />
          </div>

          {/* Section with 4 cards */}
          <div className="flex flex-col gap-3 mx-4">
            <h2 className="text-xl font-semibold text-center">
              Our Sustainability Initiatives
            </h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
              {goalsData.map((goal) => (
                <div className="col" key={goal.id}>
                  <div
                    className="card shadow-sm p-0 h-100"
                    style={{
                      minHeight: "180px",
                      borderTopRightRadius: "50px",
                      borderBottomLeftRadius: "50px",
                      overflow: "hidden",
                    }}
                  >
                    {/* Icon + Heading row with background */}
                    <div
                      className="d-flex  align-items-center justify-between"
                      style={{
                        background: goal.bgColor,
                        padding: "13px 13px 13px 25px",
                      }}
                    >
                      <span className="sustain-card-head m-0">
                        {goal.title}
                      </span>
                      <div
                        className="d-flex justify-content-center align-items-center rounded-circle"
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#FFFFFF33",
                        }}
                      >
                        <img
                          src={goal.src1}
                          alt={goal.title}
                          className="w-[30px] h-[30px]"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <div
                      className="p-5 d-flex justify-content-center align-items-center"
                      style={{
                        height: "100%",
                        minHeight: "100px",
                        textAlign: "center",
                      }}
                    >
                      <p className="sustain-card-para m-0">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section with h1, p, and progress bars */}
          <div className="flex flex-col gap-6 p-4">
            {/* Heading */}
            <div className="text-center">
              <h1 className="text-2xl font-bold">Measuring Our Progress</h1>
              <p className="text-sm text-muted">
                We track our environmental initiatives to ensure continuous
                improvement
              </p>
            </div>

            {/* Grouped Rows */}
            {[0, 2].map((startIndex) => (
              <div
                key={startIndex}
                className="row gy-4 justify-content-between"
              >
                {progressData.slice(startIndex, startIndex + 2).map((item) => {
                  const percent = Math.round(
                    (item.current / item.target) * 100
                  );
                  return (
                    <div key={item.id} className="col-12 col-md-6">
                      <div className="flex flex-col gap-2 bg-white shadow rounded p-3">
                        {/* Title & Subtitle */}
                        <div className="d-flex justify-content-between">
                          <h5 className="m-0 font-semibold">{item.title}</h5>
                          <p className="m-0 text-muted text-sm">
                            {item.subtitle}
                          </p>
                        </div>

                        {/* Progress Label */}
                        <div className="text-sm font-medium text-gray-600">
                          {formatNumber(item.current)} /{" "}
                          {formatNumber(item.target)} {item.unit}
                        </div>

                        {/* Progress Bar */}
                        <div className="progress" style={{ height: "10px" }}>
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: `${percent}%` }}
                            aria-valuenow={percent}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>

                        {/* Bottom Info */}
                        <div className="d-flex justify-content-between text-sm text-muted">
                          <span>{percent}% complete</span>
                          <span>Goal: 100%</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <div className="three bg-[#2B6CB0] py-12 ">
          <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 px-4 md:px-10">
            <div className="text-center text-md-start one text-white">
              <div className="sustain-join">
                Join Us in Our Sustainability <br /> Journey
              </div>
              <p className="text-sm leading-relaxed mt-2">
                We believe in collaboration to achieve greater environmental
                impact.
                <br />
                Partner with us to create a more sustainable future for our
                planet.
              </p>
            </div>

            <div className="d-flex gap-3 two">
              <button className="btn bg-white sustain-partner px-4 py-2 rounded">
                Partner With Us{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </button>
              <button className="btn  text-white font-medium px-4 py-2 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sustainability;
