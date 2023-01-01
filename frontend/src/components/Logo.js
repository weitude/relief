import Avatar from "@mui/material/Avatar";
import logo from "../images/logo192.png";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useRelief } from "../hooks/useRelief";

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
