import React, { Component } from "react";
import {Card, CardTitle, CardBody, CardText } from 'reactstrap';
// import {STAFFS} from "../shared/staffs";

class StaffList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedStaff : null //Ban đầu chưa chọn vào bất kỳ nhân viên nào.
    }
  }
  onStaffSelected(names){
    this.setState({selectedStaff: names})
  }
  renderStaff(names){
    if(names != null){
      return(
        <Card>
          <CardBody>
            <CardTitle>Họ và tên: {names.name}</CardTitle>
            <CardText>Ngày sinh: {names.doB}</CardText>
            <CardText>Ngày vào công ty: {names.startDate}</CardText>
            <CardText>Phòng ban: {names.department}</CardText>
            <CardText>Số ngày nghỉ còn lại: {names.annualLeave}</CardText>
            <CardText>Số ngày đã làm thêm: {names.overTime}</CardText>
          </CardBody>
        </Card>
      )
    }
    else{
      return(
        <div> </div>
      );
    }
  }
  render() {
    const menu = this.props.staffs.map((names) => {
      return (
        <div key={names.id} className="col-12 col-md-4 m-1">
          <Card onClick= {() => this.onStaffSelected(names) //onClick: khi click vào tên nhân viên sẽ thực hiện lệch
          }>
            {/*<CardImg width="100%" src={names.image} alt={names.name}/>*/}
            <CardTitle>{names.name}</CardTitle>
          </Card>
        </div>
      );
    })
    return(
      <div className="container">
        <div className="row">
            {menu}
        </div>
        <div className="row">
          {this.renderStaff(this.state.selectedStaff)}
        </div>
      </div>
    )
  }

}
export default StaffList;
