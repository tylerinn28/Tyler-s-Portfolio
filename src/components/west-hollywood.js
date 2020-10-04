import React from "react";
import "./west-hollywood.css";
import "./../assets/fonts/ArchivoBlack-Regular.ttf";
import { Link } from "react-router-dom";

export const Westhollywood = () => {
  return (
    <React.Fragment>
      <div className="content">
        <div className="px-xl-5 px-2 ml-4 ml-md-5 mr-5">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />

          <div className="backarrow">
            <span className="d-inline-block">
              <a href="/" className="px-0 py-3">
                <i className="fa fa-long-arrow-left"></i>
              </a>
            </span>
          </div>
          <div className="MobileAppheading mb-5">Events</div>

          <div className="navbar pr-sm-4 pr-2 pt-sm-4 pt-2">
            <a href="/" class="fa fa-home"></a>
            <a href="mailto:tylerinn28@gmail.com">
              {" "}
              <i class="fa fa-envelope-o"></i>
            </a>
            <a href="https://dribbble.com/tyylahh">
              {" "}
              <i class="fa fa-dribbble"></i>
            </a>
            <a
              href="https://linkedin.com/in/tyler-inn-405393b8"
              class="fa fa-linkedin-square"
            ></a>
          </div>

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
                src={require("./../assets/images/West-topimage.jpg")}
              />
            </div>
            <div
              className="title-40-100"
              style={{ zIndex: 2, position: "relative" }}
            >
              <div className="title pb-3">
                <div> WEST </div>
                <div> HOLLYWOOD </div>
                <div> EDITION </div>
                <div> OPENING </div>
                <div> WEEK </div>
              </div>

              <div className="d-flex">
                <div className="col-md-6 col-sm-10 col-12">
                  <div className="Soundcloud-information pt-5">
                    <div className="West-date">
                      <div className="West-Date1"> Date:</div>{" "}
                      <div>
                        {" "}
                        Tuesday, November 12 - Sunday, November 17, 2019{" "}
                      </div>
                    </div>
                    <div className="West-location">
                      {" "}
                      <div className="West-location1"> Location: </div> West
                      Hollywood EDITION, Los Angeles{" "}
                    </div>
                    <div className="West-role">
                      {" "}
                      <div className="West-role1">Role: </div> Events Assistant
                      at PURPLE{" "}
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
                  className="Soundcloud-Homepage"
                  src={require("./../assets/images/West-topimage.jpg")}
                />
              </div>
            </div>
          </div>

          <div className="row no-gutters justify-content-center">
            <div className="col-md-10 col-12">
              <div className="row no-gutters justify-content-between pb-3">
                <div className="col-lg-6 col-12 mb-4">
                  <div
                    className="d-none d-lg-block"
                    style={{ height: "200px" }}
                  ></div>
                  <div className="West-firsttier mb-4">
                    <h1>
                      Ian Schrager, owner of EDITION hotels, opens his first
                      West Coast EDITION property with a Grand Opening and VIP
                      dinners.
                    </h1>
                  </div>
                  <div className="West-firsttiersubheading">
                    The West Hollywood EDITION welcomed guests for a week of
                    special VIP dinners, music and entertainment. Guests
                    included Lenny Kravitz, Demi Moore, Paris Hilton, Diplo,
                    Emily Ratajkowski, and more.
                  </div>
                </div>
                <div className="col-lg-5 col-12">
                  <img
                    width="100%"
                    src={require("./../assets/images/West-firsttier.jpg")}
                  />
                </div>
              </div>

              <div className="row no-gutters justify-content-between pb-5 pt-5">
                <div className="col-lg-6 col-12 mb-4">
                  <div
                    className="d-none d-lg-block"
                    style={{ height: "200px" }}
                  ></div>
                  <img
                    width="100%"
                    src={require("./../assets/images/West-secondtier.jpg")}
                  />
                </div>
                <div className="col-lg-5 col-12">
                  <img
                    width="100%"
                    src={require("./../assets/images/West-thirdtier.jpg")}
                  />
                </div>
              </div>
              <div className="row no-gutters justify-content-end pb-5 pt-5 pr-5">
                <div className="col-lg-6 col-12">
                  <div className="West-secondheading mb-4">
                    PURPLE handled the planning and on-site event management.
                  </div>
                  <div className="West-firsttiersubheading">
                    Prior to the opening week, my team managed the guest list,
                    contacting vendors, and dinner arrangements. On site, we
                    handled checking in guests, problem solving and keeping a
                    consistent event flow.
                  </div>
                </div>
              </div>
              <div className="row no-gutters pl-lg-5 pl-0 pt-5">
                <div className="col-lg-6 col-12">
                  <img
                    width="100%"
                    src={require("./../assets/images/West-fourthtier.jpg")}
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
                  <Link to="/noblepanacea"> NEXT EVENT</Link>
                </div>
              </div>
              <div className="WestBFA">PHOTOS BY BFA</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Westhollywood;
