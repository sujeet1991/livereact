import React from 'react';

const logdisplay = React.memo(function MyComponent(props){
    return(
        <div className="logtime-bottom">
			   <div className="box-body disnon">
				  <h5>Your today's time entries</h5>
				  <div id="example1_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer">
                   <div className="row">
                    <div className="col-sm-12">
                        <table id="example1" className="table table-bordered table-striped table-responsive dataTable no-footer" role="grid">
					 <thead>
					    <tr role="row"><th className="sorting_disabled" rowspan="1" colspan="1">Project Name</th><th className="sorting_disabled" rowspan="1" colspan="1">Role</th><th className="sorting_disabled" rowspan="1" colspan="1">Hours Spent</th><th className="sorting_disabled" rowspan="1" colspan="1">Comments</th></tr>
					 </thead>
					 <tbody>
						
						
						
						
					 <tr role="row" className="odd">
						   <td>VP New Interior Design</td>
						   <td>Senior Designer</td>
						   <td>10</td>
						   <td>Designed something new for interiors</td>
						</tr><tr role="row" className="even">
						   <td>VP New Interior Design</td>
						   <td>Senior Designer</td>
						   <td>10</td>
						   <td>Designed something new for interiors</td>
						</tr><tr role="row" className="odd">
						   <td>VP New Interior Design</td>
						   <td>Senior Designer</td>
						   <td>10</td>
						   <td>Designed something new for interiors</td>
						</tr><tr role="row" className="even">
						   <td>VP New Interior Design</td>
						   <td>Senior Designer</td>
						   <td>10</td>
						   <td>Designed something new for interiors</td>
						</tr></tbody>
				  </table></div></div><div className="row"><div className="col-sm-5"></div><div className="col-sm-7"></div></div></div>
				  <button type="button" className="btn btn-default fix-button">Submit</button> 
			   </div>
			</div>
    )
});
export default logdisplay;