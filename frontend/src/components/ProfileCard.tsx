import {Card, CardContent, Button, TextField, Typography, Grid, IconButton, Avatar} from "@mui/material"
import { useState } from 'react'
import axios from 'axios'

export interface Props {
    username: string;
}

function ProfileCard(props : Props) {
    async function follow() {
        const response = await axios({
        method: 'post',
        url: 'http://localhost:5001/follow/' + props.username,
        headers: {'Authorization' : 'Bearer ' + localStorage.getItem('access_token')}
        })
        if(response) {
            console.log(response)
        }
    }
    return (
        <div>
            <Grid
                container
                justifyContent="space-evenly"
                alignItems="center"
            >
                <Card sx={{
                    minWidth: 600,
                    maxWidth: 600
                }}>
                        <Grid container>
                            <Grid item container>
                                <Grid item>
                                    <IconButton>
                                            <Avatar
                                                sx={{width: 120, height: 120}}
                                            >
                                                {props.username[0].toUpperCase()}
                                            </Avatar>
                                    </IconButton>
                                </Grid>
                                <Grid item container justifyContent="flex-end">
                                    <Button variant="contained" onClick={follow}>Follow</Button>
                                </Grid>
                            </Grid>
                            <Grid item container alignItems="center">
                                <Typography variant="h2">{props.username}</Typography>
                            </Grid>
                        </Grid>
                </Card> 
            </Grid>
        </div>
    )
}

export default ProfileCard