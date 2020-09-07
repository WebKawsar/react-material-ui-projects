import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import { useHistory } from 'react-router-dom';



const Home = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {

        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(response => response.json())
        .then(data => {

            const url = `https://randomuser.me/api/?results=100`;
            fetch(url)
            .then(response => response.json())
            .then(randomData => {
                const rdm = randomData.results;

                const mergeValue = data.map((element, index) => {

                    element.img = rdm[index].picture;
                    element.name = rdm[index].name;
                    element.email = rdm[index].email;
                    element.date = rdm[index].registered.date;
                    return element;

                })
                setPosts(mergeValue);
                
            })
             
        })
 
    }, [])


    const history = useHistory();
    const handleSeeMoreButton = (post) => {
        history.push(`/postdetail/${post.id}`)
        
    }

    return (
        
            <div className="home">
                {
                    posts.map(post => <Post showSeeMoreButton={true} handleSeeMoreButton={handleSeeMoreButton} key={post.id} post={post}></Post>)
                }
            </div>
    );
};

export default Home;