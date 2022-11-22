import React from 'react';
import { Grid } from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
    Button,
} from "@mui/material"
import Modal from '@mui/material/Modal';
import PartnerForm from './Partnerform';

export default function PartnerPage(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <ToastContainer />
            <Grid container>
                <Grid item sm={12} md={6}>
                    <div>
                        <Button onClick={handleOpen}>Open modal</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <PartnerForm handleClose={handleClose}/>
                        </Modal>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}