import React from "react";
import Form from "./Components/Form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Grid } from "@mui/material";
import ListData from "./Components/ListData";

function App() {
  return (
    <>
     <Grid container spacing={2}>
     <Grid item md={1}></Grid>
     <Grid item md={4} sx={{ mt: 18 }} align="center">
      <Form/>
      </Grid>
      <Grid item md={7} align="center">
          <ListData />
        </Grid>
      </Grid>
      <ToastContainer/>
    </>
  );
}

export default App;
