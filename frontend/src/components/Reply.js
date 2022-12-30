import { useState } from "react";
import { Button, TextField } from "@mui/material";

import { API_reply } from "../axios";
import "../css/Reply.css";

const Reply = (id) => {
  const [response, setResponse] = useState("");
  console.log(id.id, response);

  const handleSubmit = async () => {
    console.log(id, response);
    const res = await API_reply(id.id, response);
    setResponse("");
    console.log(res);
  };

  //TODO: after submitting, returned to the AdminPage

  return (
    <div className="box">
      <div className="content">
        <TextField
          id="newReply_content"
          label="Content"
          variant="outlined"
          required={true}
          multiline
          rows={16}
          sx={{ width: "100%" }}
          onChange={(e) => setResponse(e.target.value)}
        />
      </div>
      <div className="btn">
        <Button
          variant="contained"
          sx={{
            width: "100%",
            backgroundColor: "#BBA996",
            "&:hover": { backgroundColor: "#B49B79" },
          }}
          onClick={handleSubmit}
          disabled={!response}
        >
          {" "}
          Reply{" "}
        </Button>
      </div>
    </div>
  );
};

export default Reply;
