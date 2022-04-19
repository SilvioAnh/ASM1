import React, { Component } from "react";
import {Card, CardTitle, CardImg} from 'reactstrap';
import {Link} from "react-router-dom";
import SearchItem from "../redux/searchItem";
import AddStaff from "../redux/addstaff";

class StaffList extends Component{
    constructor(props) {
        super(props);
        this.handleSearch= this.handleSearch.bind(this);
        this.state = {
            selectedStaff : null,
            onCol:"col-5 col-lg-2 col-md-3 mt-3",
            isToggle : true,
            staff01: this.props.staffs,
            valueSearch : ''
        }
    }
    onColSelected(){
        this.setState({isToggle: !this.state.isToggle})
    }
    // nhân viên sale
    staffAll(){
        this.setState( {staff01 : this.props.staffs})
    }
    staffSale(){
          this.setState( {staff01 : this.props.staffs.filter((names) => names.department.name === "Sale" )})
    }
    staffHr(){
        this.setState( {staff01 : this.props.staffs.filter((names) => names.department.name === "HR" )})
    }
    staffMarketing(){
        this.setState( {staff01 : this.props.staffs.filter((names) => names.department.name === "Marketing" )})
    }
    staffIt(){
        this.setState( {staff01 : this.props.staffs.filter((names) => names.department.name === "IT" )})
    }
    staffFinance(){
        this.setState( {staff01 : this.props.staffs.filter((names) => names.department.name === "Finance" )})
    }
    handleSearch(search){
        this.setState({
            valueSearch: search
        })
    }
    render() {
        let dataOrigin = this.state.staff01;
        let listNew= [];
        const search = this.state.valueSearch;
        if(search.length > 0){
                dataOrigin.forEach((item)=>{
                    if(item.name.toLowerCase().indexOf(search) !== -1){
                        listNew.push(item)
                    }
                })
        }
         else{
            listNew=dataOrigin
        }
        const menu = listNew.map((names) => {
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
                    <h3 className="row col-9 col-lg-3 col-md-4 mb-2">Nhân Viên</h3>
                    <AddStaff />
                    <SearchItem searchStaff={ this.state.valueSearch}
                                handleSearch={ this.handleSearch}/>
                </div>
                <hr />
                <div className=" row mb-4 ">

                </div>
                <div className="row ">
                    <div className="col-12">
                        <button className="btn btn-success m-2"
                                onClick={()=> this.onColSelected(this.state.isToggle?
                                    this.setState({onCol:"col-12 col-lg-3 col-md-4 mt-3"}):
                                        this.setState({onCol:"col-5 col-lg-2 col-md-3 mt-3"}))}>
                            Điều chỉnh cột
                        </button>
                        <button className="btn btn-success m-2"
                                onClick={()=> this.staffAll(this.state.staff01)}>
                            Toàn bộ nhân viên
                        </button>
                        <button className="btn btn-success m-2"
                                onClick={()=> this.staffSale(this.state.staff01)}>
                            Sale
                        </button>
                        <button className="btn btn-success m-2"
                                onClick={()=> this.staffHr(this.state.staff01)}>
                            HR
                        </button>
                        <button className="btn btn-success"
                                onClick={()=> this.staffMarketing(this.state.staff01)}>
                            Marketing
                        </button>
                        <button className="btn btn-success m-2"
                                onClick={()=> this.staffIt(this.state.staff01)}>
                            IT
                        </button>
                        <button className="btn btn-success m-2"
                                onClick={()=> this.staffFinance(this.state.staff01)}>
                            Finance
                        </button>
                    </div>

                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        )
    }
}
export default StaffList;

