import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class loghistory extends Component {
  constructor(props){
    super(props);
    this.state={
      month:['January','February','March','April','May','June','July','August','September','October','November','December'],
      year:[2019,2018,2017],
      days:31,
      dayactive:"01",
      yearactive:"2019",
      monthactive:"01",
      apidata:[],
      upindex:[]
      }
    
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log(nextState);
    if((this.state.month!==nextState.month)||(this.state.days!==nextState.days)){
      return true;
    }
  }
  

  
yearHandler=(e,curryear)=>{
      this.setState({
        yearactive:curryear
      })
    }
dayIsMonth=(e,curr,index)=>{
  var indexMonth=index+1;
  var date=null;
  if(indexMonth<10){
    date="0"+indexMonth;
  }
  else{
    date=indexMonth;
  }
  
  let alldays=new Date(this.state.yearactive,index+1, 0).getDate();

  this.setState({
    monthactive:date,
    days:alldays
  })
}  

daysrecord=(e,currdate)=>{
  var currda= null;
  if(currdate<9){
    currda="0"+currdate
  }else{
    currda=currdate
  }
  this.setState({
    dayactive:currda
  })
  this.fetchreacord(this.state.yearactive,this.state.monthactive,currda);
}
componentDidMount(){
  this.fetchreacord(this.state.yearactive,this.state.monthactive,this.state.dayactive);
}

fetchreacord=(year,month,days)=>{
  let daterecord=year+"-"+month+"-"+days;
  (async () => {
    const rawResponse = await fetch('http://d13a0842.ngrok.io/livepages/index.php/api/getLogEntries', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "employeeId": 1, "date":daterecord })
    });
    const content = await rawResponse.json();
    console.log(content.logEntry);
    this.setState({
      apidata:content.logEntry
    })
    
  })();
}


  render() {
  //   const monthacti= this.state.monthactive;
  // //console.log(monthacti)
  //   this.state.month.map((curr,index)=>{
  //   let indez= parseInt(index+1);
    
    
  //   if(indez<10){
  //     this.state.upindex.push("0"+indez)
  //   }else{
  //     this.state.upindex.push(indez) 
  //   }
  //   //console.log(this.state.upindex)
  //   for(let i=0;i<=parseInt(this.state.upindex.length);i++){
  //    if(parseInt(this.state.upindex[i])===parseInt(this.state.monthactive)){
  //     console.log(this.state.month[i])
  //     }
  //   }
    
  // })


    let daysloading=[];
    for(let i=1;i<=this.state.days;i++){
      if(i<10){
        daysloading.push(parseInt("0"+i));
      }else{
        daysloading.push(i);
      }
      
    }
    let displayData=null;
    if((this.state.apidata).length!==0){
      displayData = this.state.apidata.map((curr,index)=>{
        return(
          <tr role="row" className="odd" key={index}>
           <td className="sorting_1">{curr.ProjectName}</td>
          <td>{curr.RoleName}</td>
          <td>{curr.TimeSpent}</td>
          <td>{curr.Comments}</td>
        </tr> 
        )
      })
    }
   
   
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
                            <li key={index}><Link to="#" onClick={(e)=>this.yearHandler(e,curr)} className={parseInt(this.state.yearactive)===curr?'act':null}>{curr}</Link></li>
                          )
                        })}
                        
                        </ul>
                      </div>
                      {/* end log year */}
                      <div className="log-month">
                        <ul>
                          {this.state.month.map((curr,index)=>{
                            return(
                              <li key={index}><Link to="#" onClick={(e)=>this.dayIsMonth(e,curr,index)} className={parseInt(this.state.monthactive)===index+1?"act":null}>{curr}</Link></li>
                            )
                          })}
                         
                        </ul>
                      </div>
                      {/* month */}
                      <div className="log-date">
                        <ul>
                          {daysloading.length!==0?daysloading.map((curr,index)=>{
                            //console.log(curr)
                            return(
                            <li key={index}>
                            <Link to='#' className={parseInt(this.state.dayactive)===curr?'act':null} onClick={(e)=>this.daysrecord(e,curr)}>{curr}</Link>
                            </li>
                            )
                          }):"Loading"}
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
                            {displayData}
                            
                          </tbody>

                        </table>
                        <h5>Your time entries on January {this.state.dayactive}, {this.state.yearactive}</h5>
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
