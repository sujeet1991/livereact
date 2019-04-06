import React,{Component} from 'react'
import {Link} from 'react-router-dom';

class editemployee extends Component{
    render(){
        return(
            <React.Fragment>
                <section className="content-header">
                    <ol className="breadcrumb">
                     <li><Link to="/">Home</Link></li>
                     <li>Employee Management</li>
                     <li className="active">Edit Employee</li>
                    </ol>
                </section>
                <section className="content">
                    <h4 className="table-heading">Edit Employee</h4>
                     <div className="addemp">
                        <form>
                            <div className="row mgbtm">
                                <div className="col-sm-3">
                                <label>Employee Code </label>
                                <input type="text" className="form-control" name="code" disabled="disabled"/>
                                </div>
                                <div className="col-sm-3">
                                <label>Employee Name </label>
                                <input type="text" className="form-control" name="name" disabled="disabled"/>
                                </div>
                                <div className="col-sm-3">
                                <label>Status</label>
                                <select name="status" className="form-control"  >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                </select>
                                </div>
                                <div className="col-sm-3">
                                <label>Role</label>
                                <select name="role" className="form-control"  >
                                <option value="system_admin">System Admin</option>
                                <option value="project_manager" selected>Project Manager</option>
                                <option value="employee">Employee</option>
                                </select>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                <button style={{marginRight:'10px'}} type="button" className="btn btn-default fix-button" >Save</button>
                                <Link to="/" className="btn btn-default fix-button clr-new">Back</Link>
                                </div>
                            </div>
                        </form>
                     </div>
                </section>
            </React.Fragment>
        )
    }
} 

export default editemployee;