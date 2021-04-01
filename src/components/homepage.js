import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import "./../assets/fonts/ArchivoBlack-Regular.ttf";
import "./Hover.js";

export const HomePage = () => {
  return (
    <React.Fragment>
      {/* <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, 
     user-scalable=0"
      ></meta> */}

      <div className="content">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <div className="navbar pr-sm-4 pr-2 pt-sm-4 pt-2">
          <a
            href="mailto:tylerinn28@gmail.com"
            className="fa fa-envelope-o"
          ></a>
          <a
            href="https://dribbble.com/tyylahh"
            target="_blank"
            className="fa fa-dribbble"
          ></a>
          <a
            href="https://linkedin.com/in/tyler-inn-405393b8"
            target="_blank"
            className="fa fa-linkedin-square"
          ></a>
        </div>
        <div style={{ height: window.innerHeight }} className="mb-5">
          <div
            style={{ height: window.innerHeight, maxHeight: "800px" }}
            className="d-flex align-items-end"
          >
            <h1 className="heading  px-xl-5 px-2 ml-4 ml-md-5 mr-5 pb-5">
              <div className="my-name-tyler">I’M TYLER. </div>
              <div> I CREATE </div>
              <div className="linear-wipe"> MEMORABLE EXPERIENCES </div>
              <div> FOR BRANDS & THEIR AUDIENCE. </div>
            </h1>
          </div>
        </div>

        <div>
          <div className="recentwork">
            <div className="recentworktitle"> RECENT WORK</div>
            <a className="recentworklink" href="https://www.sheeshmedia.com" target="_blank"> 01. Sheesh Media </a>
          </div>
        </div>

        <div className="work row no-gutters  px-xl-5 px-2 ml-4 ml-md-5 mr-5 py-5 mb-5">
          <div className="work1 col-auto d-none d-xl-flex">
            <div style={{ borderLeft: "1px solid" }} className="mt-5"></div>
            <div>WORK</div>
          </div>
          <div className="Projects col pt-5 mt-5">
            <div className="row no-gutters justify-content-center">
              <div className="col-12" style={{ maxWidth: "900px" }}>
                <h2 className="Design-projects pb-3">DESIGN PROJECTS</h2>
                <div className="design-projects-link-level pb-5 d-flex">
                  <div
                    className="d-none d-sm-block"
                    style={{ width: "100px" }}
                  ></div>
                  <Link to="/soundcloudredesign">
                    01. Redesigning Soundcloud
                  </Link>
                </div>

                <div className="design-projects-link-level pb-5 d-flex">
                  <div
                    className="d-none d-sm-block"
                    style={{ width: "200px" }}
                  ></div>
                  <Link to="/ramenshop">02. The Ramen Shop</Link>
                </div>
                <div className="design-projects-link-level pb-5 d-flex">
                  <div
                    className="d-none d-sm-block"
                    style={{ width: "300px" }}
                  ></div>
                  <Link to="/otts">03. Ott's Exotic Plants</Link>
                </div>
                <div className="eventsgeneral">
                  <h2 className="Events row no-gutters justify-content-end pb-3">
                    EVENTS
                  </h2>
                  <div className="design-projects-link-level pb-5 row no-gutters justify-content-end">
                    <Link to="/westhollywood">01. West Hollywood EDITION</Link>
                    <div
                      className="d-none d-xl-block"
                      style={{ width: "50px" }}
                    ></div>
                    <div
                      className="d-none d-sm-block d-xl-none"
                      style={{ width: "50px" }}
                    ></div>
                  </div>
                  <div className="design-projects-link-level pb-5 row no-gutters justify-content-end">
                    <Link to="/noblepanacea">
                      02. Noble Panacea Global Brand Launch
                    </Link>
                    <div
                      className="d-none d-xl-block"
                      style={{ width: "150px" }}
                    ></div>
                    <div
                      className="d-none d-sm-block d-xl-none"
                      style={{ width: "100px" }}
                    ></div>
                  </div>
                  <div className="design-projects-link-level pb-5 row no-gutters justify-content-end">
                    <Link to="/ellenvonunwerth">
                      03. Ellen von Unwerth at Fotografiska
                    </Link>
                    <div
                      className="d-none d-xl-block"
                      style={{ width: "250px" }}
                    ></div>
                    <div
                      className="d-none d-sm-block d-xl-none"
                      style={{ width: "150px" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about row no-gutters  px-xl-5 px-2 ml-4 ml-md-5 mr-5 pt-5">
          <div className="about1 col-auto d-none d-xl-flex">
            <div style={{ borderLeft: "1px solid" }} className="mt-5"></div>
            <div>
              <a href="#moreaboutme">ABOUT </a>
            </div>
          </div>

          <div className="Moreaboutme1 col mt-5 pt-5">
            <h2 id="moreaboutme" className="More-about-me">
              MORE ABOUT ME{" "}
            </h2>

            <div className="Bio row no-gutters">
              <div className="col-lg-6 col-12 pb-5 pt-3 pr-lg-5">
                <p>
                  My interest in creating experiences came from growing up in
                  Los Angeles, a city filled with culture and a plethora of
                  intriguing things to do. After majoring in Hospitality
                  Management with a concentration in event planning at Boston
                  University, I knew I wanted be in the business of creating
                  experiences for people.
                  <br />
                  <br />
                  At my first post-grad position as an event planner at PURPLE,
                  I have gained invaluable skills such as evaluating needs and
                  problem solving. However, I felt pulled towards exploring more
                  visual mediums so I decided to explore UX/UI design. I am now
                  a freelance designer as well as an event planner.
                  <br />
                  <br />
                  In my free time, I like creating playlists for my friends,
                  exploring new places, and taking care of my plants.
                  <br />
                  <br />
                  <div className="letstalk">
                    <a href="mailto:tylerinn28@gmail.com">
                      LET'S TALK - tylerinn28@gmail.com
                    </a>
                  </div>
                </p>
              </div>

              <div className="p-lg-5 col-lg-6 col-12">
                <img
                  width="100%"
                  src={require("./../assets/images/Homepage.JPG")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="developedby">DESIGNED AND DEVELOPED BY TYLER INN</div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;