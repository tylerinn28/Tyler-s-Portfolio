import React from 'react';
import './noble-panacea.css';
import './../assets/fonts/ArchivoBlack-Regular.ttf'

export const NoblePanacea = () => {
    return (
        <React.Fragment>

        <div className="content">

        <div className="Eventsheading">
            Events
        </div>

        <h1 className="Noble-heading">
            <p>
            <div> NOBLE </div>
            <div> PANACEA </div>
            <div> GLOBAL </div>
            <div> BRAND </div>
            <div> LAUNCH </div>
            </p>
            
       <img src={require('./../assets/images/Noble-topimage.jpg')} />
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
                HOME
            </div>

            <div className="Noble-NextEvent">
                NEXT EVENT
            </div>
        </div>


        </div>

        </React.Fragment>
    );
  }
  
  export default NoblePanacea;