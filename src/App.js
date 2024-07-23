import React from "react";
import Form from "./Components/Form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Form/>
      <ToastContainer/>
    </>
  );
}

export default App;
