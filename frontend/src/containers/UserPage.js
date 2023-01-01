import Ques from "../components/Ques";
import NewPost from "../components/NewPost";
import "../css/UserPage.css";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import { useRelief } from "../hooks/useRelief";
import NavigationBar from "./NavigationBar";

const UserPage = () => {
  const { createNewPost, quesArr, displayStatus, signedIn, setCreateNewPost } =
    useRelief();

  const handleOpen = () => {
    setCreateNewPost(true);
  };

  return (
    <>
      <NavigationBar />
      <div className="userPageBox">
        <div className="Content">
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
          <div className="Footer">
            <IconButton id="addBtn" onClick={handleOpen}>
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
