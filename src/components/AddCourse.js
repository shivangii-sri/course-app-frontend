import React, { Fragment } from "react"
import { Button, Container, Form, FormGroup, Input } from "reactstrap";

function AddCourse()
{
    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter here" name="userId" id="userId" />
                </FormGroup>

                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter title here" id="title"/>
                </FormGroup>

                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input 
                     type="textarea" 
                     placeholder="Enter description here" 
                     id="description"
                     style={{height:120}}
                    />
                </FormGroup>

                <Container className="text-center">
                    <Button color="success">Add Course</Button>
                    <Button color="warning" style={{marginLeft:20}}>Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default AddCourse;