import SignIn from "./SignIn";
import {useState} from "react";
import UserPage from "./UserPage";

const Home = () => {
    const [signedIn, setSignedIn] = useState(false);


    return (
        <>
            {signedIn ?
                <UserPage/> :
                <SignIn setSignedIn={setSignedIn}/>
            }
        </>
    )
}

export default Home;
