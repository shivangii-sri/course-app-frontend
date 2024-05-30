import logo from "./logo.svg";
import "./App.css";
import { Button } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const btnHandle = () =>
  {
    toast("this is my first message using toastify");
  };
  return (
    <div>
      <ToastContainer />
        <h1>This is bootstarp component</h1>
        <Button color="success" onClick={btnHandle}> First React button </Button>
    </div>
  );
}

export default App;
