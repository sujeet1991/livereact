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
            teamuser:{"teamId":"","projectId":geturl[getnumber],"employeeId":"","roleId":"","startDate":"","endDate":"","allocatedHours":"","createdBy":"","modifiedBy":""},
            msgsuccess:null,
            getrollData:[],
            getempName:[],
            getadditionalData:{projectName:""}

        }
    }
  componentWillMount(){
      var teamdata= localStorage.getItem('getproject');
      
      let teamdisplay= JSON.parse(teamdata);
      console.log(teamdisplay.projectName)
      this.setState({
        teamrecord:teamdisplay.team,
        getadditionalData:{projectName:teamdisplay.projectName}

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


    handleshow=(name,e)=>{
        alert(name)
        this.setState({
            show:true,
            })

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
    saveteamData=(e)=>{
        let teamdata= this.state.teamuser;
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

    render(){
    console.log(this.state.teamuser)
        
        return(
            <React.Fragment>
                <button type="button" onClick={(e)=>this.handleshow(e)} className="btn btn-default fix-button">Add Resource</button>
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

               {this.state.show===true? <Modelteam title="Edit / Add Resources To Project" closemodel={this.handlehide}>
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
                    <input type="number" disabled="disabled"  className="form-control" name="code"/>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Employee Name</label>
                    <select className="selectpicker form-control" onChange={(e)=>this.teamonChange('employeeId',e)} name="employeeName" ref="employeeName" data-live-search="true">
                          {this.state.getempName.length!==0?
                            this.state.getempName.map((curr,index)=>{
                                return(
                                    <option value={curr.id} key={index}>{curr.employeeName}</option>
                                )
                            }):null
                          } 
                       
                    </select>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Role in Project </label>
                    <select name="role" ref="role" name="role" onChange={(e)=>this.teamonChange('roleId',e)} className="form-control">
                        {this.state.getrollData.length!==0? 
                            this.state.getrollData.map((curr,index)=>{
                                console.log(curr)
                                return(
                                    <option value={curr.id} key={index}>{curr.paramValue}</option>
                                )
                            })
                           
                        :null}   
                       
                       
                    </select>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Start Date</label>
                    <div className="input-group date">
                        <div className="input-group-addon">
                        <i className="fa fa-calendar"></i>
                        </div>
                        <input type="date" name="startDate" onChange={(e)=>this.teamonChange('startDate',e)} ref="startDate" className="form-control pull-right" id=""/>
                    </div>
                    
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>End Date</label>
                    <div className="input-group date">
                        <div className="input-group-addon">
                        <i className="fa fa-calendar"></i>
                        </div>
                        <input type="date" name="endDate" onChange={(e)=>this.teamonChange('endDate',e)}  ref="endDate" className="form-control pull-right" id=""/>
                    </div>
                    
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Allocated Hour</label>
                    <input type="text" className="form-control" onChange={(e)=>this.teamonChange('allocatedHours',e)} ref="allocatedHours" name="allocatedHours"/> 
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