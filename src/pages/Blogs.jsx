import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

import blogImg1 from "../assets/Blogs1.png"; // replace with your actual image path
import blogImg2 from "../assets/Blogs2.png";
import blogImg3 from "../assets/Blogs3.png";
import blogImg5 from "../assets/Blogs4.png";
import blogImg6 from "../assets/Blogs6.png";
import blogImg4 from "../assets/Blogs5.png";
import blogImg7 from "../assets/Blogs7.png";
import blogImg8 from "../assets/Blogs8.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Blogs() {
  const data1 = [{ img: blogImg3 }, { img: blogImg5 }, { img: blogImg6 }];
  const data2 = [
    { img: blogImg4 },
    { img: blogImg7 },
    { img: blogImg8 },
    { img: blogImg4 },
    { img: blogImg7 },
    { img: blogImg8 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handleClick = (page) => setCurrentPage(page);

  return (
    <>
      <Navbar />
      <div className="relative overflow-x-hidden">
        <div
          className="flex flex-col gap-8 p-4 md:p-8 lg:p-12"
          style={{ margin: "2% 6%" }}
        >
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row gap-6 justify-between finance-mobile">
            <img
              src={blogImg1}
              alt="Blog Main"
              className=" lg:w-1/7 rounded-xl blogs-main-image1"
              style={{
                width: "490px",
                height: "371px",
                position: "absolute",
                left: "-45px",
                top: "-70px",
              }}
            />
            <div className="flex flex-col gap-2 lg:w-1/1 finance-mobile3">
              <div className="text-center mb-2">
                <span
                  className="Acc-text"
                  style={{
                    backgroundColor: "#4A3AF61A",
                    padding: "5px 15px",
                    borderRadius: "60px",
                  }}
                >
                  Blogs
                </span>
              </div>
              <span className="Finance-head md:text-3xl blogs-ipad-pro-text">
                Latest Stories, Tips & Trends
              </span>
              <p className="text-gray-600 text-center">
                Our blog is designed to educate, inspire, and empower bird
                enthusiasts with knowledge about bird seeds <br /> and feeding
                techniques.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "All Articles",
                  "Wild Bird Varieties",
                  "Seed Selection",
                  "Seasonal Feeding",
                  "Feeder Types",
                  "Bird Watching",
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className="blog-tags px-3 py-1 text-sm "
                    style={{ backgroundColor: "#EFEFEF", borderRadius: "23px" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <img
              src={blogImg1}
              alt="Blog Main "
              className="w-full lg:w-1/7 rounded-xl blogs-main-image2"
              style={{
                transform: "scaleX(-1)",
                width: "490px",
                height: "371px",
                position: "absolute",
                right: "-45px",
                top: "-70px",
              }}
            />
          </div>
          <span className="blog-text lg:w-1/3 self-start mt-5">
            Latest Blogs
          </span>

          {/* Blog List Section */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Side Large Blog */}
            <div className="flex flex-col gap-2 w-full lg:[width:calc(87%/2)]">
              <img
                src={blogImg2}
                alt="Blog"
                className="rounded-xl blog-image1 "
                style={{
                  width: "528px",
                  height: "480px",
                  borderRadius: "16px 100px 16px 100px",
                }}
              />
              <span className="blog-card-head">Team ASA - 23 March 2025</span>
              <p className="blog-card-main">
                How to Choose the Best Seed Mix for Backyard Birds
              </p>
              <p className="blog-card-para ">
                A detailed look at how different seed mixes attract various bird
                species to your yard. Learn which seeds are most effective for
                the birds in your
              </p>
              <div
                className="flex justify-between items-center"
                style={{ marginRight: "10px" }}
              >
                <span
                  className="border border-black px-3 py-1 text-sm blog-card-feeder"
                  style={{ borderRadius: "19px" }}
                >
                  Feeder Type
                </span>

                <Link to="/blogdetails">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-blue-600 -rotate-45 cursor-pointer"
                  />
                </Link>
              </div>
            </div>

            {/* Right Side Smaller Blogs */}
            <div className="flex flex-col gap-4 lg:w-1/2">
              {data1.map((item, idx) => (
                <div key={idx} className="flex flex-col lg:flex-row gap-4">
                  <img
                    src={item.img}
                    alt={`Blog Thumbnail ${idx + 1}`}
                    className="rounded-xl object-cover w-full lg:w-[292px] blogs-ipad-pro"
                    style={{
                      height: "192px",
                    }}
                  />
                  <div className="flex flex-col w-full">
                    <span className="blog-card-head">
                      Team ASA - 23 March 2025
                    </span>
                    <p className="blog-card-main">
                      Seasonal Bird Feeding: What to Offer in Summer
                    </p>
                    <p className="blog-card-para ">
                      A detailed look at how different seed mixes attract
                      various bird species to your yard.
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="border border-black px-2 py-0.5 text-xs rounded-full blog-card-bird">
                        Wild Bird Varieties
                      </span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-blue-600 -rotate-45 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Blogs Grid */}
          <span className="blog-text">All blogs</span>
          <div className="w-full flex  ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {data2.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden p-3"
                  style={{
                    maxWidth: "374px",
                    maxHeight: "502px",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 30.8px -16px #00000040",
                  }}
                >
                  <img
                    src={item.img}
                    alt="Blog"
                    className="rounded-xl mb-3 img-fluid"
                    style={{
                      height: "215px",
                      width: "100%",
                      objectFit: "cover",
                      borderTopRightRadius: "60px",
                      borderBottomLeftRadius: "60px",
                    }}
                  />
                  <span className="blog-card-head d-block mb-1 ">
                    Team ASA - 23 March 2025
                  </span>
                  <p className="blog-card-main mb-1">
                    How to Choose the Best Seed Mix for Backyard Birds
                  </p>
                  <p className="blog-card-para  mb-3">
                    A detailed look at how different seed mixes attract various
                    bird species to your yard. Learn which seeds are most
                    effective for the birds in your region.
                  </p>
                  <div className="d-flex justify-between items-center">
                    <span
                      className="border border-black px-2 py-1  text-xs blog-card-bird"
                      style={{ borderRadius: "19px" }}
                    >
                      Wild Bird Varieties
                    </span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-blue-600 transform -rotate-45 cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex flex-row justify-center items-center flex-wrap gap-2 my-4">
            {/* Previous Button */}
            <button
              className={`px-3 py-1 text-sm text-black bg-transparent rounded d-flex align-items-center gap-1 ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              disabled={currentPage === 1}
              onClick={() => currentPage > 1 && handleClick(currentPage - 1)}
            >
              <FontAwesomeIcon icon={faArrowLeft} size="lg" />
              Previous
            </button>

            {/* Page Numbers */}
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => handleClick(num)}
                className={`px-3 py-1 rounded text-sm ${
                  num === currentPage
                    ? "bg-blue-600 text-white"
                    : "text-black bg-transparent"
                }`}
              >
                {num}
              </button>
            ))}

            {/* Next Button */}
            <button
              className={`px-3 py-1 text-sm text-black bg-transparent rounded d-flex align-items-center gap-1 ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              disabled={currentPage === totalPages}
              onClick={() =>
                currentPage < totalPages && handleClick(currentPage + 1)
              }
            >
              Next
              <FontAwesomeIcon icon={faArrowRight} size="lg" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
