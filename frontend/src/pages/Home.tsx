import { Grid } from "@mui/material"
import PostCard from "../components/PostCard"
import UserPostEntryCard from "../components/UserPostEntryCard"
import axios from 'axios'

function Home(){

    async function test(){
        const response = await axios({
            method: 'post',
            url: 'http://localhost:5001/post',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY4OTIyMTExMywianRpIjoiMjhjYmRlOTYtZTRlYi00YWUzLWI1NDMtMmNkZjM4OGUxNmJlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IkgzIiwibmJmIjoxNjg5MjIxMTEzLCJleHAiOjE2ODkyMjIwMTN9.aMCjQsxzYLADJS2iYCWuOf0V-IuCckX2NVilD3_hgwc'
            },
            data:{
                'post_id': '1'
            }
        });
        console.log(response.data);
    }

    test()

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