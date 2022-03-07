import React from "react";
import {Card,CardImg,CardBody, Breadcrumb, BreadcrumbItem, CardTitle, CardText} from "reactstrap";
import {Link} from "react-router-dom";
import dateFormat from "dateformat";


function RenderName({staffs}){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-4 col-md-4 m-1">
                    <CardImg src={staffs.image} value={staffs.name}/>
                </div>
                <div className="col-12 col-lg-7 col-md-7 m-1">
                    <Card>
                        <CardBody>
                            <CardTitle>Họ và tên: {staffs.name}</CardTitle>
                            <CardText>Ngày sinh: {dateFormat(staffs.doB, "dd/mm/yyyy")}</CardText>
                            <CardText>Ngày vào công ty: {dateFormat(staffs.startDate, "dd/mm/yyyy")}</CardText>
                            <CardText>Phòng ban: {staffs.department.name}</CardText>
                            <CardText>Số ngày nghỉ còn lại: {staffs.annualLeave}</CardText>
                            <CardText>Số ngày đã làm thêm: {staffs.overTime}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}
function StaffDetail(props){
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/staff">Nhân Viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.staffs.name}</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                <RenderName staffs= {props.staffs}/>
            </div>
        </div>
    )
}
export default StaffDetail;