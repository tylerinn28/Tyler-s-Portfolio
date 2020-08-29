import React from 'react';
import './../assets/fonts/ArchivoBlack-Regular.ttf';
import './otts.css';
import { Link } from "react-router-dom";

export const Otts = () => {
    return (
        <React.Fragment>

<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        
        <div className="content">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

    <div className="Otts-backarrow">
    <a href="/" class="fa fa-long-arrow-left"></a>
    </div>


<div className="Ottsnavbar">
    <a href="/" class="fa fa-home"></a>
    <a href="mailto:tylerinn28@gmail.com" class="fa fa-envelope-o"></a>
    <a href="https://dribbble.com/tyylahh" class="fa fa-dribbble"></a>
    <a href="https://linkedin.com/in/tyler-inn-405393b8" class="fa fa-linkedin-square"></a>
    </div>
</div>

<div className="Webdesignheading">
            Web Design
        </div>

<div class="hr"><hr /></div>

    <h1 className="Otts-heading">
        <img className="Otts-Homepage" src={require('./../assets/images/Otts-Homepage.jpg')} />
            <p className="ottsplants">
            <div> OTT'S </div>
            <div> EXOTIC </div>
            <div> PLANTS </div>
            <div className="Otts-information">
            <div className="OttsYear2020">
            <div className="OttsYear"> Year:</div> 2020  </div>
            <div classNAme="Ottspersonalgoalwhole">
            <div className="OttsPersonalGoal"> Personal Goal: </div> Create an ecommerce website design from scratch based on an already existing company.</div>
            </div>
            </p>
        </h1>

    <h1 className="Ottsfirsttierheading">
    Ott’s is a greenhouse, specializing in exotic plants located outside of Philadelphia. 
    </h1>
    <h2 className="Ottsfirsttiersubheading">
    Since Ott’s did not have a website, I decided to take on the project of designing one. In this project, I learned the importance of clearly defining the brands services and goods as well as how to create a user-friendly e-commerce website. 
    </h2>

    <div className="Otts-Designelementsheading">
        Design Elements
    </div>

    <div className="Otts-Designelements">
    <div className="Otts-fonts">
    <div className= "AdobeJenson"> Heading - Adobe Jenson Pro  </div>
    <div className= "Din2014"> Subheading - DIN 2014 </div>
    <div className="Soleil"> Body paragraph - Soleil </div>
    </div>
    <img className="otts-colors" src={require('./../assets/images/Otts-colors.png')}></img>
    </div>

    <div className="Otts-wireframes">
        Wireframes
    </div>

    <div className="Otts-wireframeexp">
    To start the project, I did research on Ott’s by visiting their location as well as looking at their online presence.  I was able to gather information on their consumer market and overall brand. After this, I researched key pain points in ecommerce websites and applied it to my wireframe designs. 
    </div>

    <img className="Otts-wireframeimg" src={require('./../assets/images/Otts-Wireframes.png')}></img>

    <div className="Otts-Hifi">
        Hi-Fi Prototypes
    </div>

    <div className="Otts-homepage">
        HOMEPAGE
    </div>


    <div className="Otts-homepage1">
    <div className="Otts-homepageexp">
    Since the homepage is the first thing users sees, it is highly important to feature the most essential elements with clear and direct guidance. This is why I chose to keep the navigation bar simple with three categories  - Shop, Plant Care and About Us. In addition,  users have an explicit definition of the brand as well as a direct action to “Shop Now”. 
    </div>
    <div class="Otts-vr1">&nbsp;</div>
    </div>
   
    <img className="Otts-homepageimg" src={require('./../assets/images/Otts-Homepage.png')}></img>

    <div className="Otts-ShopNewArrivals">
        SHOP NEW ARRIVALS
    </div>

    <div className="Otts-ShopNewArrivalsexp">
    Since users get overwhelmed with an abundance of options, I decided to have a maximum of nine products per page as well as filters to help consumers find exactly what they want.
    </div>

    <div class="Otts-vr2">&nbsp;</div>

    <img className="Otts-ShopNewArrivalsimg" src={require('./../assets/images/Otts-ShopNewArrivals.png')}></img>

    <div className="Otts-ProductPage">
        PRODUCT PAGE
    </div>

    <div className="Otts-ProductPageexp">
    Since the user cannot physically ask an employee about the plant, I decided to add as much information about the plant in a simple manner - creating a “Plant Care” section as well as basic information under the product name. I also decided to input an “Add a Planter” drop down menu to increase efficiently in user flow. 
    </div>

    <div class="Otts-vr3">&nbsp;</div>

    <img className="Otts-ProductPageimg" src={require('./../assets/images/Otts-ProductPage.png')}></img>

    <div className="Otts-Cart">
        CART
    </div>

    <div className="Otts-Cartexp">
    One of the most popular problems that users have with e-commerce websites is a long and confusing checkout process. Based SaleCycle, the global average rate of cart abandonment is 75.6%. To combat this, I added a clear call-to-action button as well as additional product incentives at the bottom. 
    </div>

    <div class="Otts-vr4">&nbsp;</div>

    <img className="Otts-Cartimg" src={require('./../assets/images/Otts-Cart.png')}></img>

    <div className="Otts-Checkout">
        CHECKOUT
    </div>

    <div className="Otts-Checkoutexp">
    To streamline the checkout process, I created two options for checkout - as a guest or as a returning customer. The guest checkout is a quicker method for one-time purchases, however, for reoccurring customers, the ability to sign in will save  time with inputting their information. 
    </div>

 <div class="Otts-vr5">&nbsp;</div>

 <img className="Otts-Checkoutimg" src={require('./../assets/images/Otts-Checkout.png')}></img>

<div className="Otts-Not">
* Ott’s currently is not pursuing an online e-commerce presence 
</div>

<div className="Otts-bottom">
            <div className="Otts-Home">
            <Link to="/"> HOME</Link>
            </div>

            <div className="Otts-NextEvent">
            <Link to="/soundcloudredesign"> NEXT PROJECT </Link>
            </div>
        </div>

        </React.Fragment>
    );
  }
  
  export default Otts;