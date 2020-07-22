import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { EllenVonUnweth } from './components/ellen-von-unwerth';
import { HomePage } from './components/homepage';
import { NoblePanacea } from './components/noble-panacea';
import { Otts } from './components/otts';
import { RamenShop } from './components/ramen-shop';
import { SoundCloudRedesign } from './components/sound-cloud-redesign';
import { WestHollywood } from './components/west-hollywood';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/noblepanacea' component={NoblePanacea}/>
          <Route path='/otts' component={Otts}/>
          <Route path='/ramenshop' component={RamenShop}/>
          <Route path='/soundcloudredesign' component={SoundCloudRedesign}/>
          <Route path='/westhollywood' component={WestHollywood}/>
          <Route path='/ellenvonwerth' component={EllenVonUnweth}/>
        </Switch>
      </Router>
  );
}

export default App;
