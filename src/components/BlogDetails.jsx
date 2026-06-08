import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import blogimage from "../assets/BlogDetailImg1.png";
import blogImg from "../assets/Bird1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BlogDetails() {
  const data2 = [{ img: blogImg }, { img: blogImg }, { img: blogImg }];
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="flex flex-col px-4 md:px-10 py-6 gap-8">
        {/* Back Button */}
        <div className="text-left ms-6 blog-Detail-Green">
          <button onClick={() => navigate(-1)}>&lt; Back to all blogs</button>
        </div>

        {/* Blog Header Section */}
        <div className="w-full max-w-[768px] mx-auto flex flex-col items-start text-left gap-3">
          <span className="bg-[#DCFCE7]  px-4 py-1 rounded-l-full rounded-r-full text-sm text-left blog-Detail-Green">
            Seed Selection
          </span>

          <div className="flex flex-col sm:flex-row items-start gap-2 text-gray-500 text-sm">
            <span>May 10, 2025</span>
            <span className="hidden sm:inline">|</span>
            <span>
              By <strong className="text-black">Emma Wilson</strong>
            </span>
          </div>

          <p className="blog-Detail-Main-Head sm:text-3xl md:text-4xl  text-left">
            How to choose the best seed mix for <br /> backyard birds.
          </p>

          <img
            src={blogimage}
            alt="Seed mix"
            className="w-[390px] h-[340px] sm:w-[768px] sm:h-[438px] max-w-full rounded-lg "
          />

          <div className="blog-Detail-main sm:text-lg max-w-3xl mt-4">
            A detailed look at how different seed mixes attract various bird
            species to your yard. Learn which seeds are most effective for the
            birds in your region.
          </div>

          <p className="blog-Detail-Para">
            Bird feeding is a rewarding hobby that connects us with nature right
            in our own backyards. Understanding which seeds to provide can make
            all the difference in attracting a diverse range of beautiful bird
            species.
          </p>
          <p className="blog-Detail-Para">
            Different bird species have distinct preferences when it comes to
            seeds. By offering the right selection, you can create a
            bird-friendly environment that attracts everything from colorful
            songbirds to impressive woodpeckers.
          </p>
          <div className="blog-Detail-Head">Why Seed Selection Matters</div>
          <p className="blog-Detail-Para">
            The seeds you choose to fill your feeders with will determine which
            birds visit your yard. Some species are generalists and will eat a
            variety of seeds, while others are specialists with more specific
            dietary needs.
          </p>
          <p className="blog-Detail-Para">
            High-quality seeds not only attract more birds but also provide
            better nutrition. Birds require specific nutrients to maintain their
            health, especially during challenging seasons like winter or
            breeding periods.
          </p>
          <div className="blog-Detail-Head">
            Popular Seed Types and Their Visitors
          </div>
          <div className="blog-Detail-Small-Head">
            Black Oil Sunflower Seeds
          </div>
          <p className="blog-Detail-Para">
            These are perhaps the most versatile bird seeds available. With thin
            shells and high oil content, black oil sunflower seeds attract a
            wide variety of birds including cardinals, chickadees, finches, and
            nuthatches.
          </p>
          <div className="blog-Detail-Small-Head">Nyjer (Thistle) Seeds</div>
          <p className="blog-Detail-Para">
            Nyjer seeds are tiny, black, and high in oil content. They're
            particularly attractive to small finches like goldfinches, pine
            siskins, and redpolls. Because of their small size, they require
            specially designed feeders.
          </p>
          <div className="blog-Detail-Small-Head">Safflower Seeds</div>
          <p className="blog-Detail-Para">
            These white, somewhat bitter seeds are loved by cardinals,
            chickadees, and doves but are typically avoided by squirrels and
            blackbirds, making them an excellent choice if you're dealing with
            feeder raiders.
          </p>
          <div className="blog-Detail-Small-Head">Millet</div>
          <p className="blog-Detail-Para">
            Small, round and available in red or white varieties, millet is
            preferred by ground-feeding birds like sparrows, doves, juncos, and
            towhees. It's best offered on a platform feeder or scattered on the
            ground.
          </p>
          <div className="blog-Detail-Head">Seasonal Considerations</div>
          <p className="blog-Detail-Para">
            Birds' nutritional needs change throughout the year. During winter,
            high-fat seeds like sunflower and peanuts provide essential energy
            for cold nights. In spring and summer, protein becomes more
            important for breeding and raising young.
          </p>
          <p className="blog-Detail-Para">
            Adjusting your seed offerings seasonally ensures birds receive
            optimal nutrition year-round and can help attract different species
            as migration patterns change.
          </p>
          <div className="blog-Detail-Head">
            Creating a Diverse Feeding Station
          </div>
          <p className="blog-Detail-Para">
            The most successful bird feeding stations offer a variety of seeds
            in different feeder types. Consider including: <br /> 1. Tube
            feeders filled with sunflower seeds for perching birds <br /> 2.
            Platform feeders with mixed seeds for ground feeders <br />
            Positioning feeders at different heights and locations around your
            yard will also help attract a greater diversity of birds and reduce
            competition at any single feeding station.
          </p>
          <div className="blog-Detail-Head">Conclusion</div>
          <p className="blog-Detail-Para">
            Selecting the right bird seeds is both an art and a science. By
            understanding the preferences of different bird species and
            providing a variety of high-quality options, you'll create a vibrant
            bird sanctuary right in your own backyard.
          </p>
          <p className="blog-Detail-Para">
            Remember that consistency is key—once birds discover your feeders,
            they'll come to rely on them as a food source. Maintain clean
            feeders and fresh seed to keep your feathered friends healthy and
            returning for more.
          </p>

          <Button variant="outline-secondary" className="mt-4 flex  gap-2">
            💾 Share this article
          </Button>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "black",
              margin: 0,
              padding: 0,
            }}
          ></div>

          <div className="flex flex-col md:flex-row items-center justify-between rounded-xl p-4 gap-4 ">
            <div
              className="flex items-center justify-center"
              style={{
                height: "63px",
                width: "53px",
                backgroundColor: "#C8E6C9",
                borderRadius: "45%",
                fontWeight: "bold",
              }}
            >
              EW
            </div>

            <div className="flex flex-col  md:text-left">
              <h2 className="text-lg font-semibold">Written by Emma Wilson</h2>
              <p className="text-sm text-gray-600">
                Bird enthusiast and nature writer with over 10 years of
                experience in ornithology and backyard bird feeding techniques.
              </p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "black",
              margin: 0,
              padding: 0,
            }}
          ></div>

          <div className="w-full flex justify-center">
            <button className="bg-transparent border-none">Next &gt;</button>
          </div>

          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "black",
              margin: 0,
              padding: 0,
            }}
          ></div>
        </div>

        <div className="mt-12 mb-12">
          <h2
            className="text-2xl font-semibold mb-6 text-left"
            style={{ marginLeft: "8rem" }}
          >
            Related Articles
          </h2>
          <div className="w-full flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
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
                  <span className="text-sm text-gray-500 d-block mb-1">
                    Team ASA - 23 March 2025
                  </span>
                  <h4 className="text-lg font-semibold mb-1">
                    How to Choose the Best Seed Mix for Backyard Birds
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    A detailed look at how different seed mixes attract various
                    bird species to your yard. Learn which seeds are most
                    effective for the birds in your region.
                  </p>
                  <div className="d-flex justify-between items-center">
                    <span
                      className="border border-primary px-2 py-1 text-xs"
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
        </div>
      </div>
      <Footer />
    </>
  );
}
