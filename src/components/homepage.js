import React from 'react';
import { Link } from "react-router-dom";
import './homepage.css';
import './../assets/fonts/ArchivoBlack-Regular.ttf';
import './Hover.js';

export const HomePage = () => {
    return (
        <React.Fragment>

<meta name='viewport' 
     content='width=device-width, initial-scale=1.0, maximum-scale=1.0, 
     user-scalable=0' ></meta>


<div className="content">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<div className="navbar">
    <a href="mailto:tylerinn28@gmail.com" class="fa fa-envelope-o"></a>
    <a href="https://dribbble.com/tyylahh" target="_blank" class="fa fa-dribbble"></a>
    <a href="https://linkedin.com/in/tyler-inn-405393b8" target="_blank" class="fa fa-linkedin-square"></a>
    </div>

  <h1 className="heading">
           <div className="my-name-tyler">I’M TYLER. </div> 
           <div> I CREATE  </div> 
           <div class="linear-wipe">  MEMORABLE EXPERIENCES </div> 
           <div> FOR BRANDS & THEIR AUDIENCE. </div> 
  </h1>

  <div className="work">
    <a className="work1" href="#DesignProjects"> WORK </a>
    <div class="vr1"></div>
    <div className="Projects">
    <h2 id="DesignProjects" className="Design-projects">
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
        <div className="eventsgeneral">
        <h2 className="Events">
           EVENTS
  </h2>
        <div className="design-projects-link-level-4">
            <Link to="/westhollywood">01. West Hollywood EDITION</Link>
        </div>
        <div className="design-projects-link-level-5">
            <Link to="/noblepanacea">02. Noble Panacea Global Brand Launch</Link>
        </div>
        <div className="design-projects-link-level-6">
            <Link to="/ellenvonunwerth">03. Ellen von Unwerth at Fotografiska</Link>
        </div></div></div>
</div>

  
        


        <div className="about">
        <div className="about1">
        <a href="#moreaboutme">ABOUT </a> </div>
        <div class="vr2"></div>
        
        <div className="Moreaboutme1">
        <h2 id="moreaboutme" className="More-about-me">MORE ABOUT ME </h2>

  <div className="Bio"> 
        <div>
            <p>
            My interest in creating experiences came from growing up in Los Angeles, a city filled with culture and a plethora of intriguing things to do. After majoring in Hospitality Management with a concentration in event planning at Boston University, I knew I wanted be in the business of creating experiences for people.  
            <br/><br/>
            At my first post-grad position as an event planner at PURPLE, I have gained invaluable skills such as evaluating needs and problem solving. However, I felt pulled towards exploring more visual mediums so I decided to explore UX/UI design. I am now a freelance designer as well as an event planner.
            <br/><br/>
            In my free time, I like creating playlists for my friends, exploring new places, and taking care of my plants. 
            <br/><br/>
            <div className="letstalk">
            <a href="mailto:tylerinn28@gmail.com">LET'S TALK - tylerinn28@gmail.com</a></div>
            </p>
        </div>
        
        <div className="homepage-image"> <img src={require('./../assets/images/Homepage.JPG')} /></div>
         </div>
    </div></div>
        

        

        <div className="developedby">
        DESIGNED AND DEVELOPED BY TYLER INN
        </div>

</div>


        </React.Fragment>
    );
  }


  export default HomePage;

  
  
 