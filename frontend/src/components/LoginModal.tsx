import { Card, Button, CardContent, TextField, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from "react";
import axios from "axios";

function LoginModal(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleUsernameChange(event:any){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event:any){
        setPassword(event.target.value)
    }

    async function handleLoginClick(){
        console.log(username)
        console.log(password)
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:5001/login',
                data: {
                    'username': username,
                    'password': password,
                }
            })
            console.log(response.data);
            window.location.href = 'http://localhost:3000/'
        } catch (error) {
            if (axios.isAxiosError(error)){
                console.log(error.response?.data)
            } else {
                throw error
            }
        }
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
                    <CardContent >
                        <Typography>
                            Login Modal
                        </Typography>
                        <TextField id="username" label="Username" fullWidth margin="normal" onChange={handleUsernameChange} />
                        <TextField id="password" label="Password" fullWidth margin="normal" onChange={handlePasswordChange} />
                        <Button variant="contained" size="large" onClick={handleLoginClick} >Login</Button>
                        <Typography>
                            Not yet a user? <a href="/signup">sign up</a>
                        </Typography>



                    </CardContent>
                </Card>
            </Grid>
    </div>
    )


}

export default LoginModal