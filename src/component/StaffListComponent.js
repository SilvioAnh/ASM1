import React, { Component } from "react";
import {Card, CardTitle, CardImg} from 'reactstrap';
import {Link} from "react-router-dom";

class StaffList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            selectedStaff : null,
            onCol:"col-5 col-lg-2 col-md-3 m-3",
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
                        <Link to={`/staff/${names.id}`} >
                            <CardImg width="100%" src={names.image} alt={names.name} />
                            <CardTitle className="m-auto text-center color">{names.name}</CardTitle>
                        </Link>
                    </Card>
                </div>
            );
        })
        return(
            <div className="container">
                <div className="row m-3">
                    <h3>Nhân Viên</h3>
                </div>
                <hr />
                <div className="row m-3">
                    <button className="btn btn-success mr-3"
                            onClick={()=> this.onColSelected(this.state.isToggle?
                                this.setState({onCol:"col-12 col-lg-3 col-md-4 m-3"}):
                                this.setState({onCol:"col-5 col-lg-2 col-md-3 m-3"}))}>
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

