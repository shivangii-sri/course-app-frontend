import "./App.css";
import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Header from "./components/Header";
import Menus from "./components/Menus";
import Home from "./components/Home";
import AllCourses from "./components/AllCourses";
import AddCourse from "./components/AddCourse";
import {  BrowserRouter as Router,Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />

        <Container>          
          <Header></Header>

          <Row>
            <Col md={4}>
              <Menus></Menus>
            </Col>

            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home/>} exact />
                <Route path="/add-course" element={<AddCourse/>} exact />
                <Route path="/view-course" element={<AllCourses/>} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
