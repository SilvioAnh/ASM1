import React, { Component } from "react";
import {Card, CardTitle, CardText, CardImg} from 'reactstrap';
import dateFormat from 'dateformat'

class StaffList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedStaff : null,
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
        <div/>
      );
    }
  }
  render() {
    const menu = this.props.staffs.map((names) => {
        return (
          <div key={names.id} className="col-2 mt-2 mb-2">
            <Card onClick={() => this.onStaffSelected(names)}>
              <CardImg width="100%" src={names.image} alt={names.name}/>
              <CardTitle className="m-auto">{names.name}</CardTitle>
            </Card>
          </div>
        );
    })
    return(
      <React.Fragment>
        <div className="container">
        <div className="row">
          {menu}
        </div>
        <div className="row">
          {this.renderStaff(this.state.selectedStaff)}
        </div>
      </div>
    </React.Fragment>
    )
  }
}
export default StaffList;
