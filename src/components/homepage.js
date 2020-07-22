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
        <Link to="/otts">Go to Otts</Link>
        <div>
            {/* <img src={ require('./../assets/images/___') } /> */}
        </div>
        </React.Fragment>
    );
  }
  
  export default HomePage;