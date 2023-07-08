import { Grid } from "@mui/material"
import PostCard from "../components/PostCard"
import UserPostEntryCard from "../components/UserPostEntryCard"

function Home(){

    return (
        <div>
            <Grid
                container
                direction='column'
                alignItems='center'
                justifyContent='center'
                spacing={2}
            >
                <Grid item>
                    <UserPostEntryCard/>
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
    )

}

export default Home