import Ques from "../components/Ques";
import NewPost from "../components/NewPost";
import "../css/UserPage.css"
import * as React from "react";
import {useEffect, useState} from "react";
import {API_search} from "../axios";
import AddIcon from '@mui/icons-material/Add';
import {IconButton} from '@mui/material';
import {useRelief} from "../hooks/useRelief";
import NavigationBar from "../components/NavigationBar";
import {useNavigate} from "react-router-dom";
// import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";

/*
const Title = styled.h1`
  font-size: 80px;
  font-family: 'Dancing Script', 'La Belle Aurore', 'Nunito', 'Roboto', sans-serif;
  color: #FFFFFF;
  text-shadow: 2px 2px 2px #897C6E;
`;*/


const UserPage = () => {
    const {createNewPost, setCreateNewPost} = useRelief();

    const [quesArr, setQuesArr] = useState(async () => (await (API_search('', [], false)).content));

    console.log("quesArr:", quesArr)
    const userGetData = async () => {
        await setQuesArr((await API_search('', [], false)).content);
    }

    useEffect(() => {
        userGetData()
    }, []);


    const handleOpen = () => {
        setCreateNewPost(true);
    }



    return (
        <>
            <NavigationBar/>
            <div className="box">
                <div className="Content">
                    {
                        quesArr.length > 0
                            ? quesArr.map((item, i) => (
                                <Ques key={i} item={item}/>
                            ))
                            : ""
                    }
                </div>
                {createNewPost ?
                    <NewPost createNewPost={createNewPost} setCreateNewPost={setCreateNewPost}/> : ''
                }
                <div className="Footer">
                    <IconButton id='addBtn' onClick={handleOpen}>
                        <AddIcon sx={{fontSize: 50, color: "#ffffff"}}/>
                    </IconButton>
                </div>
            </div>
        </>

    )
}

export default UserPage;