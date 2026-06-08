import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import mail from "../assets/Mail.png";
import location from "../assets/Location1.png";
import Facebook from "../assets/Facebook.png";
import LinkedIn from "../assets/LinkedIn.png";
import Youtube from "../assets/Youtube.png";
import Cardmail from "../assets/CardMail.png";
import Cardmobile from "../assets/CardMobile.png";
import Cardlocation from "../assets/CardLocation.png";
import ellipse from "../assets/Ellipse.png";

// import {
//   faPhoneAlt,
//   faEnvelope,
//   faMapMarkerAlt,
// } from "@fortawesome/free-solid-svg-icons";

import ContactImg1 from "../assets/ContactUs1.png";
import ContactImg2 from "../assets/ContactUs1.png";
import ContactImg3 from "../assets/WorldMap.svg";

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10 px-4  md:px-16 lg:px-32 bg-white">
        {/* Top Section */}
        <div
          className="flex flex-col lg:flex-row gap-8 relative overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #FFFFFF 0%, #EBF2FF 50%, #C7CEFE 100%)",
            minHeight: "600px", // or any value like 700px / 80vh depending on your design
          }}
        >
          <div className="w-full lg:w-1/4 p-4 text-center relative">
            <img
              src={ContactImg1}
              alt="Decorative"
              className="absolute max-w-none contactusresp1"
              style={{
                width: "460.68px",
                height: "441.78px",
                top: "300px",
                left: "-50px", // less negative to avoid overflow
                transform: "scaleX(-1) rotate(20deg)",
                opacity: 1,
              }}
            />
          </div>

          <div className="flex flex-col gap-3 w-full lg:w-2/4  p-6 rounded">
            <div className="text-center mb-2">
              <span
                className="Acc-text"
                style={{
                  backgroundColor: "#4A3AF61A",
                  padding: "5px 15px",
                  borderRadius: "60px",
                }}
              >
                Contact Us
              </span>
            </div>
            <h2 className="contactUs-top">Get in touch with us</h2>
            <p className="contactUs-topPara">
              For enquiry related Products, Jobs & Other Enquires contact us.
            </p>
            <div className="d-flex justify-content-center">
              <button
                className="align-items-center d-flex justify-content-center contactNow"
                style={{
                  width: "173px",
                  height: "48px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "6px",
                }}
              >
                Contact Now{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </button>
            </div>

            <div className=" mt-4">
              <img src={ContactImg3} />
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/4 p-4 text-center relative">
            <img
              src={ContactImg1}
              alt="Decorative"
              className="absolute max-w-none contactusresp2"
              style={{
                width: "460.68px",
                height: "441.78px",
                top: "300px",
                right: "-53px", // use right instead of left
                transform: "rotate(14deg)",
                opacity: 1,
              }}
            />
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col lg:flex-row gap-6 mt-3 ">
          {/* Left Column */}
          <div
            className="flex flex-col gap-4 text-white p-4 relative contactus-box contact-blue-card" // ✅ added relative
            style={{
              backgroundColor: "rgba(43, 108, 176, 1)",
              borderTopRightRadius: "100px",
              borderBottomLeftRadius: "100px",
              overflow: "hidden", // optional: prevents ellipses from overflowing
              height: "527px",
              width: "491px",
            }}
          >
            <p className="contact-info">Contact Information</p>
            <p className="contact-info-para">Get in touch with us</p>

            <p className="text-700 d-flex flex-row gap-3">
              <img src={mail} style={{ height: "16px", width: "21px" }} />
              exports@asaagrotech.com
            </p>

            <p className="text-700 d-flex flex-row gap-3">
              <img src={location} style={{ height: "21px", width: "16px" }} />
              112 Milestone Building, 1 st Floor, Ramdaspeth, Wardha Road,
              Nagpur – Maharashtra, India – 440012
            </p>

            <div className="flex gap-4 text-xl ms-3 mt-20 sm:mt-24 md:mt-28 lg:mt-32 z-10">
              <div
                className="d-flex justify-content-center align-items-center rounded-circle"
                style={{
                  height: "40px",
                  width: "40px",
                  backgroundColor: "black",
                }}
              >
                <img
                  src={Facebook}
                  alt="Facebook Icon"
                  style={{ height: "21px", width: "16px" }}
                />
              </div>

              <div
                className="d-flex justify-content-center align-items-center rounded-circle"
                style={{
                  height: "40px",
                  width: "40px",
                  backgroundColor: "black",
                }}
              >
                <img
                  src={Youtube}
                  alt="YouTube Icon"
                  style={{ height: "16px", width: "20px" }}
                />
              </div>

              <div
                className="d-flex justify-content-center align-items-center rounded-circle"
                style={{
                  height: "40px",
                  width: "40px",
                  backgroundColor: "black",
                }}
              >
                <img
                  src={LinkedIn}
                  alt="LinkedIn Icon"
                  style={{ height: "20px", width: "20px" }}
                />
              </div>
            </div>

            {/* ✅ Positioned Ellipses */}
            <img
              src={ellipse}
              style={{
                height: "269px",
                width: "269px",
                position: "absolute",
                bottom: "-21%",
                right: "-13%",
                zIndex: 0,
              }}
              alt="Big Ellipse"
            />
            <img
              src={ellipse}
              style={{
                height: "138px",
                width: "138px",
                position: "absolute",
                bottom: "calc(-10% + 120px)", // Adjusted so it sits *above* the bigger ellipse
                right: "17%",
                zIndex: 1,
              }}
              alt="Small Ellipse"
            />
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-20 w-full lg:w-1/3 mt-5 contact-card-resp">
            {/* Card 1 */}
            <div
              className="flex flex-col gap-3 p-3 mb-1"
              style={{
                boxShadow: "0px 4.43px 17.74px 0px rgba(0, 0, 0, 0.05)",
              }}
            >
              <span className="contact-head ">For Buyer Enquiry</span>

              {/* Phone Row */}
              <div className="flex items-start gap-3 ">
                <div
                  className="d-flex justify-content-center align-items-center rounded-[10px]"
                  style={{
                    backgroundColor: "rgba(226, 228, 254, 1)",
                    height: "40px",
                    width: "40px",
                  }}
                >
                  <img
                    src={Cardmobile}
                    className="h-[25px] w-[30px]"
                    style={{ backgroundColor: "rgba(226, 228, 254, 1)" }}
                    alt="Mail Icon"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-gray-500 text-sm">Contact Number</span>
                  <span className="contact-head">+91-9920929831</span>
                </div>
              </div>

              {/* Email Row */}
              <div className="flex items-start gap-3">
                <div
                  className="d-flex justify-content-center align-items-center rounded-[10px]"
                  style={{
                    backgroundColor: "rgba(226, 228, 254, 1)",
                    height: "40px",
                    width: "40px",
                  }}
                >
                  <img
                    src={Cardmail}
                    className="h-[25px] w-[30px]"
                    style={{ backgroundColor: "rgba(226, 228, 254, 1)" }}
                    alt="Mail Icon"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-gray-500 text-sm">Contact Mail</span>
                  <span className="contact-head">vineet@asaagrotech.com</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="flex flex-col gap-3 p-3 mb-1"
              style={{
                boxShadow: "0px 4.43px 17.74px 0px rgba(0, 0, 0, 0.05)",
              }}
            >
              <span className="contact-head ">For Export Enquiry</span>

              {/* Phone Row */}
              <div className="flex items-start gap-3">
                <div
                  className="d-flex justify-content-center align-items-center rounded-[10px]"
                  style={{
                    backgroundColor: "rgba(226, 228, 254, 1)",
                    height: "40px",
                    width: "40px",
                  }}
                >
                  <img
                    src={Cardmobile}
                    className="h-[25px] w-[30px]"
                    style={{ backgroundColor: "rgba(226, 228, 254, 1)" }}
                    alt="Mail Icon"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-gray-500 text-sm">Contact Number</span>
                  <span className="contact-head">+91-712-2424910, 2424911</span>
                </div>
              </div>

              {/* Email Row */}
              <div className="flex items-start gap-3">
                <div
                  className="d-flex justify-content-center align-items-center rounded-[10px]"
                  style={{
                    backgroundColor: "rgba(226, 228, 254, 1)",
                    height: "40px",
                    width: "40px",
                  }}
                >
                  <img
                    src={Cardmail}
                    className="h-[25px] w-[30px]"
                    style={{ backgroundColor: "rgba(226, 228, 254, 1)" }}
                    alt="Mail Icon"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-gray-500 text-sm">Contact Mail</span>
                  <span className="contact-head">exports@asaagrotech.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-20 w-full lg:w-1/3 mt-5 contact-card-resp">
            {/* Office 3 Card */}
            <div
              className="flex flex-col gap-3 p-3"
              style={{
                boxShadow: "0px 4.43px 17.74px 0px rgba(0, 0, 0, 0.05)",
              }}
            >
              <span className="contact-head ">For Other Enquiry</span>

              {/* Phone Row */}
              <div className="flex items-start gap-3">
                <div
                  className="d-flex justify-content-center align-items-center rounded-[10px]"
                  style={{
                    backgroundColor: "rgba(226, 228, 254, 1)",
                    height: "40px",
                    width: "40px",
                  }}
                >
                  <img
                    src={Cardmobile}
                    className="h-[25px] w-[30px]"
                    style={{ backgroundColor: "rgba(226, 228, 254, 1)" }}
                    alt="Mail Icon"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-gray-500 text-sm">Contact Number</span>
                  <span className="contact-head">+91-7387000550</span>
                </div>
              </div>

              {/* Email Row */}
              <div className="flex items-start gap-3">
                <div
                  className="d-flex justify-content-center align-items-center rounded-[10px]"
                  style={{
                    backgroundColor: "rgba(226, 228, 254, 1)",
                    height: "40px",
                    width: "40px",
                  }}
                >
                  <img
                    src={Cardmail}
                    className="h-[25px] w-[30px]"
                    style={{ backgroundColor: "rgba(226, 228, 254, 1)" }}
                    alt="Mail Icon"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-gray-500 text-sm">Contact Mail</span>
                  <span className="contact-head">madhur@asaagrotech.com</span>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div
              className="flex flex-col gap-2 p-3 mb-1"
              style={{
                boxShadow: "0px 4.43px 17.74px 0px rgba(0, 0, 0, 0.05)",
              }}
            >
              <span className="contact-head">ASA Agro Tech Pvt. Ltd.</span>

              {/* Address Row */}
              <div className="flex items-start gap-3">
                <div
                  className="d-flex justify-content-center align-items-center rounded-[10px]"
                  style={{
                    backgroundColor: "rgba(226, 228, 254, 1)",
                    height: "40px",
                    width: "40px",
                  }}
                >
                  <img
                    src={Cardlocation}
                    className="h-[22px] w-[20px]"
                    style={{ backgroundColor: "rgba(226, 228, 254, 1)" }}
                    alt="Mail Icon"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Location</span>
                  <span className="text-gray-800 font-medium">
                    112 Milestone Building, 1st <br />
                    Floor, Ramdaspeth, Wardha <br /> Road, Nagpur –<br />{" "}
                    Maharashtra, India - 440012
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Form Section */}
        <div className="w-full  px-4 md:px-20 ">
          <h2 className="Feedback-Head text-center">
            Feedback <span style={{ color: "#2B6CB0" }}>Form</span>
          </h2>

          <div className=" flex items-center justify-center bg-white px-4 mb-4 contact-send-resp ">
            <div
              className="bg-gray-50 px-12 py-10 w-full max-w-[981px] h-[600px] flex flex-col gap-4 contactus-form"
              style={{
                borderTopLeftRadius: "187px",
                borderBottomRightRadius: "187px",
                boxShadow: "-5.01px 5.01px 5.01px 0px #00000040",
              }}
            >
              <form className="flex flex-col gap-6 w-full overflow-y-auto justify-center flex-1">
                {/* Name Field */}
                <div className="flex flex-col mb-3">
                  <label className="Feedback-Form mb-1">Name</label>
                  <input
                    type="text"
                    className="bg-gray-50 border-b border-gray-400 focus:border-black outline-none py-1"
                    required
                  />
                </div>

                {/* Email and Phone Row */}
                <div className="flex flex-col md:flex-row gap-6 w-full mb-3">
                  <div className="flex flex-col w-full">
                    <label className="Feedback-Form mb-1">Email</label>
                    <input
                      type="email"
                      className="bg-gray-50 border-b border-gray-400 focus:border-black outline-none py-1"
                      required
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="Feedback-Form mb-1">Phone Number</label>
                    <input
                      type="tel"
                      className="bg-gray-50 border-b border-gray-400 focus:border-black outline-none py-1"
                      required
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col">
                  <label className="Feedback-Form mb-1">Your Message</label>
                  <textarea
                    rows="1"
                    placeholder="Write you message..."
                    className="bg-gray-50 border-b border-gray-400 focus:border-black outline-none py-1 resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 Feedback-send"
                    style={{
                      backgroundColor: "#294CC6",
                      borderBottomRightRadius: "25px",
                      borderTopLeftRadius: "25px",
                    }}
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
