import "./App.css";
import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Header from "./components/Header";
import Menus from "./components/Menus";
import Home from "./components/Home";

function App() {
  // const btnHandle = () =>
  // {
  //   toast("this is my first message using toastify");
  // };
  return (
    <div>
      <ToastContainer />

        <Container>

          
          <Header></Header>

          <Row>
            <Col md={4}>
              <Menus></Menus>
            </Col>

            <Col md={8}>
              <Home></Home>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
