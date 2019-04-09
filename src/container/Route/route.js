import React, { Component } from 'react'
import Home from '../../component/Home/home';
import { Route,Switch } from 'react-router-dom'
import Editemployee from '../../component/editemployee/editemployee';
import Configuration from '../../component/Configuration/Configuration';
import LogHistory from '../../component/LogHistory/loghistory';
import Logtime from '../../component/Logtime/logtime';
import ProjectMng from '../../component/Projectmng/projectmng';

 class routeMain extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Editemployee" component={Editemployee}/>
            <Route path="/Configuration" component={Configuration}/>
            <Route path="/LogHistory" component={LogHistory}/>
            <Route path="/Logtime" component={Logtime}/>
            <Route path="/ProjectMng" component={ProjectMng}/>
        </Switch>
      </div>
    )
  }
}
export default routeMain;
