import React, {Component} from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
Input, Modal, ModalHeader, ModalBody, Label, Col,  Button} from 'reactstrap';
import {Control, LocalForm, Errors} from "react-redux-form"
import { Link } from 'react-router-dom';

    function  RenderDish({dish}) {
        return (
            <div>
                <Card>
                    <CardImg width="100%" src={dish.image} value={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    function RenderComments({comments}) {
        if (comments != null) {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>
                                        -- {comment.author},
                                        {new Intl.DateTimeFormat('en-US',
                                            { year: 'numeric', month: 'short', day: '2-digit'}).format(
                                                new Date(Date.parse(comment.date)))
                                        }
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="row">
                        <Button>
                            <span className="fa fa-pencil"/> Submit Comment
                        </Button>
                    </div>

                </div>
            );
        } else {
            return <div/>;
        }
    }
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
    function DishDetail(props) {
        if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return <div/>;
        }
}
export default DishDetail;