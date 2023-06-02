import { ThemeContext } from "@emotion/react"
import { Button, ButtonBase, Typography, Grid, Avatar, Box, TextField } from "@mui/material"
import { useState } from "react"

export interface Props {
    username: any;
}


function Profile(props : Props){

    const [state, setState] = useState({
        changeUsernameButton: false,
        changeEmailButton: false,
        changePasswordButton: false
    });

    function changeUsernameClick() {
        setState({...state, changeUsernameButton: !state.changeUsernameButton});
    }

    function changeEmailClick() {
        setState({...state, changeEmailButton: !state.changeEmailButton});
    }

    function changePasswordClick() {
        setState({...state, changePasswordButton: !state.changePasswordButton});
    }

    return (
        <Box sx={{flexGrow: 1, margin: "0 200px"}}>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <ButtonBase sx={{width:160, height: 160}}>
                        <Avatar sx={{width:160, height: 160}}>H</Avatar>
                        </ButtonBase>
                </Grid>
                <Grid item container xs={6}>
                        <Grid item xs={6}>
                            {!state.changeUsernameButton &&<Typography>UserName: {props.username}</Typography>}
                            {state.changeUsernameButton && <TextField></TextField>}
                        </Grid>
                        <Grid item xs={6}>
                            {!state.changeUsernameButton && <Button variant="contained" onClick={changeUsernameClick}>Change Username</Button>}
                            {state.changeUsernameButton && <Button variant="contained" onClick={changeUsernameClick}>Save</Button>}
                            {state.changeUsernameButton && <Button variant="contained" onClick={changeUsernameClick}>Cancel</Button>}
                        </Grid>
                        <Grid item xs={6}>
                            {!state.changeEmailButton && <Typography>Email: Email</Typography>}
                            {state.changeEmailButton && <TextField></TextField>}
                        </Grid>
                        <Grid item xs={6}>
                            {!state.changeEmailButton && <Button variant="contained" onClick={changeEmailClick}>Change Email</Button>}
                            {state.changeEmailButton && <Button variant="contained" onClick={changeEmailClick}>Save</Button>}
                            {state.changeEmailButton && <Button variant="contained" onClick={changeEmailClick}>Cancel</Button>}
                        </Grid>
                        <Grid item xs={6}>
                            {state.changePasswordButton && <TextField></TextField>}
                        </Grid>
                        <Grid item xs={6} onClick={changePasswordClick}>
                            {!state.changePasswordButton && <Button variant="contained">Change Password</Button>}
                            {state.changePasswordButton && <Button variant="contained" onClick={changePasswordClick}>Save</Button>}
                            {state.changePasswordButton && <Button variant="contained" onClick={changePasswordClick}>Cancel</Button>}
                        </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Profile