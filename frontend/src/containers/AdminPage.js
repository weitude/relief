import NavigationBar from "../components/NavigationBar";
import * as React from "react";
import { useEffect, useState } from "react";
import PromoteModal from "../components/PromoteModal";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Ques from "../components/Ques";
import { API_promote, API_search } from "../axios";
import { useRelief } from "../hooks/useRelief";
import "../css/UserPage.css";

const AdminPage = () => {
  const { displayStatus } = useRelief();
  const [modalOpen, setModalOpen] = useState(false);
  const [quesArr, setQuesArr] = useState(
    async () => await API_search("", [], false).content,
  );

  const getQues = async () => {
    const ret = await API_search("", [], false);
    setQuesArr(ret.content);
  };

  useEffect(() => {
    getQues();
  }, []);

  console.log("quesArr:", quesArr);

  return (
    <>
      <NavigationBar />
      <PromoteModal
        open={modalOpen}
        onCreate={async ({ name }) => {
          await API_promote(name);
          setModalOpen(false);
          displayStatus({ type: "success", msg: "promote" });
        }}
        onCancel={() => {
          setModalOpen(false);
        }}
      />
      <div className="box">
        <div className="Content">
          {quesArr.length > 0
            ? quesArr.map((item, i) => <Ques key={i} item={item} />)
            : "loading..."}
        </div>
        <div className="Footer">
          <IconButton id="addBtn" onClick={() => setModalOpen(true)}>
            <AddIcon sx={{ fontSize: 50, color: "#ffffff" }} />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
