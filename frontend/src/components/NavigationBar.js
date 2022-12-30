import * as React from "react";
import { useState } from "react";
import {
  alpha,
  createTheme,
  styled,
  ThemeProvider,
} from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import logo from "../images/logo192.png";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useRelief } from "../hooks/useRelief";
import { API_search } from "../axios";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(206,144,92,0.53)",
    },
  },
});

const tags = ["academic", "emo", "family", "friendship", "life", "romantic"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export default function NavigationBar() {
  const { name, chosenTag, setChosenTag, signedIn } = useRelief();
  const [target, setTarget] = useState("");
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/", {
      state: {
        signedIn: signedIn,
      },
    });
  };

  const renderName = () => {
    if (signedIn === 1) return "(User) " + name;
    else if (signedIn === 2) return "(Admin) " + name;
    else return "(Guest)";
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              // size="small"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ ml: 0.2, mr: 2 }}
              onClick={navigateToHome}
            >
              <Avatar alt="NTU Relief" src={logo} />
            </IconButton>
            {/*<Typography
                            variant="h4"
                            // noWrap
                            // component="div"
                            color="#b3662e"
                            sx={{width: 190}}
                            // sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                        >
                            NTU Relief
                        </Typography>*/}

            <Search>
              {/*<SearchIconWrapper color="#b3662e">
                                <SearchIcon/>
                            </SearchIconWrapper>*/}

              <InputBase
                sx={{ ml: 2, width: 200 }}
                onInput={(e) => {
                  setTarget(e.target.value);
                  // console.log(e.target.value);
                }}
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton
                type="submit"
                aria-label="search"
                onClick={async () => {
                  const ret = await API_search(target, chosenTag, true);
                  console.log("ret", ret);
                }}
              >
                <SearchIcon />
              </IconButton>
            </Search>
            <Autocomplete
              sx={{
                ml: 2,
                width: 580,
              }}
              multiple
              id="size-small-outlined-multi"
              size="small"
              options={tags}
              getOptionLabel={(option) => option}
              defaultValue={[]}
              onChange={(event, value) => setChosenTag(value)}
              renderInput={(params) => (
                <TextField {...params} label="Choose a tag" placeholder="tag" />
              )}
            ></Autocomplete>
            {/*<Box><MultipleSelectCheckmarks /></Box>*/}
            <Typography
              variant="h5"
              // noWrap
              // component="div"
              color="#8B5128"
              // sx={{ml: auto}}
              // sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
            >
              {renderName()}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
