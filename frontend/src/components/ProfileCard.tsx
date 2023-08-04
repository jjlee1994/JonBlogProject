import { Avatar, Button, Stack, Grid, Card, CardHeader, CardContent, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'


export interface ProfileCardProps {
    isLoggedIn: boolean,
    isOwnUserPage: boolean,
    username: string
}

function ProfileCard(props: ProfileCardProps){

    const navigate = useNavigate()

    // on /profile page refresh:
    // triggers initial render App->Profile, App state is not set (username = '')
    // then useEffect is called in App after finish rendered and App state is set
    // then Profile gets rendered because App state updated
    if (props.username == ''){
        console.log('rendered </>')
        return (
            <div>
                <Grid
                    container
                    justifyContent='center'
                >
                    <Grid item>
                        <Typography variant="h5">
                            User not logged in. <a href='/login'>Login here</a>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }

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
                        action = {
                            props.isLoggedIn ?
                            props.isOwnUserPage ? '' :
                            <Button variant='outlined'>Follow</Button> : ''
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