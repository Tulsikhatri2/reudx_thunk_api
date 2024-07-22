import React, {useEffect} from 'react'
import { Box, List } from "@mui/material"
import { useSelector, useDispatch } from 'react-redux'
import { Typography } from "@mui/material"
import { deleteListData, editListData } from '../Redux/ListItemsData/Action'
import { fetchData } from '../Redux/ListItemsData/Action'

const ListData = () => {

  const { list } = useSelector(state => state.crud)
  const dispatch = useDispatch()

  console.log(list, "from ListData")

  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])

  function editData(list) {
   dispatch(editListData(list))
  }

  function deleteData(_id) {
    dispatch(deleteListData(_id))
  }

  if (!list || list.length === 0) {
    return <h2>No Data Yet</h2>
  }
  return (
    <>
      <List>
        {
          list.map((item) => {
            return (

              <List key={item._id} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box>
                  <Typography variant='h5'> {item.title}</Typography>
                  <Typography variant='h6'> {item.description}</Typography>
                </Box>
                <Box>
                  < button onClick={() => editData(item)}> Edit</button>
                  < button onClick={() => deleteData(item._id)}> Delete</button>
                </Box>
              </List>
              
            )
          })
        }
      </List >
    </>
  )
}

export default ListData