import React,{Component} from 'react';
import Modelteam from '../modelfileHoc';

class Teamstruture extends Component{
    constructor(props){
        super(props)
        this.state={
            show:false,
        }
    }
    handleshow=()=>{
        this.setState({
            show:true,
            
        })
    }
    handlehide=()=>{
        this.setState({
            show:false,
           
        })
    }

    render(){
        console.log(this.props)
        
        return(
            <React.Fragment>
                <button type="button" className="btn btn-default fix-button">Add Resource</button>
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
                           {this.props.team.map((curr,index)=>{
                               
                               return(
                                <tr  className="odd" key={index}>
                                <td className="">{curr.employeeName}</td>
                                <td className="sorting_1">{curr.role}</td>
                                <td>{curr.startDate}</td>
                                <td>{curr.endDate}</td>
                                <td>{curr.allocatedHours}</td>
                                
                                <td><button type="button" data-id={curr.teamId} className="edt-btn" data-toggle="modal" onClick={(e)=>this.handleshow(e)}><img src={require('../../assets/images/edit-bg.png')} alt="edit"/></button></td>
                            </tr>
                               )
                           })} 
                            
                            
                            </tbody>
                          </table>  
                    </div>
                </div>

               {this.state.show===true? <Modelteam title="Edit / Add Resources To Project" closemodel={this.handlehide}>
               <div className="row">
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Project Name</label>
                    <input type="text" className="form-control" name="project_name"/>
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
                    <select className="selectpicker form-control" data-live-search="true">
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
                    <select name="role_pro" className="form-control">
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
                        <input type="date" className="form-control pull-right" id="datepicker_teamstart"/>
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
                        <input type="date" className="form-control pull-right" id="datepicker_teamend"/>
                    </div>
                    
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Allocated Hour</label>
                    <input type="text" className="form-control" name="allocated_hrs"/> 
                    </div>
                </div>
            </div>
               </Modelteam>:null} 
            </React.Fragment>
        )
    }
}

export default Teamstruture;