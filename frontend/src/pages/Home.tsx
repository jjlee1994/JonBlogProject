import { Grid, Typography } from "@mui/material"
import PostCard from "../components/PostCard"

function Home(){

    return (
        <div
            style={{
                margin: "0 200px"
            }}
        >
            <Typography>
                Home Page
            </Typography>
            
            <div style={{
                margin: "100px 0"
            }}>
                <Grid container spacing={2}>
                    <Grid item>
                        <PostCard/>
                    </Grid>
                    <Grid item>
                        <PostCard/>
                    </Grid>
                    <Grid item>
                        <PostCard/>
                    </Grid>
                    <Grid item>
                        <PostCard/>
                    </Grid>
                </Grid>

            </div>
            
        </div>
    )

}

export default Home