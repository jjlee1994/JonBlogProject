import { Avatar, Grid, Stack, Card, CardContent, CardHeader, Typography } from '@mui/material'


export interface PostCardProps {
    content: string,
    username: string,
    postDatetime: string
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
                        subheader = {
                            props.postDatetime
                        }
                    />
                    <CardContent>
                        <Card>
                            <Typography sx={{ margin: 3 }}>
                                {props.content}
                            </Typography>
                        </Card>
                    </CardContent>
                </Card>
            </Grid>
        </div>

    )

}

export default PostCard