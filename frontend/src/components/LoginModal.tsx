import { Card, Button, CardContent, TextField } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';


function LoginModal(){

    return (
        <div>
            <Grid
                container
                justifyContent="space-evenly"
                direction="row"
                alignItems="center"
            >
                <Card sx={{ minWidth: 275, maxWidth: 575 }} >
                    <CardContent >
                        Login Modal
                        <TextField id="username" label="Username" fullWidth margin="normal"/>
                        <TextField id="password" label="Password" fullWidth margin="normal"/>
                        <Button variant="contained" size="large"> Login </Button>
                        Not yet a user? <a href="/signup">sign up</a>
                    </CardContent>
                </Card>
            </Grid>
    </div>
    )


}

export default LoginModal