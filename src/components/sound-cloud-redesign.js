import React from "react";
import "./../assets/fonts/ArchivoBlack-Regular.ttf";
import "./sound-cloud-redesign.css";
import { Link } from "react-router-dom";

export const SoundCloudRedesign = () => {
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
          <a href="/" className="fa fa-home"></a>
          <a href="mailto:tylerinn28@gmail.com">
            <i className="fa fa-envelope-o"></i>
          </a>
          <a href="https://dribbble.com/tyylahh">
            <i className="fa fa-dribbble"></i>
          </a>
          <a
            href="https://linkedin.com/in/tyler-inn-405393b8"
            className="fa fa-linkedin-square"
          ></a>
        </div>
        <div className="px-xl-5 px-2 ml-4 ml-md-5 mr-5">
          <div className="backarrow">
            <span className="d-inline-block">
              <a href="/" className="px-0 py-3">
                <i className="fa fa-long-arrow-left"></i>
              </a>
            </span>
          </div>
          <div className="MobileAppheading mb-5">Mobile App Redesign</div>
          <div>
            <div style={{ position: "relative" }}>
              <div
                style={{ height: "166px" }}
                className="d-none d-sm-block d-md-none"
              ></div>
              <div className="col-12 d-block d-sm-none px-0">
                <img
                  width="100%"
                  className="Soundcloud-Homepage"
                  src={require("./../assets/images/Soundcloud.png")}
                />
              </div>
              <div
                className="Soundcloudredesign pb-5"
                style={{ zIndex: 2, position: "relative" }}
              >
                <div className="title">
                  <div> SOUND </div>
                  <div> CLOUD</div>
                  <div> REDESIGN </div>
                </div>

                <div className="d-flex">
                  <div className="col-md-6 col-sm-10 col-12">
                    <div className="Soundcloud-information pt-5">
                      <div className="Year2020">
                        <div className="Year"> Year: </div> 2020 <br></br>
                      </div>
                      <div className="Projectgoals">Project Goals: </div>
                      <div className="createmore">
                        -Create a more engaging, clean, and intuitive interface
                        for both the website and mobile application. <br></br>
                        -Highlight a sense of community and social aspect of the
                        platform.
                        <br></br>
                        -Create more personalization within the platform.{" "}
                        <br></br>
                      </div>
                      <div className="Personalgoals">
                        Personal Goals: <br></br>
                      </div>
                      <div className="Tolearn">
                        To learn user research and push myself to be able to
                        redesign a popular mobile application.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end pb-5">
                <div className="col-lg-7 col-sm-10 col-12">
                  <div className="Soundcloudfirsttier">
                    <h1 className="Soundcloudfirsttierheading">
                      Soundcloud is a music sharing platform that enables its
                      users to upload, promote, and share audio.
                    </h1>
                    <h2 className="Soundcloudfirsttiersubheading">
                      Although Soundcloud has been around since 2007, many
                      regular users have shown frustration with the platform’s
                      user experience design, ultimately resulting in favoring
                      other music platforms such as Spotify or Apple Music.
                      Being an active Soundcloud user for over 7 years, I wanted
                      to redesign the platform because I believe that it has a
                      lot to offer.
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
                    src={require("./../assets/images/Soundcloud.png")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Process px-xl-5 px-2 ml-4 ml-md-5 mr-5 pt-5">
          Process
        </div>

        <div className="Processexp row no-gutters px-xl-5 px-2 ml-4 ml-md-5 mr-5 pt-5 mb-5">
          <div className="Research col-auto mr-5 pr-5 mb-5">
            <div className="Research1">
              Research <br></br>
            </div>
            -User Interviews <br></br>
            -Value Proposition <br></br>
            -Research Insights
          </div>

          <div className="Design col-auto mr-5 pr-5 mb-5">
            <div className="Design1">
              Design <br></br>
            </div>
            -Create Concept for Pain Points<br></br>
            -Wireframes <br></br>
            -Hi-Fi Prototype <br></br>
            -Iterations
          </div>

          <div className="Testing col-auto mr-5 pr-5 mb-5">
            <div className="Testing1">
              Testing <br></br>
            </div>
            -Usability Testing (Wireframes)<br></br>
            -Usability Testing (Hi-Fi Interactive Prototype) <br></br>
          </div>
        </div>

        <div className="Keyinsight01 pt-5">
          Key Insight: 85% of respondents said that they only use Soundcloud a
          few times a month or less
        </div>

        <div className="Piechart-quote pb-5">
          <img
            className="Soundcloud-Piechart"
            src={require("./../assets/images/Soundcloud-piechart-shorter.png")}
          />
          <div className="quotes pb-5">
            “the platform is fine but it seems too scattered” <br></br>
            <br></br>
            “I wish it was easier <br></br> to navigate”
          </div>
        </div>
        <div className="px-xl-5 px-2 ml-4 ml-md-5 mr-5 pt-5">
          <div className="keypainpoints mb-5">Key Pain Points</div>

          <div
            className="Keypainpointsexp row no-gutters"
            style={{ marginBottom: "100px" }}
          >
            <div className="Confusinginterface col mr-5 pr-5 mb-4">
              <div className="Confusinginterface1 mb-2">
                Confusing Interface <br></br>
              </div>
              When asked what respondents did not like about Soundcloud, the
              majority said that they just wanted an easier interface.
            </div>

            <div className="Community col mr-5 pr-5 mb-4">
              <div className="Community1 mb-2">
                Lack of a social aspect <br></br>
              </div>
              The survey showed that respondents liked using their preferred
              music platform to share music with their friends.
            </div>

            <div className="Personalization col mr-5 pr-5 mb-4">
              <div className="Personalization1 mb-2">
                Lack of personalization <br></br>
              </div>
              30% of respondents wanted more personalization in playlists, songs
              and radio recommendations. They felt like the recommendations were
              not tailored to them.
            </div>
          </div>
        </div>

        <div
          className="px-xl-5 px-2 ml-4 ml-md-5 mr-5 pt-5"
          style={{ marginBottom: "100px" }}
        >
          <div className="row no-gutters justify-content-center">
            <div className="col-md-10 col-12">
              <div className="row no-gutters p-md-4 p-3">
                <div className="Soundcloud-Wireframe mb-2">Wireframes</div>
                <div className="Soundcloud-Wireframeexp mb-5">
                  Based on the points above, I produced lo-fi wireframes (shown
                  below on the right next to the original Soundcloud design) to
                  communicate how the application could look and function better
                  for an easier experience.
                </div>
              </div>
              <div className="SoundcloudWireframe1 row no-gutters justify-content-center mb-5 pb-5">
                <div className="col-auto p-md-4 p-3 d-flex">
                  <img
                    className="mr-4 img-100-150"
                    src={require("./../assets/images/Soundcloud-HomepageOrg.PNG")}
                  />
                  <img
                    className="img-100-150"
                    src={require("./../assets/images/Soundcloud-Homepagewireframe.png")}
                  />
                </div>
                <div className="Soundcloud-Homepageexp col-lg col-12 p-md-4 p-3">
                  <div className="HomepageStream">Homepage/Stream </div>
                  To create a more community and sharing aspect to the
                  application, the homepage would now act as a way to see what
                  your friends and favorite artists are posting and sharing,
                  whether it be a new playlist, reposting a song, or releasing a
                  new album.
                </div>
              </div>
              <div className="SoundcloudWireframe2 row no-gutters justify-content-center mb-5 pb-5">
                <div className="col-auto d-flex p-md-4 p-3">
                  <img
                    className="img-100-150 mr-4"
                    src={require("./../assets/images/Soundcloud-Searchorg.png")}
                  />
                  <img
                    className="img-100-150"
                    src={require("./../assets/images/Soundcloudsearch-wireframe.png")}
                  />
                </div>
                <div className="Soundcloud-Searchexp col-lg col-12 p-md-4 p-3">
                  <div className="Search">Search </div>I decided to streamline
                  the interface design by combining the search and discover
                  page. A few survey-takers revealed that there were too many
                  unorganized channels and tabs. In my design, users would be
                  able to search for artists and songs while also getting
                  personalized music suggestions.
                </div>
              </div>
              <div className="SoundcloudWireframe3 row no-gutters justify-content-center mb-5 pb-5">
                <div className="col-auto d-flex p-md-4 p-3">
                  <img
                    className="mr-4 img-100-150"
                    src={require("./../assets/images/Soundcloud-ProfileOrg.jpeg")}
                  />
                  <img
                    className="img-100-150"
                    src={require("./../assets/images/Soundcloudprofile-wireframe.png")}
                  />
                </div>
                <div className="Soundcloud-Profileexp col-lg col-12 p-md-4 p-3">
                  <div className="Profile">Profile </div>
                  With the new profile design, users would get to showcase their
                  playlists as well as their top three songs they like at the
                  moment. This aspect allows for more customization to the
                  user’s profile page.
                  <br></br>
                  <br></br>
                  The artist page will look similar however will have more
                  information about them as well as suggested similar artists.
                </div>
              </div>
              <div className="SoundcloudWireframe4 row no-gutters justify-content-center pb-5">
                <div className="col-auto d-flex p-md-4 p-3">
                  <img
                    className="mr-4 img-100-150"
                    width="150px"
                    src={require("./../assets/images/Soundcloud-NowplayingOrg.png")}
                  />
                  <img
                    className="img-100-150"
                    src={require("./../assets/images/Soundcloudnowplaying-wireframe.png")}
                  />
                </div>

                <div className="Soundcloud-Nowplayingexp col-lg col-12 p-md-4 p-3">
                  <div className="Nowplaying">Now Playing </div>I wanted to keep
                  some aspects of the previous design, however, make the
                  interface cleaner and more organized.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row no-gutters justify-content-center pb-5">
          <div className="col-md-10 col-12">
            <div
              className="Soundcloud-Hifi mb-5"
              style={{ textAlign: "center" }}
            >
              Hi-Fi Prototypes
            </div>
            <div className="row no-gutters justify-cotnent-center">
              <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center mb-4">
                <img
                  width="250px"
                  src={require("./../assets/images/Soundcloud-HomepageHiFi.png")}
                />
              </div>
              <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center mb-4">
                <img
                  width="250px"
                  src={require("./../assets/images/Soundcloud-SearchHIFI.png")}
                />
              </div>
              <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center mb-4">
                <img
                  width="250px"
                  src={require("./../assets/images/Soundcloud-ProfileHIFI.png")}
                />
              </div>
              <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center mb-4">
                <img
                  width="250px"
                  src={require("./../assets/images/Soundcloud-NowPlayingHiFi.png")}
                />
              </div>
              <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center mb-4">
                <img
                  width="250px"
                  src={require("./../assets/images/Soundcloud-ArtistHiFi.png")}
                />
              </div>
              <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center mb-4">
                <img
                  width="250px"
                  src={require("./../assets/images/Soundcloud-Library.png")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-xl-5 px-2 ml-4 ml-md-5 mr-5 pt-5">
          <div className="row no-gutters justify-content-center">
            <div className="col-md-10 col-12">
              <div className="Moresocialapp row no-gutters pb-5">
                <div className="Creatingamore col-12 p-md-4 p-3">
                  Creating a more social app for sharing music
                </div>
                <div className="col-auto p-md-4 p-3 d-none d-md-block">
                  <img
                    className="d-none d-md-block"
                    width="300px"
                    src={require("./../assets/images/Soundcloud-ProfileHIFI.png")}
                  />
                </div>

                <div className="ProfileHiFi col p-md-4 p-3">
                  <div className="ProfileHiFiheading">Profile</div>
                  <div className="ProfileHiFiexp">
                    With the new profile design, users would get to showcase
                    their playlists and uploaded songs as well as their chosen
                    top three songs they enjoy at the moment. When a user
                    posts/reposts a playlist or song, their followers get an
                    option to repost, like, comment and send to other users. I
                    also decided to include a messaging aspect to Soundcloud to
                    encourage more music sharing and socializing.
                  </div>
                </div>
              </div>
              <div className="Morepersonalization row no-gutters pb-5">
                <div className="Morepersonalizedselections col-12 p-md-4 p-3">
                  More personalized selections
                </div>
                <div className="col-auto p-md-4 p-3 d-none d-md-block">
                  <img
                    className="d-none d-md-block"
                    width="300px"
                    src={require("./../assets/images/Soundcloud-SearchHIFI.png")}
                  />
                </div>

                <div className="SearchHiFi col p-md-4 p-3">
                  <div className="SearchHiFiheading">Search and Discover</div>
                  <div className="SearchHiFiexp">
                    With the search page now having suggested playlists, songs,
                    and artists to listen to, Soundcloud shows their users more
                    personalization and suggestions catered to their listening
                    habits.
                  </div>
                </div>
              </div>
              <div className="AddionalfeatureForLater row no-gutters pb-5">
                <div className="Additionalfeature col-12 p-md-4 p-3">
                  Additional Feature
                </div>
                <div className="col-auto p-md-4 p-3 d-none d-md-block">
                  <img
                    className="d-none d-md-block"
                    width="300px"
                    src={require("./../assets/images/Soundcloud-ForLaterHIFI.png")}
                  />
                </div>

                <div className="ForLaterHiFi col p-md-4 p-3">
                  <div className="ForLaterHiFiheading">For Later Playlist</div>
                  <div className="ForLaterHiFiexp">
                    In addition to redesigning Soundcloud to be more
                    user-friendly, social, and personalized, I decided to add
                    another feature to the application - a “For Later” playlist.
                    When using the platform with friends, I began to notice the
                    difficulty of sharing songs. When a friend would send me a
                    song, I usually am not able to listen to it right away so
                    after continuing to text, the song would get lost and I
                    would end up never listening to it. For this reason, I
                    decided to add “For Later” which would automatically save
                    the song to the playlist with the name of the person who
                    sent it and a “text back” feature (the arrow icon).
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Soundcloud-Prototyping">Prototyping</div>

        <video
          className="Soundcloud-video"
          width="320"
          height="240"
          controls
          src={require("./../assets/Video/Soundcloud-prototype.mp4")}
          type="video/mp4"
        ></video>

        <div className="Soundcloud-Usertesting">User-testing</div>

        <div className="usertestingexp">
          I tested the prototype on 5 users who originally took the survey and
          asked them questions on the new design. 100% of them felt as though
          the interface was easier to understand and more appealing. 100% of the
          users also felt as though the new design highlighted personalization
          through the profile and suggested artists on the search/discover page.
          To note: most of the users highlighted that they liked the additional
          messaging feature.
        </div>
        <div
          className="West-bottom justify-content-between mx-auto"
          style={{ maxWidth: "700px" }}
        >
          <div className="mx-2 col-auto">
            <Link to="/"> HOME</Link>
          </div>

          <div className="col-auto mx-2">
            <Link to="/ramenshop"> NEXT EVENT</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SoundCloudRedesign;
