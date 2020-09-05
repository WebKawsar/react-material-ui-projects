import React from 'react';
import { Container, Grid, Button} from '@material-ui/core';
import "./Post.css";
import firtsImage from "../../images/biral-image.jpg";
import secondImage from "../../images/flower-image.jpg";
import { makeStyles } from '@material-ui/core/styles';


const Post = (props) => {
   const {id, title, body} = props.post;
 
    return (
            <Container>
                <Grid container spacing={3}>
                    <Grid item md={8}>
                        <div className="left-post-section">
                            <div className="left-post">
                                <div className="post-image">
                                    <img src={firtsImage} alt=""/>
                                </div>
                                <div className="post-info">
                                    <h4>{title}</h4>
                                    <p>{body}</p>
                                    <Button variant="contained" color="primary">See more</Button>
                                </div>
                            </div>
                            <hr/>
                            <div className="left-post">
                                <div className="post-image">
                                    <img src={secondImage} alt=""/>
                                </div>
                                <div className="post-info">
                                    <h4>{title}</h4>
                                    <p>{body}</p>
                                    <Button variant="contained" color="primary">See more</Button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="right-post-section">
                            <div className="right-post">
                                <div className="post-image">
                                    <img src={secondImage} alt=""/>
                                </div>
                                <div className="post-info">
                                    <h4>Little Jessie The Dog Resting in Bed</h4>
                                    <p>Morbi vestibulum accumsan tortor, eu euismod ante. Duis condimentum facilisis dui, et suscipit libero porttitor.</p>
                                    <Button variant="contained" color="primary">See more</Button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>







                // <div className="post-section">
                //     <div className="left-post-section">
                //         <div className="post">
                //             <div className="post-image">
                //                 <img src={firtsImage} alt=""/>
                //             </div>
                //             <div className="post-info">
                //                 <h4>Little Jessie The Dog Resting in Bed</h4>
                //                 <p>Morbi vestibulum accumsan tortor, eu euismod ante. Duis condimentum facilisis dui, et suscipit libero porttitor.</p>
                //                 <Button variant="contained" color="primary">See more</Button>
                //             </div>
                //         </div>
                //     </div>
                //     <div className="right-post-section">
                //         <div className="post">
                //             <div className="post-image">
                //                 <img src={secondImage} alt=""/>
                //             </div>
                //             <div className="post-info">
                //                 <h4>Little Jessie The Dog Resting in Bed</h4>
                //                 <p>Morbi vestibulum accumsan tortor, eu euismod ante. Duis condimentum facilisis dui, et suscipit libero porttitor.</p>
                //                 <Button variant="contained" color="primary">See more</Button>
                //             </div>
                //         </div>
                //     </div>
                // </div>


        );
};

export default Post;