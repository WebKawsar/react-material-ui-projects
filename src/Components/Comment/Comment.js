import React from 'react';
import { Avatar, Container, Grid, makeStyles } from '@material-ui/core';
import { AlternateEmail } from '@material-ui/icons';

const Comment = (props) => {

    const {img, name, email, body, date} = props.comment;
    const useStyles = makeStyles({

        root: {
          width: '80%',
          margin: "auto"
        },
    
        commentSection: {
            color: "gray",
            border: "2px solid lightblue",
            margin: "15px",
            padding: "20px",
            borderLeft: "8px solid #A4CF29",
            borderRadius: "5px"
        },
        commentMedia: {
            float: "left",
            marginRight: "30px"
        },
    
        commentImage: {
            
        },
    
        commentInfo: {
            overflow: "hidden"
        },
        comment: {
            overflow: "hidden"
        },
        title: {
            color: "#FB284C",
            textTransform: "uppercase",
            marginTop: "0"
        },
        bodyText: {
            marginTop: "30px"
        },
        email: {
            marginBottom: "-6px"
        }
    
      });



    const classes = useStyles();

    return (
        
            <Container>
                <Grid container>
                    <Grid item md={12} className={classes.root}>
                        <div className={classes.commentSection}>
                            <div className={classes.comment}>

                                <div className={classes.commentMedia}>
                                    <Avatar className={classes.commentImage} src={img}  />
                                </div>

                                <div className={classes.commentInfo}>
                                    <div className="post-second">
                                        <h4 className={classes.title}>{name}</h4>
                                        <p><AlternateEmail className={classes.email}></AlternateEmail> {email}</p>
                                        <p className={classes.bodyText}>{body}</p>
                                        <p>{date.slice(0, 10)} at 5:17 pm</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
    );
};

export default Comment;