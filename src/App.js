import React, { Component } from "react";
// import logo from './logo.svg';
import {Navbar, NavbarBrand} from "reactstrap";
import StaffList from "./component/StaffListComponent";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color ="primary">
          <div className="container" >
            <NavbarBrand>
              Ứng dụng quản lý nhân sự v1.0
            </NavbarBrand>
          </div>
        </Navbar>
        <StaffList />
      </div>
    );
  }
}

export default App;
