import { Avatar, Card, CardContent, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";



function PostCard(){

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
                        H 
                    </Avatar>
                </IconButton>
                <Typography> NAME </Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: "row", alignItems: 'center', pl:2, pr:2, pb:2}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Box>
        </Card>

    )

}

export default PostCard