
import LoginModal from "../components/LoginModal";
import SignUpModal from "../components/SignUpModal";
import {Button} from "@mui/material"
import { useState } from "react"

export interface Props {
    type: string;
    username: string;
    password: string;
    onInputChange: any;
}

function Authentication(props : Props){
    // TODO: Username / Password Validations and Password Hiding

    if (props.type === "login")
        return (
            <div style={{textAlign: "center"}}>
                <LoginModal username={props.username} password={props.password} onInputChange={props.onInputChange}/>
            </div>
        )
    else
        return (
            <div style={{textAlign: "center"}}>
                <SignUpModal/>
            </div>
        )
}


export default Authentication