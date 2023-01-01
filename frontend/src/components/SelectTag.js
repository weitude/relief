import { Tag } from "antd";
import Box from "@mui/material/Box";

const { CheckableTag } = Tag;
const tags = ["academic", "emo", "family", "friendship", "life", "romantic"];

const SelectTag = ({ chosenTags, setChosenTags }) => {
  const handleChange = (tag, checked) => {
    const nextChosenTags = checked
      ? [...chosenTags, tag]
      : chosenTags.filter((t) => t !== tag);
    setChosenTags(nextChosenTags);
  };

  return (
    <Box
      sx={{
        border: 1,
        borderRadius: 1,
        padding: 1,
        borderColor: "#C4C4C4",
      }}
    >
      {tags.map((tag) => (
        <CheckableTag
          key={tag}
          checked={chosenTags.indexOf(tag) >= 0}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </Box>
  );
};

export default SelectTag;
