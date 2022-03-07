import React, { Component } from "react";
import {Card, CardTitle, CardImg} from 'reactstrap';
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";


function TinhLuong({names}) {

    return(
        3000000+200000*names.overTime*names.salaryScale
    )
}
class StaffList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            selectedStaff : null,
            onCol:"col-12 col-lg-4 col-md-5 mt-3",
            isToggle : false,
        }
    }
    onColSelected(){
        this.setState({isToggle: !this.state.isToggle})
    }

    render() {

        const menu = this.props.staffs.map((names) => {
            return (
                <div key={names.id} className={this.state.onCol}>
                    <Card>
                        <div className="row">
                            <div className="col-6">
                                <CardImg width="100%" src={names.image} alt={names.name} />
                                <CardTitle className="m-auto text-center color">{names.name}</CardTitle>
                            </div>
                            <div className=" col-6 mt-2">
                                <p>Mã nhân viên: {names.id}</p>
                                <p>Hệ số lương: {names.salaryScale}</p>
                                <p>Số ngày làm thêm: {names.overTime}</p>

                            </div>
                            <div className="col-12">
                                <Card className="text-center">Lương: <TinhLuong names={names}/> </Card>
                            </div>
                        </div>
                    </Card>
                </div>
            );
        })
        return(
            <div className="container">
                <div className="row m-3">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/staff">Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <hr />
                <div className="row m-3">
                    <button className="btn btn-success mr-3"
                            onClick={()=> this.onColSelected(this.state.isToggle?
                                this.setState({onCol:"col-12 col-lg-4 col-md-5 mt-3"}):
                                this.setState({onCol:"col-12 col-lg-5 col-md-12 mt-3"}))}>
                        Điều chỉnh cột
                    </button>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        )
    }
}
export default StaffList;

