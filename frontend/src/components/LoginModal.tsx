import { Card, Button, CardContent, TextField, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'

export interface Props {
    username: string;
    password: string;
    onInputChange: any;
}


function LoginModal(props : Props){

    async function helloWorld() {
        const response = await axios.get('http://localhost:5001/')
        console.log(response)

    }

    async function login() {
        const response = await axios.post('http://localhost:5001/login',{
            username: props.username,
            password: props.password
        })
        localStorage.setItem('access_token', response.data.access_token)
        console.log(localStorage.getItem('access_token'))
    }

    async function homepage() {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:5001/' + props.username,
            headers: {'Authorization' : 'Bearer ' + localStorage.getItem('access_token')}
        })
        console.log(response)
    }

    async function createPost() {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:5001/createpost',
            headers: {'Authorization' : 'Bearer ' + localStorage.getItem('access_token')},
            data: {
                subject: 'Bye',
                content: 'UnderWorld, BYESUPPP'
            }
        })
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
                        <TextField id="username" label="Username" fullWidth margin="normal" value={props.username} onChange={props.onInputChange}/>
                        <TextField id="password" label="Password" fullWidth margin="normal" onChange={props.onInputChange}/>
                        {/* <Button variant="contained" size="large" href="/" onClick={loginClick}> Login </Button> */}
                        <Button variant="contained" size="large" onClick={login} href="/"> Login </Button>
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