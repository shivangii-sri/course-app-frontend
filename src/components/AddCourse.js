import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Toast } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

function AddCourse() {
  useEffect(() => {
    document.title = "Add Courses";
  }, []);

  const [course, setCourse] = useState({});

  //form handler function
  const handleForm = (e) => {
    console.log(course);
    addCourseToServer(course);
    e.preventDefault();
  };

  //creating function to post data to server
  const addCourseToServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("Course has been added successfully");
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("something went wrong");
      }
    );
  };

  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Course Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label for="userId">Course Id</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label for="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter title here"
            id="title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label for="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 120 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>

        <Container className="text-center">
          <Button type="submit" color="success">
            Add Course
          </Button>
          <Button type="reset" color="warning" style={{ marginLeft: 20 }}>
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
}

export default AddCourse;
