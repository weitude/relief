import SignIn from "./SignIn";
import {useRelief} from "../hooks/useRelief";
import UserPage from "./UserPage";
import AdminPage from "./AdminPage";
import {useLocation} from "react-router-dom";

export default function Home() {

    const {signedIn, status, setStatus, displayStatus} = useRelief()
    const {state} = useLocation();
    const HomePage = (role) => {
        if (role === 0)
            return <SignIn/>
        if (role === 1 || role === 3)
            return <UserPage/>
        if (role === 2)
            return <AdminPage/>
    }

    console.log(signedIn)
    if (state) {
        return HomePage(state.signedIn)
    }
    else {
        return HomePage(signedIn)
    }
}