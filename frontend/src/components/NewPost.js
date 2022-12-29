import MultipleSelectCheckmarks from './MultiSelect';
import { API_post } from '../axios'
import { useRelief } from '../containers/hooks/useRelief';


import { Modal } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from "antd";


const NewPost = () => {
    const {chosenTag, setchosenTag, title, setTitle, content, setContent, createNewPost, setCreateNewPost} = useRelief();

    const handleClose = () => {
        setCreateNewPost(false);
    }
    
    const handleSubmit = () => {
        API_post(title, content, chosenTag);
        handleClose();
    }
    
    return (
        <Modal open={createNewPost} onClose={handleClose}>
            <div className="Create">
                <form className="create_form">
                    <div className="form_item">
                        <TextField id="newPost_title" label="Title" variant="outlined" required={true} sx={{width: '100%'}} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="form_item">
                        <TextField id="newPost_content" label="Content" variant="outlined" required={true} multiline maxrows={100} sx={{width: '100%'}} onChange={(e) => setContent(e.target.value)}/>
                    </div>
                    <div className="form_item">
                        <MultipleSelectCheckmarks />
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