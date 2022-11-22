import React from 'react';
import { Grid } from '@mui/material';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
    Button,
} from "@mui/material"
import Modal from '@mui/material/Modal';
import CustomerReqForm from './Customerform';

export default function CustomerReq(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <ToastContainer />
            <Grid container>
                <Grid item sm={12} md={6} xs={12}>
                    <div>
                        <Button onClick={handleOpen}>Open modal</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <CustomerReqForm handleClose={handleClose} />
                        </Modal>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}