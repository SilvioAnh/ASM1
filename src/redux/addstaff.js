import React, { Component} from "react";
import {Col,Button,Modal,ModalHeader,ModalBody,Label,Row,Input,Form,FormFeedback} from "reactstrap";



class AddStaff extends Component{
    constructor(props) {
        super(props);
        this.toggleModal= this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBlur=this.handleBlur.bind(this)
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
            errors:{
                name:'',
                doB:'',
                startDate:'',
            }
         };
    }
    toggleModal(){
        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    }
    handleSubmit(e){
        // if(this.validate()){
        //     this.state()
        // }
        e.preventDefault();
        console.log(e)
    }
    handleInputChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        })
    }
    handleBlur = (field) =>()=>{
        this.setState({ touched: { ...this.state.touched, [field]: true}})
        console.log(field)
    }
    validate(name, doB, startDate){
        const errors={
            name:'',
            doB:'',
            startDate:'',
        }
        if(this.state.touched.name && name.length === 0){
            errors.name = "Hãy cập nhật tên"
        }
        else if(this.state.touched.name &&  name.length<3){
            errors.name = "Hãy nhập từ 3 ký tự trở lên"
        }
        else if(this.state.touched.name &&  name.length>30){
            errors.name = "Hãy nhập ít hơn 30 ký tự"
        }

        const reg=/^\d{1,2}\/\d{1,2}\/\d{4}$/
        if(this.state.touched.doB && !reg.test(doB) && doB.length===0){
            errors.doB="Hãy cập nhật ngày sinh"
        }

        if(this.state.touched.startDate && !reg.test(startDate) && startDate.length===0){
            errors.startDate = "Hãy cập nhập ngày vào công ty"
        }

        return errors;

    }
    render() {
        const errors= this.validate(this.state.name, this.state.doB, this.state.startDate)
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
                        <Form onSubmit={this.handleSubmit}>
                            <Row className="form-group">
                                <Label htmlFor="name" md={5}>Tên</Label>
                                <Col md={7}>
                                    <Input type="text" id="name" name="name"
                                           value= {this.state.name}
                                           valid={errors.name === ''}
                                           invalid={errors.name!== ''}
                                           onBlur={this.handleBlur('name')}
                                           onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="doB" md={5}>Ngày sinh</Label>
                                <Col md={7}>
                                    <Input  type="date" dateFormat={"dd/mm/yyyy"} id="doB" name='doB'
                                            value= {this.state.doB}
                                            valid={errors.doB === ''}
                                            invalid={errors.doB!== ''}
                                            onBlur={this.handleBlur('doB')}
                                            onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.doB}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="startDate" md={5}>Ngày vào công ty</Label>
                                <Col md={7}>
                                    <Input type="date" name="startDate"
                                           value= {this.state.startDate}
                                           valid={errors.startDate === ''}
                                           invalid={errors.startDate !== ''}
                                           onBlur={this.handleBlur('startDate')}
                                           onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.startDate}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="department" md={5}>Phòng ban</Label>
                                <Col md={7}>
                                    <Input type="select" id="department" name="department"
                                           value= {this.state.department}
                                           onChange={this.handleInputChange}>
                                        <option>Sale</option>
                                        <option>HR</option>
                                        <option>Marketing</option>
                                        <option>IT</option>
                                        <option>Finance</option>
                                    </Input>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="salaryScale" md={5}>Hệ số lương</Label>
                                <Col md={7}>
                                    <Input type="text" id="salaryScale" name="salaryScale" className="form-control"
                                           value= {this.state.salaryScale}
                                           onChange={this.handleInputChange}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="annualLeave" md={5}>Số ngày nghỉ còn lại</Label>
                                <Col md={7}>
                                    <Input type="text" id="annualLeave" name="annualLeave" className="form-control"
                                           value= {this.state.annualLeave}
                                           onChange={this.handleInputChange}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="overTime" md={5}>số ngày đã làm thêm</Label>
                                <Col md={7}>
                                    <Input type="text" id="overTime" name="overTime" className="form-control"
                                           value= {this.state.overTime}
                                           onChange={this.handleInputChange}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset:5}}>
                                    <Button type="submit" color="primary"  > Thêm </Button>
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}
export default AddStaff;