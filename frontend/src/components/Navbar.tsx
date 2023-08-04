
import { AppBar, Button, Toolbar, Typography, IconButton, MenuItem, Menu } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from "@mui/system"
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'


export interface navbarProps {
    isloggedIn: boolean,
    username: string,
    setAppState: any,
}

function Navbar(props: navbarProps){

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position ="static">
                {
                    props.isloggedIn ? 
                    <AuthenticatedNavBar setAppState={props.setAppState} isloggedIn={props.isloggedIn} username={props.username} /> : 
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

    const navigate = useNavigate()

    function logUserOut(){
        localStorage.removeItem('access_token')
        props.setAppState({
            isLoggedIn: false,
            userId: '',
            username: '',
            email: ''
        })
        navigate('/')
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
                <MenuItem onClick={()=>{navigate('/home')}}> Home </MenuItem>
                <MenuItem onClick={()=>{navigate('/profile')}}> Profile </MenuItem>
                <MenuItem onClick={logUserOut} > Log Out </MenuItem>
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