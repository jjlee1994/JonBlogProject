import { Card, Button, CardContent, TextField, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';


function SignUpModal(){

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
                        <Typography>
                            Sign Up Modal
                        </Typography>
                        <TextField id="username" label="Username" fullWidth margin="normal"/>
                        <TextField id="password" label="Password" fullWidth margin="normal"/>
                        <Button variant="contained" size="large"> Sign Up </Button>
                        <Typography>
                            Did you mean to <a href="/login">login</a> instead?
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )


}


export default SignUpModal
