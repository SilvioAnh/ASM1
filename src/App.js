import React, { Component } from "react";
import Main from "./component/MainStaffComponent";
import './App.css';
import { STAFFS } from "./shared/staffs";

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
        <Main staffs = {this.state.staffs} />
      </div>
    );
  }
}
export default App;
