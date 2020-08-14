import React from 'react';
import './noble-panacea.css';
import './../assets/fonts/ArchivoBlack-Regular.ttf'
import { Link } from "react-router-dom";

export const NoblePanacea = () => {
    return (
        <React.Fragment>

        <div className="content">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        <div className="backarrow">
        <a href="/" class="fa fa-long-arrow-left"></a>
        </div>

        <div className="Noblenavbar">
    <a href="/" class="fa fa-home"></a>
    <a href="mailto:tylerinn28@gmail.com" class="email"><i class="fa fa-envelope-o"></i></a>
    <a href="https://dribbble.com/tyylahh" class="dribbble"><i class="fa fa-dribbble"></i></a>
    <a href="https://linkedin.com/in/tyler-inn-405393b8" class="fa fa-linkedin-square"></a>
    </div>

        <div className="Eventsheading">
            Events
        </div>

        <div class="hr"><hr /></div>

        <h1 className="Noble-heading">
        <img className="Noble-topimage" src={require('./../assets/images/Noble-topimage.jpg')} />
            <p>
            <div> NOBLE </div>
            <div> PANACEA </div>
            <div> GLOBAL </div>
            <div> BRAND </div>
            <div> LAUNCH </div>
            </p>
        </h1>

        <div className="Noble-information">
            <p>
            <div> Date: Tuesday, October 22, 2019    </div>
            <div> Location: The Metropolitan Museum of Art, New York City   </div>
            <div> Client: Noble Panacea </div>
            <div> Role: Events Assistant at PURPLE  </div>
            </p>
        </div>

        <div className="Noble-firsttier">
        <img src={require('./../assets/images/Noble-firsttier.jpg')} />
        </div>

        <div className="Noble-firsttierinfo">
        <img src={require('./../assets/images/Noble-secondtier.jpg')} />

        <h2>
        Noble Panacea is an innovative skincare brand founded by a Nobel Laureate, Sir Fraser Stoddart.
        </h2>
        </div>

        <div className="Noble-firsttiersubheading">
        The brand is creating breakthrough science skincare with their revolutionary OMVTM technology that protects and delivers active ingredients precisely into skin cells, improving their potency for unparalleled anti-aging results.
        </div>

        <div className="Noble-secondtier">
        <h2>
        At PURPLE, we helped the brand with its global reveal event at the Metropolitan Museum in New York.
        </h2>

        <img src={require('./../assets/images/Noble-thirdtier.jpg')} />
        </div>

        <div className="Noble-secondtiersubheading">
        PURPLE handled the event planning as well as on-site event management. With the client, we handled the ideation process, the guest list, managing the vendors and day-to-day planning. The event included a cocktail reception where guests enjoyed live music provided by a Juilliard quartet followed by a dinner hosted by Lydia Fenet, a well-known auctioneer at Christie’s Auction House. Guests were then escorted to the Engelhard Court via an interactive OMV Tunnel entrance. The dinner sequence opened with a speech by Lydia Fenet, followed by Sir Fraser Stoddart and Celine Talabaza, CEO of Girl Up Foundation. After the dinner, guests were gifted with Noble Panacea products - the Brilliant and Absolute Collection. 
        </div>

        <div className="Noble-bottom">
            <div className="Noble-Home">
            <Link to="/"> HOME</Link>
            </div>

            <div className="Noble-NextEvent">
            <Link to="/ellenvonunwerth"> NEXT EVENT</Link>
            </div>
        </div>


        </div>

        </React.Fragment>
    );
  }
  
  export default NoblePanacea;