import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { FormControl } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import ListData from "./ListData";
import { useDispatch, useSelector } from "react-redux";
import { createListData, updateListData } from "../Redux/ListItemsData/Action";

const Form = () => {
  const [listItems, setListItems] = useState({ title: "", description: "" });
  const { edit } = useSelector((state) => state.crud);
  const dispatch = useDispatch();

  const { title, description } = listItems;

  function handleChange(e) {
    e.preventDefault();
    setListItems({ ...listItems, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (edit.isEdit) {
      dispatch(
        updateListData({
          _id: edit.list._id,
          title,
          description,
        })
      );
    } else {
      dispatch(createListData(listItems));
    }
    setListItems({
      title: "",
      description: "",
    });
  }

  useEffect(() => {
    setListItems({
      title: edit.list.title,
      description: edit.list.description,
    });
  }, [edit]);

  return (
    <>
          <h2>
            <u>Enter Data</u>
          </h2>

          <FormControl>
            <TextField
              label="Title"
              variant="outlined"
              sx={{ mt: 4 }}
              value={listItems.title}
              onChange={handleChange}
              name="title"
              size="small"
            ></TextField>

            <TextField
              label="Description"
              variant="outlined"
              sx={{ mt: 2 }}
              value={listItems.description}
              onChange={handleChange}
              name="description"
              size="small"
            ></TextField>

            {!edit.isEdit ? (
              <Button
                variant="contained"
                size="large"
                type="submit"
                onClick={handleSubmit}
                sx={{ mt: 2, fontWeight: 600, fontSize: 13 }}
              >
                SUBMIT
              </Button>
            ) : (
              <Button
                variant="contained"
                color="warning"
                size="large"
                type="submit"
                onClick={handleSubmit}
                sx={{ mt: 2, fontWeight: 600, fontSize: 13 }}
              >
                UPDATE
              </Button>
            )}
          </FormControl>
    </>
  );
};

export default Form;
