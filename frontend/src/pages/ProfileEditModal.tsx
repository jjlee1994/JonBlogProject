import { Box, Card, Typography, TextField, Grid, Modal, Button } from '@mui/material'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

// const style = {
//     postiion: 'absolute' as 'absolute',
//     top: '50%',
//     left: '50%',
//     width: 700,
// }

function ProfileEditModal() {

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

    let { username } = useParams();

    return (
        <div>
            <Button variant='contained'>Edit Profile</Button>
            <Grid item container xs={6}>
                        <Grid item xs={6}>
                            {!state.changeUsernameButton &&<Typography>UserName: {username}</Typography>}
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
        </div>
    )
}
export default ProfileEditModal