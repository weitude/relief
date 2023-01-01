import { useNavigate } from "react-router-dom";
import { useRelief } from "../hooks/useRelief";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import logo from "../images/logo192.png";

export default function Logo() {
  const { getQues, signedIn } = useRelief();
  const navigate = useNavigate();

  const navigateToHome = () => {
    getQues();
    navigate("/", {
      state: {
        signedIn: signedIn,
      },
    });
  };

  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="open drawer"
      sx={{ ml: 0.2, mr: 2 }}
      onClick={navigateToHome}
    >
      <Avatar alt="NTU Relief" src={logo} />
    </IconButton>
  );
}
