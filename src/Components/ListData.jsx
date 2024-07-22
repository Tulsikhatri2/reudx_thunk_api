import React from 'react'
import {  List } from "@mui/material"
import ListItemData from './ListItemData'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchData } from '../Redux/ListItemsData/Action'

const ListData = () => {

  const { list } = useSelector(state => state.crud)
  console.log(list)
  const dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(fetchData())
  // },[dispatch])

  // function showData() {
  //   dispatch(fetchData())
  // }
 

if(!list||list.length==0){
  return <h2>ToDo Not Yet</h2>
}
  return (
    <>
      <List>
        {
         list.map((item, index) => {
            return (
              <ListItemData key={item._id}  item={item} index={index}/>
            )
          })
        }
      </List >
    </>
  )
}

export default ListData