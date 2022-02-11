import React, { Component } from "react";
import {Card, CardTitle, CardText } from 'reactstrap';
// import {STAFFS} from "../shared/staffs";
import dateFormat from 'dateformat'
//import {DEPARTMENTS} from "../shared/staffs";

class StaffList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedStaff : null ,
    }
  }
  onStaffSelected(names){
    this.setState({selectedStaff: names})
  }
  renderStaff(names){
    if(names != null){
      return(
        <Card className="card1">
            <CardTitle>Họ và tên: {names.name}</CardTitle>
            <CardText>Ngày sinh: {dateFormat(names.doB, "dd/mm/yyyy")}</CardText>
            <CardText>Ngày vào công ty: {dateFormat(names.startDate, "dd/mm/yyyy")}</CardText>
            <CardText>Phòng ban: {names.department.name}</CardText>
            <CardText>Số ngày nghỉ còn lại: {names.annualLeave}</CardText>
            <CardText>Số ngày đã làm thêm: {names.overTime}</CardText>
        </Card>
      )
    }
    else{
      return(
        <div className="card2">Bấn vào tên nhân viên để xem thông tin</div>
      );
    }
  }
  render() {
    const menu = this.props.staffs.map((names) => {
      return (
        <div key={names.id} className="col-lg-3 col-md-4 m-1">
          <Card onClick = {() => this.onStaffSelected(names)}>
            <CardTitle>{names.name}</CardTitle>
          </Card>
        </div>
      );
    })
    // const thaydoicot = this.props.staffs.map((names)=>{
    //   return(
    //     <div key={names.id} className="col-lg-1 col-md-3 m-1">
    //       <Card onClick={()=> this.thaydoicot}>
    //
    //       </Card>
    //     </div>
    //   );
    // })
    return(
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div className="row">
          {this.renderStaff(this.state.selectedStaff)}
        </div>
        {/*<Card onClick = {() => {this.thaydoicot(names)}}>*/}
        {/*  <CardTitle>Thay đổi cột</CardTitle>*/}
        {/*</Card>*/}
      </div>
    )
  }
}
export default StaffList;
