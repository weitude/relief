import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useRelief } from "../hooks/useRelief";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Logo from "../components/Logo";
import TagBar from "../components/TagBar";
import Search from "../components/Search";

export default function NavigationBar() {
  const { name, signedIn } = useRelief();
  const [keyWord, setKeyWord] = useState("");
  const [keyTags, setKeyTags] = useState([]);

  const renderName = () => {
    if (signedIn === 1) return "(User) " + name;
    else if (signedIn === 2) return "(Admin) " + name;
    else return "(Guest)";
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#D6A985" }}>
      <Toolbar>
        <Grid container alignItems="center" spacing={5}>
          <Grid item xs={1}>
            <Logo />
          </Grid>
          <Grid item xs={6}>
            <TagBar keyTags={keyTags} setKeyTags={setKeyTags} />
          </Grid>
          <Grid item xs={3}>
            <Search
              keyTags={keyTags}
              setKeyTags={setKeyTags}
              keyWord={keyWord}
              setKeyWord={setKeyWord}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" color="#8B5128" align="right">
              {renderName()}
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
