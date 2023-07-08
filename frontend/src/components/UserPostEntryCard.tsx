import { Avatar, Grid, Stack, Card, CardContent, CardHeader, Typography, TextField, Button } from '@mui/material'

function UserPostEntryCard(){

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
                        <Stack direction='column' spacing={2}>
                            <Stack direction='row' spacing={2}>
                                <Avatar>P</Avatar>
                                <Typography>
                                    My Username
                                </Typography>
                            </Stack>
                            <Stack direction='row' spacing={2}>
                                <TextField label='Enter Post'/>
                                <Button variant='outlined'>Submit</Button>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
        </div>

    )

}

export default UserPostEntryCard