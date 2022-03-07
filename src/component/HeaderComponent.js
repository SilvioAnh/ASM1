import React, {Component} from "react"
import {Navbar, NavbarBrand, NavItem, Collapse, Nav, NavbarToggler} from "reactstrap";
import { NavLink} from "react-router-dom";

class Hearder extends Component{
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav(){
    this.setState({
      isNavOpen : !this.state.isNavOpen
    })

  }
  render(){
    return(
        <React.Fragment>
          <Navbar dark expand="md">
            <div className="container" >
              <NavbarToggler onClick = {this.toggleNav}/>
              <NavbarBrand className="mr-auto" href="/">
                <img src="assets/images/logo.png" height="30" width="41"
                     alt="Ứng dụng thông minh"/>
              </NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink className="nav-link" to="/staff">
                      <span className="fa fa-users" aria-hidden="true"/> Nhân Viên
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/department">
                      <span className="fa fa-address-card-o" aria-hidden="true"/>Phòng Ban
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/payroll">
                      <span className="fa fa fa-money" aria-hidden="true"/> Bảng Lương
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