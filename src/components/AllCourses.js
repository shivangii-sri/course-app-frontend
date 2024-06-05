import React, { useState, useEffect} from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

function AllCourses(){

    useEffect(()=>{
       document.title="All Courses" 
    }, []);

    const [courses, setCourses] = useState([]);

    //function to call server
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                //Success
                console.log(response.data);
                toast.success("courses has been loaded" , {position: "bottom-left"});
                setCourses(response.data);
            },
            (error) => {
                //for error
                console.log(error);
                toast.error("something went wrong");
            }
        );
    }

    //calling loading course function
    useEffect( () => {
        getAllCoursesFromServer();
    } , []);  //we use [] so that the fucntion gets called ony once and not everytime the component loads

   

    return (
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows</p>

            {
                courses.length > 0 
                ? courses.map((item) => <Course key={item.id} course = {item} />) 
                : "No courses"
            }
        </div>
    )
}
export default AllCourses;