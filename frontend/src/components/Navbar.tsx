
import { AppBar, Button, Toolbar, Typography, IconButton, MenuItem, Menu } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from "@mui/system"
import React, { useState } from "react";

export interface authProps {
    pageName : string
}

function AuthenticatedNavBar(props : authProps){

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
                {props.pageName}
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


function Navbar(){

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position ="static">
                <AuthenticatedNavBar pageName={"PAGE NAME"}/>
                {/* <NonAuthenticatedNavBar/> */}
            </AppBar>
        </Box>
    )


}

export default Navbar