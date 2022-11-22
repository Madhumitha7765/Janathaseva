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
import {Routes, Route, useNavigate} from 'react-router-dom';

const style = {
    display: { xs: 'block', sm: 'none'},
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'rgba(254, 254, 254, 1)',
    // border: '2px solid #000',
    'border-radius': '20px',
    boxShadow: 24,
    p: 4,
    color: 'black',
    pt: 2,
    overflow:"scroll"
};

const style1 = {
    display: { xs: 'none', sm: 'block' },
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'rgba(254, 254, 254, 1)',
    // border: '2px solid #000',
    'border-radius': '20px',
    boxShadow: 24,
    p: 4,
    color: 'black',
    pt: 2,
    overflow:"scroll"
};

export default function CustomerReqForm(props) {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Emailn, setEmail] = useState("");
    const [EmailFlag, setEmailFlag] = useState(false);
    const [MobileNumber, setMobileNumber] = useState("");
    const [wantAService, setwantAService] = React.useState();

    const handlewantAServiceChange = (event) => {
        setwantAService(event.target.value);
    };
    const Applynow = async (e) => {
        e.preventDefault();
        await axios({
            method: "POST",
            url: `https://janatha-seva.herokuapp.com/api/v1/customer/application`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: {
                FullName: FirstName + " " + LastName,
                email: Emailn,
                MobileNumber: MobileNumber,
                ApplicationType: wantAService,
                IsOpened: false,
                IsPending: false,
                IsComleted: false
            }
        }).then((res) => {
            if (res.data.error) {
                toast.error(res.data.message);
            } else {
                toast.success(res.data.message);
                props.handleClose();
            }
        }).catch((error) => {
            toast.error(error.response.data.message)
        })
    }
    const navigate = useNavigate()

    const navigateNewPAN = () => {        
        // navigate('/NewPAN');
        window.open('/NewPAN','_blank')
      };

    const navigateFingerprintPAN = () => {        
        window.open('/FingerprintPAN','_blank')
      };

    const navigateAadharPAN = () => {        
        window.open('/AadharPAN','_blank')
      };




    return (

        <>
            <Routes>
                    <Route path="/NewPAN" element={<NewPAN />} />
                    <Route path="/FingerprintPAN" element={<FingerprintPAN />} />
                    <Route path="/AadharPAN" element={<AadharPAN />} />
            </Routes>

            <Box sx={style}>
                <Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ "textAlign": 'center' }}>
                        Inquiry Form
                    </Typography>
                </Box>
                <Box>
                    <Box>
                          <Button
                                color='primary'
                                variant='contained'
                                sx={{ ml: 2 }}                                
                                onClick={navigateNewPAN}
                                style={{backgroundColor:"red"}}
                            >
                                Manual New PAN
                                
                            </Button>
                            <Button
                                color='primary'
                                variant='contained'
                                sx={{ ml: 2 }}                                
                                onClick={navigateFingerprintPAN}
                            >
                                Fingerprint New PAN
                            </Button>
                            <Button
                                color='primary'
                                variant='contained'
                                sx={{ ml: 2 }}                               
                                onClick={navigateAadharPAN}
                            >
                                Aadhar OTP New PAN
                            </Button>
                    </Box>
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
                          
                        </Box>
                    </Box>
                </Box>               

            </Box>
            <Box sx={style1}>
            <Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ "textAlign": 'center' }}>
                        Inquiry Form
                    </Typography>
                </Box>
                <Box>
                    
                <Box sx={{ display: 'flex', justifyContent: 'center', padding:"20px" }}>
                          <Button
                                color='primary'
                                variant='contained'
                                sx={{ ml: 2 }}                                
                                onClick={navigateNewPAN}
                                style={{backgroundColor:"red"}}
                            >
                                Manual New PAN
                            </Button>
                            <Button
                                color='primary'
                                variant='contained'
                                sx={{ ml: 2 }}                                
                                onClick={navigateFingerprintPAN}
                                style={{backgroundColor:"green"}}
                            >
                                Fingerprint New PAN
                            </Button>
                            <Button
                                color='primary'
                                variant='contained'
                                sx={{ ml: 2 }}                               
                                onClick={navigateAadharPAN}
                                style={{backgroundColor:"blue"}}
                            >
                                Aadhar OTP New PAN
                            </Button>                            
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
                           
                        </Box>
                    </Box>
                </Box>

            </Box>
        </>
    );
}


function NewPAN() {
    return <h2>Home</h2>;
}
  
function FingerprintPAN() {
    return <h2>Contacts</h2>;
}

function AadharPAN() {
    return <h2>Contacts</h2>;
}