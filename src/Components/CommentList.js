import React from 'react';

const CommentList = ({ comments }) => {

    const rendered = comments.map(comment => {
        return <li style={{ color: "black" }} key={comment.id}>{comment.content}</li>
    })

    return (
        <ul>
            {rendered}
        </ul>
    )
}

export default CommentList