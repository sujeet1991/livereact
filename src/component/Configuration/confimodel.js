import React,{Component} from 'react';
import HOCmodel from '../modelfileHoc';
//import {Link} from 'react-router-dom';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";



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
         return(
            <HOCmodel title="Add / Edit Configuration Parameter" closemodel={this.props.closemodel}>
                <div className="row">
							  <div className="col-sm-6">
								 <div className="form-group">
									<label>Company Name</label>
									<select name="company_name" className="form-control" disabled="disabled">
									   <option value="Company Name1" selected="selected">Amazone</option>
									</select>
								 </div>
							  </div>
							  <div className="col-sm-6">
								 <div className="form-group">
									<label>Department</label>
									<select name="Department" className="form-control" disabled="disabled">
									   <option value="account" selected="selected">Account</option>
									</select>
								 </div>
							  </div>
							  <div className="col-sm-6">
								 <div className="form-group">
									<label>Parameter</label>
									<select name="parameter" className="form-control" disabled="disabled">
									   <option value="parameter1" selected="selected">Parameter1</option>
									</select>
								 </div>
							  </div>
							  <div className="col-sm-6">
								 <div className="form-group">
									<label>Display Name</label>
									<input type="text" className="form-control" name="Name" required=""/>
								 </div>
							  </div>
							  <div className="col-sm-6">
								 <div className="form-group">
									<label>Value</label>
									<input type="text" className="form-control" name="Value" placeholder="" required=""/>
								 </div>
							  </div>
							  <div className="col-sm-6">
								 <div className="form-group">
									<label>Order</label>
									<input type="number" className="form-control" name="Order" placeholder="" required=""/>
								 </div>
							  </div>
							  <div className="col-xs-12">
								 <div className="form-group">
									<label>Description</label>
									<textarea className="form-control" row="3"></textarea>
								 </div>
							  </div>
							  <div className="col-sm-6">
								 <div className="form-group">
									<label>Status</label>
									<select name="parameter" className="form-control">
									   <option value="Select">Select</option>
									   <option value="parameter name2">Parameter Status 2</option>
									   <option value="parameter name3">Parameter Status 3</option>
									</select>
								 </div>
							  </div>
						   </div>
                              
                    
            </HOCmodel>  
            
        )
    }
   
   
}




export default confimodel;