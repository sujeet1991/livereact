import React from 'react';
import './topheader.css';
import {Link} from 'react-router-dom';

export default function topheader(props) {
  return (
    <header className="main-header">
   
    <Link to="/" className="logo">
       
        <span className="logo-lg"><img src={require('../../assets/images/logo.png')} alt="logo"/></span>
    </Link>
 
    <nav className="navbar navbar-static-top">
        <Link to="/" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        </Link>
        <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
               
                {/* <li className="dropdown notifications-menu">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-bell-o"></i>
                    <span className="label label-warning">10</span>
                    </Link>
                    <ul className="dropdown-menu">
                        <li className="header">You have 10 notifications</li>
                        <li>
                            
                            <ul className="menu">
                                <li>
                                    <Link to="#">
                                    <i className="fa fa-users text-aqua"></i> 5 new members joined today
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    <i className="fa fa-warning text-yellow"></i> Very long description here that may not fit into the
                                    page and may cause design problems
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    <i className="fa fa-users text-red"></i> 5 new members joined
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    <i className="fa fa-shopping-cart text-green"></i> 25 sales made
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    <i className="fa fa-user text-red"></i> You changed your username
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="footer"><Link to="#">View all</Link></li>
                    </ul>
                </li> */}
               
                <li className="dropdown user user-menu">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                    <span className="hidden-xs">Alexander Pierce</span>
                    </Link>
                    <ul className="dropdown-menu">
                       
                        <li className="user-footer">
                            <div className="pull-left">
                                <Link to="/" className="btn btn-default btn-flat">Sign out</Link>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</header> 
  )
}
