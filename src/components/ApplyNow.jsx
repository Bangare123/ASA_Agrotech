import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import upload from "../assets/upload.png";

export default function ApplyNow() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <p className="apply-head mb-2  md:text-left">
        Apply for Senior Care Assistant
      </p>
      <p className="mb-6 apply-para  md:text-left">
        Complete the form below to apply for this position at London, UK
      </p>

      <form>
        {/* Row 1: Full Name & Email */}
        <div className="row mb-4">
          <div className="col-12 col-md-6 mb-3 md:mb-0">
            <label htmlFor="fullName" className="form-label fw-semibold">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="form-control"
              placeholder="Your full name"
              required
            />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="email" className="form-label fw-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Your email"
              required
            />
          </div>
        </div>

        {/* Row 2: Phone Number & Availability */}
        <div className="row mb-4">
          <div className="col-12 col-md-6 mb-3 md:mb-0">
            <label htmlFor="phone" className="form-label fw-semibold">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="form-control"
              placeholder="Your phone number"
              required
            />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="availability" className="form-label fw-semibold">
              Availability
            </label>
            <input
              type="text"
              id="availability"
              className="form-control"
              placeholder="When can you"
              required
            />
          </div>
        </div>

        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address" className="form-label fw-semibold">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="form-control"
            placeholder="Your full address"
            required
          />
        </div>

        {/* Relevant Experience */}
        <div className="mb-4">
          <label htmlFor="experience" className="form-label fw-semibold">
            Relevant Experience
          </label>
          <textarea
            id="experience"
            rows="3"
            className="form-control"
            placeholder="Tell us about your relevant experience for this role"
            required
          ></textarea>
        </div>

        {/* Cover Letter (optional) */}
        <div className="mb-4">
          <label htmlFor="coverLetter" className="form-label fw-semibold">
            Cover Letter (optional)
          </label>
          <textarea
            id="coverLetter"
            rows="3"
            className="form-control"
            placeholder="Why would you like to work with us?"
          ></textarea>
        </div>

        {/* File Upload Section */}
        <div className="mb-4">
          <div
            className="d-flex flex-column justify-content-center align-items-center border border-dashed rounded p-4 text-center"
            style={{
              borderColor: "#6b7280", // gray-400
              height: "200px",
              cursor: "pointer",
              gap: "50px",
            }}
          >
            {/* Upload Icon - Upward Arrow */}
            <img src={upload} style={{ height: "32px", width: "32px" }} />

            {/* File Input */}
            <label
              htmlFor="resumeUpload"
              className="border p-2"
              style={{ cursor: "pointer", borderRadius: "6px" }}
            >
              Choose File
            </label>

            {/* Hidden Input */}
            <input
              id="resumeUpload"
              type="file"
              className="d-none"
              onChange={(e) => {
                const fileName = e.target.files[0]?.name || "No file chosen";
                alert(`Selected file: ${fileName}`);
              }}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end gap-3">
          <button
            type="reset"
            className="border px-4 py-2 apply-button"
            style={{ borderRadius: "6px" }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 apply-button"
            style={{
              backgroundColor: "#2B6CB0",
              borderRadius: "6px",
              color: "#f8fafc",
            }}
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}
