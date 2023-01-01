import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const tags = ["academic", "emo", "family", "friendship", "life", "romantic"];

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(148,96,51)",
    },
  },
});

export default function TagBar({ keyTags, setKeyTags }) {
  return (
    <ThemeProvider theme={theme}>
      <Autocomplete
        value={keyTags}
        multiple
        id="size-small-outlined-multi"
        size="small"
        options={tags}
        ListboxProps={{ style: { maxHeight: "300px" } }}
        getOptionLabel={(option) => option}
        defaultValue={[]}
        onChange={(event, value) => setKeyTags(value)}
        renderInput={(params) => (
          <TextField {...params} label="Choose a tag" placeholder="tag" />
        )}
      />
    </ThemeProvider>
  );
}
