import { Avatar, Card, CardContent, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";

export interface Props {
    username: string;
    subject: string;
    content: string;

}

function PostCard(props : Props){

    return (
        <Card sx={{
            display: "flex",    
            height: 250,
            boxShadow: "1px 1px 2px 0 rgb(60 64 67 / 40%), 1px 1px 3px 1px rgb(60 64 67 / 15%)"
        }}>
            <Box sx={{display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center', pl:2, pb:2}}>
                <IconButton>
                    <Avatar
                        sx={{width: 80, height: 80}}
                    > 
                        {props.username[0].toUpperCase()}
                    </Avatar>
                </IconButton>
                <Typography> {props.username} </Typography>
            </Box>
            <Box sx={{flexDirection: "column", alignItems: 'center', justifyContent: 'center' , pl:2, pr:2, pb:2}}>
                <Typography variant='h4'>{props.subject}</Typography>
                <Box sx={{display: 'flex', flexDirection: "row", alignItems: 'center'}}>
                    {props.content}
                </Box>
            </Box>
        </Card>

    )

}

export default PostCard