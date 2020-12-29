import { AppBar, IconButton, Toolbar, Typography, } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react';
export default function Navbar() {
    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">Live Score</Typography>
            </Toolbar>
        </AppBar>
    </>
    );
};

