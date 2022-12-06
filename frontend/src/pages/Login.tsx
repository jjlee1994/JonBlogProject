import { Card, Button, CardContent, TextField } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';

function Login(){
    // TODO: Username / Password Validations and Password Hiding

    return (
        <div style={{textAlign: "center"}}>
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
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}


export default Login