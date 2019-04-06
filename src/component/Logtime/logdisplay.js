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
                     {props.apidata.length!==0? 
                        props.apidata.map((curr,index)=>{
                                return(
                                  <tr role="row" className="odd" key={index}>
                                   <td className="sorting_1">{curr.ProjectName}</td>
                                  <td>{curr.RoleName}</td>
                                  <td>{curr.TimeSpent}</td>
                                  <td>{curr.Comments}</td>
                                </tr> 
                                )
                              }): "No Data"}
					 </thead>
					 <tbody>
					</tbody>
				  </table></div></div><div className="row"><div className="col-sm-5"></div><div className="col-sm-7"></div></div></div>
				  <button type="button" className="btn btn-default fix-button">Submit</button> 
			   </div>
			</div>
    )
});
export default logdisplay;