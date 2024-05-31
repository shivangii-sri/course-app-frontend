import "./App.css";
import { Button } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Home from "./components/Home";
import Course from "./components/Course";
import AllCourses from "./components/AllCourses";
import AddCourse from "./components/AddCourse";

function App() {

  const btnHandle = () =>
  {
    toast("this is my first message using toastify");
  };
  return (
    <div>
      <Home />
      <AllCourses/>
      
      {/* <Course course={ {title:"Django Course" , description:"This is just testing"}}/>
      <Course course={ {title:"Java Course" , description:"This is a Java Course"}}/> */}
      
      <AddCourse></AddCourse>
    </div>
  );
}

export default App;
