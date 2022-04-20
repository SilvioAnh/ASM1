import React, {Component} from "react";
import {Modal, ModalBody, ModalHeader, Label, Col, Button} from "reactstrap";
import {Control, LocalForm} from "react-redux-form"
class CommentForm extends Component{
    constructor(props) {
        super(props);
        this.state={
            isModalComment: false,
        }
        this.tonggleModalComment= this.tonggleModalComment.bind(this);
    }
    tonggleModalComment(){
        this.setState({isModalComment : !this.state.isModalComment})
    }
    render() {
        return(
            <Modal isOpen={this}>
                <ModalHeader>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm>
                        <Col>
                            <Label>Rating</Label>
                            <Control.select model=".rating" id="rating" name="rating"
                                            className="form-control">
                                <option className="fa fa-star">1</option>
                                <option className="fa fa-star">2</option>
                                <option className="fa fa-star">3</option>
                                <option className="fa fa-star">4</option>
                                <option className="fa fa-star">5</option>
                            </Control.select>
                        </Col>
                        <Col>
                            <Label>Your Name</Label>
                            <Control.text model=".yourname" id="yourname" name="yourname"
                                          className="form-control" placeholder="Your Name"/>
                        </Col>
                        <Col>
                            <Label>Comment</Label>
                            <Control.texttarea model=".comment" id="comment"  name="comment" rows="10"/>
                        </Col>
                        <Col>
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                        </Col>
                    </LocalForm>
                </ModalBody>
            </Modal>
        )
    }
}
export default CommentForm;