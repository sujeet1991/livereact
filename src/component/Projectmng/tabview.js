import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Projectdetail,Projecttracker,Sitedetail,Ctc} from './projectdetail';
import Teamstructure from './teamstature';

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
            <React.Fragment>
            <section className="content-header">
                <ol className="breadcrumb">
                <li><Link to="/">Home</Link></li>
                <li className="active">Project Management</li>
                </ol>
            </section>
            <section className="content">
                <div className="row">
                    <div className="col-xs-12">
                      <div className="pr-addbtn">
                        <button type="button" className="btn btn-default fix-button" data-toggle="modal" data-target=".bs-example-modal-lg">Add Project</button>
                      </div>
                     
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
            </div>
                    {/* end col-xs12 */}
                </div>
            </section>
          </React.Fragment>   
        )
    }
   
}

export default tableview;
