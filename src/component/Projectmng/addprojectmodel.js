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
            tabactive:'tab1',
            formname:{"projectId":"","projectName":"","enquiryDate":"1900-01-01 00:00:00","referredBy":"","contactName":"","contactEmail":"","contactPhone":"","addressLine1":"","addressLine2":"","city":"","state":"","zipCode":"","area":"","projectSource": "Manual","crmId": "","projectStatus":"","projectState":"","projectDiscipline":"","projectType":"","projectSubType":"","projectCategory":"","enquiryValue":"","enquiryDesignFee":"","appointmentDate": "","lostDate": "","projectStartDate":"","projectHoldDate": "","completionTarget":"", "targetDate": "","actualCompletionDate":"","jobStatus": "","awardedProjectValue":"","awardedDesignValue": "","createdBy":"","dateCreated": "","modifiedBy":""}
        };
       //this.changehandle=this.changehandle.bind(this);
        this.savedata=this.savedata.bind(this);
    }
    changehandle(e,name){
        let formname= this.state.formname;
        if(name==='enquiryDate'){
            formname[name]=e.target.value+" "+"00:00:00";   
        }else{
            formname[name]=e.target.value;
        }
       
       // formname[e.target.name]=e.target.value;
        this.setState({formname:formname})

    }
    savedata(){
        //console.log(this.state.formname)
        // let projectName=this.refs.projectName.value;
        // let enquiryDate= this.refs.enquiryDate.value;
        // let referredBy=this.refs.referredBy.value;
        // let contactName= this.refs.contactName.value;
        // let contactEmail=this.refs.contactEmail.value;
        // let contactPhone=this.refs.contactPhone.value;
        // let addressLine1= this.refs.addressLine1.value;
        // let addressLine2= this.refs.addressLine2.value;
        // let city= this.refs.city.value;
        // let state= this.refs.state.value;
        // let zipCode= this.refs.zipCode.value;
        // let area= this.refs.area.value;
        // if(projectName===''||enquiryDate===""||referredBy==="" || contactName===""||contactEmail===""||contactPhone===""|| addressLine1===""||addressLine2===""||city===""|| state===""||zipCode===""||area===""){
        //     alert('please fill all Feild ');
        //     return false;
        // }
        let formuser= this.state.formname;
        (async () => {
            const rawResponse = await fetch('http://taskmanagement.lpipl.com/index.php/api/saveProjectDetails', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({formuser})
            });
            const content = await rawResponse.json();
            console.log(content);
            // this.setState({
            //   apidata:content.logEntry
            // })
            
          })();
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
    console.log(this.state.formname);
        return(
        <HOCmodel title="Add Project" closemodel={this.props.closemodel}>
        <ul className="nav nav-pills">
            <li className={this.state.tabactive==='tab1'?'active':null}>
                <Link to="#" onClick={(e)=>
                this.tabactivehandler('tab1',e)}>Import from CRM</Link>
            </li>
            <li className={this.state.tabactive==='tab2'?'active':null}>
                <Link to="#" onClick={(e)=>
                this.tabactivehandler('tab2',e)}>Manually Enter Project Details </Link>
            </li>
        </ul>
        <div className="tab-content">
            {this.state.tabactive==='tab1'?
            <div className="row" style={{marginTop:'15px'}}>
                <div className="col-sm-4">
                    <label>Project Name</label>
                    <select name="project_name" className="form-control"  onChange={this.changehandle}>
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
                    <DatePicker  onChange={(e)=>
                    this.handleChange(e)} selected={this.state.startDate} type="text" name="date1" className="form-control pull-right" id=""/>
                    </div>
                </div>
            </div>
            :
            <div className="impcrm">
                <div className="row">
                    <div className="col-sm-4">
                    <label>Project Name</label>
                    <input type="text"  className="form-control" ref="projectName" name="projectName" onChange={(e)=>this.changehandle(e,'projectName')}/>
                    </div>
                    <div className="col-sm-4">
                    <label>Enquiry Date</label>
                    <div className="input-group date">
                        <div className="input-group-addon">
                            <i className="fa fa-calendar"></i>
                        </div>
                        <input  onChange={(e)=>this.changehandle(e,'enquiryDate')} type="date"  className="form-control pull-right" name="enquiryDate" ref="enquiryDate" id=""/>
                    </div>
                    </div>
                    <div className="col-sm-4">
                    <label>Referred By</label>
                    <input type="text" className="form-control" name="referredBy" ref="referredBy" onChange={(e)=>this.changehandle(e,'referredBy')}/>
                    </div>
                    <div className="col-sm-4">
                    <label>Contact Name</label>
                    <input type="text" className="form-control" name="contactName" ref="contactName" onChange={(e)=>this.changehandle(e,'contactName')}/>
                    </div>
                    <div className="col-sm-4">
                    <label>Contact Email</label>
                    <input type="text" className="form-control" name="contactEmail" ref="contactEmail" onChange={(e)=>this.changehandle(e,'contactEmail')}/>
                    </div>
                    <div className="col-sm-4">
                    <label>Contact phone Number</label>
                    <input type="number" className="form-control" ref="contactPhone" name="contactPhone" onChange={(e)=>this.changehandle(e,'contactPhone')}/>
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
                    <input type="text" className="form-control" name="addressLine1" ref="addressLine1" onChange={(e)=>this.changehandle(e,'addressLine1')}/>
                    </div>
                    <div className="col-sm-4">
                    <label>Address Line 2</label>
                    <input type="text" className="form-control" name="addressLine2" ref="addressLine2" onChange={(e)=>this.changehandle(e,'addressLine2')}/>
                    </div>
                    <div className="col-sm-4">
                    <label>City</label>
                    <input type="text" className="form-control" name="city" ref="city" onChange={(e)=>this.changehandle(e,'city')}/>
                    </div>
                    <div className="col-sm-4">
                    <label>State</label>
                    <select name="state" ref="state" className="form-control" onChange={(e)=>this.changehandle(e,'state')}>
                        <option value="state1">State 1</option>
                        <option value="state2">State 2</option>
                    </select>
                    </div>
                    <div className="col-sm-4">
                    <label>Zip Code</label>
                    <input type="number" className="form-control" name="zipCode" ref="zipCode" onChange={(e)=>this.changehandle(e,'zipCode')}/>
                    </div>
                    <div className="col-sm-4">
                    <label>Area (in Sq. Feet)</label>
                    <input type="number" className="form-control" onChange={(e)=>this.changehandle(e,'area')} name="area" ref="area"/>
                    </div>
                    <div className="col-md-12">
                        <button className="btnsave btn btn-primary" onClick={this.savedata}>ADD Project</button>
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