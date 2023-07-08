import { Avatar, Button, Card, CardContent, Typography } from '@mui/material'

function ProfileCard(){

    return (

        <div>

            <Card sx={{ maxWidth: 275 }}>
                <CardContent>
                    <Avatar>N</Avatar>
                    <Typography>
                        Username
                    </Typography>
                    <Typography>
                        Email
                    </Typography>
                    <Button>Edit</Button>
                </CardContent>
            </Card>

        </div>

    )

}

export default ProfileCard