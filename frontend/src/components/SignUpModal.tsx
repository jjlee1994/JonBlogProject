import { Grid, Card, CardContent, TextField, Typography, Link, Button } from '@mui/material'
import { useState } from 'react'
import axios, { AxiosError } from 'axios'

function SignUpModal(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    function handleUsernameChange(event:any){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event:any){
        setPassword(event.target.value)
    }

    function handleEmailChange(event:any){
        setEmail(event.target.value)
    }

    async function handleSubmitClick(){
        console.log(username)
        console.log(password)
        console.log(email)
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:5001/signup',
                data: {
                    'username': username,
                    'password': password,
                    'email': email
                }
            })
            console.log(response.data);
            window.location.href = 'http://localhost:3000/login'
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
                direction='column'
                alignItems='center'
                justifyContent='center'
            >
                <Card sx={{ maxWidth: 500 }}>
                    
                    <CardContent>

                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <TextField label='Username' id='username' onChange={handleUsernameChange} />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField label='Password' id='password' onChange={handlePasswordChange} />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField label='Email' id='email' onChange={handleEmailChange} />
                            </Grid>

                            <Grid item xs={12}>
                                <Button variant='contained' onClick={handleSubmitClick} >
                                    Submit
                                </Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography>
                                    Did you mean to <Link href='/login'>login</Link>?
                                </Typography>
                            </Grid>

                        </Grid>

                    </CardContent>

                </Card>

            </Grid>

        </div>

    )


}


export default SignUpModal
