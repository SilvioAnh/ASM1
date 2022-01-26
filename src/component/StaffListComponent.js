import React, { Component } from "react";
import {Media} from 'reactstrap';
import {STAFFS} from "../shared/staffs";

class StaffList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      staffs : STAFFS
    }
  }
  render() {
    const menu = this.state.staffs.map((names) => {
      return (
        <div key={names.id} className="col-12 mt-5">
          <Media tag="li">
            <Media body className="ml-5">
              <p>{names.name}</p>
            </Media>
          </Media>
        </div>
      );
    })
    return(
      <div className="container">
        <div className="row">
          <Media list>
            {menu}
          </Media>
        </div>
      </div>
    )
  }

}
export default StaffList;
