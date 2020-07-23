import React from 'react';
import { Link } from "react-router-dom";
import './homepage.css';
import './../assets/fonts/ArchivoBlack-Regular.ttf'
import './../assets/fonts/futur.ttf'
import './../assets/fonts/futura medium bt.ttf'


export const HomePage = () => {
    return (
        <React.Fragment>

<div className="content">
  <h1 className="heading">
           <div>I’M TYLER. </div> 
           <div> I CREATE  </div> 
           <div>  MEMORABLE EXPERIENCES </div> 
           <div> FOR BRANDS & THEIR AUDIENCE. </div> 
  </h1>
  <h2 className="Design-projects">
            DESIGN PROJECTS 
  </h2>
  <div className="design-projects-link-level-1">
            <Link to="/soundcloudredesign">01. Redesigning Soundcloud</Link>
        </div>
        <div className="design-projects-link-level-2">
            <Link to="/ramenshop">02. The Ramen Shop</Link>
        </div>
        <div className="design-projects-link-level-3">
            <Link to="/otts">03. Ott's Exotic Plants</Link>
        </div>
        <h2 className="Events">
           EVENTS
  </h2>
        <div className="design-projects-link-level-4">
            <Link to="/westhollywoodedition">01. West Hollywood EDITION</Link>
        </div>
        <div className="design-projects-link-level-5">
            <Link to="/noblepanacea">02. Noble Panacea Global Brand Launch</Link>
        </div>
        <div className="design-projects-link-level-6">
            <Link to="ellenvonwerth">03. Ellen von Unwerth at Fotografiska</Link>
        </div>
        <h2 className="More-about-me">
        MORE ABOUT ME
  </h2>
  <p className="Bio"> 
  <div className="My-interest">
        My interest in creating experiences came from growing up in Los Angeles, a city filled with culture and aplethora of fun things to do. After majoring in Hospitality Management with a concentration in event planning at Boston University, I knew I wanted be in the business of creating experiences for people.  
        </div>

        <div className="After-receiving"> After receiving my first job as an event planner at PURPLE, I gained invaluable skills such as understanding needs and problem solving. However, I felt a lack of visual creativity that I craved so I starting exploring UX/UI design and became a freelance designer. 
        </div>

        <div className="In-my-free"> In my free time, I like creating playlists for my friends, sketching tattoo ideas, and taking care of my plants. 
        </div>
        <div classname="homepage-image">
       <img src={require('./../assets/images/Homepage.JPG')} />
        </div></p>
</div>

        </React.Fragment>
    );
  }
  
  export default HomePage;