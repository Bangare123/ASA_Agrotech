import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutFree1 from "../assets/AboutFree1.png";
import aboutFree2 from "../assets/AboutFree2.png";
import aboutFree3 from "../assets/AboutFree3.png";
import aboutFree4 from "../assets/AboutFree4.png";
import aboutFree5 from "../assets/AboutFree5.png";
import eye from "../assets/Eye.png";
import mission from "../assets/Mission.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import aboutImage3 from "../assets/AboutBird.png";
import "../css/About.css";

const About = () => {
  const cardsAbout = [
    {
      title: "Trusted\nManufacturing",
      hoverText: `Years of experience\nwith consistently high\nproduct quality.`,
    },
    {
      title: "Strict Quality\n& Safety",
      hoverText: `Adherence to rigorous\nquality control and feed\nsafety standards.`,
    },
    {
      title: "Customer-Centric\nApproach",
      hoverText: `Flexible, practical\nsolutions tailored to\nclient needs.`,
    },
    {
      title: "Global\nReputation",
      hoverText: `Recognized as a reliable\nand innovative trade\npartner worldwide.`,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="relative overflow-x-hidden">
        <div className="d-flex flex-column p-4 gap-4">
          {/* Text One */}
          <div className="text-center">
            <div className="text-center mb-2">
              <span
                className="Acc-text"
                style={{
                  backgroundColor: "#4A3AF61A",
                  padding: "5px 15px",
                  borderRadius: "60px",
                }}
              >
                ABOUT
              </span>
            </div>
            <span className="Finance-head">
              Get to Know Our Journey <br /> and Mission
            </span>
          </div>

          {/* Flex Row - Text, Image, Text */}
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-stretch gap-4 ipad-pro-about">
            {/* Left Section */}
            <div
              className="flex-1 text-center text-lg-start p-4 break-words h-full min-h-[580px] overflow-y-auto"
              style={{
                border: "6px solid #AED2FF",
                borderTopRightRadius: "150px",
                borderBottomLeftRadius: "150px",
                boxSizing: "border-box",
                overflowWrap: "break-word",
                marginTop: "60px",
              }}
            >
              <p className="company-head mb-6">Company Profile</p>
              <p className="company-one">
                ASA Agrotech Pvt. Ltd. is a certified exporter of Nyjer
                (Thistle) and other premium bird feed seeds, supplying markets
                in the USA, Canada, and Europe. With nearly two decades of
                industry experience, we operate a USDA-approved heat treatment
                facility and maintain strict, automated quality control and food
                safety standards in compliance with international regulations.
              </p>
              <a
                href="#our-journey"
                className="inline-block bg-blue-600 text-white font-medium px-5 py-2 rounded hover:bg-blue-700 transition"
              >
                Our Journey
              </a>
              <div id="our-journey" className="space-y-6 mt-6">
                {/* 2010–2015 */}
                <div>
                  <p className="profile-head mb-2">
                    2010–2015: Foundation & Early Growth
                  </p>
                  <ul className="list-disc list-inside  mt-2 space-y-1 profile-para1">
                    <li>Established a robust domestic sourcing network</li>
                    <li>Began exports to the USA and Canada</li>
                    <li>Achieved USDA/APHIS heat treatment certification</li>
                    <li>Installed semi-automated quality assurance systems</li>
                  </ul>
                </div>

                {/* 2016–2020 */}
                <div>
                  <p className="profile-head mb-2">
                    2016–2020: Automation & Global Expansion
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 profile-para1">
                    <li>
                      Commissioned a fully automated, USDA-approved facility
                    </li>
                    <li>Integrated real-time monitoring with USDA systems</li>
                    <li>
                      Secured NPPO (India), FSMA (USA), and BRCGS certifications
                    </li>
                    <li>Expanded export operations to European markets</li>
                    <li>
                      Maintained seamless operations during COVID-19 through
                      automation
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col  gap-2 p-4 about-resp">
              {/* Top Row - 2 images */}
              <div className="flex gap-2 items-end">
                <img
                  src={aboutFree1}
                  alt="Image 1"
                  className="w-[161px] sm:w-[180px] h-[161px] object-cover rounded-lg "
                />
                <img
                  src={aboutFree2}
                  alt="Image 2"
                  className="w-[148px] sm:w-[160px] h-[265px] object-cover rounded-lg"
                />
              </div>

              {/* Middle Row - 1 image */}
              <div className="about-flex-image">
                <img
                  src={aboutFree3}
                  alt="Image 3"
                  className="w-[380px] h-[180px] object-cover rounded-lg"
                />
              </div>

              {/* Bottom Row - 2 images */}
              <div className="flex gap-2 justify-end">
                <img
                  src={aboutFree4}
                  alt="Image 4"
                  className="w-[155px] sm:w-[160px] h-[207px] object-cover rounded-lg"
                />
                <img
                  src={aboutFree5}
                  alt="Image 5"
                  className="w-[161px] sm:w-[150px] h-[161px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right Section */}
            <div
              className="flex-1 md:p-10 bg-white h-full min-h-[580px] overflow-y-auto RightCardMobile"
              style={{
                border: "6px solid #AED2FF",
                borderTopLeftRadius: "150px",
                borderBottomRightRadius: "150px",
                boxSizing: "border-box",
                overflowWrap: "break-word",
                marginTop: "60px",
              }}
            >
              {/* Section Title */}
              <p className="company-head mb-6">Company Overview</p>

              {/* Overview Paragraph */}
              <p className=" company-one">
                M/S ASA Agrotech Pvt. Ltd., established in 2010, is a
                small-scale agro-based enterprise and a pioneer in seed
                sterilization. We proudly operate India’s first USDA-approved
                Niger seed sterilization plant, offering direct market access to
                the United States with streamlined compliance. Our core values
                are quality, innovation, and customer satisfaction.
              </p>

              {/* Incorporation & Legal Identity */}
              <div className="">
                <p className="profile-head mb-2">
                  Incorporation & Legal Identity
                </p>
                <ul className="list-disc list-inside space-y-1 profile-para1">
                  <li>
                    Incorporated as a Private Limited Company in January 2010
                  </li>
                  <li>
                    Corporate Identification Number (CIN): U01400MH2010PTC199121
                  </li>
                  <li>
                    Registered as a Small Scale Industry (SSI) in the agro
                    sector
                  </li>
                </ul>
              </div>

              {/* Promoters & Reputation */}
              <div className="">
                <p className="profile-head mb-2">Promoters & Reputation</p>
                <ul className="list-disc list-inside space-y-1 profile-para1">
                  <li>
                    Founded by professionals known for strong business ethics
                    and high integrity
                  </li>
                  <li>
                    Recognized for excellence in domestic and international bird
                    feed markets
                  </li>
                </ul>
              </div>

              {/* Global Compliance & USDA Approval */}
              <div>
                <p className="profile-head mb-2">
                  Global Compliance & USDA Approval
                </p>
                <ul className="list-disc list-inside space-y-1 profile-para1">
                  <li>
                    Facility approved by the United States Department of
                    Agriculture (USDA)
                  </li>
                  <li>
                    Direct export capability to the U.S. with minimal regulatory
                    hurdles
                  </li>
                  <li>
                    Adheres to top-tier global safety and sterilization
                    standards
                  </li>
                  <li>
                    Ensures consistent quality and compliance across all markets
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container mx-auto py-6 px-3">
            <div className="row justify-content-center g-4 ipad-space">
              {cardsAbout.map((card, index) => (
                <div
                  key={index}
                  className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
                >
                  <div className="group relative w-[238px] h-[210px] cursor-pointer">
                    {/* Half Circle */}
                    <div
                      className="w-[238px] h-[119px] bg-blue-500 rounded-t-full flex items-center justify-center text-white text-lg font-semibold z-10 relative  text-center"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {card.title}
                    </div>

                    {/* Hover Text */}
                    <div
                      className={`
    absolute top-[119px] left-0 w-full bg-transparent 
    text-sm text-center pt-2 leading-snug about-animation
    transition-opacity duration-300 ease-in-out
    md:opacity-0 md:pointer-events-none 
    group-hover:md:opacity-100 group-hover:md:pointer-events-auto
  `}
                      style={{
                        whiteSpace: "pre-line",
                        opacity: window.innerWidth < 1025 ? 1 : undefined, // force show on mobile JS fallback
                        pointerEvents:
                          window.innerWidth < 768 ? "auto" : undefined,
                      }}
                    >
                      {card.hoverText}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="container d-flex flex-column gap-15 ">
            <img
              src={aboutImage3}
              className="About-main-bird2"
              style={{
                height: "256px",
                width: "350px",
                position: "absolute",
                top: "70rem",
                left: "-25px",
                transform: "scaleX(-1) rotate(-10deg) ",
              }}
            />
            <img
              src={aboutImage3}
              className="About-main-bird1"
              style={{
                height: "256px",
                width: "350px",
                position: "absolute",
                transform: "rotate(-10deg) ",
                top: "97rem",
                right: "-25px",
              }}
            />
            <p className="vision-head text-center mb-4">
              Vision & <span className="text-[#2B6CB0]">Mission</span>
            </p>

            <div
              className="flex flex-col gap-15 "
              style={{ marginTop: "50px" }}
            >
              {/* Vision */}
              <div className="col-12 d-flex justify-content-start">
                <div
                  className="p-5 shadow"
                  style={{
                    borderTopRightRadius: "150px",
                    borderBottomLeftRadius: "150px",
                    maxWidth: "770px",
                    border: "3.74px solid #2B6CB0",
                    backgroundColor: "#F7F9FF",
                  }}
                >
                  <div className="d-flex align-items-start gap-3">
                    <img src={eye} style={{ width: "58px", height: "47px" }} />
                    <div>
                      <p className="about-vision-head">Vision</p>
                      <p className="about-vision-para">
                        We are dedicated to delivering high-quality bird feeding
                        solutions that contribute to the long-term ecological
                        sustainability of bird populations. Our mission is to
                        protect and enhance their natural habitats by embracing
                        sustainable manufacturing practices and actively working
                        to reduce our carbon footprint—all in pursuit of
                        creating a healthier, more vibrant environment where
                        birds can thrive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission */}
              <div className="col-12 d-flex justify-content-end">
                <div
                  className="p-5"
                  style={{
                    borderTopRightRadius: "150px",
                    borderBottomLeftRadius: "150px",
                    maxWidth: "770px",
                    border: "3.74px solid #2B6CB0",
                    backgroundColor: "#F7F9FF",
                  }}
                >
                  <div className="d-flex align-items-start gap-3">
                    <img
                      src={mission}
                      style={{ height: "50px", width: "39px" }}
                    />
                    <div>
                      <p className="about-vision-head ">Mission</p>
                      <p className="about-vision-para">
                        At Happy Wings, our mission is to provide premium,
                        nutritionally balanced bird feed that supports the
                        health, growth, and happiness of birds in their natural
                        surroundings. Each product is thoughtfully crafted with
                        essential ingredients to meet the dietary needs of
                        various bird species—offering a perfect blend of
                        nourishment and taste. We are dedicated to attracting,
                        feeding, and caring for our feathered friends through
                        high-quality, fresh, and responsibly processed bird
                        food, helping them thrive while bringing nature closer
                        to home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Flex Row - Company Management */}
          {/* Common Heading */}
          <h1 className="text-center my-4 fw-bold text-primary">
            Company Management
          </h1>

          <div className="d-flex flex-column flex-md-row gap-5 justify-content-center align-items-center ipad-resp">
            {/* Left - CEO Section */}
            <div
              className="d-flex flex-column align-items-center"
              style={{ width: "100%", maxWidth: "600px" }}
            >
              <div
                className="w-100 company-resp"
                style={{
                  backgroundColor: "rgba(43, 108, 176, 1)",
                  borderTopRightRadius: "150px",
                  borderBottomLeftRadius: "150px",
                  padding: "40px",
                }}
              >
                <div
                  className="shadow text-white profile-para1 text-start company-resp"
                  style={{
                    backgroundColor: "#00000040",
                    borderTopRightRadius: "100px",
                    borderBottomLeftRadius: "100px",
                    padding: "60px",
                  }}
                >
                  {/* Section 1 */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="text-[#2B6CB0] me-2"
                        style={{ height: "15px", width: "15px" }}
                      />
                      <h6 className="fw-bold m-0">
                        Educational & Leadership Background:
                      </h6>
                    </div>
                    <div className="pl-6 space-y-1">
                      <p className="ms-3 flex items-start gap-2 about-bottom">
                        <span className="text-sm mt-[2px] leading-none">•</span>
                        Mr. Pankaj Sarda holds a Bachelor's degree and is the
                        Promoter & <br /> Managing Director of Shree Metals
                        Mujbi Pvt. Ltd. <br /> He has 20+ years of experience in
                        the metal industry and Serves as <br /> President of the
                        Bhandara Metal Manufacturing Association.
                      </p>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="text-[#2B6CB0] me-2"
                        style={{ height: "15px", width: "15px" }}
                      />
                      <h6 className="fw-bold m-0">
                        Business Expertise & Vision:
                      </h6>
                    </div>
                    <div className="pl-6 space-y-1">
                      <p className="ms-3 flex items-start gap-2 about-bottom">
                        <span className="text-sm mt-[2px] leading-none">•</span>
                        He leads strategic planning, business expansion, and
                        M&A, <br />
                        Activities across sectors like finance, real estate, and{" "}
                        <br />
                        manufacturing.A strong advocate of
                        sustainability,Promotes <br />
                        solar energy use and organic farming practices in his
                        business <br /> vision.
                      </p>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="text-[#2B6CB0] me-2"
                        style={{ height: "15px", width: "15px" }}
                      />
                      <h6 className="fw-bold m-0">
                        Social Contributions & Board Roles:
                      </h6>
                    </div>
                    <div className="pl-6 space-y-1">
                      <p className="ms-3 flex items-start gap-2 about-bottom ">
                        <span className="text-sm mt-[2px] leading-none">•</span>
                        He is President of Bhandara Gaurakshan Sanstha, Trustee
                        of <br />
                        Smt. Sampatidevi Sarda Charitable Trust. <br /> Serves
                        on the boards of ASA Agrotech, ERA T&D, Budhiya <br />{" "}
                        Commercial, Kothari Group firms, and School of Scholars,{" "}
                        <br /> Bhandara.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Name Below Card */}
              <h1 className="text-center mt-3 fw-bold text-dark">
                Mr. Pankaj Sarda
              </h1>
            </div>

            {/* Right - Management Team Section */}
            <div
              className="d-flex flex-column align-items-center"
              style={{ width: "100%", maxWidth: "600px" }}
            >
              <div
                className="w-100 company-resp"
                style={{
                  backgroundColor: "rgba(43, 108, 176, 1)",
                  borderTopLeftRadius: "150px",
                  borderBottomRightRadius: "150px",
                  padding: "40px",
                }}
              >
                <div
                  className="shadow text-white profile-para1 text-start company-resp"
                  style={{
                    backgroundColor: "#00000040",
                    borderTopLeftRadius: "100px",
                    borderBottomRightRadius: "100px",
                    padding: "60px",
                  }}
                >
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <h6 className="fw-bold m-0">Educational Background:</h6>
                    </div>
                    <div className="pl-6 space-y-1">
                      <p className="ms-1 flex items-start gap-2 about-bottom-para ">
                        <span className="text-sm mt-[2px] leading-none">•</span>
                        Mr. Vinit Jhawar holds a Bachelor's degree in Business
                        <br />
                        Administration from Pune University and a Master’s
                        degree
                        <br />
                        from HULT International Business School, Boston — a
                        globally <br /> reputed institution for business
                        education. sector.
                      </p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-1  ">
                      <h6 className="fw-bold m-0">Professional Experience:</h6>
                    </div>
                    <div className="pl-6 space-y-1">
                      <p className="ms-1 flex items-start gap-2 about-bottom-para ">
                        <span className="text-sm mt-[2px] leading-none">•</span>
                        With over 8 years of diverse experience in financial
                        services, <br /> textiles, and agriculture, he has
                        worked with several listed <br /> companies and also
                        established a textile manufacturing unit <br /> in
                        Ichalkaranji, Maharashtra.
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h6 className="fw-bold m-0">
                        Leadership at ASA Agrotech
                      </h6>
                    </div>
                    <div className="pl-6 space-y-1">
                      <p className="ms-1 flex items-start gap-2 about-bottom-para">
                        <span className="text-sm mt-[2px] leading-none">•</span>
                        As Director of ASA Agrotech Pvt. Ltd., he brings strong
                        <br />
                        leadership, strategic vision, and a commitment to <br />
                        organizational values, driving the company’s growth and
                        <br />
                        strengthening stakeholder trust.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Name Below Card */}
              <h1 className="text-center mt-3 fw-bold text-dark">
                Mr. Vinit Jhawar
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
