import React, { useState } from 'react'
import { Grid, TextField, Button, Typography } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact, updateContact } from "../Redux/slice/Todo.Reducer";
// import UpdateForm from './UpdateForm';
import AddIcon from '@mui/icons-material/Add';

import Checkbox from '@mui/material/Checkbox';

import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const HomeHeader = () => {

    const emptyForm = { id: Math.floor(Math.random() * 1000), title: "" }
    const [form, setForm] = useState(emptyForm)
    const [edit, setEdit] = useState(false)
    const [text, setText] = useState(form);


    const data = useSelector(state => state.Todo)

    const dispatch = useDispatch()


    const handleDelete = (id) => {
        dispatch(deleteContact(id))
    }

    const ClearInput = () => {
        setForm(emptyForm)
    }

    const handleChange = (e) => {
        setForm({ ...form, title: e.target.value })
    }
    const handleSubmit = (e) => {
        if (form.title !== '') {
            e.preventDefault()
            dispatch(addContact(form))
            setText(form)
            ClearInput()
        } else {
            alert('Please Enter your Todo')
        }

    }
    const handleChangeEdit = (e) => {
        setText({ ...text, title: e.target.value })
    }
    const handleUpdate = () => {
        if (text.title !== '') {
            setEdit(true)
            dispatch(updateContact(text))

        } else {
            alert('Please Update Your Todo or Cancel It')
        }

    }



    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    return (
        <Grid borderRadius={2.5} bgcolor={'#333'} boxShadow={10} width={'50%'} margin='auto' container justifyContent={'center'} alignItems={"center"} gap={5} mt={5}>
            {
                edit === true ?
                    <Grid >
                        <Grid pt={5} pb={5}>
                            <Typography color={"#ffffff"} variant='h3'>My Todo's(Update)</Typography>
                        </Grid>
                        <Grid pb={5} container justifyContent={'center'} alignItems={'center'}>
                            <TextField label='Update ToDo' style={{ width: "100%" }} sx={{
                                "& .MuiInputBase-root": {
                                    color: 'white'
                                },
                                "& .MuiFormLabel-root": {
                                    color: '#ffffff'
                                },
                                "& .MuiFormLabel-root.Mui-focused": {
                                    color: '#ffffff'
                                }
                            }
                            } onChange={handleChangeEdit} value={text.title} />
                        </Grid>
                        <Grid pb={5} container justifyContent={'space-between'} alignItems={'center'}>
                            <Button variant='outlined' color='success' onClick={() => { handleUpdate(); setEdit(false); }}><Typography style={{ display: 'flex', alignItems: "center" }} color="#38E54D">Save<DoneIcon /></Typography></Button>
                            <Button endIcon={<CancelIcon />} variant='outlined' color='error' onClick={() => setEdit(false)}><Typography color="red">Cancel</Typography></Button>
                        </Grid>
                    </Grid>
                    :
                    <>
                        <Grid pt={5}>
                            <Typography color={"#ffffff"} variant='h3'>My Todo's</Typography>
                        </Grid>
                        <form onSubmit={handleSubmit} style={{ width: '100%', display: "flex", justifyContent: "center", padding: "25px 0px" }}>
                            <TextField sx={{
                                "& .MuiInputBase-root": {
                                    color: 'white'
                                },
                                "& .MuiFormLabel-root": {
                                    color: '#ff9900'
                                },
                                "& .MuiFormLabel-root.Mui-focused": {
                                    color: '#ff9900'
                                }
                            }
                            } style={{ width: "70%" }} placeholder='Please Enter Your ToDo' value={form.title} onChange={handleChange} id="outlined-basic" label="AddTodo" variant="outlined" />
                            <Button sx={{ borderColor: '#ff9900' }} onClick={handleSubmit} variant='outlined' color='primary'>
                                <Typography color={"#ff9900"}>add</Typography>
                                <AddIcon sx={{ color: "#ff9900" }} />
                            </Button>
                        </form>
                        {data.map(
                            item =>
                                <Grid borderLeft={10} borderColor={"#ff9900"} bgcolor={"#444"} key={item.id} p={2} container alignItems={"center"} justifyContent={'center'} gap={15}>
                                    <Grid>
                                        <Checkbox
                                            {...label}
                                            icon={<BookmarkBorderIcon />}
                                            checkedIcon={<BookmarkIcon />}
                                        />
                                        <Checkbox color='success' {...label} />
                                    </Grid>
                                    <Grid>
                                        <Typography variant='h5' color={'#ffffff'} >{item.title}</Typography>
                                    </Grid>
                                    <Grid sx={{display:'flex'}} gap={5}>
                                        <Button position={"fixed"} variant='outlined' color='error' onClick={() => handleDelete(item.id)}><DeleteIcon /></Button>
                                        <Button position={"fixed"} onClick={() => setEdit(true)} variant='outlined'><EditIcon /></Button>
                                    </Grid>
                                </Grid>
                        )}
                    </>
            }
        </Grid>
    )
}

export default HomeHeader