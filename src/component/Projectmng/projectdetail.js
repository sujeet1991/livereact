import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




export const Projectdetail=React.memo(function MyComponent(props){
    return (
        <div className="form-box-mgmt">
    
            <form>
            <div className="row">
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Project</label> 
                    <input type="text" name="project" placeholder="VP/123/2019" disabled="" className="form-control"/> 
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Project Name</label> 
                        <input type="text" name="project_name" className="form-control"/> 
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Enquiry Date</label>
                    <div className="input-group date">
                        <div className="input-group-addon">
                        <i className="fa fa-calendar"></i>
                        </div>
                        <DatePicker className="form-control pull-right" id="datepicker"/>
                    </div>
                   
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Project State </label> 
                    <select name="project_state" className="form-control">
                        <option value="new">New</option>
                        <option value="new2">New2</option>
                    </select>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Project Status</label> 
                    <select name="project_status" className="form-control">
                        <option value="ongoing">Ongoing</option>
                        <option value="ongoing2">Ongoing2</option>
                    </select>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Project Discipline</label> 
                    <select name="project_discipline" className="form-control">
                        <option value="interior">Interior</option>
                        <option value="interior2">Interior 2</option>
                    </select>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Project Type</label> 
                    <select name="project_type" className="form-control">
                        <option value="residential">Residential</option>
                        <option value="residential2">Residential 2</option>
                    </select>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Project Subtype</label> 
                    <select name="project_type" className="form-control">
                        <option value="apartment">Apartment</option>
                        <option value="apartment2">Apartment 2</option>
                    </select>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Project Category</label> 
                    <select name="project_category" className="form-control">
                        <option value="design">Design</option>
                        <option value="design2">Design 2</option>
                    </select>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Reference</label> 
                    <input type="text" name="reference" className="form-control"/>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Area (in.Sq.Ft.)</label> 
                    <input type="number" name="area" className="form-control"/>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Value(Enquiry)</label> 
                        <input type="number" name="value_enq" className="form-control"/>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                    <label>Design Fee(Enquiry)</label> 
                    <input type="number" name="design_fee" className="form-control"/>
                    </div>
                </div>
                </div>
                <div className="row mgtop">
                <div className="col-sm-12">
                    <div className="form-group">
                    <button type="button" className="btn btn-default fix-button" style={{marginRight:'8px'}}>Save</button>
                    <button type="button" className="btn btn-default fix-button clr-new">Close</button>
                    </div>
                </div>
                </div>
            </form>
            </div>
      )
})


export const Projecttracker=React.memo(function MyComponent(props){
    return (
        <div className="form-box-mgmt">
  <form>
    <div className="row">
      <div className="col-sm-4">
        <div className="form-group">
          <label>Appointment Date</label>
          <div className="input-group date">
            <div className="input-group-addon">
              <i className="fa fa-calendar"></i>
            </div>
            <DatePicker type="text" className="form-control pull-right" id="datepicker_appointment"/>
          </div>
          
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Lost Date</label>
          <div className="input-group date">
            <div className="input-group-addon">
              <i className="fa fa-calendar"></i>
            </div>
            <DatePicker type="text" className="form-control pull-right" id="datepicker_lost"/>
          </div>
         
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Project start</label>
          <div className="input-group date">
            <div className="input-group-addon">
              <i className="fa fa-calendar"></i>
            </div>
            <DatePicker type="text" className="form-control pull-right" id="datepicker_prostart"/>
          </div>
         
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Hold Date</label>
          <div className="input-group date">
            <div className="input-group-addon">
              <i className="fa fa-calendar"></i>
            </div>
            <DatePicker type="text" className="form-control pull-right" id="datepicker_hold"/>
          </div>
         
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Completion Target (in Days)</label> 
          <input type="text" name="completion_target" className="form-control"/>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Target Date</label>
          <div className="input-group date">
            <div className="input-group-addon">
              <i className="fa fa-calendar"></i>
            </div>
            <DatePicker type="text" className="form-control pull-right" id="datepicker_target"/>
          </div>
         
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Actual Date</label>
          <div className="input-group date">
            <div className="input-group-addon">
              <i className="fa fa-calendar"></i>
            </div>
            <DatePicker type="text" className="form-control pull-right" id="datepicker_actual"/>
          </div>
          
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Job Status</label> 
          <select name="job_status" className="form-control">
            <option value="ongoing">Ongoing</option>
            <option value="ongoing2">ongoing 2</option>
          </select>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Awarded Project Value</label> 
          <input type="text" name="awarded_value" className="form-control"/>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Design Value </label> 
          <input type="text" name="design_value" className="form-control"/>
        </div>
      </div>
    </div>
    <div className="row mgtop">
      <div className="col-sm-12">
        <div className="form-group">
          <button type="button" className="btn btn-default fix-button" style={{marginRight:'8px'}}>Save</button>
          <button type="button" className="btn btn-default fix-button clr-new">Close</button>
        </div>
      </div>
    </div>
  </form>
</div>
      )
})


export const Sitedetail=React.memo(function MyComponent(props){
    return (
       
          <div className="form-box-mgmt">
  <div className="row">
    <div className="col-sm-4 form-group">
      <label>Address Line 1</label>
      <input type="text" className="form-control" name="add1"/>
    </div>
    <div className="col-sm-4 form-group">
      <label>Address Line 2</label>
      <input type="text" className="form-control" name="add2"/>
    </div>
    <div className="col-sm-4 form-group">
      <label>City</label>
      <input type="text" className="form-control" name="city"/>
    </div>
    <div className="col-sm-4 form-group">
      <label>State</label>
      <select name="state" className="form-control">
        <option value="state1">State 1</option>
        <option value="state2">State 2</option>
      </select>
    </div>
    <div className="col-sm-4 form-group">
      <label>Zip Code</label>
      <input type="number" className="form-control" name="zip_code"/>
    </div>
    <div className="col-sm-4 form-group">
      <label>Area (in Sq. Feet)</label>
      <input type="number" className="form-control" name="area"/>
    </div>
  </div>
  <div className="row mgtop">
    <div className="col-sm-12">
      <div className="form-group">
        <button type="button" className="btn btn-default fix-button" style={{marginRight:'8px'}}>Save</button>
        <button type="button" className="btn btn-default fix-button clr-new">Close</button>	
      </div>
    </div>
  </div>
</div>
        
      )
})

export const Teamstructure=React.memo(function MyComponent(props){
    return (
        <div>
          Teamstructure
        </div>
      )
})
 
export const Ctc=React.memo(function MyComponent(props){
    return (
        <div>
          Ctc
        </div>
      )
})
 
  

