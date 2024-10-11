import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './View.css';

function View() {
    
    const { userId } = useParams(); 
    const [postData, setPostData] = useState(null);

    const navigate = useNavigate()

    const hadleback = () =>{
    navigate('/list')
    }

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`);
                setPostData(response.data);
            } catch (error) {
                console.error("Error fetching post data", error);
            }
        };

        fetchPostData();
    }, [userId]);

    return (
        <div className='view'>
            {postData ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{postData.id}</td>
                            <td>{postData.title}</td>
                            <td>{postData.body}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>Loading...</p>
            )}
            <button onClick={hadleback} className='backd'>Back</button>
        </div>
    );
}

export default View;
