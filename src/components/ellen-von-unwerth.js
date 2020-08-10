import React from 'react';
import './../assets/fonts/ArchivoBlack-Regular.ttf';
import './ellen-von-unwerth.css';

export const EllenVonUnwerth = () => {
    return (
        <React.Fragment>

        <div className="content">

        <div className="Eventsheading">
            Events
        </div>

        <h1 className="Ellen-heading">
            <p> 
            <div> ELLEN </div>
            <div> VON  </div>
            <div> UNWERTH </div>
            <div> AT </div>
            <div> FOTOGRAFISKA </div>
            </p> 
            
       <img src={require('./../assets/images/Ellen-topimage.jpg')} />
        </h1>

        <div className="West-information">
            <p>
            <div> Date: Saturday, January 18, 2020    </div>
            <div> Location: Fotografiska Museum, New York City   </div>
            <div> Role: Events Assistant at PURPLE  </div>
            </p>
        </div>

        <div className="Ellen-firsttier">
        <img src={require('./../assets/images/Ellen-firsttier.jpg')} />
        
        <h2>
        Ellen von Unwerth hosted a night to celebrate the exhibition, Devotion! 30 Years of Photographing Women, presented at Fotografiska New York. 
        </h2>

        <div>
        Friends of Ellen von Unwerth gathered for this special moment to honor the renowned photographer and dance the night away to music. 
        </div>

        </div>

        <div className="Ellen-secondtier">
        <img className="Ellen-thirdtierimg" src={require('./../assets/images/Ellen-secondtier.jpg')} />
        <img className="Ellen-secondtierimg" src={require('./../assets/images/Ellen-thirdtier.jpg')} />
        </div>

        <div className="Ellen-thirdtier">
            <h1>
            At PURPLE, we helped Ellen von Unwerth plan her special night.
            </h1>
            <div>
            PURPLE handled the event planning as well as on-site event management. We worked closely with the staff at Fotografiska New York to create a seamless event which included a special performance by House of Sweat, Music by DJ Kissy and a marvelous celebration for Ellen von Unwerth. 
            </div>
        </div>

        <div className="Ellen-bottom">
            <div className="Ellen-Home">
                HOME
            </div>

            <div className="Ellen-NextEvent">
                NEXT EVENT
            </div>
        </div>


        </div>
        </React.Fragment>
    );
  }
  
  export default EllenVonUnwerth;