import React from "react";
import {Breadcrumb, BreadcrumbItem, Card, CardText, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";

function Depart({department}){
    const vitri= department.map((depars)=>{
        return(
            <div key={depars.id} className="col-12 col-lg-4 col-md-5 mt-3">
                  <Card>
                    <CardTitle className=" mb-2 mt-3">{depars.name}</CardTitle>
                    <CardText className="ml-3 mb-3"> Số lượng nhân viên: {depars.numberOfStaff}</CardText>
                  </Card>
            </div>
        )
    })
    return(
        <div className="row">
            {vitri}
        </div>
    )
}
function Department(props){

    return(
        <div className="container">
            <div className="row mt-3">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/staff">Nhân Viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row mt-3">
                <Depart department={props.departments}/>
            </div>
        </div>
    )
}

export default Department;