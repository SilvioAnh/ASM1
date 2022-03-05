import React, {Component}from "react";
import {CardImg, Card, CardBody,CardTitle,CardText} from "reactstrap";

class DishDetail extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
    }

    renderDish(dish) {
        return (
            <div className="col-12 col-md-5 m-1">
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

    RenderComments(comments) {
        if (comments != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>
                                        -- {comment.author}, {comment.date}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        } else {
            return <div/>;
        }
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                        {this.RenderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        } else {
            return <div/>;
        }
    }
}
export default DishDetail;