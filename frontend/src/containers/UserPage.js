import SearchBox from "../components/SearchBox";
import styled from "styled-components";
import Ques from "../components/Ques";
import Filter from "../components/Filter";
import NewPost from "../components/NewPost";
import "../css/UserPage.css"
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import { useRelief } from "../hooks/useRelief";

const Title = styled.h1`
    font-size: 80px;
    font-family: 'Dancing Script','La Belle Aurore','Nunito','Roboto', sans-serif;
    color: #FFFFFF;
    text-shadow: 2px 2px 2px #897C6E;
`;


const UserPage = () =>{
    const {createNewPost, setCreateNewPost} = useRelief();

    const handleOpen = () => {
        setCreateNewPost(true);
    }
    return(
        <div>
            <div className="Title">
                <Title> NTU Relief </Title>
            </div>
            <div className="SearchBar">
                <SearchBox/>
            </div>
            <div className="Content">
                <Ques />
            </div>
            { createNewPost ?
                <NewPost createNewPost={createNewPost} setCreateNewPost={setCreateNewPost}/> : ''
            }
            <div className="Footer">
                <IconButton id='addBtn' onClick={handleOpen}>
                    <AddIcon sx={ {fontSize: 50 }}/>
                </IconButton>
            </div>
        </div>

    )
}

export default UserPage;