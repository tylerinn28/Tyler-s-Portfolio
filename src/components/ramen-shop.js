import React from "react";
import "./../assets/fonts/ArchivoBlack-Regular.ttf";
import "./ramen-shop.css";
import { Link } from "react-router-dom";

export const RamenShop = () => {
  return (
    <React.Fragment>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>

      <div className="content">
        <div className="px-xl-5 px-2 ml-4 ml-md-5 mr-5">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <div className="backarrow">
            <span className="d-inline-block">
              <a href="/" className="px-0 py-3">
                <i class="fa fa-long-arrow-left"></i>
              </a>
            </span>
          </div>
          <div className="MobileAppheading mb-5">Web Design</div>
          <div className="navbar pr-sm-4 pr-2 pt-sm-4 pt-2">
            <a href="/" class="fa fa-home"></a>
            <a href="mailto:tylerinn28@gmail.com" class="fa fa-envelope-o"></a>
            <a href="https://dribbble.com/tyylahh" class="fa fa-dribbble"></a>
            <a
              href="https://linkedin.com/in/tyler-inn-405393b8"
              class="fa fa-linkedin-square"
            ></a>
          </div>
          <div>
            <div
              style={{ position: "relative", marginBottom: "80px" }}
              className=""
            >
              <div
                style={{ height: "166px" }}
                className="d-none d-sm-block d-md-none"
              ></div>
              <div className="col-12 d-block d-sm-none px-0">
                <img
                  width="100%"
                  className="Soundcloud-Homepage"
                  src={require("./../assets/images/Ramen-topimage-shorter.png")}
                />
              </div>
              <div
                className="Soundcloudredesign"
                style={{ zIndex: 2, position: "relative" }}
              >
                <div className="title pb-3">
                  <div> THE </div>
                  <div> RAMEN</div>
                  <div> SHOP </div>
                </div>

                <div className="d-flex">
                  <div className="col-md-6 col-sm-10 col-12">
                    <div className="Ramen-information">
                      <div className="Ramen-Year2020">
                        <div className="Ramen-Year"> Year: </div> 2020{" "}
                      </div>

                      <div className="Ramenpersonalgoals">
                        {" "}
                        <div className="Ramen-Personalgoals1">
                          {" "}
                          Personal Goal:{" "}
                        </div>
                        <div className="Ramenpersonalgoals2">
                          Create a website design that is simple and easy to use
                          as well as highlights my illustration skills.{" "}
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end pt-5">
                <div className="col-lg-7 col-sm-10 col-12">
                  <div className="Ramenfirsttier">
                    <h1 className="Ramenfirsttierheading">
                      The Ramen Shop is a passion project with the goal to
                      showcase my UI and illustration skills.
                    </h1>
                    <h2 className="Ramenfirsttiersubheading">
                      I wanted to showcase my interest in the Hospitality
                      industry and create an engaging, straight-forward website design
                      for a restaurant. I decided to draw illustrations to
                      integrate Japanese art into my design.
                    </h2>
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  width: "100%",
                }}
                className="d-flex justify-content-end"
              >
                <div className="col-md-7 col-sm-9 col-10 px-0 d-none d-sm-block">
                  <img
                    width="100%"
                    className="Soundcloud-Homepage"
                    src={require("./../assets/images/Ramen-topimage-shorter.png")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row no-gutters justify-content-center">
            <div className="col-md-10 col-12">
              <div className="Ramen-designelementsheading pt-5">
                Design Elements
              </div>
              <div className="mb-5 pb-5 Otts-Designelements row no-gutters justify-content-md-between justify-content-center">
                <div className="col-12 d-flex align-items-center justify-content-center mt-5 d-block d-md-none">
                  <div>
                    <img
                      className="otts-colors"
                      src={require("./../assets/images/Ramen-Colors.png")}
                    ></img>
                  </div>
                </div>
                <div className="Otts-fonts col-auto">
                  <div className="Eckmannpsych mt-4">
                    {" "}
                    Heading - Eckmannpsych{" "}
                  </div>
                  <div className="Futura mt-4">
                    {" "}
                    Subheading and Body - Futura{" "}
                  </div>
                </div>
                <div className="col align-items-center justify-content-md-end justify-content-center d-none d-md-flex">
                  <div>
                    <img
                      className="otts-colors"
                      src={require("./../assets/images/Ramen-Colors.png")}
                    ></img>
                  </div>
                </div>
              </div>
              <div className="Ramen-Wireframes mb-3 pt-5">Wireframes</div>
              <div className="Ramen-Wireframeexp mb-5">
                To start this project, I researched Japanese illustrations,
                ramen and learned more about web designs specific to
                restaurants. I decided to make the color palette resemble
                aspects of Japan’s flag - red and seaweed or Nori which is
                commonly found as a topping in ramen - green.
              </div>
              <div className="p-4">
                <img
                  width="100%"
                  src={require("./../assets/images/Ramen-Wireframes.png")}
                ></img>
              </div>

              <div className="Ramen-Hifi my-5 pt-5">Hi-Fi Prototypes</div>
              <div>
                <div className="Ramen-Landingpage mb-2">LANDING PAGE</div>
                <div className="Ramen-Landingpageexp mb-4">
                  I decided to create a landing page that looks like the outside
                  of The Ramen Shop (fictional) to replicate the experience of
                  how a customer would approach the restaurant in real life.
                  This interactive landing page would be a fun way for users to
                  “enter” The Ramen Shop’s website.
                </div>
                <div className="d-flex pb-5">
                  <div
                    className="col-auto d-none d-md-block"
                    style={{ borderLeft: "1px solid white" }}
                  ></div>
                  <div className="col p-4">
                    <img
                      width="100%"
                      src={require("./../assets/images/Ramen-enter.svg")}
                    ></img>
                  </div>
                </div>
              </div>

              <div className="Ramen-Homepage1 mb-2 pt-5">HOMEPAGE</div>
              <div className="Ramen-Homepageexp mb-4">
                To continue the idea of replicating the actual experience of
                going to The Ramen Shop, I added an illustration of the dining
                experience. I did not want to complicate the homepage and kept
                it simple by adding only the most important information
                customers need.
              </div>
              <div className="d-flex pb-5">
                <div
                  className="col-auto d-none d-md-block"
                  style={{ borderLeft: "1px solid white" }}
                ></div>
                <div className="col p-4">
                  <img
                    width="100%"
                    src={require("./../assets/images/Ramen-HomepageHiFi.svg")}
                  ></img>
                </div>
              </div>

              <div className="Ramen-Menu pt-5 mb-2">MENU</div>
              <div className="Ramen-Menueexp mb-4">
                To make the menu page’s user experience interactive, users would
                be able to click through different ramen options and read about
                how they are made. Users can also click on a link to take them
                to the full menu. To add consistency throughout my designs, I
                added the “noodle” design element from the homepage.
              </div>
              <div className="d-flex pb-5">
                <div
                  className="col-auto d-none d-md-block"
                  style={{ borderLeft: "1px solid white" }}
                ></div>
                <div className="col p-4">
                  <img
                    width="100%"
                    src={require("./../assets/images/Ramen-MenuHiFi.svg")}
                  ></img>
                </div>
              </div>
              <div className="Ramen-About pt-5 mb-2">ABOUT</div>
              <div className="Ramen-Aboutexp mb-4">
                I made the About page simple with information that encapsulates
                The Ramen Shop’s ambience. I added an illustration of a
                Maneki-neko, a common Japanese figurine which is often believed
                to bring good luck.
              </div>
              <div className="d-flex">
                <div
                  className="col-auto d-none d-md-block"
                  style={{ borderLeft: "1px solid white" }}
                ></div>
                <div className="col p-4">
                  <img
                    width="100%"
                    src={require("./../assets/images/Ramen-AboutHiFi.svg")}
                  ></img>
                </div>
              </div>
              <div className="Skye pt-5 mt-5">
                *Help with the illustration for the homepage design by Skye Inn
              </div>
            </div>
          </div>
          <div
            className="West-bottom justify-content-between mx-auto"
            style={{ maxWidth: "700px" }}
          >
            <div className="mx-2 col-auto">
              <Link to="/"> HOME</Link>
            </div>

            <div className="col-auto mx-2">
              <Link to="/otts"> NEXT PROJECT</Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RamenShop;
