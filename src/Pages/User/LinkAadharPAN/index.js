import React, { useState } from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {
    TextField,
    Button,
    Box,
    FormControl,
    Select,
    MenuItem,
    InputLabel
} from "@mui/material"
import Typography from '@mui/material/Typography';
import { Email } from '@mui/icons-material';

const style = {
    display: { xs: 'block', sm: 'none'},
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height:'100%',
    
    bgcolor: 'rgba(254, 254, 254, 1)',
    // border: '2px solid #000',
    'border-radius': '20px',
    boxShadow: 24,
    p: 4,
    color: 'black',
    pt: 2,
    overflow:'scroll'
};

const style1 = {
    display: { xs: 'none', sm: 'block' },
    position: 'absolute',
    top: '50%',
    left: '50%',
    height:'100%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'rgba(254, 254, 254, 1)',
    // border: '2px solid #000',
    'border-radius': '20px',
    boxShadow: 24,
    p: 4,
    color: 'black',
    pt: 2,
    overflow:'scroll'
};

export default function CustomerReqForm(props) {
    const [PAN, setPAN] = useState("");
    
    const [Aadhar,setAadhar] = useState("");
    
    


    const [wantAService, setwantAService] = React.useState();

    const handlewantAServiceChange = (event) => {
        setwantAService(event.target.value);
    };
    // const Applynow = async (e) => {
    //     e.preventDefault();
    //     await axios({
    //         method: "POST",
    //         url: `https://janatha-seva.herokuapp.com/api/v1/customer/application`,
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         data: {
    //             FullName: FirstName + " " + LastName,
    //             email: Emailn,
    //             MobileNumber: MobileNumber,
    //             ApplicationType: wantAService,
    //             IsOpened: false,
    //             IsPending: false,
    //             IsComleted: false
    //         }
    //     }).then((res) => {
    //         if (res.data.error) {
    //             toast.error(res.data.message);
    //         } else {
    //             toast.success(res.data.message);
    //             props.handleClose();
    //         }
    //     }).catch((error) => {
    //         toast.error(error.response.data.message)
    //     })
    // }
    return (
        <>

            <Box sx={style}>
                <Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ "textAlign": 'center' }}>
                        NEW PAN CARD APPLICATION
                    </Typography>
                </Box>
                <Box>
                   
                    <br></br>
                    <br></br>
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent:"center" }}>
                            <Button
                                color='primary'
                                variant='outlined'
                                sx={{ mr: 2 }}
                                onClick={props.handleClose}
                            // className={classes.button}
                            >
                                cancel
                            </Button>
                            <Button
                                color='primary'
                                variant='contained'
                                sx={{ ml: 2 }}
                                // className={classes.button}
                                // onClick={Applynow}
                            >
                                Apply
                            </Button>
                        </Box>
                    </Box>
                </Box>

            </Box>
            <Box sx={style1}>
                <Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ "textAlign": 'center',"textDecoration":'bold'}}>
                        LINK AADHAR TO PAN CARD
                    </Typography>
                </Box>
                <Box>
                    <Box>
                                          
                        
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="PAN" style={{marginBottom:"5px"}}>PAN Number</label>
                           
                                <TextField
                                    label="Old PAN"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={PAN}
                                    onChange={(e) => { setPAN(e.target.value) }}
                                    error={PAN === "" ? true : false}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="Aadhar" style={{marginBottom:"5px"}}>Aadhar Number</label>
                           
                                <TextField
                                    label="Aadhar Number"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={Aadhar}
                                    onChange={(e) => { setAadhar(e.target.value) }}
                                    error={Aadhar === "" ? true : false}
                                />
                            </Box>
                            

                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="PAN" style={{marginBottom:"5px"}}>Name as per Aadhar</label>
                           
                                <TextField
                                    label="Old PAN"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={PAN}
                                    onChange={(e) => { setPAN(e.target.value) }}
                                    error={PAN === "" ? true : false}
                                />
                            </Box>
                            <Box sx={{ m: 4, mt: 2, mb: 2, width: '100%' }}>
                                <label className="form__label" for="Aadhar" style={{marginBottom:"5px"}}>Service Charge</label>
                           
                                <TextField
                                    label="Aadhar Number"
                                    variant='outlined'
                                    required
                                    fullWidth
                                    value={Aadhar}
                                    onChange={(e) => { setAadhar(e.target.value) }}
                                    error={Aadhar === "" ? true : false}
                                />
                            </Box>
                            

                        </Box>
                        
                    
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button
                                color='primary'
                                variant='outlined'
                                sx={{ mr: 2 }}
                                onClick={props.handleClose}
                            // className={classes.button}
                            >
                                cancel
                            </Button>
                            <Button
                                color='primary'
                                variant='contained'
                                sx={{ ml: 2 }}
                                // className={classes.button}
                                // onClick={Applynow}
                            >
                                Proceed
                            </Button>
                        </Box>
                    </Box>
                </Box>

            </Box>
       
       </Box>
        </>
    );
}