import SignIn from "./SignIn";
import {useRelief} from "../hooks/useRelief";
import UserPage from "./UserPage";
import AdminPage from "./AdminPage";
import {useEffect} from "react";

export default function Home(){

    const {signedIn, status, setStatus, displayStatus} = useRelief()


    /*useEffect(() => {
        displayStatus(status)
    }, [status])*/

    console.log(signedIn)
    if (signedIn === 0)
    {
        return <SignIn/>
    }
    else if (signedIn === 1)
    {
        // displayStatus(status);
        return <UserPage/>
    }
    else if (signedIn === 2)
    {
        // displayStatus(status);
        return <AdminPage/>
    }
}