import React, { useState } from 'react'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import Modal from '@mui/material/Modal';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Todolist = () => {
    const [itemStatus, setItemStatus] = useState(false);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [newItem, setNewItem] = useState([]);
    const [todoList, setTodoList] = useState([]);

    const handleInputChange = (event) => {
        console.log('...changed...' + event.target.value)
        setNewItem({ ...newItem, name: event.target.value });
    };

    const handleStateChange = (event) => {
        console.log('...changed...' + event.target.value)
        setItemStatus(event.target.value);
    };

    const handleAddItem = () => {
        console.log('...changed...' + newItem.name + '...' + itemStatus)
        if (newItem.name.trim() !== '') {
            setTodoList((prevTodoList) => [...prevTodoList, { name: newItem.name, status: itemStatus }]);
            setNewItem({ name: '', status: false });
            setOpen(false)
        }
    };

    const handleCheckboxChange = (index) => {
        console.log('...changed...' + index)
        setTodoList((prevTodoList) => {
            const updatedTodoList = [...prevTodoList];
            updatedTodoList[index].status = !updatedTodoList[index].status;
            return updatedTodoList;
        });
    }

    const handleListDelete = (index) => {
        console.log('...deleting')
        setTodoList((prevTodoList) => {
            const updatedTodoList = [...prevTodoList];
            updatedTodoList.splice(index, 1);
            return updatedTodoList;
        });
    }

    return (
        <>
            <Container component="main" className='back-2'>
                <CssBaseline />
                <Box
                    component="form"
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <div className="container-fluid back-2">
                        <div className="row">
                            <div className="col-md-12 back-3">
                                <h3>
                                    To-Do list in React
                                </h3>
                                <br />
                                <p>
                                    Add item to the list, or mark complete. You can filter the list also.
                                </p>
                                <br />
                                <Button onClick={handleOpen} variant="contained">Add Item</Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <div>
                                            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                                                <TextField
                                                    id="item-title"
                                                    label="Add Item to your list"
                                                    variant="outlined"
                                                    onChange={handleInputChange}
                                                />
                                            </FormControl>

                                            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                                                <InputLabel id="select-status">Status</InputLabel>
                                                <Select
                                                    id="select-status"
                                                    value={itemStatus}
                                                    label="Status"
                                                    onChange={handleStateChange}
                                                >
                                                    <MenuItem value={false}>Not Completed</MenuItem>
                                                    <MenuItem value={true}>Completed</MenuItem>
                                                </Select>
                                            </FormControl>

                                            <FormControl sx={{ marginTop: 2 }}>
                                                <Button variant="outlined" onClick={handleAddItem}>
                                                    Add Item
                                                </Button>
                                            </FormControl>
                                        </div>
                                    </Box>

                                </Modal>
                                <br />
                                <br />
                                {todoList.length > 0 ?
                                    <List sx={{ width: '100%' }}>
                                        {todoList.map((value, index) => (
                                            <ListItem key={index} disablePadding>
                                                <ListItemButton role={undefined} dense onClick={() => handleCheckboxChange(index)}>
                                                    <ListItemIcon>
                                                        <Checkbox
                                                            edge="start"
                                                            tabIndex={-1}
                                                            // disableRipple
                                                            checked={value.status}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText id={index} primary={value.name} className={`${value.status ? 'Strikethrough' : ''}`} />
                                                </ListItemButton>
                                                <Button onClick={() => handleListDelete(index)}>Delete</Button>
                                            </ListItem>
                                        ))}
                                    </List>
                                    : <Alert variant="outlined" severity="info">
                                        No to do item added yet.
                                    </Alert>
                                }
                            </div>
                        </div>
                    </div>
                </Box>
            </Container>
        </>
    )
}

export default Todolist