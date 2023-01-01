import "../css/Reply.css";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { API_reply } from "../axios";
import { useRelief } from "../hooks/useRelief";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#c47a45",
    },
  },
});

const Reply = ({ id }) => {
  const { signedIn } = useRelief();
  const [response, setResponse] = useState("");
  console.log(id, response);

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/", {
      state: {
        signedIn: signedIn,
      },
    });
  };

  const handleSubmit = async () => {
    await API_reply(id, response);
    setResponse("");
    navigateToHome();
  };

  return (
    <ThemeProvider theme={theme}>
      <TextField
        id="newReply_content"
        label="Response"
        variant="outlined"
        required={true}
        multiline
        rows={15}
        sx={{ width: "100%" }}
        onChange={(e) => setResponse(e.target.value)}
      />
      <div className="btn">
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={handleSubmit}
          disabled={!response}
        >
          Reply
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default Reply;
