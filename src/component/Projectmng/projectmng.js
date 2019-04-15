import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Tableview from './table';
import Addproject from './addprojectmodel';




 class projectmng extends Component {
   constructor(props){
     super(props);
     this.state={
        formsearchval:'null',
        projects:[],
        show:false,
     }

   }
   formsearch=(e)=>{
    this.setState({
      formsearchval:e.target.value
    })
   }

   getdetail=(e)=>{
    let statedata=this.state.formsearchval;
    (async () => {
      const rawResponse = await fetch('http://taskmanagement.lpipl.com/index.php/api/searchProject', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"projectName":statedata,"pageSize":'20',"pageNumber":"1"} )
      });
      const content = await rawResponse.json();
      this.setState({
        projects:content.projects
      })
    })();

   }

   handleshow=()=>{
    this.setState({
        show:true,
        addclass:'in'
    })
}
handlehide=()=>{
    this.setState({
        show:false,
        addclass:''
    })
}

  
  render() {
   
    return (
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
                  <div className="col-md-6">
                  <div className="pr-addbtn">
                    <button type="button" className="btn btn-default fix-button" data-toggle="modal" data-target=".bs-example-modal-lg" onClick={(e)=>this.handleshow(e)}>Add Project</button>
                  </div>
                  </div>
                  <div className="col-md-6">
                    <div className="navbar-form navbar-left" role="search">
                    <div className="form-group">
                      <input type="text" className="form-control" onChange={this.formsearch} name="searchform" placeholder="Search..." style={{"border":'1px solid ##337ab7'}}/>
                    </div>
                      <button type="button" className="btn btn-default" onClick={(e)=>this.getdetail(e)}>Get Detail</button>
                    </div>
                  </div>
                  <div style={{clear:'both'}}></div>
                    {this.state.projects.length!==0? <Tableview viewpart={this.veiwrender} data={this.state.projects}/>:<div>Please search ...</div>}
                 
                  
                 
                </div>
                {/* end col-xs12 */}
            </div>
            {this.state.show? <Addproject closemodel={this.handlehide}/>:null}
        </section>
      </React.Fragment>
    )
  }
}

export default projectmng;