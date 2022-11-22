import * as React from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
import CustomerReqForm from './Forms/Customerform';
import delhivery from '../Assets/delhiveryBoy.png'
export default function BottemBar() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    const navigatenow = () => {
        navigate("/service", { replace: true });
    }
    return (
        <Box>
            {/* <hr style={{}} /> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <CustomerReqForm handleClose={handleClose} />
            </Modal>
            <Box sx={{ display: { xs: 'none', sm: 'block' }, mt: 2 }}>
                <Box style={{ position: 'relative', top: '80px' }}>
                    <hr style={{ zIndex: 90 }} />
                </Box>
                <Box sx={{ p: 1, pt: 0, pl: 3, mt: -1, width: '98%', border: '0px solid white', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', bottom: '-10px', boxShadow: "2px 5px 7px rgba(0,0,0,0.3)" }}>
                    <Box sx={{ pr: 5, pl: 5, pt: 1, pb: 1, border: '1px solid white', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'reletive', bottom: '3px', backgroundColor: "rgba(149, 165, 166, 0.3)" }}>
                        <Button
                            size="small"
                            target="_top"
                            rel="noopener noreferrer"
                            onClick={handleOpen}
                            sx={{ p: 0, m: 0 }}
                        >
                            <Typography variant="p3" sx={{ color: 'white' }} >
                                Inquiry form
                            </Typography>
                        </Button>
                    </Box>
                    <Box sx={{display:'flex'}}>
                        <img src={delhivery} style={{ height: '100px', width: '100px', display: 'block', zIndex: 100, marginRight: '50px',position:'relative',top:'-22px' }} />
                        <Box sx={{ pr: 5, pl: 5, pt: 1, pb: 1, zIndex: 200, color:'white',border: '1px solid white', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'rgb(48,109,45)' }} component={motion.div} whileHover={{ backgroundColor: "#dbdbdb", scale: 1.02, boxShadow: "2px 5px 7px rgba(0,0,0,0.3)",color:'black'}}>
                            <Button
                                target="_top"
                                href={`tel:+91 99803 85539`}
                                sx={{color:'inherit'}}
                            >
                                <Typography variant="h6" sx={{ color: 'inherit' }} >
                                    Book Your Order <br></br> Documents
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <Box sx={{ p: 1, pt: 0, pl: 3, mt: 0, width: '98%', border: '0px solid white', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', bottom: '-10px', boxShadow: "2px 5px 7px rgba(0,0,0,0.3)", flexWrap: 'wrap' }}>
                    <Box sx={{ pr: 5, pl: 5, pt: 1, pb: 1, m: 1, border: '1px solid white', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'reletive', bottom: '3px', backgroundColor: "rgba(149, 165, 166, 0.3)" }}>
                        <Button
                            size="small"
                            target="_top"
                            rel="noopener noreferrer"
                            onClick={handleOpen}
                            sx={{ p: 0, m: 0 }}
                        >
                            <Typography variant="p3" sx={{ color: 'white' }} >
                                Inquiry form
                            </Typography>
                        </Button>
                    </Box>
                    <Box sx={{ pr: 1, pl: 1, pt: 1, pb: 1, m: 1, border: '1px solid black', borderRadius: '8px',display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'rgb(48,109,45)' }} component={motion.div} whileHover={{ backgroundColor: "#dbdbdb", scale: 1.02, boxShadow: "2px 5px 7px rgba(0,0,0,0.3)"}}>
                        <Button
                            target="_top"
                            href={`tel:+91 99803 85539`}
                        >
                            <Typography variant="p" sx={{ color: 'white' }} >
                                Book Your Order Documents
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}