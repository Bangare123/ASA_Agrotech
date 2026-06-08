import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CareersBird from "../assets/CareersBird.png";
import "../css/Careers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
//import { height } from "@fortawesome/free-brands-svg-icons/fa11ty";
import location from "../assets/CareerLocation.png";
import Bag from "../assets/CareerTime.png";
import fav from "../assets/CareerFav.png";
import People from "../assets/CareerPeople.png";

export default function Careers() {
  return (
    <>
      <Navbar />
      <div className="relative overflow-x-hidden">
        <div className="flex flex-col p-4 md:p-10 gap-10 careers-main-div">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full px-4 md:px-8 relative">
            {/* Left Image */}
            <div className="careers-bird-left">
              <img src={CareersBird} alt="Left" className="careers-bird-img" />
            </div>

            {/* Center Content */}
            <div className="flex flex-col items-center text-center gap-2 flex-1">
              <div className="text-center mb-2">
                <span
                  className="Acc-text"
                  style={{
                    backgroundColor: "#4A3AF61A",
                    padding: "5px 15px",
                    borderRadius: "60px",
                  }}
                >
                  CAREERS
                </span>
              </div>
              <p className="careers-main-head md:text-3xl lg:text-4xl">
                Make a Difference Every Day
              </p>
              <p className="careers-main-para md:text-base">
                Join our team of compassionate carers and change lives
              </p>

              {/* Search Box */}
              <div className="relative w-full md:w-2/3 lg:w-1/2 mt-2 z-1">
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
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <div
                    className="h-full px-4 flex items-center justify-center "
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
            </div>

            {/* Right Image */}
            <div className="careers-bird-wrapper">
              <img src={CareersBird} alt="Right" className="careers-bird-img" />
            </div>
          </div>

          {/* Featured Jobs Section */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-center mt-5">
              Featured Opportunities
            </h3>

            <div className="flex flex-wrap gap-6 justify-between">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex flex-col rounded-lg w-full md:w-[30%] gap-2 border overflow-hidden"
                >
                  {/* Top colored strip */}
                  <div
                    className="h-2 w-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #7E69AB 0%, #9B87F5 100%)",
                    }}
                  ></div>

                  {/* Card content */}
                  <div className="p-3 flex flex-col gap-2">
                    {/* Title with Love icon */}
                    <div className="flex justify-between items-start">
                      <span className="text-lg font-semibold Careers-text">
                        Frontend Developer
                      </span>
                      <img
                        src={fav}
                        style={{
                          height: "20px",
                          width: "20px",
                          verticalAlign: "middle",
                        }}
                      />
                    </div>

                    {/* Location and job type badges */}
                    <div className="flex gap-2">
                      <div className="flex items-center gap-1 px-3 py-1 text-sm text-gray-700 bg-[rgba(229,222,255,0.3)] rounded-full">
                        <img
                          src={location}
                          style={{
                            height: "14px",
                            width: "14px",
                            verticalAlign: "middle",
                          }}
                        />
                        <span>Delhi</span>
                      </div>
                      <div className="flex items-center gap-1 px-3 py-1 text-sm text-gray-700 bg-[rgba(229,222,255,0.3)] rounded-full">
                        <img
                          src={Bag}
                          style={{
                            height: "14px",
                            width: "14px",
                            verticalAlign: "middle",
                          }}
                        />
                        <span>Full-time</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600">
                      Join our team providing compassionate care to elderly
                      residents in a supportive environment. Responsibilities
                      include assisting with daily activities, administering
                      medication, and providing emotional support.
                    </p>

                    {/* Salary and date */}

                    <span
                      className="career-salary"
                      style={{ color: " rgba(43, 108, 176, 1)" }}
                    >
                      £28,000 - £32,000
                    </span>
                    <span>2 days ago</span>
                  </div>

                  {/* Full-width action bar without padding/margin */}
                  <div
                    className="w-full flex justify-between items-center text-white font-semibold text-sm h-15 px-4"
                    style={{ backgroundColor: "rgba(248, 250, 252, 1)" }}
                  >
                    <span
                      style={{
                        backgroundColor: "rgba(249, 115, 22, 1)",
                        padding: "3px 10px",
                        borderRadius: "15px",
                      }}
                    >
                      Urgent
                    </span>
                    <button
                      className="font-semibold"
                      style={{
                        backgroundColor: "rgba(43, 108, 176, 1)",
                        padding: "10px 16px",
                        borderRadius: "6px",
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Job Listings and Sidebar */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar */}
            <div className="w-full lg:w-1/5 flex flex-col gap-6 border p-4 ">
              <div>
                <h1 className="text-xl mb-2 Careers-text">Categories</h1>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Engineering",
                    "Design",
                    "Marketing",
                    "Sales",
                    "HR",
                    "Finance",
                    "Product",
                    "Support",
                  ].map((cat, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 px-3 py-1 rounded text-sm"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h1 className="text-xl mb-2 mt-4 Careers-text">Why Join Us</h1>
                <ul
                  className="text-sm space-y-1 "
                  style={{ paddingLeft: "0px" }}
                >
                  {[
                    "Flexible work hours",
                    "Great team culture",
                    "Growth opportunities",
                    "Employee benefits",
                    "Work-life balance",
                  ].map((text, index) => (
                    <li key={index} className="flex items-center gap-2 mb-2">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-[#2B6CB0] text-[16px]"
                      />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Job Listings Section */}
            <div className="w-full lg:w-4/5 flex flex-col gap-4">
              {/* Filter Buttons */}
              <div className="flex justify-between items-center">
                <h4 className="text-xl font-semibold">All Jobs</h4>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-primary btn-sm">
                    Latest
                  </button>
                  <button className="btn btn-outline-secondary btn-sm">
                    Recommended
                  </button>
                </div>
              </div>

              {/* Job Cards (Dynamic area) */}
              {[1, 2, 3, 4, 5, 6].map((job) => (
                <div
                  key={job}
                  className="flex flex-col rounded border overflow-hidden"
                  style={{
                    boxShadow:
                      "0px 0px 0px 0px #00000000, 0px 0px 0px 0px #00000000, 0px 1px 2px 0px #0000000D",
                  }}
                >
                  {/* Card Inner Content */}
                  <div className="p-4 flex flex-col gap-4">
                    {/* Top Section: Job Info + Salary */}
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      {/* Left: Job Info */}
                      <div className="flex flex-col gap-1 md:w-2/2">
                        <span className="Careers-text">React Developer</span>
                        <div className="text-sm text-gray-500 flex gap-2 flex-wrap">
                          <div className="flex items-center gap-1 px-3 py-1 bg-[rgba(229,222,255,0.3)] rounded-full careers-job-locations">
                            <img
                              src={location}
                              style={{
                                height: "14px",
                                width: "14px",
                                verticalAlign: "middle",
                              }}
                            />
                            <span>Pune</span>
                          </div>
                          <div className="flex items-center gap-1 px-3 py-1 bg-[rgba(229,222,255,0.3)] rounded-full careers-job-locations">
                            <img
                              src={Bag}
                              style={{
                                height: "14px",
                                width: "14px",
                                verticalAlign: "middle",
                              }}
                            />
                            <span>Full-time</span>
                          </div>
                          <div className="flex items-center gap-1 px-3 py-1 bg-[rgba(229,222,255,0.3)] rounded-full careers-job-locations ">
                            <img
                              src={People}
                              style={{
                                height: "14px",
                                width: "14px",
                                verticalAlign: "middle",
                              }}
                            />
                            <span>Elder Care</span>
                          </div>
                        </div>

                        <p className="careers-job-text mt-1">
                          Join our team providing compassionate care to elderly
                          residents in a supportive environment.
                          Responsibilities include assisting with daily
                          activities, administering medication, and providing
                          emotional support.
                        </p>
                      </div>

                      {/* Right: Salary & Time */}
                      <div className="flex flex-col justify-between items-start md:items-end text-sm text-gray-600 md:w-1/4">
                        <div className="text-left md:text-right">
                          <p
                            className="career-salary"
                            style={{ color: "#8B5CF6" }}
                          >
                            £28,000 -<br /> £32,000
                          </p>
                          <p>2 days ago</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Full-width Urgent + Apply Now (No padding) */}
                  <div
                    className="w-full flex justify-between items-center px-4 py-2 h-15"
                    style={{ backgroundColor: "#F8FAFC" }}
                  >
                    <span
                      className="text-white text-sm font-semibold "
                      style={{
                        backgroundColor: "rgba(249, 115, 22, 1)",
                        padding: "3px 10px",
                        borderRadius: "15px",
                      }}
                    >
                      Urgent
                    </span>
                    <Link
                      to="/applynow"
                      className="text-white text-sm font-semibold"
                      style={{
                        backgroundColor: "rgba(43, 108, 176, 1)",
                        padding: "10px 16px",
                        borderRadius: "6px",
                        textDecoration: "none", // <-- this line removes underline
                      }}
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#E3EAFF] py-10 ">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h1 className="careers-get mb-2">Get in Touch</h1>
              <p className="careers-para">
                We'd love to hear from you. Fill out the form below and we'll be
                in touch soon.
              </p>
            </div>

            <div className="bg-white rounded shadow p-6 md:p-10 max-w-4xl mx-auto">
              <h2 className="careers-inquiry mb-6">Inquiry Now</h2>

              <form>
                {/* Row 1 */}
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <label className="form-label text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="form-control px-3 py-2 rounded border border-gray-300"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-sm font-medium">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      placeholder=""
                      className="form-control px-3 py-2 rounded border border-gray-300"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <label className="form-label text-sm font-medium">
                      Your Phone No
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="form-control px-3 py-2 rounded border border-gray-300"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-sm font-medium">
                      Interested In
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="form-control px-3 py-2 rounded border border-gray-300"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="mb-4">
                  <label className="form-label text-sm font-medium">
                    Your Address
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control px-3 py-2 rounded border border-gray-300"
                  />
                </div>

                {/* Query */}
                <div className="mb-6">
                  <label className="form-label text-sm font-medium">
                    Query
                  </label>
                  <textarea
                    rows="3"
                    placeholder=""
                    className="form-control px-3 py-2 rounded border border-gray-300"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
