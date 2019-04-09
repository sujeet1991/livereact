import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Projectdetail,Projecttracker,Sitedetail,Teamstructure,Ctc} from './projectdetail';

class tableview extends Component{
    constructor(props){
        super(props);
        this.state={
            tabview:['Project Details','Project Tracker','Site Details','Team Structure','CTC'],
            tabactiveclass:'active',
            activetab:'Project Details',

        }
        
    }
    viewclick=(e,view)=>{
      this.setState({
        activetab:view
      })
    }

    render(){
        return(
            <div className="nav-tabs-custom">
                <ul className="nav nav-tabs">
                {this.state.tabview.map((curr,index)=>
				  <li className={this.state.activetab===curr?this.state.tabactiveclass:null} key={index}><Link to="#" onClick={(e)=>this.viewclick(e,curr)}>{curr}</Link></li>
                  )}
				 
			   </ul>
               <div className="tab-content">
               {this.state.activetab==='Project Details'?  <Projectdetail/>:null}
               {this.state.activetab==='Project Tracker'?    <Projecttracker/>:null}
               {this.state.activetab==='Site Details'?  <Sitedetail/>:null}
               {this.state.activetab==='Team Structure'?   <Teamstructure/>:null}
               {this.state.activetab==='CTC'?   <Ctc/>:null}
                 
                 
                   
                  
                  
               </div>
            </div>
        )
    }
   
}

export default tableview;
