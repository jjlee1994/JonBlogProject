import { Card, Button, CardContent, TextField, Typography, Snackbar, Alert } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'


function LoginModal(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isAlertOpen, setIsAlertOpen] = useState(false)
    const [errorMsg, setErrorMsg] = useState('Error logging in')
    const navigate = useNavigate()

    function handleUsernameChange(event:any){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event:any){
        setPassword(event.target.value)
    }

    async function handleLoginClick(){
        console.log('username: ' + username)
        console.log('password: ' + password)
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
            localStorage.setItem('access_token', 'Bearer ' + response.data.access_token)
            console.log(localStorage.getItem('access_token'))
            navigate('/')
        } catch (error) {
            setIsAlertOpen(true)
            if (axios.isAxiosError(error)){
                console.log(error.response?.data)
                setErrorMsg(error.response?.data.msg)
            } else {
                throw error
            }
        }
    }

    return (
        <div>
            <Snackbar 
                open={isAlertOpen}
                anchorOrigin={{ 
                    vertical: 'top',
                    horizontal: 'center' 
                }}
            >
                <Alert severity="error">
                    {errorMsg}
                </Alert>
            </Snackbar>
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