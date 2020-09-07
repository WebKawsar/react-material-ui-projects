import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid } from '@material-ui/core';


const PostDetail = () => {

    const {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {

        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setPost(data))


    }, [])


    const [commments, seComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {

            const url = `https://randomuser.me/api/?results=10`;
            fetch(url)
            .then(response => response.json())
            .then(randomData => {
                const rdm = randomData.results;

                const mergeValue = data.map((element, index) => {

                    element.img = rdm[index].picture.thumbnail;
                    element.date = rdm[index].registered.date;
                    return element;

                })
                seComments(mergeValue);
                
            })

        })

    }, [])


    const useStyles = makeStyles({
        root: {
            color: "#ffffff",
            width: '80%',
            margin: "auto"
        },
        title: {
            textTransform: "uppercase",
            textAlign: "center",
            color: "#55efc4"
        },
        body: {
            textIndent: "100px",
            lineHeight: "30px",
            fontSize: "22px",
            color: "gray",
            wordSpacing: "12px"
        },
        postDetails: {
            border: "2px solid #fab1a0",
            margin: "15px",
            padding: "20px",
            borderRadius: "5px"
        }
        
    })

    const classes = useStyles();

    return (
        <Container>
            <Grid container>
                <Grid item md={12}>
                    <div className={classes.postDetails}>
                        <h1 className={classes.title}>{post.title}</h1>
                        <p className={classes.body}>{post.body + post.body + post.body}</p>
                    </div>
                </Grid>
            </Grid>
            
            <p style={{marginLeft: "35px"}}> 5 Responses on “ -- Material UI Projects”</p>
            {
                commments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
            }
        </Container>
    );
};

export default PostDetail;