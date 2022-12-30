// import styled from "styled-components";
import { API_opencard } from "../axios";
import { useParams } from "react-router-dom";
import { useRelief } from "../hooks/useRelief";
import Reply from "../components/Reply";
import { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { Paper } from "@mui/material";
import "../css/Post.css";

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
      <div className="container">
        <div className="title">{title}</div>
        <div className="box">
          <div className="block">
            <h3> Questions </h3>
            <Paper className="content" elevation={3}>
              {" "}
              {question}{" "}
            </Paper>
          </div>
          <div className="block">
            <h3> Responses </h3>
            {signedIn === 2 ? (
              <Reply id={id} />
            ) : (
              <Paper className="content" elevation={3}>
                {" "}
                {response}{" "}
              </Paper>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
