import React,{Component} from 'react';
import HOCmodel from '../modelfileHoc';
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



class confimodel extends Component{
    constructor(props){
        super(props);
        this.state = {
            startDate: new Date(),
            tabactive:'tab1'

          };
    }
    handleChange=(e)=>{
        //console.log(e.target.value);
        this.setState({
          startDate: e
        });
      }
     tabactivehandler=(data)=>{
        this.setState({
            tabactive:data
        })
     } 
    
    render(){
        const divstyle = (
            <style jsx>{`
              .col-sm-4{min-height:68px}
            `}
            </style>
          );
        
        return(
            <HOCmodel title="Add Project" closemodel={this.props.closemodel}>
            {divstyle}
                    <ul className="nav nav-pills">
						<li className={this.state.tabactive==='tab1'?'active':null}><Link to="#" onClick={(e)=>this.tabactivehandler('tab1',e)}>Import from CRM</Link></li>
						<li className={this.state.tabactive==='tab2'?'active':null}><Link to="#" onClick={(e)=>this.tabactivehandler('tab2',e)}>Manually Enter Project Details </Link></li>
					 </ul>
                     <div className="tab-content">
                     {this.state.tabactive==='tab1'?
                     <div className="row" style={{marginTop:'15px'}}>
                        
								 <div className="col-sm-4">
									<label>Project Name</label>
									<select name="project_name" className="form-control">
									   <option value="project_name1">Project Name 1</option>
									   <option value="project_name2">Project Name 2</option>
									</select>
								 </div>
								 <div className="col-sm-4">
									<label>Enquiry Date</label>
									<div className="input-group date">
									   <div className="input-group-addon">
										  <i className="fa fa-calendar"></i>
									   </div>
									   <DatePicker  onChange={(e)=>this.handleChange(e)} selected={this.state.startDate} type="text" name="date1" className="form-control pull-right" id=""/>
									</div>
									
								 </div>
                                 </div>:
                                 <div className="impcrm">
                                    <div className="row">
                                        <div className="col-sm-4">
                                        <label>Project Name</label>
                                        <input type="text" className="form-control" name="project_name"/>
                                        </div>
                                        <div className="col-sm-4">
                                        <label>Enquiry Date</label>
                                        <div className="input-group date">
                                            <div className="input-group-addon">
                                            <i className="fa fa-calendar"></i>
                                            </div>
                                           
                                            <DatePicker  onChange={(e)=>this.handleChange(e)} selected={this.state.startDate} type="text" className="form-control pull-right" name="date2" id=""/>
                                        </div>
                                        </div>
                                        <div className="col-sm-4">
                                        <label>Referred By</label>
                                        <input type="text" className="form-control" name="referred"/>
                                        </div>
                                        <div className="col-sm-4">
                                        <label>Contact Name</label>
                                        <input type="text" className="form-control" name="contact_name"/>
                                        </div>
                                        <div className="col-sm-4">
                                        <label>Contact Email</label>
                                        <input type="text" className="form-control" name="contact_email"/>
                                        </div>
                                        <div className="col-sm-4">
                                        <label>Contact phone Number</label>
                                        <input type="number" className="form-control" name="contact_phone"/>
                                        </div>
                                    </div>
                                    <div className="row mgtb">
                                        <div className="col-sm-12">
                                        <h4>Site Location Details</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                        <label>Address Line 1</label>
                                        <input type="text" className="form-control" name="add1"/>
                                        </div>
                                        <div className="col-sm-4">
                                        <label>Address Line 2</label>
                                        <input type="text" className="form-control" name="add2"/>
                                        </div>
                                        <div className="col-sm-4">
                                        <label>City</label>
                                        <input type="text" className="form-control" name="city"/>
                                        </div>
                                        <div className="col-sm-4">
                                        <label>State</label>
                                        <select name="state" className="form-control">
                                            <option value="state1">State 1</option>
                                            <option value="state2">State 2</option>
                                        </select>
                                        </div>
                                        <div className="col-sm-4">
                                        <label>Zip Code</label>
                                        <input type="number" className="form-control" name="zip_code"/>
                                        </div>
                                        <div className="col-sm-4">
                                        <label>Area (in Sq. Feet)</label>
                                        <input type="number" className="form-control" name="area"/>
                                        </div>
                                    </div>
                                    </div>
                                 }
							  </div>
                              
                    
            </HOCmodel>  
            
        )
    }
   
   
}




export default confimodel;