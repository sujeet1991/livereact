import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Sitedetail extends Component {
  constructor(props){
    super(props)
    this.state={
        siteform:{"projectId":"","site":{"id":"","siteName":"","addressLine1":"","addressLine2":"","city":"","state":"","country":"","zipCode":""}}

    }
  }

  componentWillMount(){
    var geturl =window.location.href.split('/');
    let getnumber=geturl.length-1;
    

    var getdata = localStorage.getItem("getproject");
    var strdata = JSON.parse(getdata);
    let site=strdata.site;

    this.setState({siteform:({projectId:geturl[getnumber],site:({...site,"siteName":'',"id":''})})})
    //console.log(strdata);
    
  }

  
  siteonchange=(feildname,e)=>{
    console.log(feildname);
    let site= this.state.siteform.site;
    let getstateid= this.state.siteform.projectId;
    site[feildname]=e.target.value;
    
    this.setState({siteform:({projectId:getstateid,site:({...site,"siteName":'',"id":'1'})})})

  }
  savesitedata=()=>{
  
    let getsatedata=this.state.siteform;
    console.log(getsatedata);
    
   (async () => {
    const rawResponse = await fetch('http://taskmanagement.lpipl.com/index.php/api/saveSiteDetails', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(getsatedata)
    });
    const content = await rawResponse.json();
    alert(content.message)
  })();



   }
  

  render() {
    
    console.log(this.state.siteform)
    return (
        <div className="form-box-mgmt">
        
        <div className="row">
          <div className="col-sm-4 form-group">
            <label>Address Line 1</label>
            <input type="text" onChange={(e)=>this.siteonchange('addressLine1',e)}  className="form-control" name="addressLine1" ref="addressLine1" value={this.state.siteform.site.addressLine1||''} />
          </div>
          <div className="col-sm-4 form-group">
            <label>Address Line 2</label>
            <input type="text" className="form-control" onChange={(e)=>this.siteonchange('addressLine2',e)}  value={this.state.siteform.site.addressLine2||''} name="addressLine2" ref="addressLine2"/>
          </div>
          <div className="col-sm-4 form-group">
            <label>City</label>
            <input type="text" className="form-control" onChange={(e)=>this.siteonchange('city',e)}  value={this.state.siteform.site.city||''}  name="city" ref="city"/>
          </div>
          <div className="col-sm-4 form-group">
            <label>State</label>
            <select name="state" ref="state" className="form-control" onChange={(e)=>this.siteonchange('state',e)} >
              <option value={this.state.siteform.site.state||''}>{this.state.siteform.site.state||''}</option>
              
            </select>
          </div>
          <div className="col-sm-4 form-group">
            <label>Zip Code</label>
            <input type="number" ref="zipCode" onChange={(e)=>this.siteonchange('zipCode',e)}  className="form-control" value={this.state.siteform.site.zipCode||''} name="zipCode"/>
          </div>
          <div className="col-sm-4 form-group">
            <label>Country</label>
            <input type="text" value={this.state.siteform.site.country||''}  className="form-control" name="country" ref="country" onChange={(e)=>this.siteonchange('country',e)}/>
          </div>
          <div className="col-sm-4 form-group">
            <label>Area (in Sq. Feet)</label>
            <input type="number" className="form-control"  onChange={(e)=>this.siteonchange('area',e)} name="area" ref="area" value={this.state.siteform.site.area||''}/>
          </div>
        </div>
        <div className="row mgtop">
          <div className="col-sm-12">
            <div className="form-group">
              <button type="button" className="btn btn-default fix-button" onClick={((e)=>this.savesitedata())} style={{marginRight:'8px'}}>Save</button>
              <button type="button" className="btn btn-default fix-button clr-new">Close</button>	
            </div>
          </div>
        </div>
      </div>
    )
  }
}
