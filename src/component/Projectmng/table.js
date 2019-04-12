import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';



class table extends Component {
   
    priceFormatter=(cell, row)=>{   
        return `<Link to="#"> ${cell}</Link>`;
      }
  
    render(){
        
        console.log(this.props);
        var products = [{
            id: 'HDFC',
            name: "SBI/123/7766",
            price: 'Get Access'
        }, {
            id: 'SBI',
            name: "Product2",
            price: 'view'
        }];
       
        return(
            <div className="prmgt">
            
                        <div className="box-body">
                            <h4>Project Management</h4>
                            {/* <BootstrapTable  data={products} pagination striped={true} hover search searchPlaceholder='input something...'>
                            <TableHeaderColumn isKey dataField='id' isKey={true} dataSort={true}>Project Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='name' dataSort={true}>Project Code</TableHeaderColumn>
                            <TableHeaderColumn dataField='price' dataFormat={this.priceFormatter} dataSort={true}>Product Price</TableHeaderColumn>
                            </BootstrapTable> */}
                            <table id="example1" className="table table-bordered table-striped table-responsive">
                                            <thead>
                                                <tr>
                                                    <th>Project Name</th>
                                                    <th>Project Code</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {this.props.data.map((curr,index)=>{
                                                return(
                                                    <tr key={index}>
                                                    <td>{curr.projectName}</td>
                                                    <td>{curr.projectCode}</td>
                                                    <td><Link to={`Projectmngtab/${curr.projectId}`} >View</Link></td>
                                                </tr>
                                                )
                                            })}
                                               
    
                                                 {/* <tr>
                                                    <td>HDFC</td>
                                                    <td>SBI/123/7766</td>
                                                    <td><Link to="/Projectmngtab/1">View</Link></td>
                                                </tr> */}
                                                
                                            </tbody>
                                        </table>
    
                        </div>
            </div>
        )
    }
   
}

export default table;

