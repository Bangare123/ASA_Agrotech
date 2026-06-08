import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import sampleImage from "../assets/ProductsOne.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import {
//   faCheck,
//   faCircle,
//   faArrowRight,
// } from "@fortawesome/free-solid-svg-icons";

import seed1 from "../assets/Seed1.png";
import seed2 from "../assets/Seed2.png";
import seed3 from "../assets/Seed3.png";
import seed4 from "../assets/Seed4.png";

import seed5 from "../assets/Seed5.png";
import seed6 from "../assets/Seed6.png";
import seed7 from "../assets/Seed7.png";
import seed8 from "../assets/Seed8.png";
import seed9 from "../assets/Seed9.jpg";
import seed10 from "../assets/Seed10.jpg";
import seed11 from "../assets/Seed11.jpg";

import sampleImage2 from "../assets/HummingBird.png";
import sampleImage3 from "../assets/Sauce.jpg";

import "../css/Products.css";

const Products = () => {
  const cardData1 = [
    {
      img: seed1,
      text: "Safflower Seed",
    },
    {
      img: seed2,
      text: "Sunflower Kernel",
    },
    {
      img: seed3,
      text: "Sunflower Seed",
    },
    {
      img: seed4,
      text: "Niger Seed",
    },
  ];

  const cardData2 = [
    {
      img: seed5,
      text: "Wild Bird Mix",
    },
    {
      img: seed6,
      text: "Big Parakeets Mix",
    },
    {
      img: seed7,
      text: "Parrot Mix",
    },
    {
      img: seed8,
      text: "Budgies & Lovebirds Mix",
    },
    {
      img: seed9,
      text: "Dried Black Soldier Fly",
    },
    {
      img: seed10,
      text: "Dried Mealworms",
    },
    {
      img: seed11,
      text: "Finch Blend",
    },
  ];

  const cardData3 = [
    {
      img: sampleImage2,
      text: "Hummingbird Nectar Powder",
    },
    {
      img: sampleImage3,
      text: "Squirrel Sauce",
    },
  ];
  return (
    <div>
      <Navbar />
      <div
        className="d-flex flex-column p-4 gap-4 "
        style={{ margin: "0px 5% " }}
      >
        {/* Top Section - Flex Row with Text - Image - Text */}
        <div className="d-flex flex-column flex-lg-row gap-4 ">
          <div className="flex-1 text-center">
            <img
              src={sampleImage}
              alt="Product"
              className="img-fluid product-resp-img1"
              style={{
                width: "301px",
                height: "417px",
                position: "absolute",
                left: "-15px",
                top: "50px",
              }}
            />
          </div>

          <div className="text-center ">
            <div className="text-center mb-2">
              <span
                className="Acc-text"
                style={{
                  backgroundColor: "#4A3AF61A",
                  padding: "5px 15px",
                  borderRadius: "60px",
                }}
              >
                PRODUCTS
              </span>
            </div>
            <span className="product-head">
              Secure, Reliable and Trusted <br /> Products
            </span>
            <p className="mb-4">
              We offer the best quality bird feed products and services <br />{" "}
              that are secure, reliable and trusted worldwide.
            </p>
          </div>

          <div className="flex-1 text-center">
            <img
              src={sampleImage}
              alt="Product"
              className="img-fluid product-resp-img2"
              style={{
                width: "301px",
                height: "417px",
                transform: "scaleX(-1)",
                position: "absolute",
                right: "5px",
                top: "50px",
              }}
            />
          </div>
        </div>

        {/* Second Row - 4 Images in a Row */}

        <div
          className="p-4"
          style={{
            backgroundColor: "rgba(220, 227, 255, 1)",
            borderTopRightRadius: "150px",
            borderBottomLeftRadius: "150px",
          }}
        >
          <div className="text-center mb-4 ">
            <span className="product-card-head">Bird Feed Ingredients</span>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-4 product-card-resp">
            {cardData1.map((item, index) => (
              <div
                className="card shadow"
                style={{
                  width: "18rem",
                  borderTopRightRadius: "42px",
                  borderBottomLeftRadius: "42px",
                  padding: "10px",
                }}
                key={index}
              >
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={`Product ${index + 1}`}
                  style={{
                    borderTopRightRadius: "42px",
                    borderBottomLeftRadius: "42px",
                  }}
                />
                <div className="card-body p-2 d-flex align-items-center justify-content-center">
                  <p className="product-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => scroll(-300)}
              className="d-flex align-items-center justify-center bg-white text-dark"
              style={{
                width: 48,
                height: 48,
                boxShadow: "0px 6.81px 6.81px 0px #00000040",
                borderRadius: "50%",
              }}
              aria-label="Scroll Left"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={() => scroll(300)}
              className="d-flex align-items-center justify-center bg-white text-dark"
              style={{
                width: 48,
                height: 48,
                boxShadow: "0px 6.81px 6.81px 0px #00000040",
                borderRadius: "50%",
              }}
              aria-label="Scroll Right"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Third Row - 4 Images on First Line, 3 on Second */}
        <div
          className="p-5 overflow-hidden responsive-padding product-card-padding "
          style={{
            backgroundColor: "rgba(220, 227, 255, 1)",
            borderTopLeftRadius: "150px",
            borderBottomRightRadius: "150px",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <div className="text-center mb-4">
            <p className="product-card-head product-resp-head">
              Bird Feed Mixes
            </p>
          </div>

          <div
            className="d-flex flex-wrap gap-4 justify-content-start product-ipad-resp"
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
            }}
          >
            {cardData2.map((item, index) => (
              <div
                key={index}
                className="card shadow image-resp-product"
                style={{
                  width: "280px",
                  height: "300px",
                  flex: "0 0 auto",
                  borderTopLeftRadius: "42px",
                  borderBottomRightRadius: "42px",
                  padding: "10px",
                  border: "2px solid black",
                }}
              >
                <img
                  src={item.img}
                  alt={`Product ${index + 1}`}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderTopLeftRadius: "42px",
                    borderBottomRightRadius: "42px",
                  }}
                />
                <div className="card-body p-2 d-flex align-items-center justify-content-center">
                  <p className="product-text mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => scroll(-300)}
              className="d-flex align-items-center justify-center bg-white text-dark"
              style={{
                width: 48,
                height: 48,
                boxShadow: "0px 6.81px 6.81px 0px #00000040",
                borderRadius: "50%",
              }}
              aria-label="Scroll Left"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={() => scroll(300)}
              className="d-flex align-items-center justify-center bg-white text-dark"
              style={{
                width: 48,
                height: 48,
                boxShadow: "0px 6.81px 6.81px 0px #00000040",
                borderRadius: "50%",
              }}
              aria-label="Scroll Right"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Last Section - 2 Images in Column */}
        <div
          className="p-4"
          style={{
            backgroundColor: "rgba(220, 227, 255, 1)",
            borderTopLeftRadius: "150px",
            borderBottomRightRadius: "150px",
          }}
        >
          <div className="text-center mb-4 image-resp-product3">
            <span className="product-card-head">Other Products</span>
          </div>

          <div
            className="d-flex flex-wrap gap-4 justify-content-start product-ipad-resp"
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
            }}
          >
            {cardData3.map((item, index) => (
              <div
                key={index}
                className="card shadow image-resp-product2"
                style={{
                  width: "280px",
                  height: "300px",
                  flex: "0 0 auto", // Don't shrink
                  borderTopLeftRadius: "42px",
                  borderBottomRightRadius: "42px",
                  padding: "10px",
                  border: "2px solid black",
                }}
              >
                <img
                  src={item.img}
                  alt={`Product ${index + 1}`}
                  className="card-img-top"
                  style={{
                    height: "216px",
                    width: "230px",
                    objectFit: "cover",
                    borderTopLeftRadius: "42px",
                    borderBottomRightRadius: "42px",
                  }}
                />
                <div className="card-body p-2 d-flex align-items-center justify-content-center">
                  <p className="product-text mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
