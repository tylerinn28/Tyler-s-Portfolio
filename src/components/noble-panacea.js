import React from "react";
import "./noble-panacea.css";
import "./../assets/fonts/ArchivoBlack-Regular.ttf";
import { Link } from "react-router-dom";

export const NoblePanacea = () => {
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
          <div className="navbar pr-sm-4 pr-2 pt-sm-4 pt-2">
            <a href="/" class="fa fa-home"></a>
            <a href="mailto:tylerinn28@gmail.com" class="email">
              <i class="fa fa-envelope-o"></i>
            </a>
            <a href="https://dribbble.com/tyylahh" class="dribbble">
              <i class="fa fa-dribbble"></i>
            </a>
            <a
              href="https://linkedin.com/in/tyler-inn-405393b8"
              class="fa fa-linkedin-square"
            ></a>
          </div>
          <div className="backarrow">
            <span className="d-inline-block">
              <a href="/" className="px-0 py-3">
                <i className="fa fa-long-arrow-left"></i>
              </a>
            </span>
          </div>
          <div className="MobileAppheading mb-5">Events</div>
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
                src={require("./../assets/images/Noble-topimage.jpg")}
              />
            </div>
            <div
              className="title-40-100"
              style={{ zIndex: 2, position: "relative" }}
            >
              <div className="title pb-3">
                <div> NOBLE </div>
                <div> PANACEA </div>
                <div> GLOBAL </div>
                <div> BRAND </div>
                <div> LAUNCH </div>
              </div>

              <div className="d-flex">
                <div className="col-md-6 col-sm-10 col-12">
                  <div className="Soundcloud-information pt-5">
                    <div className="Noble-date">
                      <div className="Noble-date1">Date: </div> Tuesday, October
                      22, 2019
                    </div>
                    <div className="Noble-location">
                      <div className="Noble-location1">Location: </div>The
                      Metropolitan Museum of Art, New York City
                    </div>
                    <div className="Noble-client">
                      <div className="Noble-client1">Client: </div>Noble Panacea
                    </div>
                    <div className="Noble-role">
                      <div className="Noble-role1">Role: </div>Events Assistant
                      at PURPLE
                    </div>
                  </div>
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
                  src={require("./../assets/images/Noble-topimage.jpg")}
                />
              </div>
            </div>
          </div>
          <div className="row no-gutters justify-content-end">
            <div className="col-lg-6 col-12 p-lg-4 p-3">
              <img
                width="100%"
                src={require("./../assets/images/Noble-firsttier.jpg")}
              />
            </div>
          </div>
          <div className="row no-gutters pb-5">
            <div className="col-lg-5 col-12 p-lg-5 p-3">
              <img
                width="100%"
                src={require("./../assets/images/Noble-secondtier.jpg")}
              />
            </div>
            <div className="col-lg-6 col-12 p-lg-5 p-3">
              <div
                className="d-none d-lg-block"
                style={{ width: "100%", paddingTop: "45%" }}
              ></div>
              <div className="Noble-firsttierinfo">
                <h2>
                  Noble Panacea is an innovative skincare brand founded by a
                  Nobel Laureate, Sir Fraser Stoddart.
                </h2>
              </div>
              <div className="Noble-firsttiersubheading">
                The brand is creating breakthrough science skincare with their
                revolutionary OMVTM technology that protects and delivers active
                ingredients precisely into skin cells, improving their potency
                for unparalleled anti-aging results.
              </div>
            </div>
          </div>
          <div className="row no-gutters pt-4">
            <div className="col-lg-6 col-12 p-lg-5 p-3">
              <div
                className="d-none d-lg-block"
                style={{ width: "100%", paddingTop: "40%" }}
              ></div>
              <div className="Noble-secondtier">
                <h2>
                  At PURPLE, we helped the brand with its global reveal event at
                  the Metropolitan Museum in New York.
                </h2>
              </div>
              <div className="Noble-secondtiersubheading">
                With the client, we handled the ideation process, the guest
                list, managing the vendors and day-to-day planning. The event
                included a cocktail reception where guests enjoyed live music
                provided by a Juilliard quartet followed by a dinner and
                speeches. Guests were escorted to dinner via an interactive OMV
                Tunnel entrance. After the dinner, guests were gifted with Noble
                Panacea products - the Brilliant and Absolute Collection.
              </div>
            </div>
            <div className="col-lg-6 col-12 p-lg-5 p-3">
              <img
                width="100%"
                src={require("./../assets/images/Noble-thirdtier.jpg")}
              />
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
              <Link to="/ellenvonunwerth"> NEXT EVENT</Link>
            </div>
          </div>
          <div className="NobleBFA">PHOTOS BY BFA</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NoblePanacea;
