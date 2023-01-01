import "../css/Search.css";
import { API_search } from "../axios";
import { useRelief } from "../hooks/useRelief";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

export default function Search({ keyWord, keyTags, setKeyWord, setKeyTags }) {
  const { signedIn, displayStatus, setQuesArr, quesArr } = useRelief();

  const handleSearch = async () => {
    console.log("search:", keyWord, keyTags);
    const ret = await API_search(keyWord, keyTags, signedIn !== 2);
    console.log("ret", ret);
    setKeyWord("");
    setKeyTags([]);
    if (ret.content.length === 0) {
      displayStatus({ type: "error", msg: "no such question!" });
      return;
    }

    setQuesArr(ret.content);
    console.log("quesArr:", quesArr, keyWord, keyTags);
  };

  return (
    <div className="search">
      <InputBase
        value={keyWord}
        sx={{ ml: 2, width: "100%" }}
        onInput={(e) => {
          setKeyWord(e.target.value);
        }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton
        type="submit"
        aria-label="search"
        onClick={handleSearch}
        // sx={{justifyContent: "flex-end"}}
      >
        <SearchIcon />
      </IconButton>
    </div>
  );
}
