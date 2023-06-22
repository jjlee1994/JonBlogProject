import { Card, Button, CardContent, TextField, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react'
import axios from 'axios'



function SignUpModal(){

    const [state, setState] = useState({
        email: '',
        username: '',
        password: ''
    })
    

    async function signup() {
        const response = await axios.post('http://localhost:5001/signup', {
            email: state.email,
            username: state.username,
            password: state.password
        })
    }

    function handleChange(event:any) {
        setState({...state, [event.target.id]: event.target.value})
    }

    return (
        <div>
            <Grid
                container
                justifyContent="space-evenly"
                direction="row"
                alignItems="center"
            >
                <Card sx={{ minWidth: 275, maxWidth: 575 }} >
                    <CardContent>
                        <Typography>
                            Sign Up Modal
                        </Typography>
                        <TextField id="username" label="Username" fullWidth margin="normal" onChange={handleChange}/>
                        <TextField id="email" label="Email" fullWidth margin="normal" onChange={handleChange}/>
                        <TextField id="password" label="Password" fullWidth margin="normal" onChange={handleChange}/>
                        <Button variant="contained" size="large" href="/login" onClick={signup}>Sign Up</Button>
                        <Typography>
                            Did you mean to <a href="/login">login</a> instead?
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )


}


export default SignUpModal
