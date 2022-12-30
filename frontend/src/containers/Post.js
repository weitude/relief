import styled from "styled-components";
import { API_opencard } from "../axios";
import { useParams } from "react-router-dom";
import { useRelief } from "../hooks/useRelief";
import Reply from "../components/Reply";
import { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { Paper } from "@mui/material";
// import '../css/Post.css'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 0px;
  height: fit-content;
  width: 100%;
`;

const Content = styled(Paper)`
  display: flex;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 5px;
  padding: 20px;
  border-radius: 10px;
  white-space: break-spaces;
  width: 80%;
  height: 100%;
  overflow: scroll;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Block = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Post = () => {
  const { id } = useParams();
  const { signedIn } = useRelief();

  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  let info = {};

  console.log("id:", id);

  const openCard = async () => {
    info = (await API_opencard(id, signedIn === 2)).content;
    console.log("openCard:", info);
    setTitle(info.title);
    setQuestion(info.question);
    setResponse(info.response);
  };

  useEffect(() => {
    openCard();
    console.log(info);
  }, []);

  /*useEffect(() => {
        if (info){
            setTitle(info.title)
            console.log("info:", info)
        }
    }, [info])*/

  return (
    <>
      <NavigationBar />
      <Container>
        <Title>{title}</Title>
        <Div>
          <Block>
            <h3> Questions </h3>
            <Content elevation={3}> {question} </Content>
          </Block>
          <Block>
            <h3> Responses </h3>
            {signedIn === 2 ? (
              <Reply id={id} />
            ) : (
              <Content elevation={3}> {response} </Content>
            )}
          </Block>
        </Div>
      </Container>
    </>
  );
};

export default Post;
