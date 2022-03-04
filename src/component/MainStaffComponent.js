import React, { Component } from "react";
import Header from "./HeaderComponent"
//import {Switch} from "react-router-dom";
import Footer from "./FooterComponent";
import StaffList from "./StaffListComponent";
// import './App.css';
import {STAFFS, DEPARTMENTS,ROLE} from "../shared/staffs";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs : STAFFS,
      departments: DEPARTMENTS,
      role: ROLE,
    };
  }
  render() {
    return (
      <div >
        <Header />
        <StaffList staffs = {this.state.staffs} />
        {/*<Switch>*/}
          {/*<Route path="/staff" component={StaffList}/>*/}
        {/*  <Route path="/department" component={() => <Department departments={ this.state.departments}/>}/>*/}
        {/*  <Route exact path ="/payroll" component={()=> <Payroll  payroll={this.state.role}/>}/>*/}
        {/*</Switch>*/}
        <Footer />
      </div>
    );
  }
}
export default Main;
