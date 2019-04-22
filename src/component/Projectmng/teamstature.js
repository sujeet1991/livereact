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
            teamuser:{"teamId":"","projectId":geturl[getnumber],"employeeId":"3","roleId":"3","startDate":"","endDate":"","allocatedHours":"","createdBy":"","modifiedBy":"2019-04-10 00:00:00"},
            msgsuccess:null,
            filterdata:{}

        }
    }
  componentWillMount(){
      var teamdata= localStorage.getItem('getproject');
      let teamdisplay= JSON.parse(teamdata);
      this.setState({
        teamrecord:teamdisplay.team
      })
     
  }  


    handleshow=(data,e)=>{
        alert(data);
        // this.setState({
        //     show:true,
        //     })

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
            console.log(content);
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

               {this.state.show===true? <Modelteam  title="Edit / Add Resources To Project" closemodel={this.handlehide}>
               <div className="row">
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Project Name</label>
                    <input type="text" className="form-control" name="projectName"/>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Code</label>
                    <input type="number" className="form-control" name="code"/>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Employee Name</label>
                    <select className="selectpicker form-control" onChange={(e)=>this.teamonChange('employeeName',e)} name="employeeName" ref="employeeName" data-live-search="true">
                        <option>Akash</option>
                        <option>Anil</option>
                        <option>Manish</option>
                        <option>Vijay</option>
                        <option>Elizabeth Warren</option>
                    </select>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Role in Project </label>
                    <select name="role" ref="role" name="role" onChange={(e)=>this.teamonChange('role',e)} className="form-control">
                        <option value="designer">Designer</option>
                        <option value="developer">Developer</option>
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