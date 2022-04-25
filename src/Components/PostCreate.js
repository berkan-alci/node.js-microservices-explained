import React, { useState } from 'react'
import axios from 'axios';

const PostCreate = () => {
    const [title, setTitle] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/posts', { title });

        setTitle('');
    };

    return (
        <form onSubmit={submit}>
            <div className="form-group">
                <label>Title</label>
                <input value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}

export default PostCreate