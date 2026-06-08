import Navbar from "../components/Navbar";
import { useState } from "react";
import Footer from "../components/Footer";
import image1 from "../assets/FinanceMain.png";
import financeicon from "../assets/financeicon.png";
import image11 from "../assets/FinanceImage1.png";
import image12 from "../assets/FinanceImage2.png";
import image13 from "../assets/FinanceImage3.png";

export default function Finance() {
  const [activeTab, setActiveTab] = useState("annual");
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-6 p-4 overflow-hidden">
        {/* First Row - Image | Text | Image */}
        <div
          className="position-relative d-flex justify-center align-items-center text-center"
          style={{ minHeight: "200px" }}
        >
          {/* Left Image */}
          <img
            src={image1}
            alt="Image 1"
            className="finance-bird1"
            style={{
              position: "absolute",
              left: "-35px",
              top: "-45px",
              height: "355px",
              width: "376px",
            }}
          />

          {/* Center Text */}
          <div className="text-center">
            <span
              className="Acc-text"
              style={{
                backgroundColor: "#4A3AF61A",
                padding: "5px 15px",
                borderRadius: "60px",
              }}
            >
              FINANCE
            </span>
            <h1 className="Finance-head mt-3">
              Financial Reporting & <br />
              Analysis
            </h1>
            <p>Accurate, Transparent, and Timely Financial Insights</p>
          </div>

          {/* Right Image */}
          <img
            src={image1}
            alt="Image 2"
            className="finance-bird2"
            style={{
              position: "absolute",
              right: "-45px",
              top: "-45px",
              height: "355px",
              width: "376px",
              transform: "scaleX(-1)",
            }}
          />
        </div>

        {/* Second Row - Two Tables Side-by-side on desktop, stacked on mobile */}
        <div className="p-4 rounded-lg bg-white mt-5">
          <div className="flex flex-col lg:flex-row gap-4 finance-mobile">
            {/* Financial Highlights - 75% */}
            <div
              className="w-full lg:w-3/4 p-3"
              style={{
                boxShadow:
                  "0px 0px 0px 0px #00000000, 0px 0px 0px 0px #00000000, 0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A",
              }}
            >
              <div className="d-flex justify-between align-items-center mb-2">
                <p className="Finace-data-head">Financial Highlights</p>
                <select className="form-select w-auto border rounded py-1 shadow-sm">
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
              </div>
              <hr className="mb-3" />
              <div className="overflow-auto">
                <table className="table-auto w-full border-separate border-spacing-0">
                  <thead>
                    <tr className="!border borde-black-300 bg-gray-100">
                      <th className="px-3 py-2 text-left table-head">
                        Key Metrics
                      </th>
                      <th className="px-3 py-2 text-center table-head">
                        Value
                      </th>
                      <th
                        className="px-3 py-2 text-right table-head"
                        style={{ textAlign: "right" }}
                      >
                        YoY Growth
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(5)].map((_, i) => (
                      <tr key={i} className="!border !border-black-300">
                        <td className="px-3 py-2 text-left">Metric {i + 1}</td>
                        <td className="px-3 py-2 text-center">₹123 Cr</td>
                        <td className="px-3 py-2 text-right">+10%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Balance Sheet Summary - 25% */}
            <div
              className="w-full lg:w-1/4 p-3"
              style={{
                boxShadow:
                  "0px 0px 0px 0px #00000000, 0px 0px 0px 0px #00000000, 0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A",
              }}
            >
              <p className="Finace-data-head mb-4">Balance Sheet Summary</p>
              <hr className="mb-3" />
              <div className="overflow-auto">
                <table className="table-auto w-full">
                  <tbody>
                    {[...Array(5)].map((_, i) => (
                      <tr key={i}>
                        <td className="px-3 py-2">Item {i + 1}</td>
                        <td className="px-3 py-2">₹456 Cr</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-auto w-full">
          <div className="flex items-center gap-3 mb-3 ms-4">
            <img
              src={financeicon}
              className="h-6 w-6 inline-block align-middle"
            />
            <p className="Finace-data-head " style={{ marginBottom: "0px" }}>
              Financial Documents
            </p>
          </div>

          <div
            className="w-full bg-[#E0E7FF] rounded-md p-1"
            style={{ width: "280px", height: "40px", marginLeft: "25px" }}
          >
            {/* Tab Buttons */}
            <div className="flex mb-4">
              <button
                onClick={() => setActiveTab("annual")}
                className={`text-sm Finance-documents ${
                  activeTab === "annual"
                    ? "bg-[#2B6CB0] text-[#ffffff]"
                    : "bg-transparent text-[#64748B]"
                }`}
                style={{
                  fontSize: "14px",
                  height: "32px",
                  width: "120px",
                  borderRadius: "4px",
                }}
              >
                Annual Reports
              </button>

              <button
                onClick={() => setActiveTab("quarterly")}
                className={`px-[12px] py-[5px] text-sm Finance-documents ${
                  activeTab === "quarterly"
                    ? "bg-[#2B6CB0] text-[#ffffff]"
                    : "bg-transparent text-[#64748B]"
                }`}
                style={{
                  fontSize: "14px",
                  height: "32px",
                  width: "150px",
                  borderRadius: "4px",
                }}
              >
                Quarterly Reports
              </button>
            </div>

            {/* Tab Content */}
            {/* <div className="bg-white p-4 rounded shadow text-black">
              {activeTab === "annual" && (
                <p>This is the Annual Reports section content.</p>
              )}
              {activeTab === "quarterly" && (
                <p>This is the Quarterly Reports section content.</p>
              )}
            </div> */}
          </div>
          <div
            className="w-full mt-4 mb-4 rounded bg-white"
            style={{
              boxShadow:
                "0px 0px 0px 0px #00000000, 0px 0px 0px 0px #00000000, 0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A",
            }}
          >
            <div className="p-4 overflow-auto">
              <table className="table-auto w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 !border !border-black">
                    <th className="px-2 py-1 text-left w-1/4 table-head">
                      Col 1
                    </th>
                    <th className="px-2 py-1 text-center w-1/4 table-head">
                      Col 2
                    </th>
                    <th className="px-2 py-1 text-center w-1/4 table-head">
                      Col 3
                    </th>
                    <th
                      className="px-2 py-1  w-1/4 table-head"
                      style={{ textAlign: "right" }}
                    >
                      Col 4
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, i) => (
                    <tr key={i} className="!border !border-black">
                      <td className="px-2 py-1 text-left w-1/4 table-first-data">
                        Row {i + 1}
                      </td>
                      <td className="px-2 py-1 text-center w-1/4 table-first-data">
                        Data
                      </td>
                      <td className="px-2 py-1 text-center w-1/4 table-first-data">
                        Value
                      </td>
                      <td className="px-2 py-1 text-right w-1/4 table-first-data">
                        Info
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Fourth Row - Three Images in a Row */}
        <div className="d-flex flex-wrap justify-center gap-4 mt-4">
          <img
            src={image11}
            alt="Image 1"
            className=" md:w-28 md:h-28 object-cover"
            style={{
              width: "410px",
              height: "320px",
              borderTopRightRadius: "100px",
              borderBottomLeftRadius: "100px",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          />
          <img
            src={image12}
            alt="Image 2"
            className="w-24 h-24 md:w-28 md:h-28 object-cover"
            style={{
              width: "410px",
              height: "320px",
              borderTopRightRadius: "100px",
              borderBottomLeftRadius: "100px",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          />
          <img
            src={image13}
            alt="Image 3"
            className="w-24 h-24 md:w-28 md:h-28 object-cover"
            style={{
              width: "410px",
              height: "320px",
              borderTopRightRadius: "100px",
              borderBottomLeftRadius: "100px",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          />
        </div>

        {/* Fifth Row - Centered Address */}
        <div
          className="py-5 px-3 my-5 rounded"
          style={{
            background: "rgba(245, 247, 255, 1)",
            boxShadow:
              "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 10px 15px 0px rgba(0, 0, 0, 0.1), 0px 4px 6px 0px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p className="Finace-data-head mb-4">Investor Information</p>

          <div className="d-flex justify-content-center">
            <div className="bg-white rounded p-4 shadow-sm w-full max-w-xl">
              <address className="text-sm md:text-base leading-relaxed m-0 text-dark">
                <strong>Investor Relations Contact</strong>
                <br />
                For investor relations inquiries, please contact:
                <br />
                <strong>Mr. Rajesh Kumar</strong>
                <br />
                Head of Investor Relations
                <br />
                Email:{" "}
                <a href="mailto:investor@example.com">investor@example.com</a>
                <br />
                Phone: <a href="tel:+919999999999">+91-99999-99999</a>
              </address>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
