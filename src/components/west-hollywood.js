import React from 'react';
import './west-hollywood.css';
import './../assets/fonts/ArchivoBlack-Regular.ttf';
import { Link } from "react-router-dom";

export const Westhollywood = () => {
    return (
        <React.Fragment>
        
        <div className="content">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        <div className="backarrow">
        <a href="/"> <i class="fa fa-long-arrow-left"></i></a>
        </div>

        <div className="Westnavbar">
        <a href="/" class="fa fa-home"></a>
    <a href="mailto:tylerinn28@gmail.com"> <i class="fa fa-envelope-o"></i></a>
    <a href="https://dribbble.com/tyylahh"> <i class="fa fa-dribbble"></i></a>
    <a href="https://linkedin.com/in/tyler-inn-405393b8" class="fa fa-linkedin-square"></a>
    </div>

        <div className="Eventsheading">
            Events
        </div>

        <div class="hr"><hr /></div>

        <h1 className="West-heading">
        <img className="West-topimage" src={require('./../assets/images/West-topimage.jpg')} />
            <p>
            <div> WEST </div>
            <div> HOLLYWOOD </div>
            <div> EDITION </div>
            <div> OPENING </div>
            <div> WEEK </div>
            </p>

        </h1>

        <div className="West-information">
            <p>
            <div> Date: Tuesday, November 12 - Sunday, November 17, 2019  </div>
            <div> Location: West Hollywood EDITION, Los Angeles  </div>
            <div> Role: Events Assistant at PURPLE  </div>
            </p>
            </div>

            <div className="West-firsttier"> 
            <h1>
            Ian Schrager, owner of EDITION hotels, opens his first West Coast EDITION property with a Grand Opening and VIP dinners.   
            </h1>

            <img src={require('./../assets/images/West-firsttier.jpg')} />
            </div>

        <div className="West-firsttiersubheading">
        The West Hollywood EDITION welcomed guests for a week of special VIP dinners, music and entertainment. Guests included Lenny Kravitz, Demi Moore, Paris Hilton, Diplo, Emily Ratajkowski, and more.
        </div>

        <div className="West-secondtier">
        <img className="West-secondtierimg" src={require('./../assets/images/West-secondtier.jpg')} />
        <img className="West-thirdtierimg" src={require('./../assets/images/West-thirdtier.jpg')} />
        </div>


        <div>
            <div className="West-secondheading">
            PURPLE handled the planning and on-site event management. 
            </div>

            <div className="West-secondsubheading"> 
            Prior to the opening week, my team managed the guest list, contacting vendors, and dinner arrangements. On site, we handled checking in guests, problem solving  and keeping a consistent event flow.  
            </div>
        </div>

        <div className="West-fourthimage">
        <img src={require('./../assets/images/West-fourthtier.jpg')} />
        </div>

        <div className="West-bottom">
            <div className="West-Home">
            <Link to="/"> HOME</Link>
            </div>

            <div className="West-NextEvent">
            <Link to="/noblepanacea"> NEXT EVENT</Link>
        </div>
    
        </div>

        </div>


        </React.Fragment>
    );
  }
  
  export default Westhollywood;