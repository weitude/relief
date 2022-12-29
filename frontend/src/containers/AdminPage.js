import NavigationBar from "../components/NavigationBar";
import * as React from "react";
import PromoteModal from "../components/PromoteModal";
import {useEffect, useState} from "react";
import {IconButton} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Ques from "../components/Ques";
import NewPost from "../components/NewPost";
import {API_search} from "../axios";

const AdminPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [quesArr, setQuesArr] = useState(async () => (await (API_search('', [], false)).content));

    const getQues = async ()=>{
         const ret =await API_search('', [], false)
        setQuesArr(ret.content)
    }

    useEffect(() => {
        getQues()
    }, []);

    console.log("quesArr:", quesArr)


    return (
        <>
            <NavigationBar/>
            <PromoteModal
                open={modalOpen}
                /*onCreate={async ({name}) => {
                    if (chatBoxes.some(({key}) => key === name)) {
                        window.alert("chatbox exist!");
                    }
                    else {
                        setChatBoxName(makeName(me, name))
                        createChatBox(name)
                        setActiveKey(name);
                        setModalOpen(false);
                        displayStatus({type: "success", msg: "Open chatbox \"" + makeName(me, name)+"\""})
                    }
                }}*/
                onCancel={() => {
                    setModalOpen(false);
                }}
            />
            <div className="box">
                <div className="Content">
                    {
                        quesArr.length > 0
                            ? quesArr.map((item, i) => (
                                <Ques key={i} item={item}/>
                            ))
                            : ""
                    }
                </div>
                <div className="Footer">
                    <IconButton id='addBtn' onClick={()=>setModalOpen(true)}>
                        <AddIcon sx={{fontSize: 50, color: "#ffffff"}}/>
                    </IconButton>
                </div>
            </div>


        </>
    )
}

export default AdminPage;