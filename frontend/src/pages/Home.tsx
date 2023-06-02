import { Button, Grid, Typography } from "@mui/material"
import PostCard from "../components/PostCard"
import axios from 'axios'
import { useEffect, useState } from 'react'


function Home(){
    const [state, setState] = useState({
        posts: []
    })

    async function homepage() {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:5001/posts',
            headers: {'Authorization' : 'Bearer ' + localStorage.getItem('access_token')}
        })
        return (response.data.data)
    }
    useEffect(()=>{
        homepage().then((data)=>{
            setState({posts: data})
        })
    }, [])
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
                    {state.posts.map((i)=>{
                        return (                    
                            <Grid item>
                                <PostCard username={i['username']} subject={i['subject']} content={i['content']}/>
                            </Grid>)
                    })}
                </Grid>

            </div>
            
        </div>
    )

}

export default Home