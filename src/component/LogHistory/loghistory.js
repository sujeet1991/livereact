import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class loghistory extends Component {
  state={
    month:['January','February','March','April','May','June','July','August','September','October','November','December'],
    year:[2019,2018,2017],
    days:[1,2,3],
  }
  render() {
    console.log(this.state.month);
    return (
        <React.Fragment>
        <section className="content-header">
            <ol className="breadcrumb">
             <li><Link to="/">Home</Link></li>
             <li>Employee Management</li>
             <li className="active">View Log Time History</li>
            </ol>
        </section>
        <section className="content">
            <div className="row">
                <div className="col-xs-12">
                    <div className="box">
                      <div className="log-year">
                        <ul>
                        {this.state.year.map((curr,index)=>{
                          return(
                            <li key={index}><Link to="#" className={index===0?'act':null}>{curr}</Link></li>
                          )
                        })}
                        
                        </ul>
                      </div>
                      {/* end log year */}
                      <div className="log-month">
                        <ul>
                          {this.state.month.map((curr,index)=>{
                            return(
                              <li key={index}><Link to="#" className={index===0?"act":null}>{curr}</Link></li>
                            )
                          })}
                         
                        </ul>
                      </div>
                      {/* month */}
                      <div className="log-date">
                        <ul>
                        {this.state.days.map((curr,index)=>{
                          return(
                            <li key={index}><Link to="#" className={index===0?'act':null}>{curr}</Link></li>
                          )
                        })}
                     
                         
                        </ul>
                      </div>
                      {/* end log date */}
                      <div className="box-body disnon"> 
                        <h4 className="table-heading">View Log History</h4>
                        <table className="table table-bordered table-striped table-responsive dataTable no-footer">
                          <thead>
                            <tr>
                              <th>Project Name</th>
                              <th>Role</th>
                              <th>Hours Spent</th>
                              <th>Comments</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row" className="odd">
                            <td className="sorting_1">VP New Interior Design</td>
                            <td>Senior Designer</td>
                            <td>10</td>
                            <td>Designed something new for interiors</td>
                            </tr>
                          </tbody>

                        </table>
                        <h5>Your time entries on January 15, 2019</h5>
                      </div>
                      {/* end table */}
                    </div>
                    {/* end box */}
                </div>
                {/* col-xs-12 */}
            </div>
            {/* end row */}
            
        </section>
    </React.Fragment>
    )
  }
}
