
import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"

function Navbar(){

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position ="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Blog Project
                    </Typography>
                    <Button color="inherit" href="/login">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )


}

export default Navbar