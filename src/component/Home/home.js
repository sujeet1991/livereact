import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class home extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="content-header">
				<ol className="breadcrumb">
					<li><Link to="/">Home</Link></li>
					<li className="active">Employee Management</li>
				</ol>
		</section>
        <section className="content">
            <div className="addnew-parameter">
                
                <div className="upt">
                  <input type="file" name="file-1[]" id="file-1" className="inputfile inputfile-1 " data-multiple-caption="{count} files selected" multiple /> 
                  <label htmlFor="file-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> <span>Import Employees</span></label>
               
             
            </div>
                 <Link to="" className="btn btn-default fix-button"><i className="fa fa-download" aria-hidden="true"></i> &nbsp;&nbsp;Download CSV</Link>
            
                                 
              </div>
        
        <div className="row">
					<div className="col-xs-12">
						<div className="box">
							
							<div className="box-body">
								<h4 className="table-heading">Employee Management</h4>
								<table id="example1 1" className="table table-bordered table-striped table-responsive">
									<thead>
										<tr>
											<th>Employee Code</th>
											<th>Employee Name</th>
											<th>Role</th>
											<th>Company</th>
											<th>Department</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>VP 101</td>
											<td>John Nike</td>
											<td>System Admin</td>
											<td>Vector Project</td>
											<td>PMO</td>
											<td><Link to="/Editemployee"><img src={require('../../assets/images/edit-bg.png')} alt="edit"/></Link></td>
										</tr>
										
									</tbody>
									 
								</table>
								 
							</div>
							
						</div>
						
					</div>
				
				</div>
        </section>  
      </React.Fragment>
    )
  }
}

export default home;