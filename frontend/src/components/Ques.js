import "../css/Ques.css";
import React from "react";
import { Card, Tag } from "antd";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const style = {
  academic: "blue",
  emo: "purple",
  family: "volcano",
  friendship: "gold",
  life: "green",
  romantic: "magenta",
};

const Ques = ({ item }) => {
  const { id, title, question, tags } = item;
  const navigate = useNavigate();
  const ToPost = (id) => {
    navigate("/post/" + id);
  };

  return (
    <Card
      hoverable
      onClick={() => ToPost(id)}
      style={{
        width: 300,
        height: 300,
        margin: 10,
      }}
    >
      <Meta title={title} />
      <div className="question">
        {question.length > 100 ? question.slice(0, 100) + "..." : question}
      </div>
      <div className="tags">
        {tags.map((tag, idx) => {
          if (tag !== "others") {
            return (
              <Tag key={idx} color={style[tag]}>
                {tag}
              </Tag>
            );
          }
          return null;
        })}
      </div>
    </Card>
  );
};

export default Ques;
