import React from "react";
import {Card, CardText, CardTitle} from "reactstrap";

function Depart({department}){
    const vitri= department.map((depars)=>{
        return(
            <div key={depars.id} className="col-12 col-lg-3 col-md-5 ml-5 mt-3">
                  <Card>
                    <CardTitle className="ml-1 mb-2">{depars.name}</CardTitle>
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
        <div>
            <Depart department={props.departments}/>
        </div>
    )
}

export default Department;