import "../css/Page.css";
import * as React from "react";
import Ques from "../components/Ques";
import NewPost from "../components/NewPost";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import { useRelief } from "../hooks/useRelief";
import NavigationBar from "./NavigationBar";

const UserPage = () => {
  const { quesArr, signedIn } = useRelief();
  const [createNewPost, setCreateNewPost] = useState(false);

  return (
    <>
      <NavigationBar />
      <div className="pageWrapper">
        <div className="pageContainer">
          {quesArr.length > 0
            ? quesArr.map((item, i) => <Ques key={i} item={item} />)
            : "loading..."}
        </div>
        {createNewPost ? (
          <NewPost
            createNewPost={createNewPost}
            setCreateNewPost={setCreateNewPost}
          />
        ) : (
          ""
        )}
        {signedIn === 1 ? (
          <div className="pageFooter">
            <IconButton id="addBtn" onClick={() => setCreateNewPost(true)}>
              <AddIcon sx={{ fontSize: 50, color: "#ffffff" }} />
            </IconButton>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default UserPage;
