import ProfileCard from "../components/ProfileCard";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


export interface ProfileProps {
    isLoggedIn: boolean,
    username: string,
    userId: string
}

function Profile(props: ProfileProps){

    const navigate = useNavigate()
    const urlParams:any = useParams()
    console.log(urlParams)

    // on /profile page refresh:
    // triggers initial render App->Profile, App state is not set (username = '')
    // then useEffect is called in App after finish rendered and App state is set
    // then Profile gets rendered because App state updated
    if (props.username == ''){
        console.log('rendered </>')
        return <></>
    }

    // if url is /profile which has no params
    if (Object.keys(urlParams).length == 0){
        console.log('rendered Profile')
        return (
            <ProfileCard isLoggedIn={props.isLoggedIn} username={props.username} />
        )
    } else {
        return (
            <ProfileCard isLoggedIn={props.isLoggedIn} username={urlParams.username} />
        )
    }

}

export default Profile