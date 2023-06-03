import {Card, CardContent, Button, TextField, Typography, Grid} from "@mui/material"
import { useState } from 'react'
import axios from 'axios'

export interface Props {
    onInputChange: any;
}

function PostEntry(props : Props) {

    const [state, setState] = useState({
        newPostTitle: "",
        newPostContent: ""
    })
    
    async function createPost() {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:5001/createpost',
            headers: {'Authorization' : 'Bearer ' + localStorage.getItem('access_token')},
            data: {
                subject: state.newPostTitle,
                content: state.newPostContent
            }
        })
    }

    return (
        <div>
            <Grid
                container
                justifyContent="space-evenly"
                alignItems="center"
            >
                <Card sx={{ minWidth: 600, maxWidth: 1080}}>
                    <CardContent>
                        <Grid container >
                            <TextField id="newPostTitle" label="Title" fullWidth margin="normal" onChange={props.onInputChange}></TextField>
                            <TextField id="newPostContent" label="Tell us about it" fullWidth margin="normal" multiline onChange={props.onInputChange}></TextField>
                        </Grid>
                        <Grid container justifyContent="flex-end">
                            <Button variant="contained" size="large">Post</Button>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

export default PostEntry