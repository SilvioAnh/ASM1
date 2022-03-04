import React, { Component } from "react";
import Header from "./HeaderComponent"
import {Switch, Route, Redirect} from "react-router-dom";
import Footer from "./FooterComponent";
// import StaffList from "./StaffListComponent";
// import './App.css';
import {STAFFS} from "../shared/staffs";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs : STAFFS
    };
  }
  render() {
    return (
      <div >
        <Header />
        {/*<StaffList staffs = {this.state.staffs} />*/}
        {/*<Switch>*/}
        {/*  <Route path="/home" component={HomePage}/>*/}
        {/*  <Route path="/aboutus" component={() => <About leaders={ this.state.leaders}/>}/>*/}
        {/*  <Route exact path ="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>*/}
        {/*  <Route path="/menu/:dishId" component={DishWithId}/>*/}
        {/*  <Route exact path="/contactus" component={Contact}/>*/}
        {/*  <Redirect to="/home"/>*/}
        {/*</Switch>*/}
        <Footer />
      </div>
    );
  }
}
export default Main;
