import React,{Component} from 'react';
import Modelteam from '../modelfileHoc';

class Teamstruture extends Component{
    constructor(props){
        super(props)
        var geturl =window.location.href.split('/');
        let getnumber=geturl.length-1;
        this.state={
            show:false,
            teamrecord:[],
            teamuser:{"teamId":"","projectId":geturl[getnumber],"employeeId":"","roleId":"","startDate":"","endDate":"","allocatedHours":0,"createdBy":"2019-04-23 00:00:00","modifiedBy":"2019-04-23 00:00:00"},
            msgsuccess:null,
            getrollData:[],
            getempName:[],
            getadditionalData:{projectName:"",projectCode:""},
            errors:{},
            filterdata:{},

        }
    }
  componentWillMount(){
      var teamdata= localStorage.getItem('getproject');
      
      let teamdisplay= JSON.parse(teamdata);
      //console.log(teamdisplay.projectCode)
      this.setState({
        teamrecord:teamdisplay.team,
        getadditionalData:{projectName:teamdisplay.projectName,projectCode:teamdisplay.projectCode}

      });
      this.getrolldata();
      this.getempNamedata();
     
  }  
  getrolldata(){
    (async () => {
        const rawResponse = await fetch('http://taskmanagement.lpipl.com/index.php/api/getSelectedParamDetails', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({"tenantId" : "1","paramName" : "Role" })
        });
        const content = await rawResponse.json();
        if(content.result=="success"){
            this.setState({
                getrollData:content.params 
            })
        }
        
      })();   
      
  }
  getempNamedata(){
    (async () => {
        const rawResponse = await fetch('http://taskmanagement.lpipl.com/index.php/api/getEmployees', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({"employeeName":"","pageSize":"0","pageNumber":"0"})
        });
        const content = await rawResponse.json();
        this.setState({
            getempName:content.employees
        })
        
      })();    

  }


    handleshow=(dataid,e)=>{
        var geturl =window.location.href.split('/');
        let getnumber=geturl.length-1;
        if(dataid!==''){
           
            var datafilter=this.state.teamrecord;
            let activefiletr=datafilter.filter(function(recordid){
                //console.log("all"+recordid);
                if(recordid.teamId===dataid){
                    return recordid;
                }
            })
            let dataset=activefiletr[0];
            //console.log(dataset.allocatedHours)
            let setdatastate={"teamId":dataset.teamId,"projectId":geturl[getnumber],"employeeId":dataset.employeeId,"roleId":dataset.roleId,"startDate":dataset.startDate,"endDate":dataset.endDate,"allocatedHours":dataset.allocatedHours,"createdBy":"2019-04-23 00:00:00","modifiedBy":"2019-04-23 00:00:00"}

            //console.log(setdatastate);
            this.setState({
                show:true,
                teamuser:setdatastate
            });
        }else{
            let setdatastate={"teamId":"","projectId":geturl[getnumber],"employeeId":"","roleId":"","startDate":"","endDate":"","allocatedHours":"","createdBy":"2019-04-23 00:00:00","modifiedBy":"2019-04-23 00:00:00"}
            this.setState({
                show:true,
                teamuser:setdatastate
                
            });
        }
       
       
       
        

    }
    
    handlehide=()=>{
        this.setState({
            show:false,
           
        })
    }
    teamonChange=(teamname,e)=>{
        let teamstate=this.state.teamuser;
          if(teamname==='startDate'||teamname==='endDate'){
            teamstate[teamname]=e.target.value+" 00:00:00";
        }else{
            teamstate[teamname]=e.target.value;
        }
        this.setState({teamuser:teamstate})
    }

teamValidation(){
    let teamdata= this.state.teamuser;
    let isValid=true;
    let errors={};
    
    if(this.refs.employeeId.value==""){
        isValid=false;
        errors['employeeId']="Select Employee Name ";

    }
    if(this.refs.roleId.value==""){
        isValid=false;
        errors['roleId']="Select Role ";

    }
    //console.log("ST DT: "+teamdata.startDate);
    //console.log("END DT: "+teamdata.endDate);
    var strdata= ""+teamdata.startDate;
    var enddata= ""+teamdata.endDate;
    
    //console.log("==="+strdata);
    //console.log("end==="+enddata);
    if(enddata < strdata){
        isValid=false;
        errors['endDate']="Please change  End date ";
    }
   //console.log("StartDate:  "+teamdata.startDate);
     if(teamdata.startDate==""||teamdata.startDate==null){
         //console.log("Inside if empty");
        isValid=false;
        errors['startDate']="Please select Start date ";
    }
     if(teamdata.endDate==""||teamdata.endDate==null){

        isValid=false;
        errors['endDate']="Please select End date ";
    }
    
     if(teamdata.endDate===""){
        isValid=false;
        errors['endDate']="Please select End date ";
    }
    if(teamdata.allocatedHours===""){
        isValid=false;
        errors['allocatedHours']="Please enter allocatedHours ";
    } 
    if(typeof (this.refs.allocatedHours.value)!== 'number'){
        isValid=false;
        errors['allocatedHours']="Please enter Number ";
    }
    this.setState({errors: errors});
    return isValid;
}


    saveteamData=(e)=>{
        let teamdata= this.state.teamuser;
        //console.log(teamdata)
        var CheckValid=this.teamValidation();
        if(CheckValid){
            (async () => {
                const rawResponse = await fetch('http://taskmanagement.lpipl.com/index.php/api/saveResource', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(teamdata)
                });
                const content = await rawResponse.json();
                //console.log(content);
                this.setState({
                    msgsuccess:content.result
                })
                setTimeout(function(){
                    this.setState({
                        msgsuccess:content.result
                    })
                    window.location.reload();
                    
                }.bind(this),5000)
                
               
              })()
        }
        
        }

    render(){
    //console.log(this.state.teamuser)
    var errorstyle = {
        color: 'red',
        position:'absolute',
        fontSize:'12px',
    };
    var startDatenew,endDatenew=null;
    let {startDate,endDate}=this.state.teamuser;
    if(startDate!==""||startDate!==null){
        var datesplite=startDate.split(" ");
        startDatenew=datesplite[0]

    }
    if(endDate!==""||endDate!==null){
        var datesplite=endDate.split(" ");
        endDatenew=datesplite[0]
    }
    
    
        
        return(
            <React.Fragment>
                <button type="button" onClick={(e)=>this.handleshow("", e)} className="btn btn-default fix-button">Add Resource</button>
                <div className="row" style={{marginTop:'10px'}}>
                    <div className="col-xs-12">
                    <table id="example1 1" className="table table-bordered table-striped table-responsive">
                        <thead>
                        <tr >
                            <th >Employee Name</th>
                            <th>Role</th>
                            <th >Start Date</th>
                            <th >End Date</th>
                            <th >Allocated Hours</th>
                            <th >Action</th>
                        </tr>
                        </thead>
                            <tbody>
                           {this.state.teamrecord.length!==0?this.state.teamrecord.map((curr,index)=>{
                               
                               return(
                                <tr  className="odd" key={index}>
                                <td className="">{curr.employeeName}</td>
                                <td className="sorting_1">{curr.role}</td>
                                <td>{curr.startDate}</td>
                                <td>{curr.endDate}</td>
                                <td>{curr.allocatedHours}</td>
                                
                                <td><button type="button" data-id={curr.teamId} className="edt-btn" data-toggle="modal" onClick={(e)=>this.handleshow(curr.teamId,e)}><img src={require('../../assets/images/edit-bg.png')} alt="edit"/></button></td>
                            </tr>
                               )
                           }):null} 
                            
                            
                            </tbody>
                          </table>  
                    </div>
                </div>

               {this.state.show===true? <Modelteam removeButton="hide"  title="Edit / Add Resources To Project" closemodel={this.handlehide}>
               <div className="row">
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Project Name</label>
                    <input type="text" className="form-control" value={this.state.getadditionalData.projectName||""} disabled="disabled" name="projectName"/>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Code</label>
                    <input type="text" disabled="disabled" value={this.state.getadditionalData.projectCode||""}  className="form-control" name="projectCode"/>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Employee Name</label>
                    <select value={this.state.teamuser.employeeId} className="selectpicker form-control" onChange={(e)=>this.teamonChange('employeeId',e)} name="employeeId" ref="employeeId" data-live-search="true">
                    <option value="">--- Select ---</option>
                          {this.state.getempName.length!==0?
                            this.state.getempName.map((curr,index)=>{
                                return(
                                    <option value={curr.id} key={index}>{curr.employeeName}</option>
                                )
                            }):null
                          } 
                       
                    </select>
                    <span style={errorstyle}>{this.state.errors["employeeId"]}</span>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Role in Project </label>
                    <select  ref="roleId"  value={this.state.teamuser.roleId||""} name="roleId" onChange={(e)=>this.teamonChange('roleId',e)} className="form-control">
                    <option value="">--- Select ---</option>
                        {this.state.getrollData.length!==0? 
                            this.state.getrollData.map((curr,index)=>{
                                //console.log(curr)
                                return(
                                    <option value={curr.id} key={index}>{curr.paramValue}</option>
                                )
                            })
                           
                        :null}   
                       
                       
                    </select>
                    <span style={errorstyle}>{this.state.errors["roleId"]}</span>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Start Date</label>
                    <div className="input-group date">
                        <div className="input-group-addon">
                        <i className="fa fa-calendar"></i>
                        </div>
                        <input type="date" name="startDate" value={startDatenew ||""} onChange={(e)=>this.teamonChange('startDate',e)} ref="startDate" className="form-control pull-right" id=""/>
                        
                    </div>
                        <span style={errorstyle}>{this.state.errors["startDate"]}</span>
                    
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>End Date</label>
                    <div className="input-group date">
                        <div className="input-group-addon">
                        <i className="fa fa-calendar"></i>
                        </div>
                        <input type="date" name="endDate" onChange={(e)=>this.teamonChange('endDate',e)}  ref="endDate" value={endDatenew||""} className="form-control pull-right" id=""/>
                        
                    </div>
                    <span style={errorstyle}>{this.state.errors["endDate"]}</span>
                    
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Allocated Hour</label>
                    <input type="text" className="form-control" onChange={(e)=>this.teamonChange('allocatedHours',e)} ref="allocatedHours" value={this.state.teamuser.allocatedHours||""} name="allocatedHours"/> 
                    <span style={errorstyle}>{this.state.errors["allocatedHours"]}</span>
                    </div>
                </div>
            </div>
               {this.state.msgsuccess!==null?<p className="btn btn-success">{this.state.msgsuccess}</p>:null}            
              <div><button type="button" className="btn btn-primary" onClick={(e)=>this.saveteamData(e)}>Save Team </button></div>  

               </Modelteam>:null} 
            </React.Fragment>
        )
    }
}

export default Teamstruture;