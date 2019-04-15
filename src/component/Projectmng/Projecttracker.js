import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Projecttracker extends Component {
    constructor(props){
        super(props);
        this.state={
            jobStatus:[]
        }
    }
    componentWillMount(){
        this.jobStatus();
    }
    jobStatus() {
        let statethis=this;
        fetch('http://taskmanagement.lpipl.com/index.php/api/getParamDetails', {
           method: 'POST',
           headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
           },
            body: JSON.stringify({  "tenantId" : "1","paramName" : "job Status" } )
       }).then(data=>data.json()).then(function(res){
           statethis.setState({
            jobStatus:res.params
           })
       })
    }

    componentWillReceiveProps(newProps){
        console.log("hi");
        console.log(newProps);
    }

  render() {
      console.log(this.props)
      let appointmentDatenew,lostDatenew,projectStartDatenew,projectHoldDatenew,targetDatenew,actualCompletionDatenew=null;
     
      if(this.props.projecttrack.length!==0){
        let {appointmentDate,lostDate,projectStartDate,projectHoldDate,targetDate,actualCompletionDate}= this.props.projecttrack;
        
        appointmentDatenew=appointmentDate.split(" ")[0];
        lostDatenew=lostDate.split(" ")[0];
        projectStartDatenew=projectStartDate.split(" ")[0];
        projectHoldDatenew=projectHoldDate.split(" ")[0];
        targetDatenew=targetDate.split(" ")[0];
        actualCompletionDatenew=actualCompletionDate.split(" ")[0];
      }
     

    return (
<div className="form-box-mgmt">
  <form>
    <div className="row">
      <div className="col-sm-4">
        <div className="form-group">
          <label>Appointment Date</label>
          <div className="input-group date">
            <div className="input-group-addon">
              <i className="fa fa-calendar"></i>
            </div>
            <DatePicker type="text" name="appointmentDate" ref="appointmentDate"  value={appointmentDatenew||''} className="form-control pull-right" id=""/>
          </div>
          
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Lost Date</label>
          <div className="input-group date">
            <div className="input-group-addon">
              <i className="fa fa-calendar"></i>
            </div>
            <DatePicker type="text" value={lostDatenew||''} name="lostDate" ref="lostDate" className="form-control pull-right" id=""/>
          </div>
         
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Project start</label>
          <div className="input-group date">
            <div className="input-group-addon">
              <i className="fa fa-calendar"></i>
            </div>
            <DatePicker type="text" name="projectStartDate" ref="projectStartDate" value={projectStartDatenew||''} className="form-control pull-right" id=""/>
          </div>
         
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Hold Date</label>
          <div className="input-group date">
            <div className="input-group-addon">
              <i className="fa fa-calendar"></i>
            </div>
            <DatePicker type="text" name="projectHoldDate" ref="projectHoldDate" value={projectHoldDatenew||''}  className="form-control pull-right" id="datepicker_hold"/>
          </div>
         
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Completion Target (in Days)</label> 
          <input type="text" name="completionTarget" ref="completionTarget" value={this.props.projecttrack.completionTarget||''} className="form-control"/>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Target Date</label>
          <div className="input-group date">
            <div className="input-group-addon">
              <i className="fa fa-calendar"></i>
            </div>
            <DatePicker type="text" name="targetDate" ref="targetDate"  value={targetDatenew||''} className="form-control pull-right" id=""/>
          </div>
         
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Actual Date</label>
          <div className="input-group date">
            <div className="input-group-addon">
              <i className="fa fa-calendar"></i>
            </div>
            <DatePicker type="text" name="actualCompletionDate" ref="actualCompletionDat" value={actualCompletionDatenew||''} className="form-control pull-right" id=""/>
          </div>
          
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Job Status</label> 
          <select name="jobStatus" ref="jobStatus" className="form-control">
          {this.state.jobStatus==='Invalid tenant, please contact system admin'?
                            <option>No Data found</option>:
                            this.state.jobStatus.map((curr,index)=>{
                                let highlight=null;
                                if(curr.id===this.props.projecttrack.jobStatus){
                                    highlight='selected'
                                }
                               
                                return(
                                    <option key={index} value={curr.id} selected={highlight}>{curr.paramValue}</option>
                                )
                            })
                         }
            
          </select>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Awarded Project Value</label> 
          <input type="text" name="awardedProjectValue" ref="awardedProjectValue"  value={this.props.projecttrack.awardedProjectValue||''} className="form-control"/>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Design Value </label> 
          <input type="text" name="awardedDesignValue" ref="awardedDesignValue" value={this.props.projecttrack.awardedDesignValue||''} className="form-control"/>
        </div>
      </div>
    </div>
    <div className="row mgtop">
      <div className="col-sm-12">
        <div className="form-group">
          <button type="button" onClick={(e)=>this.props.tabchange(e,'Site Details')} className="btn btn-default fix-button" style={{marginRight:'8px'}}>Continue</button>
          <button type="button" className="btn btn-default fix-button clr-new">Close</button>
        </div>
      </div>
    </div>
  </form>
</div>
    )
  }
}
