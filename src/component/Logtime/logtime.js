import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LogDisplay from './logdisplay';

class logtime extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="content-header">
            <ol className="breadcrumb">
             <li><Link to="/">Home</Link></li>
             
             <li className="active">Log Time </li>
            </ol>
        </section>
        <section className="content">
            <div className="row">
                <div className="col-xs-12">
                    <div className="box">
                        <h4 class="table-heading">Log Time</h4>
													<div className="logtime-top">
															<form>
															<div className="row">
																	<div className="col-sm-3">
																		<div className="form-group">
																				<label>Project Name </label> 
																				<select name="project_state" className="form-control">
																						<option value="new">New</option>
																						<option value="new2">New2</option>
																				</select>
																		</div>
																	</div>
																<div className="col-sm-3">
																	<div className="form-group">
																		<label>Role</label> 
																		<select name="project_state" class="form-control">
																		<option value="role">Role</option>
																		<option value="role2">Role2</option>
																		</select>
																	</div>
																</div>
																<div className="col-sm-3">
																	<div className="form-group">
																	<label>Estimated Hours</label> 
																	<input type="text" className="form-control" name="estimated_hrs"/>
																	</div>
																</div>
																<div className="col-sm-3">
																	<div className="form-group">
																	<label>Hour Spent</label>
																	<input type="text" className="form-control" name="estimated_hrs"/> 
																	</div>
																</div>
															</div>
															<div className="row">
																<div className="col-sm-12">
																<label for="comment">Comments</label>
																<textarea className="form-control" rows="5" name="comments"></textarea>
																</div>
															</div>
															<div className="mgtop"></div>
																<div className="log-addbtn">
																<button type="button" className="btn btn-default fix-button">Add</button>
															</div>
															</form>
													</div>

													{/* top */}
													<LogDisplay/>

                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
    )
  }
}
export default logtime
