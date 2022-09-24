import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React from 'react';
import {useState} from 'react'

function BasicModal(props){
  
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {modalTitle,modalInfo} = props
    return(<div>
    <Button onClick={handleOpen}>Open modal</Button>
   
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {modalTitle}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         {modalInfo}
        </Typography>
      </Box>
    </Modal>


</div>)

}

export default BasicModal;

