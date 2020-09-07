import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, makeStyles, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


const Header = () => {

    const classes = useStyles();

    const history = useHistory();
    const handleButton = () => {

        history.push("/home");
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Button variant="contained" onClick={handleButton}>Home</Button>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;