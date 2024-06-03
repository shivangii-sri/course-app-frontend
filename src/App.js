import "./App.css";
import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Header from "./components/Header";
import Menus from "./components/Menus";

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
              <h2>This is Content side</h2>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
