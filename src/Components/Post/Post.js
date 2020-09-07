import React from 'react';
import { Container, Grid, Button, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Person, Timer } from '@material-ui/icons';


const useStyles = makeStyles({

    root: {
      width: '80%',
      margin: "auto"
    },

    postSection: {
        border: "2px solid tomato",
        padding: "30px",
        margin: "15px",
        backgroundColor: "#ecf0f1"
    },
    postMedia: {
        float: "left",
        marginRight: "30px",
        borderBottom: "2px solid tomato",
        paddingBottom: "30px"
    },

    postImage: {
        width: "400px",
        height: "280px",
        borderRight: "2px solid tomato",
        paddingRight: "28px"
    },

    postInfo: {
        overflow: "hidden"
    },
    post: {
        overflow: "hidden"
    },
    title: {
        color: "tomato",
        textTransform: "uppercase"
    },
    author: {
        marginBottom: "-4px"
    },
    time: {
        marginBottom: "-4px"
    },
    headAuthor: {
        marginRight: "20px"
    },
    date: {
        marginRight: "20px"
    }

  });


const Post = (props) => {

    const { img:{large}, date, name:{first, last} , title, body} = props.post;
    const classes = useStyles();

    return (
            <Container>
                <Grid container spacing={3}>
                    <Grid item md={12} className={classes.root}>
                        <div className={classes.postSection}>
                            <div className={classes.post}>

                                <div className={classes.postMedia}>
                                    <img className={classes.postImage} src={large} alt=""/>
                                </div>

                                <div className={classes.postInfo}>
                                    <div className="post-first">
                                        <div style={{ width: '100%' }}>
                                            <Box component="div" mr={1} display="inline">
                                                <Person className={classes.author}></Person>
                                                <span className={classes.headAuthor}>{first + " " + last}</span>
                                            </Box>
                                            <Box component="div" mr={1} display="inline">
                                                <Timer className={classes.time}></Timer>
                                                <span className={classes.date}>{date.slice(0, 10)}</span>
                                            </Box>
                                        </div>                                  
                                    </div>
                                    <div className="post-second">
                                        <h4 className={classes.title}>{title}</h4>
                                        <p>{body + body}</p>
                                    </div>
                                    
                                    {
                                        props.showSeeMoreButton && <Button onClick={() => props.handleSeeMoreButton(props.post)} variant="contained" color="primary">See more</Button>
                                    }
                                </div>

                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>    
        );
};

export default Post;
