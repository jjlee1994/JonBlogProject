import { Avatar, Button, Grid, Card, CardHeader, CardContent, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


export interface ProfileCardProps {
    isLoggedIn: boolean,
    username: string
}

function ProfileCard(props: ProfileCardProps){

    const navigate = useNavigate()

    return (

        <div>

            <Grid
                container
                direction='column'
                alignItems='center'
                justifyContent='center'
            >
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
                        <Typography sx={{ margin: 3 }}>
                            {props.username}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

        </div>

    )

}

export default ProfileCard