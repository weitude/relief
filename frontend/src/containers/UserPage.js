import SearchBar from "../components/searchBar";
import styled from "styled-components";
import Ques from "../components/Ques";
import Post from "./Post";

import "../css/UserPage.css"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Title = styled.h1`
    font-size: 80px;
    font-family: 'Dancing Script','La Belle Aurore','Nunito','Roboto', sans-serif;
    color: #FFFFFF;
    text-shadow: 2px 2px 2px #897C6E;
`;


const getPosts = async () => {
    // TODO
}

const UserPage = () =>{

    /*  TODO: Pop-up window
    const [posts, setPosts] = useEffect();
    const navigate = useNavigate();
    
    const goToPost = (id) => {
        navigate(`/post/${id}`);
    }
    */

    return(
        <div>
            <div className="Title">
                <Title> Relief </Title>
            </div>
            <div className="SearchBar"><SearchBar/></div>
            <div className="Content">
                <Ques /> 
                {/* {posts.map( (post, i) => (<Ques key={i} onClick={() => goToPost(post.id)} />))} */}
            </div>
        </div>

    )
}

export default UserPage;