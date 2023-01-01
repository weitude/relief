import "../css/NewPost.css";
import SelectTag from "./SelectTag";
import { Modal, TextField } from "@mui/material";
import { Button } from "antd";
import { API_post } from "../axios";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import * as React from "react";

const NewPost = ({ createNewPost, setCreateNewPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [chosenTags, setChosenTags] = useState([]);

  const handleClose = () => {
    setCreateNewPost(false);
    setChosenTags([]);
  };

  const handleSubmit = () => {
    API_post(title, content, chosenTags.sort());
    handleClose();
  };

  return (
    <Modal open={createNewPost} onClose={handleClose}>
      <div className="main">
        <Typography variant="h4">New Post</Typography>
        <TextField
          id="newPost_title"
          label="Title"
          variant="outlined"
          required={true}
          sx={{ width: "100%" }}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="newPost_content"
          label="Content"
          variant="outlined"
          required={true}
          multiline
          rows={9}
          sx={{ width: "100%" }}
          onChange={(e) => setContent(e.target.value)}
        />
        <SelectTag chosenTags={chosenTags} setChosenTags={setChosenTags} />
        <div className="newPostFooter">
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            onClick={handleSubmit}
            disabled={!title || !content}
          >
            Submit
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default NewPost;
