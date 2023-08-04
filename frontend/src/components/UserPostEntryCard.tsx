import { Avatar, Grid, Stack, Card, CardContent, CardHeader, Typography, TextField, Button } from '@mui/material'
import axios from "axios";
import { useState } from "react";


export interface UserPostEntryCardProps {
    username: string,
    getUserPosts: any
}

function UserPostEntryCard(props: UserPostEntryCardProps){

    const [state, setState] = useState({
        postContent: ''
    })

    function handlePostContentChange(event:any){
        setState({
            postContent: event.target.value
        })
    }

    async function handlePostSubmitClick(){
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:5001/createpost',
                headers: {
                    'Authorization': localStorage.getItem('access_token')
                },
                data: {
                    'subject': 'subject placeholder',
                    'content': state.postContent,
                }
            })
            console.log(response.data);
            props.getUserPosts()
            setState({
                postContent: ''
            })

        } catch (error) {
            if (axios.isAxiosError(error)){
                console.log(error.response?.data)
            } else {
                throw error
            }
        }
    }

    return (

        <Card sx={{ minWidth: 400, maxWidth: 400 }}>
            <CardHeader
                avatar = {
                    <Avatar>
                        {props.username[0].toUpperCase()}
                    </Avatar>
                }
                title = {
                    props.username
                }
            />
            <CardContent>
                <Stack direction='row' justifyContent='center' spacing={2}>
                    <TextField label='Enter Post' value={state.postContent} onChange={handlePostContentChange} />
                    <Button variant='outlined' onClick={handlePostSubmitClick}>Submit</Button>
                </Stack>
            </CardContent>
        </Card>

    )
}

export default UserPostEntryCard