import React, { Component } from "react";
// import logo from './logo.svg';
import {Navbar, NavbarBrand} from "reactstrap";
import StaffList from "./component/StaffListComponent";
import './App.css';
import { STAFFS } from "./shared/staffs";
//import dateFormat from 'dateformat
//import { useMediaQuery } from 'react-responsive'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs : STAFFS
    };
  }
  render() {
    return (
      <div >
        <Navbar dark color ="primary">
          <div className="container">
            <NavbarBrand href="/">
              Ứng dụng quản lý nhân sự v1.0
            </NavbarBrand>
          </div>
        </Navbar>
        <StaffList staffs = {this.state.staffs} />
      </div>
    );
  }
}
export default App;
