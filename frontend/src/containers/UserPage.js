import SearchBox from "../components/searchBox";
import styled from "styled-components";
import Ques from "../components/Ques";
import Filter from "../components/Filter";

import "../css/UserPage.css"


const Title = styled.h1`
    font-size: 80px;
    font-family: 'Dancing Script','La Belle Aurore','Nunito','Roboto', sans-serif;
    color: #FFFFFF;
    text-shadow: 2px 2px 2px #897C6E;
`;


const UserPage = () =>{

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
        </div>

    )
}

export default UserPage;