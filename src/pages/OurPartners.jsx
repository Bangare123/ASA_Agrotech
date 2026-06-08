import React from "react";
import partnerImg from "../assets/BirdPartners.png"; // Replace with real images
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import partnerImg1 from "../assets/PartnersCard1.jpg";
import partnerImg2 from "../assets/PartnersCard2.png";
import partnerImg3 from "../assets/PartnersCard3.jpg";
import partnerImg4 from "../assets/PartnerCard4.jpg";

import partnerImg11 from "../assets/Partners_lucide_globe.png";
import partnerImg12 from "../assets/Partners_carbon_badge.png";
import partnerImg13 from "../assets/Partners_bi_people.png";
import partnerImg14 from "../assets/Partners_handshake.png";

export default function OurPartners() {
  const cardData = [
    {
      img: partnerImg1,
      title: "Garden Bird",
      desc: "UK's No 1 Quality Bird Food Supplier",
      tag: "Retail",
      imgHeight: "60px",
      imgWidth: "238px",
      borderRadius: "16px",
    },
    {
      img: partnerImg2,
      title: "Walmart",
      desc: "Global retail corporation with a vast distribution network",
      tag: "Retail",
      imgHeight: "60px",
      imgWidth: "200px",
      borderRadius: "8px",
    },
    {
      img: partnerImg3,
      title: "Atlantic Grain & Trade",
      desc: "Leading agricultural commodities trading company",
      tag: "Agriculture",
      imgHeight: "60px",
      imgWidth: "170px",
      borderRadius: "20px",
    },
    {
      img: partnerImg4,
      title: "Red River Commodities",
      desc: "Specialized in processing and distribution of bird feed",
      tag: "Agriculture",
      imgHeight: "55px",
      imgWidth: "74px",
      borderRadius: "12px",
    },
  ];

  const cardData1 = [
    {
      img: partnerImg11,
      title: "Global Reach",
      desc: "Access to international markets and distribution networks",
      imgHeight: "50px",
      imgWidth: "50px",
      borderRadius: "250px",
    },
    {
      img: partnerImg12,
      title: "Quality Assurance",
      desc: "Premium products meeting international standards",
      imgHeight: "50px",
      imgWidth: "50px",
      borderRadius: "8px",
    },
    {
      img: partnerImg13,
      title: "Expert Support",
      desc: "Dedicated team of nutrition specialists",
      imgHeight: "50px",
      imgWidth: "50px",
      borderRadius: "20px",
    },
    {
      img: partnerImg14,
      title: "Sustainable Practices",
      desc: "Environmentally conscious business operations",
      imgHeight: "50px",
      imgWidth: "50px",
      borderRadius: "12px",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="relative overflow-x-hidden">
        <div className="container py-5 flex flex-col gap-5">
          {/* Top Section */}
          <div className="position-relative">
            {/* Left Image */}
            <img
              src={partnerImg}
              alt="Partner 1"
              className="partners-one"
              style={{
                height: "338px",
                width: "338px",
                position: "absolute",
                top: "-88px",
                left: "-130px",
              }}
            />

            {/* Right Image */}
            <img
              src={partnerImg}
              alt="Partner 2"
              className="partners-two"
              style={{
                height: "338px",
                width: "338px",
                transform: "scaleX(-1)",
                position: "absolute",
                top: "-88px",
                right: "-130px",
              }}
            />

            {/* Main Content */}
            <div className="row text-center md:text-left mt-5">
              <div className="col-12 col-md-12 mb-3 finance-mobile">
                <div className="text-center mb-2">
                  <span
                    className="Acc-text"
                    style={{
                      backgroundColor: "#4A3AF61A",
                      padding: "5px 15px",
                      borderRadius: "60px",
                    }}
                  >
                    OUR PARTNERS
                  </span>
                </div>
                <h2 className="Finance-head mb-2">Our Global Partners</h2>
                <p className="partners-para">
                  We collaborate with industry leaders to deliver premium
                  quality bird nutrition products worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Cards Row 1 */}
          <div className="row gy-4 justify-content-center">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-3 d-flex justify-content-center partners-card"
              >
                <div
                  className="card shadow h-100 w-full max-w-xs overflow-hidden p-4"
                  style={{
                    borderRadius: card.borderRadius || "12px",
                    borderTopRightRadius: "75px",
                    borderBottomLeftRadius: "75px",
                  }}
                >
                  <div className="d-flex justify-content-center align-items-center p-3">
                    <img
                      src={card.img}
                      alt={card.title}
                      style={{
                        height: card.imgHeight || "100px",
                        width: card.imgWidth || "100px",
                        borderRadius: card.borderRadius || "12px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title font-semibold text-lg mt-1">
                      {card.title}
                    </h5>
                    <p className="card-text text-sm text-gray-600 mt-3">
                      {card.desc}
                    </p>
                    <div className="text-center mb-3">
                      <span
                        className="Acc-text"
                        style={{
                          backgroundColor: "#4A3AF61A",
                          padding: "5px 15px",
                          borderRadius: "60px",
                          textTransform: "none",
                        }}
                      >
                        {card.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Section */}
          <div className="text-center mt-5">
            <p className="partners-card-head mb-3">Why Partner With Us</p>
            <p className="text-gray-700 mx-auto">
              Join our network of global partners and benefit from our
              industry-leading expertise in bird nutrition.
            </p>
          </div>

          {/* Cards Row 2 */}
          <div className="row gy-4 justify-content-center ">
            {cardData1.map((card, index) => (
              <div
                key={`second-${index}`}
                className="col-12 col-sm-6 col-md-3 d-flex justify-content-center"
              >
                <div
                  className="d-flex flex-column justify-content-center align-items-center"
                  style={{
                    width: "220px",
                    height: "220px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    backgroundColor: "#f9f9f9", // Optional light background
                    padding: "16px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    style={{
                      height: card.imgHeight || "50px",
                      width: card.imgWidth || "50px",
                      objectFit: "cover",
                      borderRadius: card.borderRadius || "12px",
                      marginBottom: "12px",
                    }}
                  />
                  <h5 className="font-semibold text-lg mb-1">{card.title}</h5>
                  <p className="text-sm text-gray-600 mb-0">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
