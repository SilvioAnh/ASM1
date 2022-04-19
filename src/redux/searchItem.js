// than khảo https://kentrung256.blogspot.com/2018/03/reactjs-co-ban-b9-search-item.html
// https://www.youtube.com/watch?v=NfzT46L38Cg
import React, {Component} from "react";
import {Button,Input, Col} from "reactstrap";

class SearchItem extends Component{
    render() {
        return(
            <Col className="row col-12 col-lg-6 col-md-6" >
                <Input className="col-8 col-lg-6 col-md-6" type="text" name="text" placeholder="Nhập tên nhân viên"
                innerRef={input=> {this.searchStaff= input}}
                 />
                <Button className="ml-2" color="primary" onClick={()=>this.props.handleSearch(this.searchStaff.value)} >Tìm</Button>
            </Col>
        )
    }

}
export default SearchItem;