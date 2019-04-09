import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Tableview from './table';




 class projectmng extends Component {
   constructor(props){
     super(props);
     this.state={
        
     }

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
                  <Tableview viewpart={this.veiwrender}/>}
                  
                 
                </div>
                {/* end col-xs12 */}
            </div>
        </section>
      </React.Fragment>
    )
  }
}

export default projectmng;