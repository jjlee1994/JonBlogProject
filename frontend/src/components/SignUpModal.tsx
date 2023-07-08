import { Grid, Card, CardContent, TextField, Typography, Link, Button } from '@mui/material';

function SignUpModal(){

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

                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <TextField label='Username'/>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField label='Password'/>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField label='Email' />
                            </Grid>

                            <Grid item xs={12}>
                                <Button variant='contained'>
                                    Submit
                                </Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography>
                                    Did you mean to <Link href='/login'>login</Link>?
                                </Typography>
                            </Grid>

                        </Grid>

                    </CardContent>

                </Card>

            </Grid>

        </div>

    )


}


export default SignUpModal
