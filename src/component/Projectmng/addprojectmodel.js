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
            formname:{"projectId":"","projectName":"","enquiryDate":"1900-01-01 00:00:00","referredBy":"","contactName":"","contactEmail":"","contactPhone":"","addressLine1":"","addressLine2":"","city":"","state":"","zipCode":"","area":"","projectSource": "Manual","crmId": "","projectStatus":0,"projectState":"","projectDiscipline":0,"projectType":0,"projectSubType":0,"projectCategory":0,"enquiryValue":0,"enquiryDesignFee":0,"appointmentDate": "","lostDate": "","projectStartDate":"","projectHoldDate": "","completionTarget":0, "targetDate": "","actualCompletionDate":"","jobStatus": 0,"awardedProjectValue":0,"createdBy":"","dateCreated": "","modifiedBy":""},
            errors:{}
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
    formvalidation(){
        let formuser= this.state.formname;
        let formIsValid=true;
        let errors={}
        if(formuser.projectName===""){
            formIsValid=false;
            errors['projectName']="Project Name Cannot be Empty";
        }
        if(typeof formuser.projectName!=='undefined'){
            if(!formuser.projectName.match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["projectName"] = "Only letters";
             }   
        }
        if(formuser.enquiryDate===" 00:00:00"){
            formIsValid=false;
            errors['enquiryDate']="Date Cannot be Empty";
        }
        if(formuser.referredBy===""){
            formIsValid=false;
            errors['referredBy']="referredBy Cannot be Empty";
        }
        if(formuser.contactName===""){
            formIsValid=false;
            errors['contactName']="referredBy Cannot be Empty";
        }
        if(typeof formuser.contactName!=='undefined'){
            if(!formuser.contactName.match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["contactName"] = "Only letters";
             }   
        }
        // email
        if(!formuser.contactEmail){
            formIsValid = false;
            errors["contactEmail"] = "Cannot be empty";
         }
 
         if(typeof formuser.contactEmail !== "undefined"){
            let lastAtPos = formuser.contactEmail.lastIndexOf('@');
            let lastDotPos = formuser.contactEmail.lastIndexOf('.');
 
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && formuser.contactEmail.indexOf('@@') === -1 && lastDotPos > 2 && (formuser.contactEmail.length - lastDotPos) > 2)) {
               formIsValid = false;
               errors["contactEmail"] = "Email is not valid";
             }
        }  
        
        if(formuser.contactPhone===""){
            formIsValid=false;
            errors["contactPhone"]="contact is mandatory";
        }
        if(!formuser.contactPhone.match('[0-9]{10}')){
            formIsValid=false;
            errors["contactPhone"]="Enter minimum 10 Digit Number";
        }
        if(formuser.addressLine1===""){
            formIsValid=false;
            errors["addressLine1"]="AddressLine1 mandatory";
        }
        if(formuser.addressLine2===""){
            formIsValid=false;
            errors["addressLine2"]="AddressLine1 mandatory";
        }
        if(formuser.city===""){
            formIsValid=false;
            errors["city"]="City is mandatory";
        }
        if(formuser.state===""){
            formIsValid=false;
            errors["state"]="state is mandatory";
        }
        if(formuser.zipCode===""){
            formIsValid=false;
            errors["zipCode"]="zipCode is mandatory";
        }
        if(formuser.area===""){
            formIsValid=false;
            errors["area"]="area is mandatory";
        }

        this.setState({errors: errors});
        return formIsValid;
    }
    savedata(){
        let formuser= this.state.formname;
        var checkvalidData=this.formvalidation();
        
        if(checkvalidData){
            fetch('http://taskmanagement.lpipl.com/index.php/api/saveProjectDetails', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formuser)
          }).then(res=>res.json()).then(function(data){
              console.log(data.projectId);
            let datajson={"projectId":data.projectId,"site":{"id":"","siteName":"abcd","addressLine1":formuser.addressLine1,"addressLine2":formuser.addressLine2,"city":formuser.city,"state":formuser.state,"country":formuser.country,"zipCode":formuser.zipCode,"country":'india'}};
                console.log(datajson);
                fetch('http://taskmanagement.lpipl.com/index.php/api/saveSiteDetails',{
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(datajson)
                }).then(res=>res.json()).then(function(res){
                    alert(res.message);
                    window.location.reload();
                })
          })
        }

        
        
               
        
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
    var errorstyle = {
        color: 'red',
        position:'absolute',
        fontSize:'12px',
    };
    
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
                    <span style={errorstyle}>{this.state.errors["projectName"]}</span>
                    </div>
                    <div className="col-sm-4">
                    <label>Enquiry Date</label>
                    <div className="input-group date">
                        <div className="input-group-addon">
                            <i className="fa fa-calendar"></i>
                        </div>
                        <input  onChange={(e)=>this.changehandle(e,'enquiryDate')} type="date"  className="form-control pull-right" name="enquiryDate" ref="enquiryDate" id=""/>
                        <span style={errorstyle}>{this.state.errors["enquiryDate"]}</span>
                    </div>
                    </div>
                    <div className="col-sm-4">
                    <label>Referred By</label>
                    <input type="text" className="form-control" name="referredBy" ref="referredBy" onChange={(e)=>this.changehandle(e,'referredBy')}/>
                    <span style={errorstyle}>{this.state.errors["referredBy"]}</span>
                    </div>
                    <div className="col-sm-4">
                    <label>Contact Name</label>
                    <input type="text" className="form-control" name="contactName" ref="contactName" onChange={(e)=>this.changehandle(e,'contactName')}/>
                    <span style={errorstyle}>{this.state.errors["contactName"]}</span>
                    </div>
                    <div className="col-sm-4">
                    <label>Contact Email</label>
                    <input type="text" className="form-control" name="contactEmail" ref="contactEmail" onChange={(e)=>this.changehandle(e,'contactEmail')}/>
                    <span style={errorstyle}>{this.state.errors["contactEmail"]}</span>
                    </div>
                    <div className="col-sm-4">
                    <label>Contact phone Number</label>
                    <input type="number" minLength="10" maxLength="10" className="form-control" ref="contactPhone" name="contactPhone" onChange={(e)=>this.changehandle(e,'contactPhone')}/>
                    <span style={errorstyle}>{this.state.errors["contactPhone"]}</span>
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
                    <span style={errorstyle}>{this.state.errors["addressLine1"]}</span>
                    </div>
                    <div className="col-sm-4">
                    <label>Address Line 2</label>
                    <input type="text" className="form-control" name="addressLine2" ref="addressLine2" onChange={(e)=>this.changehandle(e,'addressLine2')}/>
                    <span style={errorstyle}>{this.state.errors["addressLine2"]}</span>
                    </div>
                    <div className="col-sm-4">
                    <label>City</label>
                    <input type="text" className="form-control" name="city" ref="city" onChange={(e)=>this.changehandle(e,'city')}/>
                    <span style={errorstyle}>{this.state.errors["city"]}</span>
                    </div>
                    <div className="col-sm-4">
                    <label>State</label>
                    <select name="state" ref="state" className="form-control" onChange={(e)=>this.changehandle(e,'state')}>
                        <option value="state1">State 1</option>
                        <option value="state2">State 2</option>
                    </select>
                    <span style={errorstyle}>{this.state.errors["state"]}</span>
                    </div>
                    <div className="col-sm-4">
                    <label>Zip Code</label>
                    <input type="number" className="form-control" name="zipCode" ref="zipCode" onChange={(e)=>this.changehandle(e,'zipCode')}/>
                    <span style={errorstyle}>{this.state.errors["zipCode"]}</span>
                    </div>
                    <div className="col-sm-4">
                    <label>Area (in Sq. Feet)</label>
                    <input type="number" className="form-control" onChange={(e)=>this.changehandle(e,'area')} name="area" ref="area"/>
                    <span style={errorstyle}>{this.state.errors["area"]}</span>
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