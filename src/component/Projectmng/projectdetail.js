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
            projectCategory:[]

        }
    }

    componentWillMount(){
        this.projectState();
        this.projectStatus();
        this.projectDiscipline();
        this.projectType();
        this.projectSubType();
        this.projectCategory();
    }

    projectState=()=>{
        let statethis=this;
         fetch('http://taskmanagement.lpipl.com/index.php/api/getParamDetails', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
             body: JSON.stringify({  "tenantId" : "1","paramName" : "ProjectState" } )
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

    render(){
        //console.log(this.props.projectdetail.projectState)
           let dataequire=null
            if((this.props.projectdetail).length!==0){
                //console.log(this.props.projectdetail.projectState)
                let {enquiryDate}=this.props.projectdetail;
                dataequire=enquiryDate.split(" ")[0];
                
               
            }
            //console.log(equirydata);
        return (
            <div className="form-box-mgmt">
        
                <form>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="form-group">
                        <label>Project</label> 
                        <input type="text" name="projectCode" placeholder="VP/123/2019" disabled="" className="form-control"/> 
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                        <label>Project Name</label> 
                            <input type="text"  name="projectName" className="form-control" onChange={(e)=>this.props.handlechange('projectName',e)} value={this.props.projectdetail.projectName|| ''}/> 
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                        <label>Enquiry Date</label>
                        <div className="input-group date">
                            <div className="input-group-addon">
                            <i className="fa fa-calendar"></i>
                            </div>
                            <DatePicker className="form-control pull-right" value={dataequire || ''} name="enquiryDate" selected={this.props.startDate} onChange={(e)=>this.props.handlechange('enquiryDate',e)}/>
                        </div>
                    
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                        <label>Project State </label> 

                        <select name="projectState" className="form-control">
                        {this.state.projectState==='Invalid tenant, please contact system admin'?
                            <option>No Data found</option>:
                            this.state.projectState.map((curr,index)=>{
                                let highlight=null;
                                if(curr.paramId===this.props.projectdetail.projectState){
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
                        <label>Project Status</label> 
                        <select name="projectStatus" className="form-control">
                        {this.state.projectStatus==='Invalid tenant, please contact system admin'?
                            <option>No Data found</option>:
                            this.state.projectStatus.map((curr,index)=>{
                                let highlight=null;
                                if(curr.paramId===this.props.projectdetail.projectStatus){
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
                        <label>Project Discipline</label> 
                        <select name="projectDiscipline" className="form-control">
                         {this.state.projectDiscipline==='Invalid tenant, please contact system admin'?
                            <option>No Data found</option>:
                            this.state.projectDiscipline.map((curr,index)=>{
                                let highlight=null;
                                if(curr.paramId===this.props.projectdetail.projectDiscipline){
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
                        <label>Project Type</label> 
                        <select name="projectType" className="form-control">
                        {this.state.projectType==='Invalid tenant, please contact system admin'?
                            <option>No Data found</option>:
                            this.state.projectType.map((curr,index)=>{
                                let highlight=null;
                                if(curr.paramId===this.props.projectdetail.projectType){
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
                        <label>Project Subtype</label> 
                        
                        <select name="projectSubType" className="form-control">
                         {this.state.projectSubType==='Invalid tenant, please contact system admin'?
                            <option>No Data found</option>:
                            this.state.projectSubType.map((curr,index)=>{
                                let highlight=null;
                                if(curr.paramId===this.props.projectdetail.projectSubType){
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
                        <select name="projectCategory" className="form-control">
                            {this.state.projectCategory==='Invalid tenant, please contact system admin'?
                            <option>No Data found</option>:
                            this.state.projectCategory.map((curr,index)=>{
                                let highlight=null;
                                if(curr.paramId===this.props.projectdetail.projectCategory){
                                    highlight='selected'
                                }
                                console.log(this.props.projectdetail.projectCategory);
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
                        <label>Reference</label> 
                        <input type="text"  value={this.props.projectdetail.referredBy|| ''} name="referredBy" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                        <label>Area (in.Sq.Ft.)</label> 
                        <input type="number" name="area" value={this.props.projectdetail.area|| ''} className="form-control"/>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                        <label>Value(Enquiry)</label> 
                            <input type="number" name="enquiryValue" value={this.props.projectdetail.enquiryValue|| ''} className="form-control"/>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                        <label>Design Fee(Enquiry)</label> 
                        <input type="number" name="enquiryDesignFee" value={this.props.projectdetail.enquiryDesignFee|| ''} className="form-control"/>
                        </div>
                    </div>
                    </div>
                    <div className="row mgtop">
                    <div className="col-sm-12">
                        <div className="form-group">
                        <button type="button" className="btn btn-default fix-button" style={{marginRight:'8px'}} onClick={(e)=>this.props.tabchange(e,'Project Tracker')}>Continue</button>
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
  

