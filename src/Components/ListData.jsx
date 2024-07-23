import React, { useEffect } from "react";
import { Box, Button, List } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { deleteListData, editListData } from "../Redux/ListItemsData/Action";
import { fetchData } from "../Redux/ListItemsData/Action";

const ListData = () => {
  const { list } = useSelector((state) => state.crud);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  function editData(list) {
    dispatch(editListData(list));
  }

  function deleteData(_id) {
    dispatch(deleteListData(_id));
  }

  if (!list || list.length === 0) {
    return <h2>No Data Yet</h2>;
  }
  return (
    <>
      <h2>
        <u>List Data</u>
      </h2>
      <List>
        {list.map((item) => {
          return (
            <List
              key={item._id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h6"> {item.title}</Typography>
                <Typography variant="h6"> {item.description}</Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ mx: 3 }}
                  onClick={() => editData(item)}
                >
                  Edit
                </Button>

                <Button
                  variant="contained"
                  color="error"
                  sx={{ mr: 9 }}
                  onClick={() => deleteData(item._id)}
                >
                  Delete
                </Button>
              </Box>
            </List>
          );
        })}
      </List>
    </>
  );
};

export default ListData;
