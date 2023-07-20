
import LoginModal from "../components/LoginModal";
import SignUpModal from "../components/SignUpModal";

export interface Props {
    type: string,
}

function Authentication(props : Props){
    // TODO: Username / Password Validations and Password Hiding

    if (props.type === "login")
        return (

            <div style={{textAlign: "center"}}>
                <LoginModal />
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