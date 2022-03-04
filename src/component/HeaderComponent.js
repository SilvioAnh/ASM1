import React, {Component} from "react"
import {Navbar, NavbarBrand, NavItem, Collapse, Nav} from "reactstrap";
import { NavLink} from "reactstrap";

class Hearder extends Component{
  constructor(props) {
    super(props);
    this.state={

    }
  }
  isNavOpen(){
  }
  // tongleNav(){
  //
  // }
  render(){
    return(
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            {/*<NavbarToggler onClick = {this.toggleNav}/>*/}
            <NavbarBrand className="mr-auto" href="/">
              <img src="logo192.png" height="40" width="41"
                   alt="Ứng dụng thông minh"/>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"/> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"/> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"/> Menu
                  </NavLink>
                </NavItem> <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"/> Contact Us
                </NavLink>
              </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    )
  }
}
export default Hearder;
