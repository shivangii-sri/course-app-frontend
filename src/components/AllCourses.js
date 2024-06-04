import React, { useState } from "react";
import Course from "./Course";

function AllCourses(){
    const [courses, setCourses] = useState([
        {title:"Java Course" , description:"This is demo Java course"},
        {title:"Django Course" , description:"This is demo Django course"},
        {title:"React Course" , description:"This is a React course"}
    ])

    return (
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows</p>

            {
                courses.length > 0 
                ? courses.map((item) => <Course course = {item} />) 
                : "No courses"
            }

        </div>
    )
}
export default AllCourses;