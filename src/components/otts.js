import React from "react";
import "./../assets/fonts/ArchivoBlack-Regular.ttf";
import "./otts.css";
import { Link } from "react-router-dom";

export const Otts = () => {
  return (
    <React.Fragment>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>

      <div className="content">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <div className="navbar pr-sm-4 pr-2 pt-sm-4 pt-2">
          <a href="/" class="fa fa-home"></a>
          <a href="mailto:tylerinn28@gmail.com" class="fa fa-envelope-o"></a>
          <a href="https://dribbble.com/tyylahh" class="fa fa-dribbble"></a>
          <a
            href="https://linkedin.com/in/tyler-inn-405393b8"
            class="fa fa-linkedin-square"
          ></a>
        </div>

        <div className="px-xl-5 px-2 ml-4 ml-md-5 mr-5">
          <div className="backarrow">
            <span className="d-inline-block">
              <a href="/" className="px-0 py-3">
                <i class="fa fa-long-arrow-left"></i>
              </a>
            </span>
          </div>
          <div className="MobileAppheading mb-5">Web Design</div>
          <div style={{ position: "relative" }}>
            <div
              style={{ height: "166px" }}
              className="d-none d-sm-block d-md-none"
            ></div>
            <div className="px-0 d-block d-sm-none">
              <img
                width="100%"
                className="Soundcloud-Homepage"
                src={require("./../assets/images/Otts-topimage.svg")}
              />
            </div>
            <div
              className="Soundcloudredesign"
              style={{ zIndex: 2, position: "relative" }}
            >
              <div className="title">
                <div> OTT'S </div>
                <div> EXOTIC </div>
                <div> PLANTS </div>
              </div>

              <div className="d-flex">
                <div className="col-md-6 col-sm-10 col-12">
                  <div className="Soundcloud-information pt-5">
                    <div className="Year2020">
                      <div className="Year"> Year: </div> 2020 <br></br>
                    </div>
                    <div classNAme="Ottspersonalgoalwhole">
                      <div className="OttsPersonalGoal"> Personal Goal: </div>{" "}
                      Create an ecommerce website design from scratch based on
                      an already existing company.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <div className="col-lg-7 col-sm-10 col-12">
                <h1 className="Ottsfirsttierheading">
                  Ott’s is a greenhouse, specializing in exotic plants located
                  outside of Philadelphia.
                </h1>
                <h2 className="Ottsfirsttiersubheading">
                  Since Ott’s did not have a website, I decided to take on the
                  project of designing one. In this project, I learned the
                  importance of clearly defining the brands services and goods
                  as well as how to create a user-friendly e-commerce website.
                </h2>
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
              <div className="col-md-8 col-sm-9 col-10 px-0 d-none d-sm-block">
                <img
                  width="100%"
                  className="Soundcloud-Homepage"
                  src={require("./../assets/images/Otts-topimage.jpg")}
                />
              </div>
            </div>
          </div>

          <div className="row no-gutters justify-content-center">
            <div className="col-md-10 col-12">
              <div className="pb-5">
                <div
                  className="Otts-Designelementsheading"
                  style={{ paddingTop: "80px" }}
                >
                  Design Elements
                </div>

                <div className="Otts-Designelements row no-gutters justify-content-md-between justify-content-center">
                  <div className="col-12 d-flex align-items-center justify-content-center mt-5 d-block d-md-none">
                    <img
                      className="otts-colors"
                      src={require("./../assets/images/Otts-colors.png")}
                    ></img>
                  </div>
                  <div className="Otts-fonts col-auto">
                    <div className="AdobeJenson mt-4">
                      {" "}
                      Heading - Adobe Jenson Pro{" "}
                    </div>
                    <div className="Din2014 mt-4"> Subheading - DIN 2014 </div>
                    <div className="Soleil mt-4"> Body paragraph - Soleil </div>
                  </div>
                  <div className="col align-items-center justify-content-md-end justify-content-center d-none d-md-flex">
                    <img
                      className="otts-colors"
                      src={require("./../assets/images/Otts-colors.png")}
                    ></img>
                  </div>
                </div>
              </div>
              <div className="Otts-wireframes mb-2 pt-5">Wireframes</div>
              <div className="Otts-wireframeexp">
                To start the project, I did research on Ott’s by visiting their
                location as well as looking at their online presence. I was able
                to gather information on their consumer market and overall
                brand. After this, I researched key pain points in ecommerce
                websites and applied it to my wireframe designs.
              </div>
              <div className="p-5">
                <img
                  width="100%"
                  src={require("./../assets/images/Otts-Wireframes.png")}
                ></img>
              </div>

              <div className="Ramen-Hifi my-5 pt-5">Hi-Fi Prototypes</div>
              <div>
                <div className="Ramen-Landingpage mb-2">HOMEPAGE</div>
                <div className="Ramen-Landingpageexp mb-4">
                  Since the homepage is the first thing users sees, it is highly
                  important to feature the most essential elements with clear
                  and direct guidance. This is why I chose to keep the
                  navigation bar simple with three categories - Shop, Plant Care
                  and About Us. In addition, users have an explicit definition
                  of the brand as well as a direct action to “Shop Now”.
                </div>
                <div className="d-flex pb-5">
                  <div
                    className="col-auto d-none d-md-block"
                    style={{ borderLeft: "1px solid white" }}
                  ></div>
                  <div className="col p-4">
                    <img
                      width="100%"
                      src={require("./../assets/images/Otts-Homepage.png")}
                    ></img>
                  </div>
                </div>
              </div>
              <div>
                <div className="Ramen-Landingpage mb-2 pt-5">
                  SHOP NEW ARRIVALS
                </div>
                <div className="Ramen-Landingpageexp mb-4">
                  Since users get overwhelmed with an abundance of options, I
                  decided to have a maximum of nine products per page as well as
                  filters to help consumers find exactly what they want.
                </div>
                <div className="d-flex pb-5">
                  <div
                    className="col-auto d-none d-md-block"
                    style={{ borderLeft: "1px solid white" }}
                  ></div>
                  <div className="col p-4">
                    <img
                      width="100%"
                      src={require("./../assets/images/Otts-ShopNewArrivals.png")}
                    ></img>
                  </div>
                </div>
              </div>
              <div>
                <div className="Ramen-Landingpage mb-2 pt-5">PRODUCT PAGE</div>
                <div className="Ramen-Landingpageexp mb-4">
                  Since the user cannot physically ask an employee about the
                  plant, I decided to add as much information about the plant in
                  a simple manner by creating a “Plant Care” section as well as
                  having basic information under the product name. I also
                  decided to input an “Add a Planter” drop down menu to increase
                  efficiently in user flow.
                </div>
                <div className="d-flex pb-5">
                  <div
                    className="col-auto d-none d-md-block"
                    style={{ borderLeft: "1px solid white" }}
                  ></div>
                  <div className="col p-4">
                    <img
                      width="100%"
                      src={require("./../assets/images/Otts-ProductPage.png")}
                    ></img>
                  </div>
                </div>
              </div>
              <div>
                <div className="Ramen-Landingpage mb-2 pt-5">CART</div>
                <div className="Ramen-Landingpageexp mb-4">
                  One of the most popular problems that users have with
                  e-commerce websites is a long and confusing checkout process.
                  Based on SaleCycle, the global average rate of cart
                  abandonment is 75.6%. To combat this, I added a clear
                  call-to-action button as well as additional product incentives
                  at the bottom.
                </div>
                <div className="d-flex pb-5">
                  <div
                    className="col-auto d-none d-md-block"
                    style={{ borderLeft: "1px solid white" }}
                  ></div>
                  <div className="col p-4">
                    <img
                      width="100%"
                      src={require("./../assets/images/Otts-Cart.png")}
                    ></img>
                  </div>
                </div>
              </div>
              <div>
                <div className="Ramen-Landingpage mb-2 pt-5">CHECKOUT</div>
                <div className="Ramen-Landingpageexp mb-4">
                  To streamline the checkout process, I created two options for
                  checkout - as a guest or as a returning customer. The guest
                  checkout is a quicker method for one-time purchases, however,
                  for reoccurring customers, the ability to sign in will save
                  time with inputting their information.
                </div>
                <div className="d-flex pb-5">
                  <div
                    className="col-auto d-none d-md-block"
                    style={{ borderLeft: "1px solid white" }}
                  ></div>
                  <div className="col p-4">
                    <img
                      width="100%"
                      src={require("./../assets/images/Otts-Checkout.png")}
                    ></img>
                  </div>
                </div>
              </div>
              <div className="Otts-Not pt-5">
                * Ott’s currently is not pursuing an online e-commerce presence
              </div>
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
            <Link to="/soundcloudredesign"> NEXT PROJECT</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Otts;
