import React, { Component } from "react";
import {Card, CardTitle, CardText, CardImg} from 'reactstrap';
import dateFormat from 'dateformat'

class StaffList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedStaff : null,
      onCol:"col-6 col-lg-2 col-md-4 m-3"
    }
  }
  onColSelected(col){
    this.setState({onCol: col})
  }
  onStaffSelected(names){
    this.setState({selectedStaff: names})
  }
  renderStaff(names){
    if(names != null){
      return(
        <Card>
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
          <div key={names.id} className={this.state.onCol}>
            <Card onClick={() => this.onStaffSelected(names)}>
              <CardImg width="100%" src={names.image} alt={names.name}/>
              <CardTitle className="m-auto">{names.name}</CardTitle>
            </Card>
          </div>
        );
    })
    return(
        <div className="container">
          <div className="row m-3">
            <button className="btn btn-success mr-3"
             onClick={()=> this.onColSelected("col-12 col-lg-3 col-md-4 m-3")}>
              Điều chỉnh cột
            </button>
          </div>
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
