import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    const naviGate = useNavigate();

    const {title, body} = post;
    return (
        <div>
            <h3>Posts Details</h3>
            <h4>{title}</h4>
            <p>{body}</p>
            <button onClick={() => naviGate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetails;