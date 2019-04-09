import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Tableview from './table';
import Tabview from './tabview';



 class projectmng extends Component {
   constructor(props){
     super(props);
     this.state={
        viewpart:true
     }

   }
   veiwrender=()=>{
     this.setState({
      viewpart:false
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
                  <div className="pr-addbtn">
                    <button type="button" className="btn btn-default fix-button" data-toggle="modal" data-target=".bs-example-modal-lg">Add Project</button>
                  </div>
                  {this.state.viewpart===true?<Tableview viewpart={this.veiwrender}/>: <Tabview/>}
                  
                 
                </div>
                {/* end col-xs12 */}
            </div>
        </section>
      </React.Fragment>
    )
  }
}

export default projectmng;