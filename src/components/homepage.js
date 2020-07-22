import React from 'react';
import { Link } from "react-router-dom";
import './homepage.css';

export const HomePage = () => {
    return (
        <React.Fragment>
        <div>
            I’M TYLER. 
            I CREATE 
            MEMORABLE EXPERIENCES 
            FOR BRANDS & THEIR AUDIENCE.  
        </div>
        <div className="design-projects-link-level-1">
            <Link to="/soundcloudredesign">01. Redesigning Soundcloud</Link>
        </div>
        <div className="design-projects-link-level-2">
            <Link to="/ramenshop">02. The Ramen Shop</Link>
        </div>
        <div className="design-projects-link-level-3">
            <Link to="/otts">03. Ott's Exotic Plants</Link>
        </div>
        <div className="design-projects-link-level-3">
            <Link to="/westhollywoodedition">01. West Hollywood EDITION</Link>
        </div>
        <div className="design-projects-link-level-4">
            <Link to="/noblepanacea">02. Noble Panacea Global Brand Launch</Link>
        </div>
        <div className="design-projects-link-level-5">
            <Link to="ellenvonwerth">03. Ellen von Unwerth at Fotografiska</Link>
        </div>
        <div>
            {/* <img src={ require('./../assets/images/___') } /> */}
        </div>
        </React.Fragment>
    );
  }
  
  export default HomePage;