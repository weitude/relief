import { useState } from "react";
import { Button, Paper, TextField } from "@mui/material";

// import { makeStyles } from '@mui/styles';
import { API_reply } from "../axios";
import "../css/Reply.css";
import { useRelief } from "../hooks/useRelief";
import { useNavigate } from "react-router-dom";

/*const CustomTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: `4px 0 0 4px`,
      },
    },
  },
})(TextField);*/

const Reply = (id) => {
  const { signedIn } = useRelief();
  const [response, setResponse] = useState("");
  console.log(id.id, response);

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/", {
      state: {
        signedIn: signedIn,
      },
    });
  };

  /*useEffect(() => {
    navigateToHome();
  }, [signedIn]);*/

  const handleSubmit = async () => {
    console.log(id, response);
    const res = await API_reply(id.id, response);
    setResponse("");
    console.log(res);
    navigateToHome();
  };

  //TODO: after submitting, returned to the AdminPage

  return (
    <div className="replyBox">
      <Paper className="paper" elevation={3}>
        <TextField
          id="newReply_content"
          label="Content"
          variant="outlined"
          required={true}
          multiline
          rows={16}
          sx={{
            width: "100%",
            backgroundColor: "#ffffff",
          }}
          onChange={(e) => setResponse(e.target.value)}
        />
      </Paper>
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
          Reply
        </Button>
      </div>
    </div>
  );
};

export default Reply;
