import { Avatar, Grid, Stack, Card, CardContent, Typography } from '@mui/material'

function PostCard(){

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
                                <Avatar>U</Avatar>
                                <Typography>
                                    Username
                                </Typography>
                            </Stack>
                            <Card>
                                <Typography sx={{ margin: 3 }}>
                                    Post ContentPost ContentPost ContentPost ContentPost ContentPost ContentPost ContentPost ContentPost ContentPost ContentPost ContentPost Content
                                </Typography>
                            </Card>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
        </div>

    )

}

export default PostCard