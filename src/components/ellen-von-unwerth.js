import React from "react";
import "./../assets/fonts/ArchivoBlack-Regular.ttf";
import "./ellen-von-unwerth.css";
import { Link } from "react-router-dom";

export const EllenVonUnwerth = () => {
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
            <a href="/" className="fa fa-home"></a>
            <a href="mailto:tylerinn28@gmail.com" className="email">
              <i className="fa fa-envelope-o"></i>
            </a>
            <a href="https://dribbble.com/tyylahh" className="dribbble">
              <i className="fa fa-dribbble"></i>
            </a>
            <a
              href="https://linkedin.com/in/tyler-inn-405393b8"
              className="fa fa-linkedin-square"
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
                src={require("./../assets/images/Ellen-topimage.jpg")}
              />
            </div>
            <div
              className="title-40-100"
              style={{ zIndex: 2, position: "relative" }}
            >
              <div className="title pb-3">
                <div> ELLEN </div>
                <div> VON </div>
                <div> UNWERTH </div>
                <div> AT </div>
                <div> FOTOGRAFISKA </div>
              </div>

              <div className="d-flex">
                <div className="col-md-6 col-sm-10 col-12">
                  <div className="Soundcloud-information pt-5">
                    <div className="Ellen-date">
                      <div className="Ellen-date1">Date: </div>Saturday, January
                      18, 2020
                    </div>
                    <div className="Ellen-location">
                      <div className="Ellen-location1">Location: </div>
                      Fotografiska Museum, New York City
                    </div>
                    <div className="Ellen-role">
                      <div className="Ellen-role1">Role: </div>Events Assistant
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
                  className="Soundcloud-Homepage"
                  src={require("./../assets/images/Ellen-topimage.jpg")}
                />
              </div>
            </div>
          </div>

          <div className="row no-gutters justify-content-center">
            <div className="col-md-10 col-12">
              <div className="row no-gutters">
                <div className="col-lg-6 col-12 p-lg-5 p-0">
                  <div
                    className="d-none d-lg-block"
                    style={{ width: "100%", paddingTop: "40%" }}
                  ></div>
                  <img
                    width="100%"
                    src={require("./../assets/images/Ellen-firsttier.jpg")}
                  />
                </div>
                <div className="col-lg-6 col-12 p-4">
                  <div className="Ellen-firsttiertext">
                    <div className="hostedanight mb-4">
                      Ellen von Unwerth hosted a night to celebrate the
                      exhibition, Devotion! 30 Years of Photographing Women,
                      presented at Fotografiska New York.
                    </div>
                    <div className="FriendsofEllen">
                      Friends of Ellen von Unwerth gathered for this special
                      moment to honor the renowned photographer and dance the
                      night away to music.
                    </div>
                  </div>
                </div>
              </div>

              <div className="row no-gutters">
                <div className="col-lg-6 col-12 p-4">
                  <div
                    className="d-none d-lg-block"
                    style={{ width: "100%", paddingTop: "40%" }}
                  ></div>
                  <img
                    width="100%"
                    src={require("./../assets/images/Ellen-secondtier.jpg")}
                  />
                </div>
                <div className="col-lg-6 col-12 p-4">
                  <img
                    width="100%"
                    src={require("./../assets/images/Ellen-thirdtier.jpg")}
                  />
                </div>
              </div>
              <div className="row no-gutters justify-content-center">
                <div className="col-lg-6 col-12">
                  <div className="Ellen-thirdtier">
                    <h1>
                      At PURPLE, we helped Ellen von Unwerth plan her special
                      night.
                    </h1>
                    <div>
                      PURPLE handled the event planning as well as on-site event
                      management. We worked closely with the staff at
                      Fotografiska New York to create a seamless event which
                      included a special performance by House of Sweat, Music by
                      DJ Kissy and a marvelous celebration for Ellen von
                      Unwerth.
                    </div>
                  </div>
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
              <Link to="/westhollywood"> NEXT EVENT</Link>
            </div>
          </div>

          <div className="EllenBFA ">PHOTOS BY BFA</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EllenVonUnwerth;
