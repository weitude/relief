import React, { createContext, useContext, useEffect, useState } from "react";
import { message } from "antd";
import { API_search } from "../axios";

const ReliefContext = createContext({});

const ReliefProvider = (props) => {
  const [signedIn, setSignedIn] = useState(0);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [quesArr, setQuesArr] = useState([]);

  const getQues = async () => {
    const ret = await API_search("", [], signedIn !== 2);
    setQuesArr(ret.content);
  };

  useEffect(() => {
    getQues();
  }, [signedIn]);

  const displayStatus = async (s) => {
    const { type, msg } = s;
    const content = { content: msg, duration: 1 };
    if (type === "success") {
      message.success(content);
    } else if (type === "error") {
      message.error(content);
    }
  };

  return (
    <ReliefContext.Provider
      value={{
        signedIn,
        setSignedIn,
        name,
        setName,
        passwd,
        setPasswd,
        mail,
        setMail,
        quesArr,
        setQuesArr,
        displayStatus,
        getQues,
      }}
      {...props}
    />
  );
};

const useRelief = () => useContext(ReliefContext);
export { ReliefProvider, useRelief };
