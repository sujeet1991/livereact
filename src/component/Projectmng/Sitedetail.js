import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Sitedetail extends Component {
  constructor(props){
    super(props)
    this.state={
        siteform:{"projectId":"","site":{"id":"","siteName":"","addressLine1":"","addressLine2":"","city":"","state":"","country":"","zipCode":""}},
        msgError:null,
        msg:null,
        errors:{},

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
  validationSite(){
    let getsatedata=this.state.siteform.site;
    let Ischeckvalid=true;
    let errors={}
    if (getsatedata.addressLine1 === ""||getsatedata.addressLine1 === null) {
      Ischeckvalid=false;
      errors['addressLine1']="Enter a Address";
    }
   
    if (getsatedata.addressLine2 === "" || getsatedata.addressLine2 === null) {
      Ischeckvalid=false;
      errors['addressLine2']="Enter a Address";
    }
  
    if (getsatedata.city === ""||getsatedata.city===null) {
      Ischeckvalid=false;
      errors['city']="city is mandatory";
    }
    if (!/^[a-zA-Z]*$/g.test(getsatedata.city)) {
      Ischeckvalid=false;
      errors['city']="Enter only character";
    }
    if(this.refs.state.value===""){
      Ischeckvalid=false;
      errors['state']="Please select State";
    }
    if (getsatedata.zipCode === ""||getsatedata.zipCode===null) {
      Ischeckvalid=false;
      errors['zipCode']="zipCode is mandatory";
    }
    if (getsatedata.country === ""||getsatedata.country===null) {
      Ischeckvalid=false;
      errors['country']="country is mandatory";
    }
    if (!/^[a-zA-Z]*$/g.test(getsatedata.country)) {
      Ischeckvalid=false;
      errors['country']="Enter only character";
    }
    // if (getsatedata.area === ""||getsatedata.area===null) {
    //   Ischeckvalid=false;
    //   errors['area']="enter area";
    // }
    
    this.setState({
      errors:errors
    })
    return Ischeckvalid;

  }
  savesitedata=()=>{
  
    let getsatedata=this.state.siteform;
    console.log(getsatedata);
    let valistate= this.state.siteform.site;
    let checkvalid = this.validationSite();

    if(checkvalid){
      
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
        this.setState({
          msg:content.message
        })
        setTimeout(function(){
          this.setState({
            msg:null
          })
        }.bind(this),5000)
       
      })();
    }
    
    
   



   }
  

  render() {
    var errorstyle = {
            color: 'red',
            position:'absolute',
            fontSize:'12px',
        };
    console.log(this.state.siteform)
    return (
        <div className="form-box-mgmt">
        
        <div className="row">
          <div className="col-sm-4 form-group">
            <label>Address Line 1</label>
            <input type="text" onChange={(e)=>this.siteonchange('addressLine1',e)}  className="form-control" name="addressLine1" ref="addressLine1" value={this.state.siteform.site.addressLine1||''} />
            <span style={errorstyle}>{this.state.errors["addressLine1"]}</span>
          </div>
          <div className="col-sm-4 form-group">
            <label>Address Line 2</label>
            <input type="text" className="form-control" onChange={(e)=>this.siteonchange('addressLine2',e)}  value={this.state.siteform.site.addressLine2||''} name="addressLine2" ref="addressLine2"/>
            <span style={errorstyle}>{this.state.errors["addressLine2"]}</span>
          </div>
          <div className="col-sm-4 form-group">
            <label>City</label>
            <input type="text" className="form-control" onChange={(e)=>this.siteonchange('city',e)}  value={this.state.siteform.site.city||''}  name="city" ref="city"/>
            <span style={errorstyle}>{this.state.errors["city"]}</span>
          </div>
          <div className="col-sm-4 form-group">
            <label>State</label>
            <select name="state" ref="state" className="form-control" onChange={(e)=>this.siteonchange('state',e)} >
              <option value="">--Select--</option>
              <option value={this.state.siteform.site.state||''}>{this.state.siteform.site.state||''}</option>
              
            </select>
            <span style={errorstyle}>{this.state.errors["state"]}</span>
          </div>
          <div className="col-sm-4 form-group">
            <label>Zip Code</label>
            <input type="number" ref="zipCode" onChange={(e)=>this.siteonchange('zipCode',e)}  className="form-control" value={this.state.siteform.site.zipCode||''} name="zipCode"/>
            <span style={errorstyle}>{this.state.errors["zipCode"]}</span>
          </div>
          <div className="col-sm-4 form-group">
            <label>Country</label>
            <input type="text" value={this.state.siteform.site.country||''}  className="form-control" name="country" ref="country" onChange={(e)=>this.siteonchange('country',e)}/>
            <span style={errorstyle}>{this.state.errors["country"]}</span>
          </div>
          {/* <div className="col-sm-4 form-group">
            <label>Area (in Sq. Feet)</label>
            <input type="number" className="form-control"  onChange={(e)=>this.siteonchange('area',e)} name="area" ref="area" value={this.state.siteform.site.area||''}/>
            <span style={errorstyle}>{this.state.errors["area"]}</span>
          </div> */}
        </div>
        <div className="row mgtop">
          <div className="col-md-12">
            {this.state.msg!==null?<p className="btn btn-success">{this.state.msg}</p>:null}

            {this.state.msgError!==null?<p className="btn btn-danger">{this.state.msgError}</p>:null}
            
          </div>
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
