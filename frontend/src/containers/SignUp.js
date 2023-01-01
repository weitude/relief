import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MyCopyright from "../components/MyCopyright";
import { API_signup } from "../axios";
import { useRelief } from "../hooks/useRelief";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#c47a45",
    },
  },
});

export default function SignUp() {
  const { name, setName, passwd, signedIn, setPasswd, mail, setMail } =
    useRelief();

  useEffect(() => {
    setName("");
    setMail("");
    setPasswd("");
  }, []);

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/", {
      state: {
        signedIn: signedIn,
      },
    });
  };
  const handleSignUp = async () => {
    if (name.length > 8) {
      window.alert("Name length should <= 8");
      return;
    }
    if (!mail.includes("@ntu.edu.tw")) {
      window.alert("Please use a ntu email");
      return;
    }
    if (passwd.length < 3) {
      window.alert("Password length should >= 3");
      return;
    }
    await API_signup(name, mail, passwd, "user");
    navigateToHome();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#c47a45" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setMail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPasswd(e.target.value)}
                />
              </Grid>
              {/*TODO: notify user with email when replied*/}
              {/*<Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive updates via email."
                />
              </Grid>*/}
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSignUp}
              disabled={!name || !passwd || !mail}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="." variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <MyCopyright />
      </Container>
    </ThemeProvider>
  );
}
