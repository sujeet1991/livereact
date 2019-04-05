import React, { Component } from 'react'
import Home from '../../component/Home/home';
import { Route,Switch } from 'react-router-dom'
import Editemployee from '../../component/editemployee/editemployee';
import Configuration from '../../component/Configuration/Configuration';

 class routeMain extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Editemployee" component={Editemployee}/>
            <Route path="/Configuration" component={Configuration}/>
        </Switch>
      </div>
    )
  }
}
export default routeMain;
