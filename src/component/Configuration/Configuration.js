import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import ConfiModel from './confimodel';

class Configuration extends Component{
    constructor(props){
        super(props);
            this.state={
                show:false
            
        }
        this.handleshow=this.handleshow.bind(this);
        this.handlehide=this.handlehide.bind(this);
    }
    
    handleshow=()=>{
        this.setState({
            show:true
        })
    }
    handlehide=()=>{
        this.setState({
            show:false
        })
    }
    render(){
        return(
              <React.Fragment>
                <section className="content-header">
                    <ol className="breadcrumb">
                    <li><Link to="/">Home</Link></li>
                    <li className="active">Configuration Parameter Management</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="addnew-parameter">
                                <button type="button" className="btn btn-default fix-button" onClick={this.handleshow}>Add New Parameter</button>
                            </div>  
                            <div className="box">
                                <div className="para-mg-select">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <label>Company Name</label>
                                            <select name="company_name" className="form-control">
                                            <option value="Company Name1">Select</option>
                                            <option value="Company Name2">Option 1</option>
                                            <option value="Company Name3">Option 2</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-4">
                                            <label>Department</label>
                                            <select name="Department" className="form-control">
                                            <option value="Department1">Select</option>
                                            <option value="Department2">Option 1</option>
                                            <option value="Department3">Option 2</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-4">
                                            <label>Parameter</label>
                                            <select name="parameter" className="form-control">
                                            <option value="parameter name1">Select</option>
                                            <option value="parameter name2">Option 1</option>
                                            <option value="parameter name3">Option 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    </div>
                                    {/* end body */}
                                 <div className="box-body disnon">
                                    <h4 className="table-heading">Parameter Management</h4>
                                    <table id="example1" className="table table-bordered table-striped table-responsive">
                                        <thead>
                                            <tr>
                                                <th>Sr no</th>
                                                <th>Display Name</th>
                                                <th>Parent Name </th>
                                                <th>Status</th>
                                                <th>Description</th>
                                                <th>Order</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Enquiry</td>
                                                <td>Job Status </td>
                                                <td>Active</td>
                                                <td>All enquiries will have this status </td>
                                                <td>2</td>
                                                <td><button type="button" onClick={this.handleshow} className="edt-btn" data-toggle="modal" data-target=".bs-example-modal-lg"><img src={require('../../assets/images/edit-bg.png')} alt="edit" /></button></td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                 </div>
                                    {/*box-body  */}
                            </div> 
                        </div>
                    </div>
                </section>
                {/* <ConfiModel handlehide={this.handlehide} handleshow={this.handleshow}  show={this.state.show} /> */}
              </React.Fragment>  
        )
    }
}

export default Configuration;