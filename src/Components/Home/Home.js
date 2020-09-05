import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import fakeData from '../../fakeData';



const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(response => response.json())
        .then(data => {

            setPosts(data)
            
        })



    }, [])

console.log(posts);

    return (
        <div className="home">
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Home;