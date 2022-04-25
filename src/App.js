import React from 'react'

import { PostCreate, PostList } from './Components';


const App = () => {
    return (
        <div className="container">
            <h1>Create Post!</h1>
            <PostCreate />
            <hr />
            <h1>Posts</h1>
            <PostList />
        </div>
    )
}

export default App