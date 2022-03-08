import React, { Component } from "react";
import Header from "./HeaderComponent"
import {Switch, Route, Redirect} from "react-router-dom";
import Footer from "./FooterComponent";
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import Department from "./DepartmentComponent";
import PayRoll from "./PayRollComponent";
import {STAFFS, DEPARTMENTS, ROLE} from "../shared/staffs";

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
    const StaffWithId = ({match}) =>{
        return(
            <StaffDetail staffs={this.state.staffs.filter((names)=> names.id === parseInt(match.params.id, 10))[0]}/>

        )
    }
      return (
        <div >
          <Header />
          <Switch>
            <Route exact path="/staff" component= {()=> <StaffList staffs={this.state.staffs}/>}/>
            <Route path = "/staff/:id" component={StaffWithId} />
            <Route exact path="/department" component={()=><Department departments={this.state.departments}/>}/>
            <Route exact path="/payroll" component={()=><PayRoll staffs={this.state.staffs} />}/>
            <Redirect to="/staff"/>
          </Switch>
          <Footer />
        </div>
    );
  }
}
export default Main;