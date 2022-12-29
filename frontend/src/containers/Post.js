import styled from "styled-components"
import {API_opencard} from "../axios";
import {useParams} from "react-router-dom";
import {useRelief} from "../hooks/useRelief";
import {useEffect, useState} from "react";
import NavigationBar from "../components/NavigationBar";

const Title = styled.h1`
  font-size: 22px;
  font-family: 'Nunito', 'Roboto', sans-serif;
  color: #000000;
`

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-left: 10px;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const Post = () => {
    const {id} = useParams()
    const {signedIn} = useRelief();

    const [title, setTitle] = useState("");
    const [question, setQuestion] = useState("");
    const [response, setResponse] = useState("");

    let info = {};

    console.log("id:", id)

    const openCard = async () => {
        info = (await API_opencard(id, signedIn === 2)).content;
        console.log("openCard:", info)
        setTitle(info.title)
        setQuestion(info.question)
        setResponse(info.response)
    }

    useEffect(() => {
        openCard()
        console.log(info)

    }, [])

    /*useEffect(() => {
        if (info){
            setTitle(info.title)
            console.log("info:", info)
        }
    }, [info])*/

    
    return (
        <>
            <NavigationBar/>
            <h1>{title}</h1>
            <h3>{question}</h3>
            <h3>{response}</h3>

        </>
        /*<Div>
            <Header>
                <Title>{title}</Title>
                <div>
                {tag.map( (t, i) => (<Tag color="gold" id={i}>{t}</Tag>))}
                </div>
            </Header>
            <p> {que} </p>
            <Divider />
            <p> {res} </p>
        </Div>*/
    )

}


export default Post;