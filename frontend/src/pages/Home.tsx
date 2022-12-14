import { Typography } from "@mui/material"
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
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </div>
            
        </div>
    )

}

export default Home