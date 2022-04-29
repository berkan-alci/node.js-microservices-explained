import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = () => {
    const [post, setPost] = useState({});

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const res = await axios.get('http://microservicetest.com/posts');
        console.log(res.data)
        setPost(res.data);
    };

    return (
        <div className="d-flex flex-row flew-wrap justify-content-between">
            {Object.values(post).map((p) => (
                <div className="Card" style={{ width: '30%', marginBottom: '20px' }} key={p.id}>
                    <div className="card-body">
                        <h3>{p.title}</h3>
                        <hr />
                        <CommentList comments={p.comments} />
                        <CommentCreate postId={p.id} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostList