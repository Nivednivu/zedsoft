import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './List.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function List() {
    const [list, setList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const listData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setList(response.data);
        };
        listData();
    }, []);

    const handleClick = (userId) => {
        navigate(`/view/${userId}`);
    };

    return (
        <div className='card-container'>
            {list.map((item) => (
                <Card key={item.id} className='custom-card'>
                    <Card.Img variant="top" className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&s" />
                    <Card.Body>
                        <h3>{item.id}</h3>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.body}
                        </Card.Text>
                        <Button variant="primary" onClick={() => handleClick(item.id)} className='btnview btn btn-success'>View</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default List;
