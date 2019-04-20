import React,{Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




class Projectdetail extends Component{
    constructor(props){
        super(props)
        this.state={
            projectState:[],
            projectStatus:[],
            projectDiscipline:[],
            projectType:[],
            projectSubType:[],
            projectCategory:[],
            detailuser:{},
            msgError:null,

        }
      this.nextTab = this.nextTab.bind(this);
    }

    nextTab(e){
        var feName=this.state.detailuser;
        if(feName.projectName===""){
            this.setState({
                msgError:'Project Name is mandatory'
            })
        }else if(feName.enquiryDate===""){
            this.setState({
                msgError:'Enquiry Date is mandatory'
            })
        }else if(feName.projectState===""){
            this.setState({
                msgError:'Project State is mandatory'
            })
        }else if(feName.projectStatus===""){
            this.setState({
                msgError:'Project Status is mandatory'
            })
        }else if(feName.projectDiscipline===""){
            this.setState({
                msgError:'Project Discipline is mandatory'
            })
        }else if(feName.projectType===""){
            this.setState({
                msgError:'Project type is mandatory'
            })
        }else if(feName.projectSubType===""){
            this.setState({
                msgError:'Project Subtype is mandatory'
            })
        }else if(feName.projectCategory===""){
            this.setState({
                msgError:'Project Category is mandatory'
            })
        }else if(feName.referredBy===""){
            this.setState({
                msgError:'Referred By is mandatory'
            })
        }else if(feName.area===""){
            this.setState({
                msgError:'area is mandatory'
            })
        }else if(feName.enquiryValue===""){
            this.setState({
                msgError:'enquiryValue is mandatory'
            })
        }
        else if(feName.enquiryDesignFee===""){
            this.setState({
                msgError:'enquiryDesignFee is mandatory'
            })
        }else{
            this.setState({
                msgError:null
            });
            this.props.tabchange(e,'Project Tracker');
        }
    
        
    }

    componentWillMount(){
        
        var projectdeetail=localStorage.getItem("getproject");
        let getdata=JSON.parse(projectdeetail);
        this.setState({detailuser:{
            projectName:getdata.projectName,
            enquiryDate:getdata.enquiryDate,
            projectState:getdata.projectState,
            projectStatus:getdata.projectStatus,
            projectDiscipline:getdata.projectDiscipline,
            projectType:getdata.projectType,
            projectSubType:getdata.projectSubType,
            projectCategory:getdata.projectCategory,
            referredBy:getdata.referredBy,
            area:getdata.area,
            enquiryValue:getdata.enquiryValue,
            enquiryDesignFee:getdata.enquiryDesignFee
        }})
        this.projectState();
        this.projectStatus();
        this.projectDiscipline();
        this.projectType();
        this.projectSubType();
        this.projectCategory();
        
    }

    componentDidMount(){
        let detailusernew=this.state.detailuser;
        localStorage.setItem('projectDetail', JSON.stringify(detailusernew));
    }

    projectState=()=>{
        let statethis=this;
         fetch('http://taskmanagement.lpipl.com/index.php/api/getParamDetails', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
             body: JSON.stringify({  "tenantId" : "1","paramName" : "Project State" } )
        }).then(data=>data.json()).then(function(res){
            statethis.setState({
                projectState:res.params
            })
        })
    }
    projectStatus=()=>{
        let statethis=this;
        fetch('http://taskmanagement.lpipl.com/index.php/api/getParamDetails', {
           method: 'POST',
           headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
           },
            body: JSON.stringify({  "tenantId" : "1","paramName" : "projectStatus" } )
       }).then(data=>data.json()).then(function(res){
           statethis.setState({
            projectStatus:res.params
           })
       })
    }

    projectDiscipline=()=>{
        let statethis=this;
        fetch('http://taskmanagement.lpipl.com/index.php/api/getParamDetails', {
           method: 'POST',
           headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
           },
            body: JSON.stringify({  "tenantId" : "1","paramName" : "projectDiscipline" } )
       }).then(data=>data.json()).then(function(res){
           statethis.setState({
            projectDiscipline:res.params
           })
       })
    }

    projectType=()=>{
        let statethis=this;
        fetch('http://taskmanagement.lpipl.com/index.php/api/getParamDetails', {
           method: 'POST',
           headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
           },
            body: JSON.stringify({  "tenantId" : "1","paramName" : "projectType" } )
       }).then(data=>data.json()).then(function(res){
           statethis.setState({
            projectType:res.params
           })
       })
    }
    projectSubType=()=>{
        let statethis=this;
        fetch('http://taskmanagement.lpipl.com/index.php/api/getParamDetails', {
           method: 'POST',
           headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
           },
            body: JSON.stringify({  "tenantId" : "1","paramName" : "projectSubType" } )
       }).then(data=>data.json()).then(function(res){
           statethis.setState({
            projectSubType:res.params
           })
       })
    }

    projectCategory=()=>{
        let statethis=this;
        fetch('http://taskmanagement.lpipl.com/index.php/api/getParamDetails', {
           method: 'POST',
           headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
           },
            body: JSON.stringify({  "tenantId" : "1","paramName" : "projectCategory" } )
       }).then(data=>data.json()).then(function(res){
           statethis.setState({
            projectCategory:res.params
           })
       })
    }
    changeHandler=(formname,e)=>{
        let detailusernew=this.state.detailuser;
        if(formname==='enquiryDate'){
            detailusernew[formname]=e.target.value+" "+"00:00:00";
        }else{
            detailusernew[formname]=e.target.value;
        }
         this.setState({detailuser:detailusernew});
         localStorage.setItem('projectDetail', JSON.stringify(detailusernew));
       
    }

    submitData=()=>{
        var projectCode= this.refs.projectCode.value;
        var projectName=this.refs.projectName.value;
        var enquiryDate= this.refs.enquiryDate.value;
        var projectState= this.refs.projectState.value;
        var projectStatus= this.refs.projectStatus.value;
        var projectDiscipline= this.refs.projectDiscipline.value;
        var projectType= this.refs.projectType.value;
        var projectSubType= this.refs.projectSubType.value;
        var projectCategory=this.refs.projectCategory.value;
        var referredBy= this.refs.referredBy.value;
        var area= this.refs.area.value;
        var enquiryValue= this.refs.enquiryValue.value;
        var enquiryDesignFee= this.refs.enquiryDesignFee.value;
        
        console.log({projectCode,projectName,enquiryDate,projectState,projectStatus,projectDiscipline,projectType,projectSubType,projectCategory,referredBy,area,enquiryValue,enquiryDesignFee})


    }
    
    // componentWillReceiveProps(newProps){
    //     let propsdata=newProps.projectdetail;
    //     // detailuser:{projectCode:"",projectName:"",enquiryDate:"",projectState:"",                             projectStatus:"",projectDiscipline:"",projectType:"",projectSubType:"",                  projectCategory:"",referredBy:"",area:"",enquiryValue:"",                                enquiryDesignFee:""}
    //     this.setState({detailuser:{
    //         projectName:propsdata.projectName,
    //         enquiryDate:propsdata.enquiryDate,
    //         projectState:propsdata.projectState,
    //         projectStatus:propsdata.projectStatus,
    //         projectDiscipline:propsdata.projectDiscipline,
    //         projectType:propsdata.projectType,
    //         projectSubType:propsdata.projectSubType,
    //         projectCategory:propsdata.projectCategory,
    //         referredBy:propsdata.referredBy,
    //         area:propsdata.area,
    //         enquiryValue:propsdata.enquiryValue,
    //         enquiryDesignFee:propsdata.enquiryDesignFee
    //     }})
    // }
    render(){
       // console.log(this.state.detailuser)
           let dataequire=null
            if((this.state.detailuser).length!==0){
               
                let {enquiryDate}=this.state.detailuser;
                dataequire=enquiryDate.split(" ")[0];
                
               
            }
           
        return (
            <div className="form-box-mgmt">
        
                <form>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="form-group">
                        <label>Project</label> 
                        <input type="text" name="projectCode" onChange={(e)=>this.changeHandler('projectCode',e)} ref="projectCode" placeholder="VP/123/2019" disabled="disabled" className="form-control"/> 
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                        <label>Project Name</label> 
                            <input type="text"  name="projectName" className="form-control" ref="projectName" onChange={(e)=>this.changeHandler('projectName',e)} value={this.state.detailuser.projectName}/> 
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                        <label>Enquiry Date</label>
                        <div className="input-group date">
                            <div className="input-group-addon">
                            <i className="fa fa-calendar"></i>
                            </div>
                            <input type="date" className="form-control pull-right"  onChange={(e)=>this.changeHandler('enquiryDate',e)} ref="enquiryDate" value={dataequire || ''} name="enquiryDate"/>
                        </div>
                    
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                        <label>Project State </label> 

                        <select name="projectState" defaultValue={'DEFAULT'} ref="projectState" className="form-control" onChange={(e)=>this.changeHandler('projectState',e)}>
                        {this.state.projectState==='Invalid tenant, please contact system admin'?
                            <option>No Data found</option>:
                            this.state.projectState.map((curr,index)=>{
                                let highlight=null;
                                if(curr.id===this.state.detailuser.projectState){
                                    highlight='selected'
                                }
                               
                                return(
                                    <option key={index} value={curr.id} selected={highlight}>{curr.paramValue}</option>
                                )
                            })
                         } 
                        </select>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                        <label>Project Status</label> 
                        <select name="projectStatus" onChange={(e)=>this.changeHandler('projectStatus',e)} ref="projectStatus" className="form-control">
                        {this.state.projectStatus==='Invalid tenant, please contact system admin'?
                            <option>No Data found</option>:
                            this.state.projectStatus.map((curr,index)=>{
                                let highlight=null;
                                if(curr.id===this.state.detailuser.projectStatus){
                                    highlight='selected'
                                }
                               
                                return(
                                    <option key={index} value={curr.id} selected={highlight}>{curr.paramValue}</option>
                                )
                            })
                         } 

                        </select>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                        <label>Project Discipline</label> 
                        <select name="projectDiscipline" onChange={(e)=>this.changeHandler('projectDiscipline',e)}  defaultValue={'DEFAULT'} ref="projectDiscipline" className="form-control">
                         {this.state.projectDiscipline==='Invalid tenant, please contact system admin'?
                            <option>No Data found</option>:
                            this.state.projectDiscipline.map((curr,index)=>{
                                let highlight=null;
                                if(curr.id===this.state.detailuser.projectDiscipline){
                                    highlight='selected'
                                }
                               
                                return(
                                    <option key={index} value={curr.id} selected={highlight}>{curr.paramValue}</option>
                                )
                            })
                         } 

                           
                            
                        </select>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                        <label>Project Type</label> 
                        <select name="projectType" onChange={(e)=>this.changeHandler('projectType',e)}  ref="projectType" className="form-control">
                        {this.state.projectType==='Invalid tenant, please contact system admin'?
                            <option>No Data found</option>:
                            this.state.projectType.map((curr,index)=>{
                                let highlight=null;
                                if(curr.id===this.state.detailuser.projectType){
                                    highlight='selected'
                                }
                               
                                return(
                                    <option key={index} value={curr.id} selected={highlight}>{curr.paramValue}</option>
                                )
                            })
                         } 
                            
                        </select>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                        <label>Project Subtype</label> 
                        
                        <select name="projectSubType" onChange={(e)=>this.changeHandler('projectSubType',e)} ref="projectSubType" className="form-control">
                         {this.state.projectSubType==='Invalid tenant, please contact system admin'?
                            <option>No Data found</option>:
                            this.state.projectSubType.map((curr,index)=>{
                                let highlight=null;
                                if(curr.paramId===this.state.detailuser.projectSubType){
                                    highlight='selected'
                                }
                                return(
                                    <option key={index} value={curr.paramId} selected={highlight}>{curr.name}</option>
                                )
                            })
                         }   
                        
                        </select>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                        <label>Project Category</label> 
                        <select name="projectCategory" onChange={(e)=>this.changeHandler('projectCategory',e)} ref="projectCategory" className="form-control">
                            {this.state.projectCategory==='Invalid tenant, please contact system admin'?
                            <option>No Data found</option>:
                            this.state.projectCategory.map((curr,index)=>{
                                let highlight=null;
                                if(curr.id===this.state.detailuser.projectCategory){
                                    highlight='selected'
                                }
                               
                                return(
                                    <option key={index} value={curr.id} selected={highlight}>{curr.paramValue}</option>
                                )
                            })
                         }  
                            
                         
                        
                        </select>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                        <label>Reference</label> 
                        <input type="text"  value={this.state.detailuser.referredBy}            name="referredBy" ref="referredBy" onChange={(e)=>this.changeHandler('referredBy',e)} className="form-control"/>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                        <label>Area (in.Sq.Ft.)</label> 
                        <input type="number" name="area"  onChange={(e)=>this.changeHandler('area',e)} ref="area" value={this.state.detailuser.area} className="form-control"/>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                        <label>Value(Enquiry)</label> 
                            <input type="number" name="enquiryValue"  onChange={(e)=>this.changeHandler('enquiryValue',e)} ref="enquiryValue" value={this.state.detailuser.enquiryValue} className="form-control"/>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                        <label>Design Fee(Enquiry)</label> 
                        <input type="number" name="enquiryDesignFee" ref="enquiryDesignFee" value={this.state.detailuser.enquiryDesignFee} onChange={(e)=>this.changeHandler('enquiryDesignFee',e)} className="form-control"/>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-12">
                         {this.state.msgError!==null?<p className="btn btn-danger">{this.state.msgError}</p>:null}
                    </div>
                    <div className="row mgtop">
                    <div className="col-sm-12">
                        <div className="form-group">
                        <button type="button" userdetail={this.state.detailuser} onClick={this.nextTab} className="btn btn-default fix-button" style={{marginRight:'8px'}} >Continue</button>
                        {/* onClick={(e)=>this.props.tabchange(e,'Project Tracker')} */}
                        <button type="button" className="btn btn-default fix-button clr-new">Close</button>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
        )
    }
}
export default Projectdetail;
  

// onClick={(e)=>this.props.tabchange(e,'Project Tracker')} 