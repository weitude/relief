import React, { createContext, useContext, useEffect, useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { API_search } from "../axios";

const ReliefContext = createContext({});

const ReliefProvider = (props) => {
  const [status, setStatus] = useState({});
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [signedIn, setSignedIn] = useState(0);

  const [chosenTag, setChosenTag] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [createNewPost, setCreateNewPost] = useState(false);

  const [quesArr, setQuesArr] = useState([]);

  const getQues = async () => {
    const ret = await API_search("", [], signedIn !== 2);
    setQuesArr(ret.content);
  };

  useEffect(() => {
    getQues();
  }, [signedIn]);

  const displayStatus = async (s) => {
    if (s.msg) {
      const { type, msg } = s;
      const content = { content: msg, duration: 1 };
      switch (type) {
        case "success":
          message.success(content);
          break;
        case "error":
          message.error(content);
          break;
        default:
          break;
      }
    }
  };

  return (
    <ReliefContext.Provider
      value={{
        passwd,
        setPasswd,
        mail,
        setMail,
        name,
        status,
        setName,
        signedIn,
        setSignedIn,
        setStatus,
        displayStatus,
        // navigateToHome,
        chosenTag,
        setChosenTag,
        title,
        getQues,
        setTitle,
        content,
        setContent,
        createNewPost,
        setCreateNewPost,
        quesArr,
        setQuesArr,
      }}
      {...props}
    />
  );
};

const useRelief = () => useContext(ReliefContext);
export { ReliefProvider, useRelief };
