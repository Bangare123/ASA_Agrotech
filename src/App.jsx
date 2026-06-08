import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Products from "./pages/Products";
import Accreditation from "./pages/Accreditation";
import Finance from "./pages/Finance";
import Sustainability from "./pages/Sustainability";
import OurPartners from "./pages/OurPartners";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import ApplyNow from "./components/ApplyNow";
import SupportCentre from "./components/SupportCentre";
import Blogs from "./pages/Blogs";
import BlogDetails from "./components/BlogDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/accreditation" element={<Accreditation />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/ourpartners" element={<OurPartners />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/applynow" element={<ApplyNow />} />
        <Route path="supportcentre" element={<SupportCentre />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogdetails" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
