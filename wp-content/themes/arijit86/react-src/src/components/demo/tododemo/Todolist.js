import React, { useState, useEffect } from 'react';
import { Modal, Input, Select, Button, List, Checkbox, Alert, Typography, Skeleton } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

const { Option } = Select;
const { Text } = Typography;

const Todolist = () => {
    const [itemStatus, setItemStatus] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [newItem, setNewItem] = useState({ name: '', status: false });
    const [todoList, setTodoList] = useState([]);
    const [initLoading, setInitLoading] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storedTodoList = localStorage.getItem('todoList');
        if (storedTodoList) {
            setTodoList(JSON.parse(storedTodoList));
        }
    }, []);

    // Save todoList to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }, [todoList]);

    const handleInputChange = (event) => {
        setNewItem({ ...newItem, name: event.target.value });
    };

    const handleStateChange = (value) => {
        setItemStatus(value);
    };

    const handleAddItem = () => {
        if (newItem.name.trim() !== '') {
            setTodoList((prevTodoList) => [...prevTodoList, { name: newItem.name, status: itemStatus }]);
            setNewItem({ name: '', status: false });
            setOpen(false);
            setInitLoading(false);
        }
    };

    const handleCheckboxChange = (index) => {
        setTodoList((prevTodoList) => {
            const updatedTodoList = [...prevTodoList];
            updatedTodoList[index].status = !updatedTodoList[index].status;
            return updatedTodoList;
        });
    };

    const handleListDelete = (index) => {
        setTodoList((prevTodoList) => {
            const updatedTodoList = [...prevTodoList];
            updatedTodoList.splice(index, 1);
            return updatedTodoList;
        });
    };

    const onLoadMore = () => {
        setLoading(true);
    };

    useEffect(() => {
        if (todoList.length) {
            setLoading(false);
        }
    }, [todoList]);

    const loadMore =
        !initLoading && !loading && todoList.length > 3 ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button onClick={onLoadMore}>loading more</Button>
            </div>
        ) : null;

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
                            <Button onClick={handleOpen} type="primary" style={{ marginBottom: '10px' }} className='text-bold'>
                                Add Item
                            </Button>
                            <Modal
                                title="Add Item to your list"
                                visible={open}
                                onOk={handleAddItem}
                                onCancel={handleClose}
                            >
                                <Input
                                    placeholder="Add Item to your list"
                                    onChange={handleInputChange}
                                    value={newItem.name}
                                    style={{ marginBottom: '10px' }}
                                />
                                <Select
                                    placeholder="Select Status"
                                    onChange={handleStateChange}
                                    style={{ width: '100%', marginBottom: '10px' }}
                                    value={itemStatus}
                                    className="text-bold"
                                >
                                    <Option value={false}>Not Completed</Option>
                                    <Option value={true}>Completed</Option>
                                </Select>
                            </Modal>
                            {todoList ? (
                                <List
                                    className={`demo-loadmore-list ${todoList.length > 0 ? 'greybox' : ''}`}
                                    loading={initLoading}
                                    itemLayout="horizontal"
                                    // loadMore={loadMore}
                                    dataSource={todoList}
                                    renderItem={(item, index) => (
                                        <div>
                                            <List.Item className='whitebox'>
                                                <Skeleton avatar title={false} loading={item.loading}>
                                                    <List.Item.Meta
                                                        avatar={
                                                            <Checkbox
                                                                checked={item.status}
                                                                onChange={() => handleCheckboxChange(index)}
                                                            />
                                                        }
                                                        title={
                                                            <span className="{item.status ? 'Strikethrough' : ''} text-bold">
                                                                {item.name}
                                                            </span>
                                                        }
                                                    />
                                                    <Button onClick={() => handleListDelete(index)} icon={<DeleteFilled />} />
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
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Todolist;
