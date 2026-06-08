import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Accreditation.css";
import sampleImage from "../assets/AccImage1.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";

const Accreditation = () => {
  return (
    <>
      <Navbar />
      <div className="relative overflow-x-hidden  py-5">
        {/* First Row: Image - Text - Image */}
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-4 mb-5 Acc-Main-Div">
          <img
            src={sampleImage}
            alt="Left"
            className="img-fluid AccImage2"
            style={{
              width: "426.42px",
              height: "472px",
              left: "-33px",
              top: "110px",
              opacity: 1,
              position: "absolute",
              transform: "scaleX(-1)",
            }}
          />

          <div className="flex flex-col">
            <div className="text-center mb-2">
              <span
                className="Acc-text"
                style={{
                  backgroundColor: "#4A3AF61A",
                  padding: "5px 15px",
                  borderRadius: "60px",
                }}
              >
                Accreditation
              </span>
            </div>

            <div className="text-center">
              <div className="AccHead">
                Compliance with Global <br /> Industry Standards
              </div>
            </div>
          </div>

          <img
            src={sampleImage}
            alt="Left"
            className="img-fluid AccImage1"
            style={{
              width: "426.42px",
              height: "472px",
              top: "110px",
              right: "-30px",
              opacity: 1,
              position: "absolute",
            }}
          />
        </div>

        {/* Second Section: 8 Cards with Images */}
        <div className="flex flex-col lg:flex-row gap-[8rem] bg-[#DCE3FF] justify-center items-center p-5 resp-gap">
          <div className="d-flex flex-column gap-4 Acc-ipad Acc-ipad1">
            <div className="d-flex gap-3">
              <div>
                <div
                  className="card shadow-sm p-2 d-flex justify-content-center align-items-center card-height"
                  style={{
                    height: "212px",
                    width: "172px",
                    borderTopRightRadius: "60px",
                    borderBottomLeftRadius: "60px",
                  }}
                >
                  <img
                    src={image1}
                    className="card-img-top"
                    alt="Certificate 1"
                    style={{ height: "122px", width: "122px" }}
                  />
                </div>
              </div>

              <div>
                <div
                  className="card shadow-sm p-2 d-flex justify-content-center align-items-center card-height"
                  style={{
                    height: "212px",
                    width: "172px",
                    borderTopLeftRadius: "60px",
                    borderBottomRightRadius: "60px",
                  }}
                >
                  <img
                    src={image2}
                    className="card-img-top"
                    alt="Certificate 2"
                    style={{ height: "122px", width: "122px" }}
                  />
                </div>
              </div>
            </div>

            <div className="d-flex gap-3">
              <div>
                <div
                  className="card shadow-sm p-2 d-flex justify-content-center align-items-center card-height"
                  style={{
                    height: "212px",
                    width: "172px",
                    borderTopLeftRadius: "60px",
                    borderBottomRightRadius: "60px",
                  }}
                >
                  <img
                    src={image3}
                    className="card-img-top"
                    alt="Certificate 3"
                    style={{ height: "122px", width: "122px" }}
                  />
                </div>
              </div>

              <div>
                <div
                  className="card shadow-sm p-2 d-flex justify-content-center align-items-center card-height"
                  style={{
                    height: "212px",
                    width: "172px",
                    borderTopRightRadius: "60px",
                    borderBottomLeftRadius: "60px",
                  }}
                >
                  <img
                    src={image4}
                    className="card-img-top"
                    alt="Certificate 4"
                    style={{ height: "122px", width: "122px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column gap-4 Acc-ipad1">
            <div className="d-flex gap-3">
              <div>
                <div
                  className="card shadow-sm p-2 d-flex justify-content-center align-items-center card-height"
                  style={{
                    height: "212px",
                    width: "172px",
                    borderTopRightRadius: "60px",
                    borderBottomLeftRadius: "60px",
                  }}
                >
                  <img
                    src={image5}
                    className="card-img-top"
                    alt="Certificate 1"
                    style={{ height: "122px", width: "122px" }}
                  />
                </div>
              </div>

              <div>
                <div
                  className="card shadow-sm p-2 d-flex justify-content-center align-items-center card-height"
                  style={{
                    height: "212px",
                    width: "172px",
                    borderTopLeftRadius: "60px",
                    borderBottomRightRadius: "60px",
                  }}
                >
                  <img
                    src={image6}
                    className="card-img-top"
                    alt="Certificate 2"
                    style={{ height: "122px", width: "122px" }}
                  />
                </div>
              </div>
            </div>

            <div className="d-flex gap-3">
              <div>
                <div
                  className="card shadow-sm p-2 d-flex justify-content-center align-items-center card-height"
                  style={{
                    height: "212px",
                    width: "172px",
                    borderTopLeftRadius: "60px",
                    borderBottomRightRadius: "60px",
                  }}
                >
                  <img
                    src={image7}
                    className="card-img-top"
                    alt="Certificate 3"
                    style={{ height: "122px", width: "122px" }}
                  />
                </div>
              </div>

              <div>
                <div
                  className="card shadow-sm p-2 d-flex justify-content-center align-items-center card-height"
                  style={{
                    height: "212px",
                    width: "172px",
                    borderTopRightRadius: "60px",
                    borderBottomLeftRadius: "60px",
                  }}
                >
                  <img
                    src={image8}
                    className="card-img-top"
                    alt="Certificate 4"
                    style={{ height: "122px", width: "122px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Accreditation;
