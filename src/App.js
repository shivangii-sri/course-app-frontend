import "./App.css";
import { Button } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Home from "./components/Home";

function App() {

  const btnHandle = () =>
  {
    toast("this is my first message using toastify");
  };
  return (
    <div>
      <Home />
      <p>This para is to check property of jumbotron</p>
    </div>
  );
}

export default App;
