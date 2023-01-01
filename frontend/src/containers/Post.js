import "../css/Post.css";
import { API_opencard } from "../axios";
import { useParams } from "react-router-dom";
import { useRelief } from "../hooks/useRelief";
import Reply from "../components/Reply";
import { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

const Post = () => {
  const { id } = useParams();
  const { signedIn } = useRelief();
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);

  const openCard = async () => {
    const info = (await API_opencard(id, signedIn === 2)).content;
    setTitle(info.title);
    setQuestion(info.question);
    setResponse(info.response);
    setLoading(false);
  };

  useEffect(() => {
    openCard();
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="postWrapper">
        {loading ? (
          <div className="loading">loading...</div>
        ) : (
          <>
            <div className="title">{title}</div>
            <div className="postContainer">
              <div className="postBox">
                <h2> Questions </h2>
                <Paper className="paper" elevation={3}>
                  <Typography>{question}</Typography>
                </Paper>
              </div>
              <div className="postBox">
                <h2> Responses </h2>
                <Paper className="paper" elevation={3}>
                  {signedIn === 2 ? (
                    <Reply id={id} />
                  ) : (
                    <Typography>{response}</Typography>
                  )}
                </Paper>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Post;
