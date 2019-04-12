import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Sitedetail extends Component {
  render() {
    return (
        <div className="form-box-mgmt">
        <div className="row">
          <div className="col-sm-4 form-group">
            <label>Address Line 1</label>
            <input type="text" value={this.props.site.addressLine1||''} className="form-control" name="addressLine1"/>
          </div>
          <div className="col-sm-4 form-group">
            <label>Address Line 2</label>
            <input type="text" className="form-control" value={this.props.site.addressLine2||''} name="addressLine2"/>
          </div>
          <div className="col-sm-4 form-group">
            <label>City</label>
            <input type="text" className="form-control"  value={this.props.site.city||''}  name="city"/>
          </div>
          <div className="col-sm-4 form-group">
            <label>State</label>
            <select name="state" className="form-control">
              <option value={this.props.site.state||''}>{this.props.site.state||''}</option>
              
            </select>
          </div>
          <div className="col-sm-4 form-group">
            <label>Zip Code</label>
            <input type="number" className="form-control" value={this.props.site.zipCode||''} name="zipCode"/>
          </div>
          <div className="col-sm-4 form-group">
            <label>Country</label>
            <input type="text" value={this.props.site.country||''}  className="form-control" name="country"/>
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
  }
}
