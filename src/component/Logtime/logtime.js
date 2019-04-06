import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LogDisplay from './logdisplay';

class logtime extends Component {
	state={
		apidata:[]
	}

	componentWillMount(){
		var today = new Date();
		var dd= today.getDate();
		var mm= today.getMonth();
		var yy= today.getFullYear();
		if(dd<10){
			dd="0"+dd;
		}
		if(mm<10){
			mm="0"+mm;
		}
		var dateapi=yy+"-"+mm+"-"+dd;
		(async () => {
			const rawResponse = await fetch('http://7b77680e.ngrok.io/livepages/index.php/api/getLogEntries', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ "employeeId": 1, "date":dateapi })
			});
			const content = await rawResponse.json();
			console.log(content.logEntry);
			this.setState({
				apidata:content.logEntry
			})
			
		})();

	}


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
                        <h4 className="table-heading">Log Time</h4>
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
																		<select name="project_state" className="form-control">
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
																<label htmlFor="comment">Comments</label>
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
													<LogDisplay apidata={this.state.apidata}/>

                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
    )
  }
}
export default logtime
