import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { useRelief } from "../hooks/useRelief";

export default function MyCopyright() {
  const { signedIn } = useRelief();
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/", {
      state: {
        signedIn: signedIn,
      },
    });
  };

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 5 }}
    >
      {"Copyright © "}
      <Link color="inherit" onClick={navigateToHome} href="/#/">
        NTU Relief
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
