import { Grid, Button } from "@mui/material"
import PostCard from "../components/PostCard"
import UserPostEntryCard from "../components/UserPostEntryCard"
import axios from 'axios'
import { useState, useEffect } from "react"
import { getuid } from "process"

function Home(){

    const [userPosts, setUserPosts] = useState({
        posts: []
    })

    async function getUserPosts(){
        const response = await axios({
            method: 'post',
            url: 'http://localhost:5001/get_user_posts',
            headers: {
                'Authorization': localStorage.getItem('access_token')
            }
        })
        setUserPosts({
            posts: response.data.data
        })
        console.log(userPosts.posts)
        console.log(response.data.data)
    }

    useEffect(()=>{
        getUserPosts()
    },[])

    // TODO: return all users posts as post cards
    // pass down props to display actual content
    return (
        <div>
            <Button onClick={()=>{console.log(userPosts)}}>
                log state
            </Button>
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

                {/* {
                    userPosts.posts.map((i:any) => {
                        return(
                            <Grid item>
                                {i}
                            </Grid>
                        )
                    })
                } */}
                
            </Grid>
        </div>
    )

}

export default Home