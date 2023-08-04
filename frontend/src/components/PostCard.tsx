import { Avatar, Grid, Stack, Card, CardContent, Typography } from '@mui/material'


export interface PostCardProps {
    content: string,
    username: string
}

function PostCard(props: PostCardProps){

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
                                <Avatar>
                                    {props.username[0]}
                                </Avatar>
                                <Typography>
                                    {props.username}
                                </Typography>
                            </Stack>
                            <Card>
                                <Typography sx={{ margin: 3 }}>
                                    {props.content}
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