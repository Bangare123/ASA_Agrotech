import React from "react";
import Group13 from "../assets/Group 13.png";
import { useRef } from "react";
import Bird5 from "../assets/AccImage1.png";
import Bird4 from "../assets/SupportImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  faCheck,
  faCircle,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "../css/HomePage.css";

import ProductCard1 from "../assets/ProductCard1.png";
import ProductCard2 from "../assets/ProductCard2.jpg";
import ProductCard3 from "../assets/ProductCard3.png";
import ProductCard4 from "../assets/ProductCard4.jpg";

const HeroContent = () => {
  const scrollContainer = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += scrollOffset;
    }
  };

  const cards = [
    {
      image: ProductCard1,
      title: "Bird Feed ",
      text: [
        "Nyjer / Thistle Seed",
        "Safflower Seed",
        "Sunflower Heart & Chips Safflower Seed",
        "Safflower Seed",
        "Shelled Peanuts",
      ],

      link: "#",
    },
    {
      image: ProductCard2,
      title: "Bird Feed Blends",
      text: ["Some text", "Some text", "Some text"],
      link: "#",
    },
    {
      image: ProductCard3,
      title: "Nectar",
      text: ["Some text", "Some text", "Some text", "Some text", "Some text"],
      link: "#",
    },
    {
      image: ProductCard4,
      title: "Bird Feeders",
      text: ["Some text"],
      link: "#",
    },
    {
      image: ProductCard3,
      title: "Nectar",
      text: ["Some text", "Some text", "Some text"],
      link: "#",
    },
    {
      image: ProductCard4,
      title: "Bird Feeders",
      text: ["Some text", "Some text"],
      link: "#",
    },
    // {
    //   image: Bird4,
    //   title: "Card 2",
    //   text: "Another text",
    //   link: "#",
    // },
  ];

  return (
    <div className="flex flex-col gap-8 p-4">
      {/* Section 1 - Flex Row */}
      <div className="flex flex-col md:flex-row items-stretch gap-4 bg-[#F7F9FF] p-4 min-h-[400px] trans-para ">
        {/* Left Column — Aligned to bottom */}
        <div className="w-full md:w-1/5 flex flex-col h-[45vh] ms-3 section-resp">
          <div className="mt-auto">
            <div className="flex flex-col sm:flex-row justify-between gap-4 w-full">
              {/* Options */}
              <ul className="list-none p-0 m-0">
                <li className="flex items-center text-black">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-[#344BFD] me-2"
                  />
                  Option 1
                </li>
                <li className="flex items-center text-black">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-[#F4A79D] me-2"
                  />
                  Option 2
                </li>
                <li className="flex items-center text-black">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-[#F68D2B] me-2"
                  />
                  Option 3
                </li>
              </ul>

              {/* Percentages */}
              <ul className="list-none p-0 m-0">
                <li className="text-black">60%</li>
                <li className="text-black">20%</li>
                <li className="text-black">20%</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Center Column: Image */}
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <img
            src={Group13}
            alt="Bird Feed"
            className="mx-auto"
            style={{ height: "350px", width: "350px" }}
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="w-full md:w-1/2 text-black p-4 text-left">
          <h2 className="text-xl font-semibold">
            Premium Bird Feed Products for <br />
            Healthy and Happy Birds
          </h2>
          <p className="mt-2">
            Our bird feed is carefully sourced, cleaned, and processed to
            provide <br />
            essential nutrition for various bird species. Quality that bird
            enthusiasts trust <br /> worldwide.
          </p>
          <ul className="mt-3 space-y-2 list-none p-0">
            <li className="flex items-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="p-1 me-2 text-[#16A34A] bg-[#DCFCE7] rounded"
              />
              <span>
                Premium quality Niger seed sourced from the finest producers
              </span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="p-1 me-2 text-[#16A34A] bg-[#DCFCE7] rounded"
              />
              <span>
                USDA approved manufacturing facilities with strict quality
                control
              </span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="p-1 me-2 text-[#16A34A] bg-[#DCFCE7] rounded"
              />
              <span>
                Consistent supply chain with reliable global distribution
                network
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Section 2 - Flex Row with Cards */}
      <div className="py-8 px-4 sm:px-6 lg:px-12 bg-[#F8F8F8]">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

        {/* Card Scroll Wrapper */}
        <div
          className="mx-auto overflow-x-auto sm:overflow-hidden"
          style={{ maxWidth: "100%" }}
        >
          <div
            ref={scrollContainer}
            className="flex gap-3 flex-nowrap overflow-x-auto hide-scrollbar px-1 scroll-smooth snap-x snap-mandatory"
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-start bg-white border border-gray-200 shadow-md w-[70vw] sm:w-[330px] lg:w-[345px] min-w-[75vw] sm:min-w-[330px] lg:min-w-[345px]"
                style={{
                  borderTopLeftRadius: 80,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 80,
                  borderBottomLeftRadius: 8,
                  height: 430,
                }}
              >
                <img
                  src={card.image}
                  alt={`Card ${index}`}
                  className="w-full h-48 object-cover rounded-tl-[80px] rounded-tr-[8px]"
                />

                <div className="p-4 flex flex-col h-[calc(400px-192px)] relative">
                  <h5 className="text-lg font-semibold mb-2">{card.title}</h5>

                  {/* List and Button */}
                  <div className="flex-1 relative flex flex-wrap">
                    <ul
                      className="text-sm text-gray-800 flex-grow min-w-0 pr-10 space-y-1"
                      style={{ paddingLeft: "0px" }}
                    >
                      {card.text.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="text-[#344BFD] mt-1 mr-2 text-[8px]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="absolute bottom-0 right-0">
                      <a
                        href={card.link}
                        className="btn btn-sm btn-primary"
                        style={{ borderRadius: 8 }}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Buttons */}
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

        <style>{`
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
  `}</style>
      </div>

      {/* Section 3 - Flex Column */}
      <div className="flex flex-col gap-4">
        {/* First card */}
        <div
          className="d-flex flex-row gap-4 items-center bg-[#F7F9FF] ms-4 mobile-column"
          style={{
            width: "700px",
            height: "350px",
            borderBottomLeftRadius: "100px",
            borderTopRightRadius: "100px",
            boxShadow: "-4px 4px 4px 0px #00000040",
          }}
        >
          <div
            className="d-flex justify-content-center align-items-center mobile-full"
            style={{ height: "100vh" }}
          >
            <div className="p-5 text-start">
              <p className="contact-one">
                Making our Avian Friends Happy <br /> Worldwide!
              </p>
              <p className="contact-two">
                Our Products are exported to US, Canada, UK, Turkey, and
                European <br />
                countries. Interested in knowing more? We're just a call away!
              </p>
              <button
                className="bg-[#3F7947] text-white p-3"
                style={{
                  borderTopRightRadius: "20px",
                  borderBottomLeftRadius: "20px",
                }}
              >
                Contact Now{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </button>
            </div>
          </div>

          <img
            src={Bird4}
            className="bird-img ipad-pro-image1 "
            style={{
              height: "300px",
              width: "300px",
              position: "absolute",
              top: "3450px",
              left: "660px",
            }}
          />
        </div>

        {/* Second card */}
        <div className="d-flex flex-row gap-4 items-center justify-content-end flex-wrap reverse-mobile me-5 mt-4">
          {/* This image will be absolutely positioned on desktop, hidden on mobile */}
          <img
            src={Bird5}
            className="bird-img d-none d-md-block ipad-pro-image2"
            style={{
              position: "absolute",
              top: "3760px",
              right: "700px",
              height: "452px",
              width: "354px",
            }}
          />

          {/* Card Container */}
          <div
            className="bg-[#F7F9FF] d-flex flex-column justify-content-center align-items-center mobile-full2 ms-auto"
            style={{
              width: "700px",
              height: "350px",
              borderTopLeftRadius: "100px",
              borderBottomRightRadius: "100px",
              boxShadow: "4px -4px 4px 0px #00000040",
            }}
          >
            <div className="text-start px-4 cardresp">
              <p className="offer-one">What We Offer.</p>

              {/* Offer Points */}
              {[
                "Best Quality heat treated Niger / Thistle Seed for birds (Bulk & Retail)",
                "Bird Foods available for all year-round feeding",
                "Specialized bird food to cater nutritional requirements of birds",
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3 mb-2">
                  <div className="w-[28px] h-[28px] bg-[#D5DEFF] rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#9E271A] text-[20px]"
                    />
                  </div>
                  <p className="offer-two">{text}</p>
                </div>
              ))}

              {/* CTA Button */}
              <button
                className="bg-[#9E271A] text-white p-3 mt-3"
                style={{
                  borderTopLeftRadius: "20px",
                  borderBottomRightRadius: "20px",
                }}
              >
                View All Products{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </button>
            </div>

            {/* Show image inside the card for mobile only */}
            <img
              src={Bird5}
              className="bird-img-mobile d-block d-md-none mt-4 "
              style={{
                width: "100%",
                height: "auto",
                borderBottomLeftRadius: "100px",
                borderTopRightRadius: "0px",
                position: "relative",
                objectFit: "cover",
                bottom: "20%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
