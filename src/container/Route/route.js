import React, { Component } from 'react'
import Home from '../../component/Home/home';
import { Route,Switch } from 'react-router-dom'
import Editemployee from '../../component/editemployee/editemployee';
import Configuration from '../../component/Configuration/Configuration';
import LogHistory from '../../component/LogHistory/loghistory';

 class routeMain extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Editemployee" component={Editemployee}/>
            <Route path="/Configuration" component={Configuration}/>
            <Route path="/LogHistory" component={LogHistory}/>
        </Switch>
      </div>
    )
  }
}
export default routeMain;
