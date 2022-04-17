import React, { Component } from "react";
import Header from "./HeaderComponent"
import Footer from "./FooterComponent";
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import Department from "./DepartmentComponent";
import PayRoll from "./PayRollComponent";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux"

const mapStateToProps = state =>{
   return {
       staffs: state.staffs,
       departments: state.departments,
       role: state.role,
   }
}
class Main extends Component {

  render() {
    const StaffWithId = ({match}) =>{
        return(
            <StaffDetail staffs={this.props.staffs.filter((names)=> names.id === parseInt(match.params.id, 10))[0]}/>
        )
    }
      return (
        <div >
          <Header />
          <Switch>
            <Route exact path="/staff" component= {()=> <StaffList staffs={this.props.staffs}/>}/>
            <Route path = "/staff/:id" component={StaffWithId} />
            <Route exact path="/department" component={()=><Department departments={this.props.departments}/>}/>
            <Route exact path="/payroll" component={()=><PayRoll staffs={this.props.staffs} />}/>
            <Redirect to="/staff"/>
          </Switch>
          <Footer />
        </div>
    );
  }
}
export default withRouter(connect(mapStateToProps)(Main));