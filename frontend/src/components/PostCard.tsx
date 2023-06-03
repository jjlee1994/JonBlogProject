import { Avatar, Card, CardContent, IconButton, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";

export interface Props {
    username: string;
    subject: string;
    content: string;

}

function PostCard(props : Props){

    return (
        <div>
            <Grid
                container
                justifyContent="space-evenly"
                alignItems="center"
            >
                <Card sx={{
                    minWidth: 600
                }}>
                    <Grid container spacing={2}>
                        <Grid item container justifyContent="center" alignItems="center" xs={3}>
                            <IconButton >
                                <Avatar
                                    sx={{width: 80, height: 80}}
                                >
                                    {props.username[0].toUpperCase()}
                                </Avatar>
                            </IconButton>
                            <Typography align="center"> {props.username} </Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant='h4'>{props.subject}</Typography>
                            <Typography variant='body2'>{props.content}</Typography>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </div>
    )

}

export default PostCard