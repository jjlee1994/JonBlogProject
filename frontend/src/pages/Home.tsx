import { Button, Grid, Typography } from "@mui/material"
import PostCard from "../components/PostCard"
import axios from 'axios'
import { useEffect, useState } from 'react'
import PostEntry from "../components/PostEntry"

export interface Props {
    onInputChange: any;
}

function Home(props: Props){
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
                
            }}
        >
            <Grid container spacing={2} justifyContent="space-evenly">
                <Grid item xs={12}>
                    <Typography>
                        Home Page
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <PostEntry onInputChange={props.onInputChange}/>  
                </Grid>
                <Grid item container spacing={2} justifyContent="space-evenly">
                    {state.posts.map((i)=>{
                        return (                    
                            <Grid item>
                                <PostCard username={i['username']} subject={i['subject']} content={i['content']}/>
                            </Grid>)
                    })}
                </Grid>
            </Grid>           
        </div>
    )

}

export default Home