import { useState } from "react";
import { colors, TextField } from "@mui/material";
import { Button } from "@mui/material";
import styled from "styled-components";

import { API_reply } from "../axios";


const Content = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: rgba(180, 155, 121, 0.3);
`
const Btn = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`

const Div = styled.div`
    display: flex-box;
    margin: 5px;
    width: 80%;
    height: 100%;
`
const Reply = (id) => {
    const [response, setResponse] = useState("");
    console.log(id.id, response);

    const handleSubmit = async () => {
        console.log(id, response);
        const res = await (API_reply(id.id, response));
        setResponse("");
        console.log(res);
    }

    //TODO: after submitting, returned to the AdminPage
    
    return (
        <Div>
            <Content>
                <TextField id="newReply_content" label="Content" variant="outlined" required={true} multiline rows={16} sx={{width: '100%'}} onChange={(e) => setResponse(e.target.value)}/>
            </Content>   
            <Btn>
                <Button variant="contained" sx={{ width: '100%',   backgroundColor: '#BBA996', '&:hover': { backgroundColor: '#B49B79',}}} onClick={handleSubmit}
                        disabled={ !response }> Reply </Button>
            </Btn>
        </Div>

    );
}

export default Reply;