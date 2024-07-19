import React from 'react'
import { ListItem } from '@mui/material'
import { Box } from "@mui/material"
import { Typography } from "@mui/material"
import { deleteListData } from '../Redux/ListItemsData/Action'
import { useDispatch } from 'react-redux'
import axios from 'axios'


const ListItemData = ({ item, index }) => {

  // const {list} = useSelector(state=>state.crud)
  const dispatch = useDispatch()

  function deleteData(_id) {
    dispatch(deleteListData(_id))
  }

  function updateData(_id){
    const response = axios.get("https://listtimes.onrender.com/api/todo")
    const oneData = response.data
    console.log(oneData)
  }

  return (
    <div>
      < ListItem sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box>
          <Typography variant='h5'> {item.title}</Typography>
          <Typography variant='h6'> {item.description}</Typography>
        </Box>

        <Box>
          < button onClick={() => updateData(item._id)}> edit</button>
          < button onClick={() => deleteData(item._id)}> delete</button>
        </Box>
      </ListItem >
    </div>
  )
}

export default ListItemData