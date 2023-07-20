import { Grid, Card, CardContent, TextField, Typography, Link, Button, Snackbar, Alert } from '@mui/material'
import { useState } from 'react'
import axios, { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'


function SignUpModal(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [isAlertOpen, setIsAlertOpen] = useState(false)
    const [errorMsg, setErrorMsg] = useState('Error signing up')
    const navigate = useNavigate()

    const [state, setState] = useState({
        'username': '',
        'password': '',
        'email': ''
    })

    function handleUsernameChange(event:any){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event:any){
        setPassword(event.target.value)
    }

    function handleEmailChange(event:any){
        setEmail(event.target.value)
    }

    function handleChange(event:any) {
        console.log(event.target.id)
        setState({...state, [event.target.id]: event.target.value})
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
            navigate('/login')
        } catch (error) {
            setIsAlertOpen(true)
            if (axios.isAxiosError(error)){
                console.log(error.response?.data)
                setErrorMsg(username + ' ' + error.response?.data.msg)
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
                <Card sx={{ minWidth: 275, maxWidth: 575 }}>
                    
                    <CardContent>
                        <Typography>
                            Signup Modal
                        </Typography>
                            <TextField label='Username' id='username' fullWidth margin="normal" onChange={handleUsernameChange} />
                        <TextField label='Password' id='password' fullWidth margin="normal" onChange={handlePasswordChange} />
                        <TextField label='Email' id='email' fullWidth margin="normal" onChange={handleEmailChange} />
                        <Button variant='contained' size='large' onClick={handleSubmitClick} >Submit</Button>
                        <Typography>
                            Did you mean to <Link href='/login'>login</Link>?
                        </Typography>
                    </CardContent>

                </Card>

            </Grid>

        </div>

    )


}


export default SignUpModal
