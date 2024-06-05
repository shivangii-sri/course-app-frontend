import axios from "axios";
import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
    Toast
} from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

function Course({ course }){

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("course deleted");
            },
            (error)=>{
                toast.error("couldn't be deleted !! server problem");
            }
        );
    };

    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="fw-bold">{ course.title }</CardSubtitle>
                <CardText>{ course.description }</CardText>

                <Container>
                    <Button color="danger"
                    onClick={() => {
                        deleteCourse(course.id);
                    }}
                    >Delete</Button>
                    <Button color="warning" style={{marginLeft: 20}}>Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}
export default Course;