import { Grid, Button, Typography } from "@mui/material"
import PostCard from "../components/PostCard"
import UserPostEntryCard from "../components/UserPostEntryCard"
import axios from 'axios'
import { useState, useEffect } from "react"
import { getuid } from "process"


export interface AppProps {
    isLoggedIn: boolean,
    userId: string,
    username: string,
    email: string,
    getUserInfo: any
}

function Home(props: AppProps){

    const [state, setState] = useState({
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
        setState({
            posts: response.data.data
        })
    }

    useEffect(()=>{
        if (localStorage.getItem('access_token') != null){
            getUserPosts()
            props.getUserInfo()
        }
    },[])

    if (!props.isLoggedIn){
        return (
            <Grid 
                container
                direction='column'
                alignItems='center'
                justifyContent='center'
            >
                <Grid item>
                    <Typography variant='h2'>
                        Welcome to my blog project
                    </Typography>
                </Grid>
                <Grid item>
                <Button href='/login'>
                    Log in
                </Button>
                <Button href='/signup'>
                    Sign up
                </Button>
                </Grid>
            </Grid>
        )
    }

    return (
        <div>
            <Button onClick={()=>{console.log(state)}}>
                log state
            </Button>
            <Button onClick={()=>{console.log(props)}}>
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
                    <UserPostEntryCard username={props.username} getUserPosts={getUserPosts} />
                </Grid>
                {
                    state.posts.map((i:any) => {
                        return (
                            <Grid item>
                                <PostCard content={i.content} username={props.username}/>
                            </Grid>
                        )
                    }) 
                }

            </Grid>
        </div>
    )

}

export default Home