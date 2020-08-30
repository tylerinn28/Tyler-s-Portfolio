import React from 'react';
import './../assets/fonts/ArchivoBlack-Regular.ttf';
import './sound-cloud-redesign.css';
import { Link } from "react-router-dom";

export const SoundCloudRedesign = () => {
    return (
        <React.Fragment>

<meta name="viewport" content="width=device-width, initial-scale=1"></meta>

<div className="content">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<div className="backarrow">
<a href="/"> <i class="fa fa-long-arrow-left"></i></a>
</div>

<div className="Soundcloudnavbar">
<a href="/" class="fa fa-home"></a>
<a href="mailto:tylerinn28@gmail.com"> <i class="fa fa-envelope-o"></i></a>
<a href="https://dribbble.com/tyylahh"> <i class="fa fa-dribbble"></i></a>
<a href="https://linkedin.com/in/tyler-inn-405393b8" class="fa fa-linkedin-square"></a>
</div>

<div className="MobileAppheading">
    Mobile App Redesign
        </div>

<div class="hr"><hr /></div>

<h1 className="Soundcloud-heading">
        <img className="Soundcloud-Homepage" src={require('./../assets/images/Soundcloud.png')} />
            <p className="Soundcloudredesign">
            <div> SOUND </div>
            <div> CLOUD</div>
            <div> REDESIGN </div>
            <div className="Soundcloud-information">
            <div className="Year2020">
            <div className="Year"> Year: </div> 2020 <br></br>
            </div>
            <div className="Projectgoals">
            Project Goals: </div>
            <div className="createmore">
-Create a more engaging, clean and intuitive interface for both the website and mobile application. <br></br>
-Highlight a sense of community and social aspect of the platform.<br></br>
-Create more personalization within the platform. <br></br> 
</div>
<div className="Personalgoals"> Personal Goals: <br></br></div> 
<div className="Tolearn"> To learn user research and push myself to be able to redesign a popular mobile application.</div>
            </div>
            </p>
        </h1>

        <div className="Soundcloudfirsttier">
        <h1 className="Soundcloudfirsttierheading">
        Soundcloud is a music sharing platform that enables its users to upload, promote, and share audio.
    </h1>
    <h2 className="Soundcloudfirsttiersubheading">
    Although Soundcloud has been around since 2007, many regular users have shown frustration with the platform’s user experience design, ultimately resulting in favoring other music platforms such as Spotify or Apple Music. Being an active Soundcloud user for over 7 years, I wanted to redesign the platform because I believe that it has a lot to offer.
    </h2></div>

    <div className="Process">
        Process
    </div>

    <div className="Processexp">
    <div className="Research">
    <div className="Research1"> Research <br></br> </div>
-User Interviews <br></br>
-Value Proposition <br></br>
-Research Insights 
    </div>

    <div className="Design">
    <div className="Design1"> Design <br></br> </div>
    -Create Concept for Pain Points<br></br>
    -Wireframes <br></br>
    -Hi-Fi Prototype <br></br>
    -Iterations
    </div>

    <div className="Testing">
    <div className="Testing1"> Testing <br></br> </div>
    -Usability Testing (Wireframes)<br></br>
    -Usability Testing (Hi-Fi Interactive Prototype) <br></br>
    </div>
    </div>

    <div className="Keyinsight01">
    Key Insight: 85% of respondents said that they only use Soundcloud a few times a month or less
    </div>

    <div className="Piechart-quote">
    <img className="Soundcloud-Piechart" src={require('./../assets/images/Soundcloud-piechart.png')} />
    <div className="quotes">
    “the platform is fine but it seems too scattered” <br></br><br></br>
    “I wish it was easier <br></br> to navigate”  
    </div>
    </div>

    <div className="keypainpoints">
    Key Pain Points
    </div>

    <div className="Keypainpointsexp">
    <div className="Confusinginterface">
    <div className="Confusinginterface1"> Confusing Interface <br></br> </div>
    When asked what respondents did not like about Soundcloud, the majority said that they  just wanted an easier interface.
    </div>

    <div className="Community">
    <div className="Community1"> Lack of a social aspect  <br></br> </div>
    The survey showed that respondents liked using their preferred music platform to share music with their friends. 
    </div>

    <div className="Personalization">
    <div className="Personalization1"> Lack of personalization <br></br> </div>
    30% of respondents wanted more personalization in playlists, songs and radio recommendations. They felt like the recommendations were not tailored to them. 
    </div>
    </div>

    <div className="Soundcloud-Wireframe">
        Wireframes
    </div>
    <div className="Soundcloud-Wireframeexp">
    Based on the points above, I produced lo-fi wireframes to communicate how the application could look and function better for an easier experience. 
    </div>

    <div className="SoundcloudWireframe1">
    <img className="Soundcloud-HomepageOrg" src={require('./../assets/images/Soundcloud-HomepageOrg.PNG')} />
    <img className="SoundcloudHomepage-Wireframe" src={require('./../assets/images/Soundcloud-Homepagewireframe.png')} />
    <div className="Soundcloud-Homepageexp">
    <div className="HomepageStream">Homepage/Stream </div>
To create a more community and sharing aspect to the application, the homepage would now act as a way to see what your friends and favorite artists are posting and sharing, whether it be a new playlist, reposting a song, or releasing a new album. 
    </div>
    </div>

    <div className="SoundcloudWireframe2">
    <img className="Soundcloud-SearchOrg" src={require('./../assets/images/Soundcloud-Searchorg.png')} />
    <img className="Soundcloudsearch-Wireframe" src={require('./../assets/images/Soundcloudsearch-wireframe.png')} />
    <div className="Soundcloud-Searchexp">
    <div className="Search">Search </div>
    I decided to streamline the interface design by combining the search and discover page. A few survey-takers revealed that there were too many unorganized channels and tabs. In my design, users would be able to search for artists and songs while also getting personalized music suggestions.  
    </div>
    </div>

    <div className="SoundcloudWireframe3">
    <img className="Soundcloud-ProfileOrg" src={require('./../assets/images/Soundcloud-ProfileOrg.jpeg')} />
    <img className="Soundcloudprofile-Wireframe" src={require('./../assets/images/Soundcloudprofile-wireframe.png')} />
    <div className="Soundcloud-Profileexp">
    <div className="Profile">Profile </div>
    With the new profile design, users would get to showcase their playlists  as well as their top three songs they like at the moment. This aspect allows for more customization to the user’s profile page. 
    <br></br><br></br>
The artist  page will look similar however will have more information about them as well as suggested similar artists. 
    </div>
    </div>

    <div className="SoundcloudWireframe4">
    <img className="Soundcloud-NowplayingOrg" src={require('./../assets/images/Soundcloud-NowplayingOrg.png')} />
    <img className="Soundcloudnowplaying-Wireframe" src={require('./../assets/images/Soundcloudnowplaying-wireframe.png')} />
    <div className="Soundcloud-Nowplayingexp">
    <div className="Nowplaying">Now Playing </div>
    I wanted to keep some aspects of the previous design, however, make the interface cleaner and more organized. 
    </div>
    </div>

    <div className="Soundcloud-Hifi">
        Hi-Fi Prototypes
    </div>

    <div className="SoundcloudHififirsttier">
    <img className="Soundcloud-HIFI1" src={require('./../assets/images/Soundcloud-HomepageHiFi.png')} />
    <img className="Soundcloud-HIFI2" src={require('./../assets/images/Soundcloud-SearchHIFI.png')} />
    <img className="Soundcloud-HIFI3" src={require('./../assets/images/Soundcloud-ProfileHIFI.png')} />
    </div>

    <div className="SoundcloudHifisecondtier">
    <img className="Soundcloud-HIFI4" src={require('./../assets/images/Soundcloud-NowPlayingHiFi.png')} />
    <img className="Soundcloud-HIFI5" src={require('./../assets/images/Soundcloud-ArtistHiFi.png')} />
    <img className="Soundcloud-HIFI6" src={require('./../assets/images/Soundcloud-Library.png')} />
    </div>

    <div className="Creatingamore">
    Creating a more social app for sharing music
    </div>

    <div className="Moresocialapp">
    <img className="Soundcloud-ProfileHIFI" src={require('./../assets/images/Soundcloud-ProfileHIFI.png')} />

    <div className="ProfileHiFi">
    <div className="ProfileHiFiheading">
    Profile 
    </div>
    <div className="ProfileHiFiexp">
    With the new profile design, users would get to showcase their playlists and uploaded songs as well as their chosen top three songs they enjoy at the moment.  When a user posts/reposts a playlist or song,  their followers get an option to repost, like, comment and send to other users. I also decided to include a messaging aspect to Soundcloud to encourage more music sharing and socializing. 
    </div></div></div>

    <div className="Morepersonalizedselections">
    More personalized selections
    </div>

    <div className="Morepersonalization">
    <img className="Soundcloud-SearchHIFI" src={require('./../assets/images/Soundcloud-SearchHIFI.png')} />

    <div className="SearchHiFi">
    <div className="SearchHiFiheading">
   Search and Discover 
    </div>
    <div className="SearchHiFiexp">
    With the search page now having suggested playlists, songs, and artists to listen to, Soundcloud shows their users more personalization and suggestions catered to their listening habits.  
    </div></div></div>

    <div className="Additionalfeature">
   Additional Feature
    </div>

    <div className="AddionalfeatureForLater">
    <img className="Soundcloud-ForLaterHIFI" src={require('./../assets/images/Soundcloud-ForLaterHIFI.png')} />
    <div className="ForLaterHiFi">
    <div className="ForLaterHiFiheading">
   For Later Playlist
    </div>
    <div className="ForLaterHiFiexp">
    In addition to redesigning Soundcloud to be more user-friendly, social, and personalized, I decided to add another feature to the application - a “For Later” playlist. When using the platform with friends, I began to notice the difficulty of sharing songs. When a friend would send me a song, I usually am not able to listen to it right away so after continuing to text, the song would get lost and I would end up never listening to it. For this reason, I decided to add “For Later” which would automatically save the song to the playlist with the name of the person who sent it and a “text back” feature (the arrow icon).   
    </div></div></div>

    <div className="Soundcloud-Prototyping">
   Prototyping
    </div>

    <div className="Soundcloud-Usertesting">
   User-testing
    </div>

    <div className="usertestingexp">
    I tested the prototype on 5 users who originally took the survey and asked them questions on the new design.  100% of them felt as though the interface was easier to understand and more appealing.  100% of the users also felt as though the new design highlighted personalization through the profile and suggested artists on the search/discover page. To note: most of the users highlighted that they liked the additional messaging feature. 
    </div>

    <div className="Soundcloud-bottom">
            <div className="Soundcloud-Home">
            <Link to="/"> HOME</Link>
            </div>

            <div className="Soundcloud-NextEvent">
            <Link to="/ramenshop"> NEXT PROJECT </Link>
            </div>
        </div>


</div>

        </React.Fragment>
    );
  }
  
  export default SoundCloudRedesign;