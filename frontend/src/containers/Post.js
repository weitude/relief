import "../css/Post.css";
import { API_opencard } from "../axios";
import { useParams } from "react-router-dom";
import { useRelief } from "../hooks/useRelief";
import Reply from "../components/Reply";
import { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

const Post = () => {
  const { id } = useParams();
  const { signedIn } = useRelief();
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const openCard = async () => {
    const info = (await API_opencard(id, signedIn === 2)).content;
    console.log("openCard:", info);
    setTitle(info.title);
    setQuestion(info.question);
    setResponse(info.response);
  };

  useEffect(() => {
    openCard();
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
        {title ? (
          <>
            <div className="title">{title}</div>
            <div className="box">
              <div className="block">
                <h2> Questions </h2>
                <Paper className="paper" elevation={3}>
                  <Typography className="text">{question}</Typography>
                </Paper>
              </div>
              <div className="block">
                <h2> Responses </h2>
                {signedIn === 2 ? (
                  <Reply id={id} />
                ) : (
                  <Paper className="paper" elevation={3}>
                    <Typography className="text">{response}</Typography>
                  </Paper>
                )}
              </div>
            </div>
          </>
        ) : (
          "loading..."
        )}
      </div>
    </>
  );
};

export default Post;
