import React, {useEffect} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardForm from '../CardForm/CardForm';
import { modalCloseState } from '../../util/util';

const childstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const buttonContainer = {
    width:"100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",

}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
  height: "500px",
  borderRadius: 1,
};

function ChildModal() {
  const [openChild, setOpenChild] = React.useState(false);
  const handleOpenChild = () => {
    setOpenChild(true);
  };
  const handleCloseChild = () => {
    setOpenChild(false);
  };

  return (
    <>
      <Button onClick={handleOpenChild}>Delete Card Progress</Button>
      <Modal
        hideBackdrop
        open={openChild}
        onClose={handleCloseChild}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...childstyle, width: 300, height: 200 }}>
          <h2 id="child-modal-title">Leave card?</h2>
          <p id="child-modal-description">
            Changes you made so far will not be saved
          </p>
          <div style={buttonContainer}>
            <Button onClick={handleCloseChild}>discard</Button>
            <Button onClick={handleCloseChild}>cancel</Button>
          </div>

        </Box>
      </Modal>
    </>
  );
}

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
  },[])

  return (
    <div >
      <Button onClick={handleOpen}>Create a New Card</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              New Card
            </Typography>

            <Typography id="new-card-entry">
              <CardForm />
            </Typography>
            
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ChildModal />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
