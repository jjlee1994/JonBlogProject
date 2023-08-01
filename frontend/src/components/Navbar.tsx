
import { AppBar, Button, Toolbar, Typography, IconButton, MenuItem, Menu } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from "@mui/system"
import React, { useState } from "react";


export interface navbarProps {
    isloggedIn: boolean,
    username: string
}

function Navbar(props: navbarProps){

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position ="static">
                {
                    props.isloggedIn ? 
                    <AuthenticatedNavBar isloggedIn={props.isloggedIn} username={props.username} /> : 
                    <NonAuthenticatedNavBar/> 
                } 
            </AppBar>
        </Box>
    )

}


function AuthenticatedNavBar(props: navbarProps){

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                {props.username}
            </Typography>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleMenu}
            >
                <MenuIcon/>
            </IconButton>
            <Menu
                id="menu-appbar"
                keepMounted
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem> Home </MenuItem>
                <MenuItem> Profile </MenuItem>
                <MenuItem> Log Out </MenuItem>
            </Menu>

        </Toolbar>
    )

}

function NonAuthenticatedNavBar(){
    return (
        <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                Blog Project
            </Typography>
            <Button color="inherit" href="/login">
                Login
            </Button>
        </Toolbar>
    )
}


export default Navbar