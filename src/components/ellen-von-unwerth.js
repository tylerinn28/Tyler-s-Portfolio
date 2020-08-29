import React from 'react';
import './../assets/fonts/ArchivoBlack-Regular.ttf';
import './ellen-von-unwerth.css';
import { Link } from "react-router-dom";

export const EllenVonUnwerth = () => {
    return (
        <React.Fragment>

<meta name="viewport" content="width=device-width, initial-scale=1"></meta>

        <div className="content">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        <div className="backarrow">
        <a href="/" class="fa fa-long-arrow-left"></a>
        </div>

        <div className="Ellennavbar">
    <a href="/" class="fa fa-home"></a>
    <a href="mailto:tylerinn28@gmail.com" class="email"><i class="fa fa-envelope-o"></i></a>
    <a href="https://dribbble.com/tyylahh" class="dribbble"><i class="fa fa-dribbble"></i></a>
    <a href="https://linkedin.com/in/tyler-inn-405393b8" class="fa fa-linkedin-square"></a>
    </div>

        <div className="Eventsheading">
            Events
        </div>

        <div class="hr"><hr /></div>

        <h1 className="Ellen-heading">
        <img className="ellen-topimage" src={require('./../assets/images/Ellen-topimage.jpg')} />
            <p> 
            <div> ELLEN </div>
            <div> VON  </div>
            <div> UNWERTH </div>
            <div> AT </div>
            <div> FOTOGRAFISKA </div>
            </p> 
        </h1>

        <div className="West-information">
            <p>
            <div className="Ellen-date"> <div className="Ellen-date1">Date: </div>Saturday, January 18, 2020    </div>
            <div className="Ellen-location"> <div className="Ellen-location1">Location: </div>Fotografiska Museum, New York City   </div>
            <div className="Ellen-role"> <div className="Ellen-role1">Role: </div>Events Assistant at PURPLE  </div>
            </p>
        </div>

        <div className="Ellen-firsttier">
        <img src={require('./../assets/images/Ellen-firsttier.jpg')} />
        
       
       <div className="Ellen-firsttiertext">
        <div className="hostedanight">
        Ellen von Unwerth hosted a night to celebrate the exhibition, Devotion! 30 Years of Photographing Women, presented at Fotografiska New York. 
        </div>
        <div className="FriendsofEllen">
        Friends of Ellen von Unwerth gathered for this special moment to honor the renowned photographer and dance the night away to music. 
        </div>
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
            <Link to="/"> HOME</Link>
            </div>

            <div className="Ellen-NextEvent">
            <Link to="/westhollywood"> NEXT EVENT</Link>
            </div>
        </div>

        <div className="EllenBFA ">
            PHOTOS BY BFA
        </div>

        </div>
        </React.Fragment>
    );
  }
  
  export default EllenVonUnwerth;