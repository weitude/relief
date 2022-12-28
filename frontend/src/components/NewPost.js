import MultipleSelectCheckmarks from './MultiSelect';
import { API_postcard } from '../axios'

import { Modal } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from "antd";
import { useState } from 'react';
import { useRelief } from '../containers/hooks/useRelief';

const NewPost = () => {
    const {chosenTag, setchosenTag, title, setTitle, content, setContent, createNewPost, setCreateNewPost} = useRelief();

    const handleClose = () => {
        setCreateNewPost(false);
    }
    
    const handleSubmit = () => {
        API_postcard(title, content, chosenTag);
        handleClose();
    }
    
    return (
        <Modal open={createNewPost} onClose={handleClose}>
            <div className="Create">
                <form className="create_form">
                    <div className="form_item">
                        <TextField id="newPost_title" label="Title" variant="standard" required="true" sx={{width: '100%'}} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="form_item">
                        <TextField id="newPost_content" label="Content" variant="outlined" required="true" multiline maxrows={100} sx={{width: '100%'}} onChange={(e) => setContent(e.target.value)}/>
                    </div>
                    <div className="form_item">
                        <MultipleSelectCheckmarks chosenTag={chosenTag} setchosenTag={setchosenTag}/>
                    </div>
                    <div className="form_item_footer">
                        <Button variant="contained" sx={{width: '100%'}} onClick={handleSubmit} disabled={!title || !content }>Submit</Button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default NewPost;