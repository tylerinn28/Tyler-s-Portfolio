import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import { EllenVonUnwerth } from './components/ellen-von-unwerth';
import { HomePage } from './components/homepage';
import { NoblePanacea } from './components/noble-panacea';
import { Otts } from './components/otts';
import { RamenShop } from './components/ramen-shop';
import { SoundCloudRedesign } from './components/sound-cloud-redesign';
import Westhollywood, { WestHollywood } from './components/west-hollywood';

function App() {
  return (
    <Router>
      <ScrollToTop />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/noblepanacea' component={NoblePanacea}/>
          <Route path='/otts' component={Otts}/>
          <Route path='/ramenshop' component={RamenShop}/>
          <Route path='/soundcloudredesign' component={SoundCloudRedesign}/>
          <Route path='/westhollywood' component={Westhollywood}/>
          <Route path='/ellenvonunwerth' component={EllenVonUnwerth}/>
        </Switch>
      </Router>
  );
}

export default App;
