import React, { Component } from 'react';
import Main from './Route/route';
import './App.css';


import Topheader from './Topheader/topheader';
import Leftsidebar from './leftpanel/leftpanel';
import './App.css';
import '../assets/css/AdminLTE.min.css';
import '../assets/css/_all-skins.min.css';

class App extends Component {
  render() {
    return (
      <div className="">
        <Topheader/>
        <Leftsidebar/>
          <div className="content-wrapper employee-management">
            <Main/>
          </div>
        
      </div>
    );
  }
}

export default App;
