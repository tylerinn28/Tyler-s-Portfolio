import React from 'react';
import './west-hollywood.css';
import './../assets/fonts/ArchivoBlack-Regular.ttf'

export const Westhollywood = () => {
    return (
        <React.Fragment>
        
        <div className="content">

        <div className="Eventsheading">
            Events
        </div>

        <h1 className="West-heading">
            <p>
            <div> WEST </div>
            <div> HOLLYWOOD </div>
            <div> EDITION </div>
            <div> OPENING </div>
            <div> WEEK </div>
            </p>
            
       <img src={require('./../assets/images/West-topimage.jpg')} />
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
                HOME
            </div>

            <div className="West-NextEvent">
                NEXT EVENT
            </div>
        </div>

        </div>


        </React.Fragment>
    );
  }
  
  export default Westhollywood;