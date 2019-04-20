import React, { Component } from 'react';
import { setTimeout } from 'timers';
// import input from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

export default class Projecttracker extends Component {
    constructor(props){
        super(props);
        this.state={
            jobStatus:[],
            projecttrack:{},
            projectdetail:{},
            message:null,
            msgerror:null

        }
    }
    componentWillMount(){
      //console.log('mount');
        this.jobStatus();
        var projectdetaildata =localStorage.getItem("projectDetail");
        console.log(projectdetaildata);
        var gettrackerdetailold=localStorage.getItem("getproject")
        //console.log(gettrackerdetailold)
        let gettrackerdetail=JSON.parse(gettrackerdetailold);

        let gettrackprojectjson={
          "appointmentDate":gettrackerdetail.appointmentDate,
          "lostDate":gettrackerdetail.lostDate,
          "projectStartDate":gettrackerdetail.projectStartDate,
          "projectHoldDate":gettrackerdetail.projectHoldDate,
          "targetDate":gettrackerdetail.targetDate,
          "actualCompletionDate":gettrackerdetail.actualCompletionDate,
          "jobStatus":gettrackerdetail.jobStatus,
          "completionTarget":gettrackerdetail.completionTarget,
          "awardedProjectValue":gettrackerdetail.awardedProjectValue,
          "awardedDesignValue":gettrackerdetail.awardedDesignValue
        


        } 
       
        this.setState({projectdetail:projectdetaildata,projecttrack:gettrackprojectjson}) 
      
      
       
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

    tarckonChange=(fname,e)=>{
      console.log(fname);
      console.log(e.target.value);
      let projecttrack=this.state.projecttrack;
      if(fname==='appointmentDate' ||fname==='lostDate'||fname==='projectStartDate'||fname==='projectHoldDate'||fname==='targetDate'||fname==='actualCompletionDate'){
        projecttrack[fname]=e.target.value+" "+"00:00:00";
     }else{
        projecttrack[fname]=e.target.value;
     }
      this.setState({
        projecttrack
      })

    }
    savedata=()=>{
      let projectdetail =this.state.projectdetail;
      let projecttrack=this.state.projecttrack;
      let Data1 = JSON.parse(projectdetail);
      
      var geturl =window.location.href.split('/');
      let getnumber=geturl.length-1;
      let Data = {projectId:geturl[getnumber],createdBy:"",modifiedBy:"",tenantId:1,...Data1, ...projecttrack};
      //console.log(projecttrack.appointmentDate);
      if(projecttrack.appointmentDate===" 00:00:00"){
        
        this.setState({
          msgerror:'Appointment Date mandatory'
        })
      }else if(projecttrack.lostDate===" 00:00:00"){
        this.setState({
          msgerror:'Lost Date mandatory'
        })
      }else if(projecttrack.projectStartDate===" 00:00:00"){
        this.setState({
          msgerror:'Project Start Date mandatory'
        })
      }else if(projecttrack.projectHoldDate===" 00:00:00"){
        this.setState({
          msgerror:'Project Hold Date mandatory'
        })
      }else if(projecttrack.targetDate===" 00:00:00"){
        this.setState({
          msgerror:'Target Date mandatory'
        })
      }else if(projecttrack.actualCompletionDate===" 00:00:00"){
        this.setState({
          msgerror:'Actual CompletionDate mandatory'
        })
      }else if(projecttrack.jobStatus===""){
        this.setState({
          msgerror:'Job Status mandatory'
        })
      }else if(projecttrack.completionTarget===""){
        this.setState({
          msgerror:'completion Target mandatory'
        })
      }else if(projecttrack.awardedProjectValue===""){
        this.setState({
          msgerror:'Awarded Project Value mandatory'
        })
      }else if(projecttrack.awardedDesignValue===""){
        this.setState({
          msgerror:'Awarded Design Value mandatory'
        })
      }else{
        this.setState({
          msgerror:null
        });
        (async () => {
          const rawResponse = await fetch('http://taskmanagement.lpipl.com/index.php/api/saveProjectDetails', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data)
          });
          const content = await rawResponse.json();
          this.setState({
            message:content.message
          })
          setTimeout(function(){
            this.setState({
              message:null
            })
          }.bind(this),5000)
         
        })();
      }
    }
    

  render() {
   
      console.log(this.state.projecttrack)
      let appointmentDatenew,lostDatenew,projectStartDatenew,projectHoldDatenew,targetDatenew,actualCompletionDatenew=null;
     
      if(this.state.projecttrack){
       
        let {appointmentDate,lostDate,projectStartDate,projectHoldDate,targetDate,actualCompletionDate}= this.state.projecttrack;
        
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
            <input type="date" name="appointmentDate" onChange={(e)=>this.tarckonChange('appointmentDate',e)} ref="appointmentDate"  value={appointmentDatenew||''} className="form-control pull-right" id=""/>
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
            <input type="date" value={lostDatenew||''} name="lostDate" ref="lostDate" className="form-control pull-right" onChange={(e)=>this.tarckonChange('lostDate',e)} id=""/>
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
            <input type="date" name="projectStartDate" onChange={(e)=>this.tarckonChange('projectStartDate',e)} ref="projectStartDate" value={projectStartDatenew||''} className="form-control pull-right" id=""/>
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
            <input type="date" name="projectHoldDate" onChange={(e)=>this.tarckonChange('projectHoldDate',e)} ref="projectHoldDate" value={projectHoldDatenew||''}  className="form-control pull-right" id=""/>
          </div>
         
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Completion Target (in Days)</label> 
          <input type="text" name="completionTarget" ref="completionTarget" value={this.state.projecttrack.completionTarget||''}  onChange={(e)=>this.tarckonChange('completionTarget',e)} className="form-control"/>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Target Date</label>
          <div className="input-group date">
            <div className="input-group-addon">
              <i className="fa fa-calendar"></i>
            </div>
            <input type="date" name="targetDate" ref="targetDate" onChange={(e)=>this.tarckonChange('targetDate',e)}  value={targetDatenew||''} className="form-control pull-right" id=""/>
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
            <input type="date" name="actualCompletionDate"  ref="actualCompletionDat" value={actualCompletionDatenew||''}  onChange={(e)=>this.tarckonChange('actualCompletionDate',e)} className="form-control pull-right" id=""/>
          </div>
          
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Job Status</label> 
          <select name="jobStatus" ref="jobStatus" className="form-control" onChange={(e)=>this.tarckonChange('jobStatus',e)}>
          {this.state.jobStatus==='Invalid tenant, please contact system admin'?
                            <option>No Data found</option>:
                            this.state.jobStatus.map((curr,index)=>{
                                let highlight=null;
                                if(curr.id===this.state.projecttrack.jobStatus){
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
          <input type="text" name="awardedProjectValue" onChange={(e)=>this.tarckonChange('awardedProjectValue',e)} ref="awardedProjectValue"  value={this.state.projecttrack.awardedProjectValue||''} className="form-control"/>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Design Value </label> 
          <input type="text"  onChange={(e)=>this.tarckonChange('awardedDesignValue',e)} name="awardedDesignValue" ref="awardedDesignValue" value={this.state.projecttrack.awardedDesignValue||''} className="form-control"/>
        </div>
      </div>
    </div>
    <div className="row mgtop">
        {this.state.message!==null?<p className="btn btn-success">{this.state.message}</p>:null}  
        <div className="col-md-12">
        {this.state.msgerror!==null?<p className="btn btn-danger">{this.state.msgerror}</p>:null}
        </div>               
        
      <div className="col-sm-12">
        <div className="form-group">
          <button type="button" onClick={(e)=>this.savedata(e)} className="btn btn-default fix-button" style={{marginRight:'8px'}}>Continue</button>
          <button type="button" className="btn btn-default fix-button clr-new">Close</button>
        </div>
      </div>
    </div>
  </form>
</div>
    )
  }
}
