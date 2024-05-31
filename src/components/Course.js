import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from "reactstrap";

function Course({ course }){
    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="fw-bold">{ course.title }</CardSubtitle>
                <CardText>{ course.description }</CardText>

                <Container>
                    <Button color="danger">Delete</Button>
                    <Button color="warning" style={{marginLeft: 20}}>Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}
export default Course;