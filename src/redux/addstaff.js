import React, { Component} from "react";
import {Col,Button,Modal,ModalHeader,ModalBody,Label,Row} from "reactstrap";
import {LocalForm, Control, Errors} from "react-redux-form";
import DatePick from "./datepick";

const required = val =>val && val.length;
//const lengthText = len => val =>  (val.length) === 0;
const maxLength = (len) => (val)=> !(val) || (val.length<=len);
const minLength = (len) => (val)=> !(val) || (val.length>=len);
const isDate= (val) =>/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/.test(val)

class AddStaff extends Component{
    constructor(props) {
        super(props);
        this.toggleModal= this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        //this.handleInputChange=this.handleInputChange.bind(this);
       // this.handleBlur=this.handleBlur.bind(this)
        this.state={
            name: '',
            doB: '',
            salaryScale: '',
            startDate: '',
            department: '',
            annualLeave: "",
            overTime: "",
            salary: "",
            image: '/assets/images/alberto.png',
            isOpenModal: false,
            touched:{
                name:false,
                doB:false,
                startDate:false,
            },
         };
    }
    toggleModal(){
        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    }
    handleSubmit(value){
            console.log("Current State is: " + JSON.stringify(value));
            alert("Current State is: " + JSON.stringify(value));


    }
    // handleInputChange(event){
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     this.setState({
    //         [name] : value
    //     })
    //
    // }
    // handleBlur = (field) =>()=>{
    //     this.setState({ touched: { ...this.state.touched, [field]: true}})
    //     console.log(field)
    // }
    // validate(name, doB, startDate){
    //     const errors={
    //         name: this.state.name,
    //         doB:this.state.doB,
    //         startDate:this.state.startDate,
    //     }
    //     if(!this.state.touched.name && name.length === 0){
    //         errors.name = "Hãy cập nhật tên"
    //     }
    //     else if(this.state.touched.name &&  name.length<3){
    //         errors.name = "Hãy nhập từ 3 ký tự trở lên"
    //     }
    //     else if(this.state.touched.name &&  name.length>30){
    //         errors.name = "Hãy nhập ít hơn 30 ký tự"
    //     }
    //
    //     const reg=/^\d{1,2}\/\d{1,2}\/\d{4}$/
    //     if(this.state.touched.doB && !reg.test(doB) && doB.length===0){
    //         errors.doB="Hãy cập nhật ngày sinh"
    //     }
    //
    //     if(this.state.touched.startDate && !reg.test(startDate) && startDate.length===0){
    //         errors.startDate = "Hãy cập nhập ngày vào công ty"
    //     }
    //     this.setState()
    //     return errors;

    render() {
        //const errors= this.validate(this.state.name, this.state.doB, this.state.startDate)
        return(
            <React.Fragment>
                <Col className="row col-2 col-lg-3 col-md-3 mb-2 " >
                    <Button color="primary" outline
                            onClick={this.toggleModal}>
                        <spam  class="fa fa-plus" aria-hidden="true"/></Button>
                </Col>

                <Modal isOpen={this.state.isOpenModal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Thêm nhân viên
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(value)=>this.handleSubmit(value)}>
                            <Row className="form-group">
                                <Label htmlFor="name" md={5}>Tên</Label>
                                <Col md={7}>
                                    <Control.text model=".name" id="name" name="name" className="form-control"
                                                  placeholder="Tên nhân viên"
                                          validators = {{
                                                required,
                                              //lengthText: lengthText(0),
                                                minLength:minLength(3),
                                                maxLength:maxLength(30)
                                          }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages = {{
                                            required: 'Hãy cập nhật tên nhân viên',
                                            minLength: "Tên nhân viên phải từ 3 ký tự trở lên",
                                            maxLength: "Tên nhân viên không được quá 30 ký tự",
                                        }}
                                    />

                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="doB" md={5}>Ngày sinh</Label>
                                <Col md={7}>
                                    <Control.text  model=".doB" id="doB" name='doB' className="form-control"
                                                   component={DatePick}
                                                   placeholder="dd/mm/yyyy"
                                                   validators = {{
                                                      isDate:isDate()
                                                   }}
                                    />

                                    <Errors
                                        className="text-danger"
                                        model=".doB"
                                        show="touched"
                                        messages = {{

                                            isDate: 'Hãy cập nhật ngày sinh của nhân viên',

                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="startDate" md={5}>Ngày vào công ty</Label>
                                <Col md={7}>
                                    <Control.text model=".startDate" name="startDate" className="form-control"
                                                  placeholder="dd/mm/yyyy"
                                                  component={DatePick}
                                                  validators={{
                                                      isDate
                                                   }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".startDate"
                                        show="touched"
                                        messages={{

                                            isDate: 'Hãy cập nhật ngày bắt đầu vào công ty'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="department" md={5}>Phòng ban</Label>
                                <Col md={7}>
                                    <Control.select model=".department" id="department" name="department" className="form-control">
                                        <option>Hãy chọn bộ phân</option>
                                        <option>Sale</option>
                                        <option>HR</option>
                                        <option>Marketing</option>
                                        <option>IT</option>
                                        <option>Finance</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="salaryScale"   md={5}>Hệ số lương</Label>
                                <Col md={7}>
                                    <Control.text model=".salaryScale" id="salaryScale" name="salaryScale" className="form-control"
                                                  placeholder="Nhập hệ số lương"
                                        // value= {this.state.salaryScale}
                                           // onChange={this.handleInputChange}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="annualLeave"   md={5}>Số ngày nghỉ còn lại</Label>
                                <Col md={7}>
                                    <Control.text model=".annualLeave" id="annualLeave" name="annualLeave" className="form-control"
                                                  placeholder="Nhập số ngày nghỉ"
                                        // value= {this.state.annualLeave}
                                           // onChange={this.handleInputChange}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="overTime"   md={5}>số ngày đã làm thêm</Label>
                                <Col md={7}>
                                    <Control.text  model=".overTime" id="overTime" name="overTime" className="form-control"
                                                   placeholder="nhập số ngày làm thêm"
                                           // value= {this.state.overTime}
                                           // onChange={this.handleInputChange}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset:5}}>
                                    <Button type="submit" color="primary"> Thêm </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }

}
export default AddStaff;