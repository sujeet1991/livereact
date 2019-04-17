import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Projectdetail from './projectdetail';
import Projecttracker from './Projecttracker';
import Sitedetail from './Sitedetail';
import Ctc from './Ctc';
import Teamstructure from './teamstature';

class tableview extends Component{
    constructor(props){
        super(props);
        this.state={
            tabview:['Project Details','Project Tracker','Site Details','Team Structure','CTC'],
            tabactiveclass:'active',
            activetab:'Project Details',
            fields:{},
            startDate:new Date(),
            apidata:[],
            
        }
       //this.handleChange=this.handleChange.bind(this); 
    }
    viewclick=(e,view)=>{
      this.setState({
        activetab:view
      })
    }
    handleChange=(field,e)=>{
        
        // let fields = this.state.fields;
        //  fields[field]=e.target.value;
        // console.log(fields)
    }

    componentDidMount(){
      let getid= this.props.match.params.id;
      if(getid){
          let datathis= this;
         fetch('http://taskmanagement.lpipl.com/index.php/api/getProjectDetails', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({"projectId": getid} )
            }).then(res=>res.json()).then(function(data){
                datathis.setState({
                    apidata:data
                });
                localStorage.setItem('getproject',JSON.stringify(data));

            });
        }
}


    render(){
        //console.log(this.state.apidata)
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

               {this.state.activetab==='Project Details'?  <Projectdetail handlechange={this.handleChange} startDate={this.state.startDate} projectdetail={this.state.apidata} tabchange={this.viewclick}/>:null}

               {this.state.activetab==='Project Tracker'? <Projecttracker projecttrack={this.state.apidata} tabchange={this.viewclick}/>:null}

               {this.state.activetab==='Site Details'?  <Sitedetail site={this.state.apidata.site}/>:null}
               {this.state.activetab==='Team Structure'? <Teamstructure team={this.state.apidata.team}/>:null}
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
