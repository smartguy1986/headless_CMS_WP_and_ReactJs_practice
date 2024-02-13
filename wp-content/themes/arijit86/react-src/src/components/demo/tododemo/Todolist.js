import React, { useState, useEffect } from 'react';
import { Modal, Input, Select, Button, List, Checkbox, Alert, Typography, Skeleton, Col, Row } from 'antd';
import { DeleteFilled, EditFilled } from '@ant-design/icons';

const { Option } = Select;
const { Text } = Typography;

const Todolist = () => {

    const [displayEditButtons, setDisplayEditButtons] = useState(true);
    const [filterStatus, setFilterStatus] = useState(-1);
    const [itemStatus, setItemStatus] = useState(false);
    const [open, setOpen] = useState(false);
    const [editIndex, setEditIndex] = useState(-1);
    const [editedTaskName, setEditedTaskName] = useState('');
    const [newItem, setNewItem] = useState({ name: '', status: false });
    const [todoLists, setTodoLists] = useState([]);
    const [formInput, setFormInput] = useState("");

    // Define a function to load data from localStorage
    const loadTodoListFromLocalStorage = () => {
        const storedTodoList = localStorage.getItem('todoList');
        if (storedTodoList) {
            return JSON.parse(storedTodoList); // Return the parsed todo list
        } else {
            return []; // Return an empty array if no todo list is found
        }
    };

    // Define a function to save data to localStorage
    useEffect(() => {
        const saveTodoListToLocalStorage = (updatedTodoList) => {
            localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
        };
    }, [])

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setEditIndex(-1);
    };

    const handleInputChange = (event) => {
        // Update only the intended state variable
        if (editIndex === -1) {
            setNewItem({ ...newItem, name: event.target.value });
        } else {
            setEditedTaskName(event.target.value);
        }
    };

    const handleStateChange = (value) => {
        setItemStatus(value);
    };

    const handleAddItem = () => {
        if (newItem.name.trim() !== '') {
            const updatedOriginalList = [...todoLists, { name: newItem.name, status: itemStatus }];
            setTodoLists(updatedOriginalList);
            saveTodoListToLocalStorage(updatedOriginalList);

            if (filterStatus === -1 || filterStatus === itemStatus) {
                const updatedFilteredList = [...todoLists, { name: newItem.name, status: itemStatus }];
                setTodoLists(updatedFilteredList);
            }
            setNewItem({ name: '', status: false });
            setOpen(false);
        }
    };

    const handleListEdit = (index) => {
        console.log("index==== " + index);
        setEditIndex(index);
        setEditedTaskName(todoLists[index].name);
        setItemStatus(todoLists[index].status); // Set the status of the edited item
        setOpen(true);
    };

    const handleEditItem = () => {
        if (editedTaskName.trim() !== '') {
            setTodoLists((prevTodoList) => {
                const updatedTodoList = [...prevTodoList];
                updatedTodoList[editIndex].name = editedTaskName;
                updatedTodoList[editIndex].status = itemStatus; // Update the status of the edited item
                // Move the following lines inside the state update function
                setEditedTaskName('');
                setOpen(false);
                saveTodoListToLocalStorage(updatedTodoList);
                return updatedTodoList;
            });
        }
    };

    const handleListDelete = (index) => {
        Modal.confirm({
            title: 'Confirm Delete',
            content: 'Are you sure you want to delete this item?',
            okText: 'Delete',
            okType: 'danger',
            cancelText: 'Cancel',
            onOk() {
                // If the user confirms deletion, proceed with deleting the item
                setTodoLists(prevTodoLists => {
                    const updatedOriginalList = [...prevTodoLists];
                    updatedOriginalList.splice(index, 1);
                    saveTodoListToLocalStorage(updatedOriginalList);
                    return updatedOriginalList;
                });
            },
            onCancel() {
                // If the user cancels deletion, do nothing
            },
        });
    };

    const handleFilterChange = (value) => {
        console.log("value==== " + value);
        const originalList = loadTodoListFromLocalStorage(); // Retrieve the todo list from local storage
        setFilterStatus(value);

        if (value === -1) {
            setTodoLists(originalList); // Set the original todo list
            console.log("todosaved1==== ", originalList);
            setDisplayEditButtons(true);
        } else if (value !== -1 && (value === true || value === false)) {
            // Filter items based on the selected status
            setDisplayEditButtons(false);
            const filteredList = originalList.filter(listitem => listitem.status === value);
            setTodoLists(filteredList);
            console.log("todosaved2==== ", filteredList);
        }
    };


    const handleCheckboxChange = (index) => {
        console.log("checkbox=====" + index);
        setTodoLists((prevTodoList) => {
            const updatedTodoList = [...prevTodoList];
            updatedTodoList[index].status = !updatedTodoList[index].status;
            saveTodoListToLocalStorage(updatedTodoList);
            return updatedTodoList;
        });
    };

    return (
        <>
            <main id="content">
                <section id="about" className="introduction scrollto">
                    <div className="row clearfix">
                        <div className="col row clearfix" style={{ margin: 0, padding: 0 }}>
                            <div className="section-heading">
                                <h3>To-Do list in React</h3>
                                <h2 className="section-title">Add item to the list, or mark complete. You can filter the list also.</h2>
                            </div>
                        </div>
                        <div className="col row clearfix" style={{ margin: 0, padding: 0 }}>
                            <Row>
                                <Col span={3}></Col>
                                <Col span={18}>
                                    <Row justify="space-between">
                                        <Col>
                                            <Button onClick={handleOpen} type="primary" style={{ marginBottom: '10px' }} className='text-bold'>
                                                Add Item
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Select
                                                placeholder="All"
                                                onChange={handleFilterChange}
                                                style={{ width: '225', marginBottom: '10px' }}
                                                value={filterStatus}
                                                className="text-bold filterOption"
                                            >
                                                <Option value={-1}>All</Option>
                                                <Option value={true}>Completed</Option>
                                                <Option value={false}>Not Completed</Option>
                                            </Select>
                                        </Col>
                                    </Row>
                                    <Modal
                                        title={editIndex === -1 ? "Add Item to your list" : "Edit Item"}
                                        open={open}
                                        onOk={editIndex === -1 ? handleAddItem : handleEditItem}
                                        onCancel={handleClose}
                                    >
                                        <Input
                                            placeholder="Add Item to your list"
                                            onChange={handleInputChange}
                                            value={editIndex === -1 ? newItem.name : editedTaskName}// <-- Corrected value assignment
                                            style={{ marginBottom: '10px' }}
                                        />
                                        <Select
                                            placeholder="Select Status"
                                            onChange={handleStateChange}
                                            style={{ width: '100%', marginBottom: '10px' }}
                                            value={itemStatus} // Always use itemStatus for the value here
                                            className="text-bold"
                                        >
                                            <Option value={false}>Not Completed</Option>
                                            <Option value={true}>Completed</Option>
                                        </Select>
                                    </Modal>

                                    {todoLists ? (
                                        <List
                                            className={`demo-loadmore-list ${todoLists.length > 0 ? 'greybox' : ''}`}
                                            // loading={initLoading}
                                            itemLayout="horizontal"
                                            dataSource={todoLists}
                                            renderItem={(item, index) => (
                                                <div>
                                                    <List.Item className='whitebox' style={{ display: 'flex', alignItems: 'center' }}>
                                                        <Skeleton avatar title={false} loading={item.loading}>
                                                            <List.Item.Meta
                                                                avatar={
                                                                    displayEditButtons && (
                                                                        <Checkbox
                                                                            checked={item.status}
                                                                            onChange={() => handleCheckboxChange(index)}
                                                                            style={{ marginRight: '8px', verticalAlign: 'middle', padding: '2px' }}
                                                                        />
                                                                    )
                                                                }
                                                                title={
                                                                    <span className={item.status ? 'Strikethrough text-bold' : 'text-bold'}>
                                                                        {item.name}
                                                                    </span>
                                                                }
                                                            />
                                                            {displayEditButtons && (
                                                                <div style={{ display: 'flex', gap: '8px' }}>
                                                                    <Button onClick={() => handleListEdit(index)} icon={<EditFilled />} />
                                                                    <Button onClick={() => handleListDelete(index)} icon={<DeleteFilled />} />
                                                                </div>)
                                                            }
                                                        </Skeleton>
                                                    </List.Item>
                                                </div>
                                            )}
                                        />
                                    ) : (
                                        <Alert variant="outlined" severity="info">
                                            <Text>No to-do item added yet.</Text>
                                        </Alert>
                                    )}
                                </Col>
                                <Col span={3}></Col>
                            </Row>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Todolist;
