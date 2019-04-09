import React from 'react';
import {Link} from 'react-router-dom';

const leftpanel=React.memo(function MyComponent(props){
    return (
        <aside className="main-sidebar">
			
			<section className="sidebar">
				
				<ul className="sidebar-menu" data-widget="tree">
					<li className="active" >
						<Link to="/">
						<img src={require('../../assets/images/empmangment-icon.png')} className="ic-mgt" alt="empmangment"/><span>Employee Management</span>
						</Link>
					</li>
					<li>
						<Link to="/Configuration">
						<img src={require('../../assets/images/config-mgm-icon.png')} alt="Configuration" className="ic-mgt" /><span>Configuration Management</span>
						</Link>
					</li>
					<li>
						<Link to="/ProjectMng">
						<img src={require('../../assets/images/promgmt-ic.png')} className="ic-mgt" alt="imagespromgmt"/><span>Project Management </span>
						</Link>
					</li>
					<li>
						<Link to="/Logtime">
						<img src={require('../../assets/images/log-time-bg.png')} className="ic-mgt" alt="log time"/><span>Log Time</span>
						</Link>
					</li>
					<li>
						<Link to="/LogHistory">
						 <img src={require('../../assets/images/log-time-history-bg.png')} className="ic-mgt" alt="log time" /><span>View Log Time History</span>
						</Link>
					</li>
				</ul>
			</section>
		
		</aside>
    )
});

export default leftpanel;