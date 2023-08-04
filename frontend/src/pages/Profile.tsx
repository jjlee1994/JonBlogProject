import ProfileCard from "../components/ProfileCard";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Grid, Typography } from "@mui/material";


export interface ProfileProps {
    isLoggedIn: boolean,
    username: string,
    userId: string
}

function Profile(props: ProfileProps){

    const [state, setState] = useState({
        userExists: false,
        username: ''
    })

    const navigate = useNavigate()
    const urlParams:any = useParams()
    console.log(urlParams)

    async function checkIfUserExists(){
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:5001/lookup_user',
                data: {
                    username: urlParams.username
                }
            })
            setState({
                userExists: true,
                username: response.data.username
            })
        } catch { // returned 404 if user does not exist
            setState({
                userExists: false,
                username: ''
            })
        }
    }

    useEffect(()=>{
        // only need to check if user exists if visiting /<username> and not /profile
        if (Object.keys(urlParams).length != 0){
            checkIfUserExists()
        }
    },[])

    // if url is /profile which has no params
    if (Object.keys(urlParams).length == 0){
        console.log('rendered Profile')
        return (
            <ProfileCard isLoggedIn={props.isLoggedIn} isOwnUserPage={true} username={props.username} />
        )
    } else {
        let isOwnUserPage = null
        // if user goes to own /<username> instead of /profile
        if (urlParams.username == props.username){
            isOwnUserPage = true
        } else {
            isOwnUserPage = false
        }

        // if user does not exist
        if (!state.userExists){
            return (
                <div>
                    <Grid
                        container
                        justifyContent='center'
                    >
                        <Grid item>
                            <Typography variant="h5">
                                User {urlParams.username} does not exist
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            )
        }
        return (
            <ProfileCard isLoggedIn={props.isLoggedIn} isOwnUserPage={isOwnUserPage} username={urlParams.username} />
        )
    }

}

export default Profile