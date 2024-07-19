import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { FormControl } from "@mui/material"
import { TextField } from "@mui/material"
import { Button } from "@mui/material"
import ListData from './ListData'
import { useDispatch } from 'react-redux'
import { creteListData } from '../Redux/ListItemsData/Action'


const Form = () => {

    const [listItems, setListItems] = useState({ title: "", description: "" })
    const dispatch = useDispatch()
    
    function handleChange(e){
        setListItems({...listItems,[e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(creteListData(listItems))
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={8} md={1}></Grid>

                <Grid item xs={8} md={4} align="center">
                    <h2><u>Enter Data</u></h2>


                    <FormControl>

                        <TextField label="Title"
                            variant='outlined'
                            sx={{ mt: 4 }}
                            value={listItems.title}
                            onChange={handleChange}
                            name="title"
                            size="small"></TextField>

                        <TextField label="Description"
                            variant='outlined'
                            sx={{ mt: 2 }}
                            value={listItems.description}
                            onChange={handleChange}
                            name="description"
                            size="small"></TextField>

                        <Button variant="contained"
                            size="large"
                            type="submit"
                            onClick={handleSubmit}
                            sx={{ mt: 2, fontWeight: 600 }}>
                            SUBMIT
                        </Button>
                    </FormControl>

                </Grid>

                <Grid item xs={8} md={7} align="center">
                    <ListData />
                </Grid>
            </Grid>
        </>
    )
}

export default Form