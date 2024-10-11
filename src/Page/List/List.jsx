import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './List.css';

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
        <div className='list-container'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                            <td>
                                <button onClick={() => handleClick(item.id)} className='btn btn-success'>View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default List;
