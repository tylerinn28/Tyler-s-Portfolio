import React from 'react';
import './../assets/fonts/ArchivoBlack-Regular.ttf';
import './ramen-shop.css';
import { Link } from "react-router-dom";

export const RamenShop = () => {
    return (
        <React.Fragment>

<meta name="viewport" content="width=device-width, initial-scale=1"></meta>

        <div className="content">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

    <div className="Otts-backarrow">
    <a href="/" class="fa fa-long-arrow-left"></a>
    </div>

    <div className="Ramennavbar">
    <a href="/" class="fa fa-home"></a>
    <a href="mailto:tylerinn28@gmail.com" class="fa fa-envelope-o"></a>
    <a href="https://dribbble.com/tyylahh" class="fa fa-dribbble"></a>
    <a href="https://linkedin.com/in/tyler-inn-405393b8" class="fa fa-linkedin-square"></a>
    </div>

    <div className="Ramen-Webdesignheading">
            Web Design
        </div>

<div class="hr"><hr /></div>

<h1 className="Ramen-heading">
        <img className="Ramen-Homepage" src={require('./../assets/images/Ramen-topimage.png')} />
            <p className="TheRamenShop">
            <div> THE </div>
            <div> RAMEN</div>
            <div> SHOP </div>
            <div className="Ramen-information">
            <div className="Ramen-Year2020"><div className="Ramen-Year"> Year: </div> 2020 </div>
            
           
            <div className="Ramenpersonalgoals"> <div className="Ramen-Personalgoals1"> Personal Goal: </div>
            <div className="Ramenpersonalgoals2">Create a website design that is simple and easy to use as well as highlights my illustration skills. </div> </div></div>
           </p>
        </h1>

        <div className="Ramenfirsttier">
        <h1 className="Ramenfirsttierheading">
        The Ramen Shop is a passion project with the goal to showcase my UI and illustration skills. 
    </h1>
    <h2 className="Ramenfirsttiersubheading">
    I wanted to showcase my interest in the Hospitality industry and create a fun, straight-forward website design for a restaurant. I decided to draw illustrations to integrate Japanese art into my design. 
    </h2></div>

    <div className="Ramen-designelementsheading">Design Elements</div>

    <div className="Ramen-Designelements">
    <div className="Ramen-fonts">
    <div className= "Eckmannpsych"> Heading - Eckmannpsych  </div>
    <div className= "Futura"> Subheading and Body - Futura </div>
    </div>
    <img className="Ramen-colors" src={require('./../assets/images/Ramen-Colors.png')}></img>
    </div>

    <div className="Ramen-Wireframes">
        Wireframes
    </div>
    <div className="Ramen-Wireframeexp">
    To start this project, I researched Japanese illustrations, ramen and learned more about web designs specific to restaurants.  I decided to make the color palette resemble aspects of Japan’s flag - red and seaweed or Nori which is commonly found as a topping in ramen - green. 
    </div>
    <img className="Ramen-Wireframesimg" src={require('./../assets/images/Ramen-Wireframes.png')}></img>

    <div className="Ramen-Hifi">
        Hi-Fi Prototypes
    </div>

    <div className="Ramen-Landingpage">
        LANDING PAGE 
    </div>

    <div className="Ramen-Landingpageexp">
    I decided to create a landing page that looks like the outside of The Ramen Shop (fictional) to replicate the experience of how a customer would approach the restaurant in real life. This interactive landing page would be a fun way  for users to “enter” The Ramen Shop’s website.  
    </div>

    <div class="Ramen-vr1">&nbsp;</div>

    <img className="Ramen-landingpageimg" src={require('./../assets/images/Ramen-enter.png')}></img>

    <div className="Ramen-Homepage1">
       HOMEPAGE
    </div>

    <div className="Ramen-Homepageexp">
    To continue the idea of replicating the actual experience of going to The Ramen Shop, I added an illustration of the dining experience. I did not want to complicate the homepage and kept it simple by adding only the most important information customers need. 
    </div>

    <div class="Ramen-vr2">&nbsp;</div>

    <img className="Ramen-homepageimg" src={require('./../assets/images/Ramen-HomepageHiFi.png')}></img>

    <div className="Ramen-Menu">
       MENU
    </div>

    <div className="Ramen-Menueexp">
    To make the menu page’s user experience interactive,  users would be able to click through different ramen options and read about how they are made. Users can also click on a link to take them to the full menu.  To add consistency throughout my designs, I added the “noodle” design element from the homepage.  
    </div>

    <div class="Ramen-vr3">&nbsp;</div>

    <img className="Ramen-menuimg" src={require('./../assets/images/Ramen-MenuHiFi.png')}></img>

    <div className="Ramen-About">
       ABOUT
    </div>

    <div className="Ramen-Aboutexp">
    I made the About page simple with information that encapsulates The Ramen Shop’s ambience. I added an illustration of a Maneki-neko,  a common Japanese figurine which is often believed to bring good luck. 
    </div>

    <div class="Ramen-vr4">&nbsp;</div>

    <img className="Ramen-aboutimg" src={require('./../assets/images/Ramen-AboutHiFi.png')}></img>

    <div className="Skye"> *Help with the illustration for the homepage design by Skye Inn</div>

    <div className="Ramen-bottom">
            <div className="Ramen-Home">
            <Link to="/"> HOME</Link>
            </div>

            <div className="Ramen-NextProject">
            <Link to="/otts"> NEXT PROJECT </Link>
            </div>
        </div>


   


    
    </div>
    </React.Fragment>

    );
  }
  
  export default RamenShop;
