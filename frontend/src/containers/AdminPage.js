import "../css/Page.css";
import NavigationBar from "./NavigationBar";
import * as React from "react";
import { useState } from "react";
import PromoteModal from "../components/PromoteModal";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Ques from "../components/Ques";
import { API_promote } from "../axios";
import { useRelief } from "../hooks/useRelief";

const AdminPage = () => {
  const { displayStatus, quesArr } = useRelief();
  const [modalOpen, setModalOpen] = useState(false);

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
      <div className="pageWrapper">
        <div className="pageContainer">
          {quesArr.length > 0
            ? quesArr.map((item, i) => <Ques key={i} item={item} />)
            : "loading..."}
        </div>
        <div className="pageFooter">
          <IconButton id="addBtn" onClick={() => setModalOpen(true)}>
            <AddIcon sx={{ fontSize: 50, color: "#ffffff" }} />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
